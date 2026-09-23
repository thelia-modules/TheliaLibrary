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

use PHPUnit\Framework\TestCase;
use TheliaLibrary\Service\ImagePluginService;
use TheliaLibrary\Service\ImageService;

/**
 * The markup a shop's images are rendered as.
 *
 * What is being held here is what a browser is allowed to assume: it picks the format,
 * so every candidate has to announce its media type; it falls back to the <img>, so
 * there is always one; and <source> is only ever legal inside a <picture>.
 */
final class ImagePluginServiceTest extends TestCase
{
    public function testAShopOfferingOnlyItsSourceFormatRendersTheImageItAlwaysDid(): void
    {
        $render = $this->render([
            ['breakpoint' => 'default', 'url' => '/media/cache/card/product/a.jpg', 'variants' => []],
        ]);

        self::assertStringContainsString('<img src="/media/cache/card/product/a.jpg"', $render);
        self::assertStringNotContainsString('<source', $render);
        self::assertStringNotContainsString('<picture', $render);
    }

    public function testEachActiveFormatIsAnnouncedBeforeTheFallback(): void
    {
        $render = $this->render([
            [
                'breakpoint' => 'default',
                'url' => '/media/cache/card/product/a.jpg',
                'variants' => [
                    ['format' => 'avif', 'mime_type' => 'image/avif', 'url' => '/media/cache/card/product/a.jpg.avif'],
                    ['format' => 'webp', 'mime_type' => 'image/webp', 'url' => '/media/cache/card/product/a.jpg.webp'],
                ],
            ],
        ]);

        self::assertStringContainsString('<source srcset="/media/cache/card/product/a.jpg.avif" type="image/avif"/>', $render);
        self::assertStringContainsString('<source srcset="/media/cache/card/product/a.jpg.webp" type="image/webp"/>', $render);
        self::assertStringContainsString('<img src="/media/cache/card/product/a.jpg"', $render);

        // Most efficient first, fallback last: the browser stops at the first it reads.
        self::assertLessThan(strpos($render, 'image/webp'), strpos($render, 'image/avif'));
        self::assertLessThan(strpos($render, '<img'), strpos($render, 'image/webp'));

        // A <source> outside a <picture> is ignored by every browser.
        self::assertStringStartsWith('<picture', $render);
    }

    public function testAFormatTheServerCannotWriteIsSimplyAbsent(): void
    {
        $render = $this->render([
            [
                'breakpoint' => 'default',
                'url' => '/media/cache/card/product/a.jpg',
                'variants' => [
                    ['format' => 'webp', 'mime_type' => 'image/webp', 'url' => '/media/cache/card/product/a.jpg.webp'],
                ],
            ],
        ]);

        self::assertStringNotContainsString('image/avif', $render);
        self::assertStringContainsString('image/webp', $render);
        self::assertStringContainsString('<img src="/media/cache/card/product/a.jpg"', $render);
    }

    public function testEachBreakpointCarriesItsOwnFormatsAndItsMediaCondition(): void
    {
        $render = $this->render([
            [
                'breakpoint' => '1024px',
                'url' => '/media/cache/wide/product/a.jpg',
                'variants' => [['format' => 'webp', 'mime_type' => 'image/webp', 'url' => '/media/cache/wide/product/a.jpg.webp']],
            ],
            [
                'breakpoint' => 'default',
                'url' => '/media/cache/card/product/a.jpg',
                'variants' => [['format' => 'webp', 'mime_type' => 'image/webp', 'url' => '/media/cache/card/product/a.jpg.webp']],
            ],
        ]);

        self::assertStringContainsString('<source srcset="/media/cache/wide/product/a.jpg.webp" type="image/webp" media="(min-width:1024px)"/>', $render);
        self::assertStringContainsString('<source srcset="/media/cache/wide/product/a.jpg" media="(min-width:1024px)"/>', $render);
        self::assertStringContainsString('<source srcset="/media/cache/card/product/a.jpg.webp" type="image/webp"/>', $render);
        self::assertStringContainsString('<img src="/media/cache/card/product/a.jpg"', $render);

        // The size is selected before the format: the wide candidates come first, and the
        // fallback of the wide breakpoint before the small one's candidates.
        self::assertLessThan(strpos($render, 'card/product/a.jpg.webp'), strpos($render, 'wide/product/a.jpg" media'));
    }

    /**
     * A caller that asked for a <figure> gets its <figure>, with the <source> tags
     * nested in a <picture> — they are illegal anywhere else.
     */
    public function testAnExplicitWrapperKeepsThePictureNestedInside(): void
    {
        $render = $this->render(
            [
                [
                    'breakpoint' => 'default',
                    'url' => '/media/cache/card/product/a.jpg',
                    'variants' => [['format' => 'webp', 'mime_type' => 'image/webp', 'url' => '/media/cache/card/product/a.jpg.webp']],
                ],
            ],
            ['wrapper' => 'figure']
        );

        self::assertStringStartsWith('<figure', $render);
        self::assertStringContainsString('<picture><source', $render);
        self::assertStringContainsString('</picture></figure>', $render);
    }

    /**
     * A theme that names no "default" breakpoint used to render a <picture> with no
     * <img> in it at all, which shows nothing in every browser.
     */
    public function testTheLastSourceBecomesTheFallbackWhenNoneIsNamedDefault(): void
    {
        $render = $this->render([
            ['breakpoint' => '1024px', 'url' => '/media/cache/wide/product/a.jpg', 'variants' => []],
            ['breakpoint' => '768px', 'url' => '/media/cache/card/product/a.jpg', 'variants' => []],
        ]);

        self::assertStringContainsString('<img src="/media/cache/card/product/a.jpg"', $render);
    }

    /** @param list<array<string, mixed>> $sources */
    private function render(array $sources, array $params = []): string
    {
        $imageService = $this->createMock(ImageService::class);
        $imageService->method('getImages')->willReturn([
            ['sources' => $sources, 'data' => ['title' => 'A chair']],
        ]);

        return (new ImagePluginService($imageService))->getImages($params + ['source_type' => 'product', 'filters' => 'card']);
    }
}
