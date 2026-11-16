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

use Symfony\Component\Filesystem\Filesystem;
use Thelia\Model\ConfigQuery;
use Thelia\Test\IntegrationTestCase;
use TheliaLibrary\Model\LibraryImage;
use TheliaLibrary\Service\ImageService;
use TheliaLibrary\TheliaLibrary;

/**
 * A rendering is encoded at the quality the shop sets for its format, not at the one of
 * the uploaded file: Imagick keeps the source's quality when it is given none, and a
 * library image uploaded at quality 100 came out at 100 in every size.
 */
final class ImageServiceRenderingQualityTest extends IntegrationTestCase
{
    private const WIDTH = 96;
    private const HEIGHT = 64;

    private const SETTINGS = ['imagine_graphic_driver', 'default_images_quality_percent', 'image_quality_webp'];

    private ImageService $imageService;
    private int $imageId;
    private string $sourcePath;
    private string $variantDirectory;

    /** @var array<string, string|null> */
    private array $previousSettings = [];

    protected function setUp(): void
    {
        parent::setUp();

        if (!\extension_loaded('imagick')) {
            self::markTestSkipped('The quality a source carries over is an Imagick behaviour.');
        }

        foreach (self::SETTINGS as $name) {
            $this->previousSettings[$name] = ConfigQuery::read($name);
        }
        ConfigQuery::write('imagine_graphic_driver', 'imagick');
        ConfigQuery::write('default_images_quality_percent', '60');
        ConfigQuery::write('image_quality_webp', '60');

        $this->imageService = $this->getService(ImageService::class);

        $directory = TheliaLibrary::getImageDirectory();
        (new Filesystem())->mkdir($directory);
        $fileName = uniqid('quality-test-', true).'.jpg';
        $this->sourcePath = $directory.$fileName;

        // Noise: the one picture whose weight follows the encoder's quality closely.
        $source = new \Imagick();
        $source->newPseudoImage(self::WIDTH, self::HEIGHT, 'plasma:');
        $source->addNoiseImage(\Imagick::NOISE_GAUSSIAN);
        $source->setImageFormat('jpeg');
        $source->setImageCompressionQuality(100);
        $source->writeImage($this->sourcePath);

        $image = (new LibraryImage())->setFileName($fileName);
        $image->save();
        $this->imageId = (int) $image->getId();
        $this->variantDirectory = THELIA_WEB_DIR.'image-library'.DS.$this->imageId;
    }

    protected function tearDown(): void
    {
        (new Filesystem())->remove([$this->sourcePath, $this->variantDirectory]);

        foreach ($this->previousSettings as $name => $value) {
            ConfigQuery::write($name, $value ?? '');
        }

        parent::tearDown();
    }

    public function testAJpegRenderingTakesTheShopQualityNotTheSourceOne(): void
    {
        $path = $this->imageService->geFormattedImage((string) $this->imageId, 'full', 'max', '0', 'default', 'jpg');

        self::assertSame(60, (new \Imagick($path))->getImageCompressionQuality());
    }

    public function testAWebpRenderingTakesTheQualitySetForWebp(): void
    {
        $path = $this->imageService->geFormattedImage((string) $this->imageId, 'full', 'max', '0', 'default', 'webp');

        $reference = new \Imagick($this->sourcePath);
        $reference->setImageFormat('webp');
        $reference->setImageCompressionQuality(100);

        self::assertLessThan(\strlen($reference->getImageBlob()) / 2, filesize($path));
    }
}
