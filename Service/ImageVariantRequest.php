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

namespace TheliaLibrary\Service;

use Symfony\Component\HttpKernel\Exception\HttpException;

/**
 * The region, size, rotation, quality and format segments of an image URL
 * (`/image-library/{id}/{region}/{size}/{rotation}/{quality}.{format}`), checked against
 * the grammar the module renders and written back in one canonical spelling.
 *
 * - region: `full`, `square`, `x,y,w,h` or `pct:x,y,w,h`;
 * - size: `max`, `pct:n`, `w,h`, `w,` or `,h`, with the modifiers `^` (upscale),
 *   `!` (fit within the box, keeping the ratio) and `*` (pad to the box, needs both sides);
 * - rotation: 0 to 360 degrees, two decimals at most, `!` to mirror first;
 * - quality: `default`, `color`, `gray` or `bitonal`;
 * - format: `jpg`, `jpeg`, `png`, `gif`, `jp2` or `webp`.
 *
 * Rendering reads the canonical values. The stored copy keeps the spelling of the URL, so the
 * web server finds it as a static file on the next request; numbers written with a leading
 * zero are refused, which leaves few spellings for one rendering, and ImageService caps the
 * copies stored per image.
 */
final readonly class ImageVariantRequest
{
    public const QUALITIES = ['default', 'color', 'gray', 'bitonal'];
    public const FORMATS = ['jpg', 'jpeg', 'png', 'gif', 'jp2', 'webp'];

    private const PIXELS = '(?:0|[1-9]\d{0,4})';
    private const PERCENT = '(?:0|[1-9]\d{0,2})(?:\.\d{1,2})?';

    private function __construct(
        public string $region,
        public string $size,
        public string $rotation,
        public string $quality,
        public string $format,
        private string $relativePath,
    ) {
    }

    public static function fromUrlSegments(
        string $region,
        string $size,
        string $rotation,
        string $quality,
        string $format,
    ): self {
        $canonicalFormat = strtolower($format);
        if (!\in_array($canonicalFormat, self::FORMATS, true)) {
            throw new HttpException(400, 'Bad format value');
        }

        if (!\in_array($quality, self::QUALITIES, true)) {
            throw new HttpException(400, 'Bad quality values');
        }

        return new self(
            self::canonicalRegion($region),
            self::canonicalSize($size),
            self::canonicalRotation($rotation),
            $quality,
            $canonicalFormat,
            $region.\DIRECTORY_SEPARATOR.$size.\DIRECTORY_SEPARATOR.$rotation
                .\DIRECTORY_SEPARATOR.$quality.'.'.$format,
        );
    }

    /**
     * Where the rendered copy is stored, relative to the directory of its source image:
     * the path of the URL itself, every segment of it checked.
     */
    public function relativePath(): string
    {
        return $this->relativePath;
    }

    private static function canonicalRegion(string $region): string
    {
        if ('full' === $region || 'square' === $region) {
            return $region;
        }

        $pixels = self::PIXELS;
        if (preg_match("/^($pixels),($pixels),($pixels),($pixels)$/", $region, $values)) {
            [, $x, $y, $width, $height] = array_map('intval', $values);

            if ($width < 1 || $height < 1) {
                throw new HttpException(400, 'Bad region value');
            }

            return \sprintf('%d,%d,%d,%d', $x, $y, $width, $height);
        }

        $percent = self::PERCENT;
        if (preg_match("/^pct:($percent),($percent),($percent),($percent)$/", $region, $values)) {
            [, $x, $y, $width, $height] = array_map('floatval', $values);

            if ($x >= 100 || $y >= 100 || $width <= 0 || $height <= 0 || $width > 100 || $height > 100) {
                throw new HttpException(400, 'Bad region value');
            }

            return 'pct:'.implode(',', array_map(self::number(...), [$x, $y, $width, $height]));
        }

        throw new HttpException(400, 'Bad region value');
    }

    private static function canonicalSize(string $size): string
    {
        $upscale = self::takeModifier($size, '^');
        $borders = self::takeModifier($size, '*');
        $fit = self::takeModifier($size, '!');

        if ('max' === $size) {
            if ($borders) {
                throw new HttpException(400, 'Bad size values');
            }

            return ($upscale ? '^' : '').'max';
        }

        $percent = self::PERCENT;
        if (preg_match("/^pct:($percent)$/", $size, $values)) {
            $value = (float) $values[1];

            if ($borders || $value <= 0) {
                throw new HttpException(400, 'Bad size values');
            }
            if ($value > 100 && !$upscale) {
                throw new HttpException(400, 'Size out of bound');
            }

            return ($upscale ? '^' : '').'pct:'.self::number($value);
        }

        $pixels = self::PIXELS;
        if (!preg_match("/^($pixels)?,($pixels)?$/", $size, $values, \PREG_UNMATCHED_AS_NULL)) {
            throw new HttpException(400, 'Bad size values');
        }

        $width = null !== $values[1] ? (int) $values[1] : null;
        $height = null !== $values[2] ? (int) $values[2] : null;

        // Padding draws a canvas of the asked box: both of its sides are needed.
        if ((null === $width && null === $height) || ($borders && (null === $width || null === $height))) {
            throw new HttpException(400, 'Bad size values');
        }

        // ImageService::applySize() reads a missing side as the given one.
        $width ??= $height;
        $height ??= $width;

        if ($width < 1 || $height < 1) {
            throw new HttpException(400, 'Bad size values');
        }

        return ($upscale ? '^' : '').($borders ? '*' : '').($fit ? '!' : '').$width.','.$height;
    }

    private static function canonicalRotation(string $rotation): string
    {
        $degrees = self::PERCENT;
        if (!preg_match("/^(!?)($degrees)$/", $rotation, $values) || (float) $values[2] > 360) {
            throw new HttpException(400, 'Bad rotation values');
        }

        return $values[1].self::number(fmod((float) $values[2], 360));
    }

    /**
     * Removes a size modifier wherever it is written (`^!150,150` as well as `480,!`).
     */
    private static function takeModifier(string &$size, string $modifier): bool
    {
        $count = substr_count($size, $modifier);
        if ($count > 1) {
            throw new HttpException(400, 'Bad size values');
        }

        $size = str_replace($modifier, '', $size);

        return 1 === $count;
    }

    private static function number(float $value): string
    {
        return rtrim(rtrim(number_format($value, 2, '.', ''), '0'), '.');
    }
}
