<?php

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

use Imagine\Gd\Imagine;
use Imagine\Gmagick\Imagine as GmagickImagine;
use Imagine\Image\Box;
use Imagine\Image\ImageInterface;
use Imagine\Image\Palette\RGB;
use Imagine\Image\Point;
use Imagine\Imagick\Imagine as ImagickImagine;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Thelia\Model\ConfigQuery;
use Thelia\Model\Lang;
use Thelia\Tools\URL;
use TheliaLibrary\Model\LibraryImage;
use TheliaLibrary\Model\LibraryImageQuery;
use TheliaLibrary\TheliaLibrary;

class ImageService
{
    public const MAX_ALLOWED_SIZE_FACTOR = 2;

    public function __construct(private RequestStack $requestStack)
    {
    }

    public function getUrlForImage(
        $identifier,
        $format,
        $region = 'full',
        $size = 'max',
        $rotation = 0,
        $quality = 'default'
    ) {
        return URL::getInstance()->absoluteUrl("/image-library/$identifier/$region/$size/$rotation/$quality.$format");
    }

    public function geFormattedImage(
        $identifier,
        $region,
        $size,
        $rotation,
        $quality,
        $format
    ) {
        if (!\in_array(strtolower($format), ['jpg', 'jpeg', 'png', 'gif', 'jp2', 'webp'])) {
            throw new HttpException(400, 'Bad format value');
        }

        $formattedImagePath = THELIA_WEB_DIR.'image-library'.DS.$identifier.DS.$region.DS.$size.DS.$rotation;
        if (!is_dir($formattedImagePath)) {
            if (!@mkdir($formattedImagePath, 0755, true)) {
                throw new \RuntimeException(sprintf('Failed to create %s file in cache directory', $formattedImagePath));
            }
        }

        $formattedImagePath .= DS.$quality.'.'.$format;

        if (file_exists($formattedImagePath)) {
            return $formattedImagePath;
        }

        $image = $this->openImage($identifier);
        $image = $this->applyRegion($image, $region);
        $image = $this->applySize($image, $size);
        $image = $this->applyRotation($image, $rotation, $format);
        $image = $this->applyQuality($image, $quality);
        $image->save($formattedImagePath);

        return $formattedImagePath;
    }

    public function applyRegion(ImageInterface $image, $region)
    {
        if ($region === 'full') {
            return $image;
        }

        $height = $image->getSize()->getHeight();
        $width = $image->getSize()->getWidth();

        if ($region === 'square') {
            $size = max($width, $height);

            return $image->crop(
                new Point(($width - $size) / 2, ($height - $size) / 2),
                new Box($size, $size)
            );
        }

        // If region start with pct: values are percent of size
        $regionMode = strpos($region, 'pct:') === false ? 'value' : 'percentage';
        $values = explode(',', str_replace('pct:', '', $region));

        if (\count($values) !== 4) {
            throw new HttpException(400, 'Bad region value');
        }

        $xPositionValue = $regionMode === 'value' ? $values[0] : $width * $values[0] / 100;
        $yPositionValue = $regionMode === 'value' ? $values[1] : $height * $values[1] / 100;

        $widthValue = $regionMode === 'value' ? $values[2] : $width * $values[2] / 100;
        $heightValue = $regionMode === 'value' ? $values[3] : $height * $values[3] / 100;

        // If width or height + start position go outside of image crop the width and/or height
        if (($xPositionValue + $widthValue) > $width) {
            $widthValue = $width - $xPositionValue;
        }
        if (($yPositionValue + $heightValue) > $height) {
            $heightValue = $height - $yPositionValue;
        }

        if ($height <= 0 || $width <= 0) {
            throw new HttpException(400, 'Size out of bound');
        }

        return $image->crop(
            new Point($xPositionValue, $yPositionValue),
            new Box($widthValue, $heightValue)
        );
    }

    public function applySize(ImageInterface $image, $size)
    {
        $upscaleMode = false !== strpos($size, '^');
        $keepAspectRatio = false !== strpos($size, '!');
        $size = str_replace('^', '', $size);
        $size = str_replace('!', '', $size);

        if ($size === 'max') {
            if (!$upscaleMode) {
                return $image;
            }

            return $image->resize($this->getMaxSize($image));
        }

        $width = $image->getSize()->getWidth();
        $height = $image->getSize()->getHeight();

        if (false !== strpos($size, 'pct:')) {
            $values = explode(':', $size);
            if (!isset($values[1])) {
                throw new HttpException(400, 'Bad size values');
            }

            $percent = $values[1];

            if (!$upscaleMode && $percent > 100) {
                throw new HttpException(400, 'Size out of bound');
            }

            return $image->resize(
                new Box(
                    $percent * $width / 100,
                    $percent * $height / 100,
                )
            );
        }

        $values = explode(',', $size);

        if (\count($values) !== 2) {
            throw new HttpException(400, 'Bad size values');
        }

        $newWidth = $values[0] != '' ? $values[0] : $values[1];
        $newHeight = $values[1] != '' ? $values[1] : $values[0];

        if ($keepAspectRatio) {
            $originalRatio = $width / $height;
            $askedRatio = $newWidth / $newHeight;
            // Keep the ratio and take the larger image possible but not greater than asked width and height
            $newWidth = $askedRatio <= $originalRatio ? $newWidth : $newHeight * $originalRatio;
            $newHeight = $askedRatio >= $originalRatio ? $newHeight : $newWidth / $originalRatio;
        }

        if (!$upscaleMode && ($newWidth > $width || $newHeight > $height)) {
            throw new HttpException(400, 'Size out of bound');
        }

        return $image->resize(
            new Box(
                $newWidth,
                $newHeight,
            )
        );
    }

    public function applyRotation(ImageInterface $image, $rotation, $format)
    {
        if (false !== strpos($rotation, '!')) {
            $image = $image->flipHorizontally();
        }

        $rotation = str_replace('!', '', $rotation);

        if (!is_numeric($rotation)) {
            throw new HttpException(400, 'Bad rotation values');
        }

        $rotationValue = (float) $rotation;

        if (0 > $rotationValue || $rotationValue > 360) {
            throw new HttpException(400, 'Rotation out of bound');
        }

        $color = new RGB();
        $alpha = \in_array(
            strtolower($format),
            [
                'png',
                'gif',
                'webp',
                'tiff',
                'jp2',
            ]
        ) ? 0 : 100;

        return $image->rotate($rotationValue, $color->color('fff', $alpha));
    }

    public function applyQuality(ImageInterface $image, $quality)
    {
        if (!\in_array($quality, ['color', 'gray', 'default', 'bitonal'])) {
            throw new HttpException(400, 'Bad quality values');
        }

        if ($quality === 'gray') {
            $image->effects()->grayscale();
        }

        return $image;
    }

    public function getImageFileName(
        LibraryImage $image = null
    ) {
        if (null == $image) {
            return null;
        }

        $locale = $this->requestStack?->getCurrentRequest()?->getSession()?->getLang()->getLocale();

        if (null !== $locale) {
            $image->setLocale($locale);
        }

        $fileName = $image->getFileName();

        if (null === $fileName) {
            $fileName = $image->setLocale(Lang::getDefaultLanguage()->getLocale())->getFileName() ?? null;
            $image->setLocale($locale);
        }

        return $fileName;
    }

    public function openImage($identifier)
    {
        $imageModel = LibraryImageQuery::create()
            ->filterById($identifier)
            ->findOne();

        if (null === $imageModel) {
            throw new HttpException(404, 'Image not found');
        }

        $fileName = $this->getImageFileName($imageModel);

        return $this->getImagineInstance()->open(TheliaLibrary::getImageDirectory().$fileName);
    }

    public function getImagineInstance()
    {
        $driver = ConfigQuery::read('imagine_graphic_driver', 'gd');

        switch ($driver) {
            case 'imagick':
                $image = new ImagickImagine();
                break;
            case 'gmagick':
                $image = new GmagickImagine();
                break;
            case 'gd':
            default:
                $image = new Imagine();
        }

        return $image;
    }

    public function getMaxSize(ImageInterface $image)
    {
        return new Box($image->getSize()->getWidth() * 2, $image->getSize()->getHeight() * 2);
    }
}
