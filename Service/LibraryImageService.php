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

use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;
use Thelia\Core\Translation\Translator;
use TheliaLibrary\Model\LibraryImage;
use TheliaLibrary\Model\LibraryImageQuery;
use TheliaLibrary\TheliaLibrary;

class LibraryImageService
{
    public const LIBRARY_IMAGE_DIR = THELIA_WEB_DIR.'library'.DS.'images'.DS;
    public const LIBRARY_IMAGE_BASE_ROUTE = '/library/images/';

    protected EventDispatcherInterface $eventDispatcher;

    protected RequestStack $requestStack;

    protected ImageService $imageService;

    public function __construct(
        EventDispatcherInterface $eventDispatcher,
        RequestStack $requestStack,
        ImageService $imageService
    ) {
        $this->eventDispatcher = $eventDispatcher;
        $this->requestStack = $requestStack;
        $this->imageService = $imageService;
    }

    /**
     * @throws \Exception
     */
    public function createImage(
        File $file,
        ?string $title = null,
        ?string $locale = null
    ): LibraryImage {
        return $this->createOrUpdateImage($file, $title, $locale);
    }

    /**
     * @throws \Exception
     */
    public function updateImage(
        $imageId,
        ?File $file = null,
        ?string $title = null,
        ?string $locale = null
    ): LibraryImage {
        return $this->createOrUpdateImage($file, $title, $locale, $imageId);
    }

    public function deleteImage(
        $imageId
    ): bool {
        $image = LibraryImageQuery::create()
            ->filterById($imageId)
            ->findOne();

        if (null === $image) {
            return false;
        }

        if (null !== $image->getFileName()) {
            (new Filesystem())->remove(TheliaLibrary::getImageDirectory().$image->getFileName());
        }

        $this->discardRenderedVariants((int) $image->getId());

        $image->delete();

        return true;
    }

    public function getImagePublicUrl(
        ?LibraryImage $image = null,
        $width = null,
        $height = null,
        $format = null
    ) {
        if (null == $image) {
            return null;
        }

        $fileName = $this->imageService->getImageFileName($image);

        // An image row whose file is missing has no URL to offer, and asking
        // pathinfo() for the extension of nothing is a deprecation.
        if (null === $fileName) {
            return null;
        }

        $format = $format ?? pathinfo($fileName, \PATHINFO_EXTENSION);
        $size = 'max';
        if ($width || $height) {
            $size = $width.','.$height;
        }

        return $this->imageService->getUrlForImage($image->getId(), $format, 'full', $size);
    }

    protected function createOrUpdateImage(
        ?File $file = null,
        ?string $title = null,
        ?string $locale = null,
        ?int $imageId = null
    ) {
        $image = null !== $imageId
            ? LibraryImageQuery::create()->filterById($imageId)->findOne()
            : (new LibraryImage());

        if (null === $image) {
            throw new \Exception(Translator::getInstance()->trans("Can't update an image that doesn't exist"));
        }

        if (null == $locale) {
            $locale = $this->requestStack->getCurrentRequest()->getSession()->getAdminEditionLang()->getLocale();
        }

        $image->setLocale($locale);

        if (null !== $file) {
            $fileName = method_exists($file, 'getClientOriginalName') ? $file->getClientOriginalName() : $file->getFilename();

            // Remove the file being replaced
            if (null !== $image->getFileName()) {
                $fileSystem = new Filesystem();
                $fileSystem->remove(TheliaLibrary::getImageDirectory().$image->getFileName());
            }
            $imageName = bin2hex(random_bytes(5)).'_'.$fileName;
            $movedFile = $file->move(TheliaLibrary::getImageDirectory(), $imageName);

            if (null === $title && null === $image->getTitle()) {
                $title = $fileName;
            }

            $image->setFileName($imageName);
            $this->describeFile($image, $movedFile);

            // Resized and converted copies are addressed by image id, not by
            // file name: left in place they keep serving the replaced picture
            // on every page that already points at them.
            if (null !== $imageId) {
                $this->discardRenderedVariants((int) $imageId);
            }
        }

        if (null != $title) {
            $image->setTitle($title);
        }

        $image->save();

        return $image;
    }

    /**
     * Drops the copies rendered on demand under `web/image-library/{id}`.
     *
     * They are rebuilt on the next request, from whatever the file is now.
     */
    protected function discardRenderedVariants(int $imageId): void
    {
        $directory = THELIA_WEB_DIR.'image-library'.DS.$imageId;

        if (is_dir($directory)) {
            (new Filesystem())->remove($directory);
        }
    }

    /**
     * Records what the stored file is, so listings can show its weight, size
     * and format without opening every file on disk.
     */
    protected function describeFile(LibraryImage $image, File $file): void
    {
        $image
            ->setMimeType($file->getMimeType())
            ->setFileSize($file->getSize() ?: null);

        $dimensions = @getimagesize($file->getPathname());

        if (false === $dimensions) {
            return;
        }

        $image
            ->setWidth($dimensions[0])
            ->setHeight($dimensions[1]);
    }
}
