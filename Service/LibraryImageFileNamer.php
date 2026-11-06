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

use Symfony\Component\HttpFoundation\File\File;
use TheliaLibrary\Exception\UnsupportedLibraryImageException;

/**
 * Decides, from the bytes of a submitted file alone, whether the library
 * stores it and under which name.
 *
 * Every entry point of the module goes through this one class: the admin
 * endpoint used by the bundled JS, the API Platform upload and the API
 * Platform replace operation all store files the same way.
 *
 * Neither the name nor the extension sent by the client is reused. The
 * format is read from the content, the extension is derived from that
 * format, and the stored name is generated.
 */
final class LibraryImageFileNamer
{
    /**
     * The formats the library stores, and the extension each one is written
     * with. Matches the formats the API resource already documents.
     */
    private const EXTENSION_BY_MIME_TYPE = [
        'image/bmp' => 'bmp',
        'image/gif' => 'gif',
        'image/jpeg' => 'jpg',
        'image/png' => 'png',
        'image/webp' => 'webp',
        'video/mp4' => 'mp4',
    ];

    /**
     * The videos among those formats: stored as sent, never decoded by the
     * image stack, served whole by the video route.
     */
    public const VIDEO_MIME_TYPES = ['video/mp4'];

    /**
     * @throws UnsupportedLibraryImageException when the content is not one of
     *                                          the stored formats
     */
    public function generateFileName(File $file): string
    {
        return bin2hex(random_bytes(10)).'.'.$this->resolveExtension($file);
    }

    /**
     * @throws UnsupportedLibraryImageException
     */
    public function resolveExtension(File $file): string
    {
        $path = $file->getPathname();

        if (!is_file($path) || !is_readable($path)) {
            throw new UnsupportedLibraryImageException('The submitted file could not be read.');
        }

        $mimeType = $file->getMimeType();

        if (null === $mimeType || !isset(self::EXTENSION_BY_MIME_TYPE[$mimeType])) {
            throw new UnsupportedLibraryImageException(
                \sprintf('Unsupported image format: %s.', $mimeType ?? 'unknown')
            );
        }

        // libmagic names video/mp4 only a file that opens on an ftyp box. A
        // video is never decoded here: it is stored and served as sent.
        if (\in_array($mimeType, self::VIDEO_MIME_TYPES, true)) {
            return self::EXTENSION_BY_MIME_TYPE[$mimeType];
        }

        // getMimeType() alone accepts a file whose first bytes look like an
        // image and whose tail is anything else. Decoding the header a second
        // time, and comparing what the decoder says the file is, leaves only
        // files the image stack itself recognises.
        $dimensions = @getimagesize($path);

        if (false === $dimensions || !isset($dimensions[2])) {
            throw new UnsupportedLibraryImageException('The submitted file is not a readable image.');
        }

        if (image_type_to_mime_type($dimensions[2]) !== $mimeType) {
            throw new UnsupportedLibraryImageException('The content of the submitted file does not match its format.');
        }

        return self::EXTENSION_BY_MIME_TYPE[$mimeType];
    }
}
