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

use Imagine\Image\ImageInterface;
use Liip\ImagineBundle\Imagine\Cache\CacheManager;
use Symfony\Component\DependencyInjection\Container;
use Symfony\Component\DependencyInjection\ParameterBag\ContainerBag;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBag;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Thelia\Test\IntegrationTestCase;
use TheliaLibrary\Model\LibraryImage;
use TheliaLibrary\Service\ImageService;
use TheliaLibrary\Service\ImageVariantPolicy;
use TheliaLibrary\Service\ImageVariantRequest;
use TheliaLibrary\Service\ImageVariantService;
use TheliaLibrary\TheliaLibrary;

/**
 * Once a shop lists its renderings, an address outside the list is answered without
 * opening the source image and without writing a file; the listed ones are rendered as
 * they always were.
 */
final class ImageServiceAllowedVariantsTest extends IntegrationTestCase
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

        $policy = new ImageVariantPolicy(new ContainerBag(new Container(new ParameterBag([
            ImageVariantPolicy::PARAMETER => ['sizes' => ['max', '20,!', '10,*']],
        ]))));

        $this->imageService = new ImageService(
            $this->getService(RequestStack::class),
            $this->getService(CacheManager::class),
            $this->getService(ImageVariantService::class),
            $policy,
        );

        $directory = TheliaLibrary::getImageDirectory();
        (new Filesystem())->mkdir($directory);
        $fileName = uniqid('allowed-variants-test-', true).'.png';
        $this->sourcePath = $directory.$fileName;
        imagepng(imagecreatetruecolor(self::WIDTH, self::HEIGHT), $this->sourcePath);

        $image = (new LibraryImage())->setFileName($fileName)->setWidth(self::WIDTH)->setHeight(self::HEIGHT);
        $image->save();
        $this->imageId = (int) $image->getId();
        $this->variantDirectory = THELIA_WEB_DIR.'image-library'.DS.$this->imageId;
    }

    protected function tearDown(): void
    {
        (new Filesystem())->remove([$this->sourcePath, $this->variantDirectory]);

        parent::tearDown();
    }

    public function testAListedSizeIsRendered(): void
    {
        $path = $this->imageService->geFormattedImage((string) $this->imageId, 'full', '20,!', '0', 'default', 'png');

        self::assertFileExists($path);
    }

    public function testAProportionalSizeIsRenderedAtTheHeightOfTheSource(): void
    {
        $path = $this->imageService->geFormattedImage((string) $this->imageId, 'full', '10,8', '0', 'default', 'png');

        self::assertSame([10, 8], \array_slice(getimagesize($path), 0, 2));
    }

    public function testAnUnlistedSizeAnswersNotFoundAndWritesNothing(): void
    {
        foreach (['full/21,21/0', 'full/10,500/0', 'full/max/90', 'square/max/0', '1,1,10,10/max/0'] as $address) {
            [$region, $size, $rotation] = explode('/', $address);

            try {
                $this->imageService->geFormattedImage((string) $this->imageId, $region, $size, $rotation, 'default', 'png');
                self::fail($address.' was rendered.');
            } catch (HttpException $exception) {
                self::assertSame(404, $exception->getStatusCode(), $address);
            }
        }

        self::assertDirectoryDoesNotExist($this->variantDirectory);
    }

    public function testAnUnlistedRequestDoesNotOpenTheSource(): void
    {
        try {
            $this->imageService->formattedImagePath(
                $this->variantDirectory,
                static fn (): ImageInterface => self::fail('The source was opened.'),
                ImageVariantRequest::fromUrlSegments('full', '21,21', '0', 'default', 'png'),
            );
            self::fail('The request was rendered.');
        } catch (HttpException $exception) {
            self::assertSame(404, $exception->getStatusCode());
        }

        self::assertDirectoryDoesNotExist($this->variantDirectory);
    }

    public function testACopyAlreadyStoredIsServedWithoutAskingThePolicy(): void
    {
        $stored = $this->variantDirectory.'/full/21,21/0/default.png';
        (new Filesystem())->mkdir(\dirname($stored));
        file_put_contents($stored, 'x');

        self::assertSame($stored, $this->imageService->geFormattedImage((string) $this->imageId, 'full', '21,21', '0', 'default', 'png'));
    }
}
