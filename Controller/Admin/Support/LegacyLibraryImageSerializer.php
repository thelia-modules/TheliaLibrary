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

namespace TheliaLibrary\Controller\Admin\Support;

use Thelia\Model\Lang;
use TheliaLibrary\Model\LibraryImage;
use TheliaLibrary\Model\LibraryImageI18nQuery;
use TheliaLibrary\Model\LibraryImageTag as LibraryImageTagModel;
use TheliaLibrary\Model\LibraryImageTagQuery;
use TheliaLibrary\Model\LibraryItemImage as LibraryItemImageModel;
use TheliaLibrary\Model\LibraryTag as LibraryTagModel;
use TheliaLibrary\Model\LibraryTagQuery;

/**
 * Reproduces the legacy OpenApi JSON shape exposed by `thelia/open-api-module`
 * before the migration so that the `@thelia/media-library` admin bundle keeps
 * working while consumers migrate to the AP4 endpoints under
 * `/api/{admin,front}/library_*`.
 */
final class LegacyLibraryImageSerializer
{
    /**
     * @return array<string, mixed>
     */
    public static function imageToArray(
        LibraryImage $image,
        ?string $locale = null,
        ?int $width = null,
        ?int $height = null,
    ): array {
        $resolvedLocale = $locale ?? Lang::getDefaultLanguage()->getLocale();
        $image->setLocale($resolvedLocale);

        $title = $image->getTitle();
        $fileName = $image->getFileName();

        if (null === $fileName) {
            $fallbackI18n = LibraryImageI18nQuery::create()
                ->filterById($image->getId())
                ->filterByFileName(null, \Propel\Runtime\ActiveQuery\Criteria::ISNOTNULL)
                ->findOne();

            $fileName = $fallbackI18n?->getFileName();
        }

        return [
            'id' => $image->getId(),
            'title' => $title,
            'fileName' => $fileName,
            'url' => self::computeUrl($image->getId(), $fileName, $width, $height),
            'tags' => self::loadTags((int) $image->getId(), $resolvedLocale),
        ];
    }

    /**
     * @return array<string, mixed>
     */
    public static function tagToArray(LibraryTagModel $tag, ?string $locale = null): array
    {
        if (null !== $locale) {
            $tag->setLocale($locale);
        }

        return [
            'id' => $tag->getId(),
            'title' => $tag->getTitle(),
            'colorCode' => $tag->getColorCode(),
        ];
    }

    /**
     * @return array<string, mixed>
     */
    public static function imageTagToArray(LibraryImageTagModel $imageTag): array
    {
        return [
            'id' => $imageTag->getId(),
            'imageId' => $imageTag->getImageId(),
            'tagId' => $imageTag->getTagId(),
        ];
    }

    /**
     * @return array<string, mixed>
     */
    public static function itemImageToArray(
        LibraryItemImageModel $itemImage,
        ?string $locale = null,
        bool $withImage = true,
    ): array {
        $payload = [
            'id' => $itemImage->getId(),
            'imageId' => $itemImage->getImageId(),
            'image' => null,
            'itemType' => $itemImage->getItemType(),
            'itemId' => $itemImage->getItemId(),
            'code' => $itemImage->getCode(),
            'visible' => null === $itemImage->getVisible() ? null : (bool) $itemImage->getVisible(),
            'position' => $itemImage->getPosition(),
        ];

        if ($withImage) {
            $libraryImage = $itemImage->getLibraryImage();

            if ($libraryImage instanceof LibraryImage) {
                $payload['image'] = self::imageToArray($libraryImage, $locale);
            }
        }

        return $payload;
    }

    private static function computeUrl(?int $imageId, ?string $fileName, ?int $width, ?int $height): ?string
    {
        if (null === $imageId || null === $fileName) {
            return null;
        }

        $extension = pathinfo($fileName, \PATHINFO_EXTENSION);

        if ('' === $extension) {
            $extension = 'jpg';
        }

        $size = (null !== $width || null !== $height)
            ? \sprintf('%s,%s', $width ?? '', $height ?? '')
            : 'max';

        return \sprintf('/image-library/%d/full/%s/0/default.%s', $imageId, $size, $extension);
    }

    /**
     * @return array<int, array{tag: array<string, mixed>, imageTag: array<string, mixed>}>
     */
    private static function loadTags(int $imageId, string $locale): array
    {
        $associations = LibraryImageTagQuery::create()
            ->filterByImageId($imageId)
            ->find();

        $tags = [];

        /** @var LibraryImageTagModel $association */
        foreach ($associations as $association) {
            $tag = LibraryTagQuery::create()->findPk($association->getTagId());

            if (!$tag instanceof LibraryTagModel) {
                continue;
            }

            $tag->setLocale($locale);

            $tags[] = [
                'tag' => self::tagToArray($tag),
                'imageTag' => self::imageTagToArray($association),
            ];
        }

        return $tags;
    }
}
