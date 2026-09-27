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

use Liip\ImagineBundle\Binary\BinaryInterface;
use Liip\ImagineBundle\Imagine\Cache\CacheManager;
use Liip\ImagineBundle\Imagine\Data\DataManager;
use Liip\ImagineBundle\Imagine\Filter\FilterManager;
use Thelia\Domain\Media\Service\ImageFormatPolicy;
use Thelia\Model\ConfigQuery;
use Thelia\Test\IntegrationTestCase;
use TheliaLibrary\Service\ImageVariantService;

/**
 * While a modern format is active, every variant address comes from
 * CacheManager::resolve(), a direct address to a stored file, never from
 * getBrowserPath(), the redirecting URL LiipImagine hands out for an image it has not
 * stored yet; and a variant already stored is not generated again.
 *
 * ImageFormatPolicy and ImageFormatCapabilities are final, hence the real policy and
 * the setting written for the duration of each test.
 */
final class ImageVariantServiceTest extends IntegrationTestCase
{
    private ?string $previousFormats = null;

    protected function setUp(): void
    {
        parent::setUp();

        $this->previousFormats = ConfigQuery::read(ImageFormatPolicy::FORMATS_CONFIG_NAME);
        ConfigQuery::write(ImageFormatPolicy::FORMATS_CONFIG_NAME, 'webp');
    }

    protected function tearDown(): void
    {
        ConfigQuery::write(ImageFormatPolicy::FORMATS_CONFIG_NAME, (string) $this->previousFormats);

        parent::tearDown();
    }

    public function testAnAlreadyStoredVariantIsResolvedDirectlyWithoutRegeneratingIt(): void
    {
        $cacheManager = $this->createMock(CacheManager::class);
        $cacheManager->expects(self::once())->method('isStored')
            ->with('a.jpg.webp', 'card')->willReturn(true);
        $cacheManager->expects(self::once())->method('resolve')
            ->with('a.jpg.webp', 'card')->willReturn('https://shop.test/media/cache/card/a.jpg.webp');
        $cacheManager->expects(self::never())->method('store');
        $cacheManager->expects(self::never())->method('getBrowserPath');

        $dataManager = $this->createMock(DataManager::class);
        $dataManager->expects(self::never())->method('find');

        $filterManager = $this->createMock(FilterManager::class);
        $filterManager->expects(self::never())->method('applyFilter');

        $service = new ImageVariantService($cacheManager, $dataManager, $filterManager, new ImageFormatPolicy());

        $variants = $service->variantsFor('a.jpg', 'card');

        self::assertSame([
            ['format' => 'webp', 'mime_type' => 'image/webp', 'url' => 'https://shop.test/media/cache/card/a.jpg.webp'],
        ], $variants);
    }

    public function testAMissingVariantIsGeneratedThenResolvedDirectlyNeverThroughGetBrowserPath(): void
    {
        $sourceBinary = $this->createMock(BinaryInterface::class);
        $variantBinary = $this->createMock(BinaryInterface::class);

        $cacheManager = $this->createMock(CacheManager::class);
        $cacheManager->method('isStored')->willReturn(false);
        $cacheManager->expects(self::once())->method('store')->with($variantBinary, 'a.jpg.webp', 'card');
        $cacheManager->expects(self::once())->method('resolve')
            ->with('a.jpg.webp', 'card')->willReturn('https://shop.test/media/cache/card/a.jpg.webp');
        $cacheManager->expects(self::never())->method('getBrowserPath');

        $dataManager = $this->createMock(DataManager::class);
        $dataManager->method('find')->willReturn($sourceBinary);

        $filterManager = $this->createMock(FilterManager::class);
        $filterManager->method('applyFilter')->willReturn($variantBinary);

        $service = new ImageVariantService($cacheManager, $dataManager, $filterManager, new ImageFormatPolicy());

        $variants = $service->variantsFor('a.jpg', 'card');

        self::assertSame([
            ['format' => 'webp', 'mime_type' => 'image/webp', 'url' => 'https://shop.test/media/cache/card/a.jpg.webp'],
        ], $variants);
    }
}
