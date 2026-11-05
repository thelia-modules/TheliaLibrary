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
use PHPUnit\Framework\TestCase;
use Symfony\Component\HttpKernel\Exception\HttpException;
use TheliaLibrary\Service\ImageVariantRequest;

/**
 * The URLs the module, the back-office and the themes write keep their meaning; anything
 * else is refused before a file is written.
 */
final class ImageVariantRequestTest extends TestCase
{
    /**
     * @return iterable<string, array{array{string, string, string, string, string}, string}>
     */
    public static function acceptedSpellings(): iterable
    {
        yield 'public URL of the loop' => [['full', 'max', '0', 'default', 'jpg'], 'full/max/0/default.jpg'];
        yield 'width and height' => [['full', '480,320', '0', 'default', 'webp'], 'full/480,320/0/default.webp'];
        yield 'width only' => [['full', '480,', '0', 'default', 'webp'], 'full/480,480/0/default.webp'];
        yield 'fit written after the comma' => [['full', '480,!', '0', 'default', 'jpg'], 'full/!480,480/0/default.jpg'];
        yield 'upscale and fit' => [['full', '^!150,150', '0', 'default', 'webp'], 'full/^!150,150/0/default.webp'];
        yield 'upscale, pad and fit' => [['full', '^*!400,400', '0', 'default', 'webp'], 'full/^*!400,400/0/default.webp'];
        yield 'modifiers in another order' => [['full', '!*^400,400', '0', 'default', 'webp'], 'full/^*!400,400/0/default.webp'];
        yield 'percentage size' => [['full', 'pct:50.0', '0', 'default', 'png'], 'full/pct:50/0/default.png'];
        yield 'square region' => [['square', 'max', '0', 'gray', 'png'], 'square/max/0/gray.png'];
        yield 'pixel region' => [['10,0,20,20', 'max', '90', 'default', 'png'], '10,0,20,20/max/90/default.png'];
        yield 'percentage region' => [['pct:10.50,0,50,50', 'max', '0', 'default', 'png'], 'pct:10.5,0,50,50/max/0/default.png'];
        yield 'mirrored full turn' => [['full', 'max', '!360', 'default', 'png'], 'full/max/!0/default.png'];
        yield 'fractional rotation' => [['full', 'max', '90.50', 'default', 'png'], 'full/max/90.5/default.png'];
        yield 'upper-case format' => [['full', 'max', '0', 'default', 'JPG'], 'full/max/0/default.jpg'];
    }

    /**
     * @param array{string, string, string, string, string} $segments
     */
    #[DataProvider('acceptedSpellings')]
    public function testAnAcceptedSpellingIsRenderedFromItsCanonicalValues(array $segments, string $canonical): void
    {
        $request = ImageVariantRequest::fromUrlSegments(...$segments);

        self::assertSame(
            $canonical,
            $request->region.'/'.$request->size.'/'.$request->rotation.'/'.$request->quality.'.'.$request->format,
        );
    }

    /**
     * The web server serves the stored copy as a static file only under the path of the URL.
     */
    #[DataProvider('acceptedSpellings')]
    public function testAnAcceptedSpellingIsStoredUnderThePathOfItsUrl(array $segments): void
    {
        [$region, $size, $rotation, $quality, $format] = $segments;

        self::assertSame(
            implode(\DIRECTORY_SEPARATOR, [$region, $size, $rotation, $quality.'.'.$format]),
            ImageVariantRequest::fromUrlSegments(...$segments)->relativePath(),
        );
    }

    /**
     * @return iterable<string, array{array{string, string, string, string, string}}>
     */
    public static function refusedSpellings(): iterable
    {
        yield 'region with a negative value' => [['-1,0,10,10', 'max', '0', 'default', 'png']];
        yield 'region of zero width' => [['0,0,0,10', 'max', '0', 'default', 'png']];
        yield 'region past the whole image in percent' => [['pct:100,0,10,10', 'max', '0', 'default', 'png']];
        yield 'region with a leading zero' => [['010,0,20,20', 'max', '0', 'default', 'png']];
        yield 'size with a leading zero' => [['full', '048,', '0', 'default', 'png']];
        yield 'rotation with a leading zero' => [['full', 'max', '090', 'default', 'png']];
        yield 'region with six digits' => [['100000,0,10,10', 'max', '0', 'default', 'png']];
        yield 'encoded parent directory' => [['%2e%2e', 'max', '0', 'default', 'png']];
        yield 'size with no side' => [['full', ',', '0', 'default', 'png']];
        yield 'size of zero' => [['full', '0,10', '0', 'default', 'png']];
        yield 'padding with one side' => [['full', '*400,', '0', 'default', 'png']];
        yield 'repeated modifier' => [['full', '^^400,400', '0', 'default', 'png']];
        yield 'percentage above 100 without upscale' => [['full', 'pct:150', '0', 'default', 'png']];
        yield 'rotation with three decimals' => [['full', 'max', '90.125', 'default', 'png']];
        yield 'negative rotation' => [['full', 'max', '-90', 'default', 'png']];
        yield 'unknown quality' => [['full', 'max', '0', 'Default', 'png']];
        yield 'unknown format' => [['full', 'max', '0', 'default', 'svg']];
    }

    /**
     * @param array{string, string, string, string, string} $segments
     */
    #[DataProvider('refusedSpellings')]
    public function testARefusedSpellingAnswersBadRequest(array $segments): void
    {
        try {
            ImageVariantRequest::fromUrlSegments(...$segments);
            self::fail('The spelling was accepted.');
        } catch (HttpException $exception) {
            self::assertSame(400, $exception->getStatusCode());
        }
    }
}
