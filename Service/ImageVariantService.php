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

use Liip\ImagineBundle\Imagine\Cache\CacheManager;
use Liip\ImagineBundle\Imagine\Data\DataManager;
use Liip\ImagineBundle\Imagine\Filter\FilterManager;
use Psr\Log\LoggerInterface;
use Psr\Log\NullLogger;
use Thelia\Domain\Media\Enum\ImageFormat;
use Thelia\Domain\Media\Service\ImageFormatPolicy;

/**
 * The modern-format variants of one image, each at its own direct address.
 *
 * Two rules shape everything here.
 *
 * The browser chooses the format, the server never negotiates it. Each variant is a file
 * of its own, served like any other static file with a long-lived cache: no redirect, no
 * response that varies on a request header, nothing that a shared cache has to be told
 * about. That is the whole reason LiipImagine's own WebP negotiation stays off — it
 * routes every image through a resolve URL the browser is forbidden to keep.
 *
 * And a missing variant costs the browser one candidate, never the page. An encoder that
 * refuses a file, a format the library turns out not to write, a source that has gone
 * missing: all of it is logged and skipped, and the <img> falls back to the source format
 * that was always going to be there.
 */
final readonly class ImageVariantService
{
    private LoggerInterface $logger;

    public function __construct(
        private CacheManager $cacheManager,
        private DataManager $dataManager,
        private FilterManager $filterManager,
        private ImageFormatPolicy $formatPolicy,
        ?LoggerInterface $logger = null,
    ) {
        $this->logger = $logger ?? new NullLogger();
    }

    /** Whether the shop offers anything beyond the source format at all. */
    public function offersModernFormats(): bool
    {
        return $this->formatPolicy->offersModernFormats();
    }

    /**
     * The variants of an image for one filter set, most efficient format first.
     *
     * @return list<array{format: string, mime_type: string, url: string}>
     */
    public function variantsFor(string $path, string $filter): array
    {
        $variants = [];

        foreach ($this->formatPolicy->activeFormats() as $format) {
            $url = $this->variantUrl($path, $filter, $format);

            if (null === $url) {
                continue;
            }

            $variants[] = [
                'format' => $format->value,
                'mime_type' => $format->mimeType(),
                'url' => $url,
            ];
        }

        return $variants;
    }

    /**
     * The direct address of the source-format image, generating it if it is not there yet.
     *
     * CacheManager::getBrowserPath() hands out a resolve URL for an image it has not
     * stored yet, and that URL is a full framework boot answered with an uncacheable
     * redirect. Once a shop offers several formats, a listing page would pay that boot
     * once per image per format on every first view, so the image is written here and
     * addressed directly.
     */
    public function sourceUrl(string $path, string $filter): string
    {
        if ($this->cacheManager->isStored($path, $filter)) {
            return $this->cacheManager->resolve($path, $filter);
        }

        try {
            $this->cacheManager->store(
                $this->filterManager->applyFilter($this->dataManager->find($filter, $path), $filter),
                $path,
                $filter
            );

            return $this->cacheManager->resolve($path, $filter);
        } catch (\Throwable $error) {
            $this->logger->warning('Could not generate the image "{path}" for filter "{filter}": {message}', [
                'path' => $path,
                'filter' => $filter,
                'message' => $error->getMessage(),
            ]);

            // The resolve URL costs a redirect, but it does render the image: better a
            // slow image than a hole in the page.
            return $this->cacheManager->getBrowserPath($path, $filter);
        }
    }

    /**
     * The address of one variant, generating it on first sight.
     *
     * The variant is stored beside the source-format file under its own name, suffixed
     * with the format's extension, because the cache path LiipImagine derives from a
     * filter set keeps the SOURCE extension whatever the output format is. Written over
     * the same name, a WebP file would sit at a .jpg address and every web server would
     * announce it as a JPEG.
     */
    private function variantUrl(string $path, string $filter, ImageFormat $format): ?string
    {
        $variantPath = $path.'.'.$format->extension();

        if ($this->cacheManager->isStored($variantPath, $filter)) {
            return $this->cacheManager->resolve($variantPath, $filter);
        }

        try {
            $binary = $this->filterManager->applyFilter(
                $this->dataManager->find($filter, $path),
                $filter,
                [
                    'format' => $format->value,
                    'quality' => $this->formatPolicy->qualityFor($format),
                ]
            );

            $this->cacheManager->store($binary, $variantPath, $filter);

            return $this->cacheManager->resolve($variantPath, $filter);
        } catch (\Throwable $error) {
            $this->logger->warning('Could not generate the {format} variant of "{path}" for filter "{filter}": {message}', [
                'format' => $format->value,
                'path' => $path,
                'filter' => $filter,
                'message' => $error->getMessage(),
            ]);

            return null;
        }
    }
}
