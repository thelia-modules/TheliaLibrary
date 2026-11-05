<?php

declare(strict_types=1);

/*
 * This file is part of the Thelia package.
 * http://www.thelia.net
 *
 * (c) OpenStudio <info@thelia.net>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TheliaLibrary\Tests;

use PHPUnit\Framework\Attributes\DataProvider;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Thelia\Test\IntegrationTestCase;
use TheliaLibrary\Model\LibraryImage;
use TheliaLibrary\Service\ImageService;
use TheliaLibrary\TheliaLibrary;

/**
 * The rendered copies of a library image live under the public directory, written on the
 * first request for each region, size, rotation, quality and format. A request the
 * service cannot render leaves nothing on disk, two spellings of the same rendering share
 * one file, and the number of copies stored for one image is capped.
 */
final class ImageServiceFormattedImageTest extends IntegrationTestCase
{
    private const WIDTH = 40;
    private const HEIGHT = 30;

    private ImageService $imageService;
    private int $imageId;
    private string $sourcePath;
    private string $variantDirectory;

    protected function setUp(): void
    {
        parent::setUp();

        $this->imageService = $this->getService(ImageService::class);

        $directory = TheliaLibrary::getImageDirectory();
        (new Filesystem())->mkdir($directory);
        $fileName = uniqid('variant-test-', true).'.png';
        $this->sourcePath = $directory.$fileName;

        $canvas = imagecreatetruecolor(self::WIDTH, self::HEIGHT);
        imagepng($canvas, $this->sourcePath);

        $image = (new LibraryImage())->setFileName($fileName);
        $image->save();
        $this->imageId = (int) $image->getId();
        $this->variantDirectory = THELIA_WEB_DIR.'image-library'.DS.$this->imageId;
    }

    protected function tearDown(): void
    {
        (new Filesystem())->remove([$this->sourcePath, $this->variantDirectory]);

        parent::tearDown();
    }

    public function testAValidRequestIsStoredUnderTheImageDirectory(): void
    {
        $path = $this->imageService->geFormattedImage((string) $this->imageId, 'full', '20,', '0', 'default', 'png');

        self::assertSame($this->variantDirectory.'/full/20,/0/default.png', $path);
        self::assertFileExists($path);
        self::assertSame([20, 20], \array_slice(getimagesize($path), 0, 2));
    }

    /**
     * @return iterable<string, array{string, string, string, string, string}>
     */
    public static function unrenderableRequests(): iterable
    {
        yield 'region outside the grammar' => ['abc', 'max', '0', 'default', 'png'];
        yield 'region with a fifth value' => ['1,1,10,10,10', 'max', '0', 'default', 'png'];
        yield 'region starting outside the image' => ['100,100,10,10', 'max', '0', 'default', 'png'];
        yield 'size outside the grammar' => ['full', 'big', '0', 'default', 'png'];
        yield 'size larger than the image' => ['full', '400,', '0', 'default', 'png'];
        yield 'size far beyond the upscale bound' => ['full', '^99999,99999', '0', 'default', 'png'];
        yield 'rotation outside the grammar' => ['full', 'max', 'left', 'default', 'png'];
        yield 'rotation beyond a turn' => ['full', 'max', '361', 'default', 'png'];
        yield 'quality outside the list' => ['full', 'max', '0', 'sepia', 'png'];
        yield 'format outside the list' => ['full', 'max', '0', 'default', 'php'];
        yield 'parent directory as region' => ['..', 'max', '0', 'default', 'png'];
    }

    #[DataProvider('unrenderableRequests')]
    public function testAnUnrenderableRequestAnswersBadRequestAndWritesNothing(
        string $region,
        string $size,
        string $rotation,
        string $quality,
        string $format,
    ): void {
        try {
            $this->imageService->geFormattedImage((string) $this->imageId, $region, $size, $rotation, $quality, $format);
            self::fail('The request was rendered.');
        } catch (HttpException $exception) {
            self::assertSame(400, $exception->getStatusCode());
        }

        self::assertDirectoryDoesNotExist($this->variantDirectory);
    }

    public function testAnUnknownImageAnswersNotFoundAndWritesNothing(): void
    {
        $unknownDirectory = THELIA_WEB_DIR.'image-library'.DS.'999999999';

        try {
            $this->imageService->geFormattedImage('999999999', 'full', 'max', '0', 'default', 'png');
            self::fail('The request was rendered.');
        } catch (HttpException $exception) {
            self::assertSame(404, $exception->getStatusCode());
        }

        self::assertDirectoryDoesNotExist($unknownDirectory);
    }

    public function testAnIdentifierThatIsNotANumberAnswersNotFound(): void
    {
        $this->expectException(HttpException::class);

        $this->imageService->geFormattedImage($this->imageId.'x', 'full', 'max', '0', 'default', 'png');
    }

    /**
     * nginx and Apache serve a stored copy without PHP only when it sits at the path of the URL.
     */
    public function testTheStoredCopyKeepsThePathOfTheUrl(): void
    {
        $path = $this->imageService->geFormattedImage((string) $this->imageId, '1,1,10,10', '10,!', '0', 'default', 'PNG');

        self::assertSame($this->variantDirectory.'/1,1,10,10/10,!/0/default.PNG', $path);
        self::assertSame([10, 10], \array_slice(getimagesize($path), 0, 2));
    }

    public function testCopiesBeyondTheCapAreServedWithoutBeingStored(): void
    {
        for ($index = 0; $index < ImageService::MAX_STORED_VARIANTS_PER_IMAGE; ++$index) {
            $size = ($index % self::WIDTH + 1).','.(intdiv($index, self::WIDTH) + 1);
            $this->imageService->geFormattedImage((string) $this->imageId, 'full', $size, '0', 'default', 'png');
        }
        self::assertSame(ImageService::MAX_STORED_VARIANTS_PER_IMAGE, $this->storedVariantCount());

        $path = $this->imageService->geFormattedImage((string) $this->imageId, 'full', '1,'.self::HEIGHT, '0', 'default', 'png');

        self::assertTrue($this->imageService->isTemporaryVariant($path));
        self::assertSame([1, self::HEIGHT], \array_slice(getimagesize($path), 0, 2));
        self::assertSame(ImageService::MAX_STORED_VARIANTS_PER_IMAGE, $this->storedVariantCount());
        unlink($path);

        // A copy stored before the cap was reached is still served from disk.
        $stored = $this->imageService->geFormattedImage((string) $this->imageId, 'full', '1,1', '0', 'default', 'png');
        self::assertFalse($this->imageService->isTemporaryVariant($stored));
    }

    private function storedVariantCount(): int
    {
        if (!is_dir($this->variantDirectory)) {
            return 0;
        }

        $count = 0;
        foreach (new \RecursiveIteratorIterator(new \RecursiveDirectoryIterator($this->variantDirectory, \FilesystemIterator::SKIP_DOTS)) as $file) {
            $count += $file->isFile() ? 1 : 0;
        }

        return $count;
    }
}
