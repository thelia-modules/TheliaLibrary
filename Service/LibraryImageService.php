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
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;
use Thelia\Action\Image;
use Thelia\Core\Event\Image\ImageEvent;
use Thelia\Core\Event\TheliaEvents;
use Thelia\Core\Translation\Translator;
use TheliaLibrary\Model\LibraryImage;
use TheliaLibrary\Model\LibraryImageI18nQuery;
use TheliaLibrary\Model\LibraryImageQuery;
use TheliaLibrary\TheliaLibrary;

class LibraryImageService
{
    const LIBRARY_IMAGE_DIR = THELIA_WEB_DIR.'library'.DS.'images'.DS;
    const LIBRARY_IMAGE_BASE_ROUTE = '/library/images/';

    protected EventDispatcherInterface $eventDispatcher;

    protected RequestStack $requestStack;

    public function __construct(
        EventDispatcherInterface $eventDispatcher,
        RequestStack $requestStack
    ) {
        $this->eventDispatcher = $eventDispatcher;
        $this->requestStack = $requestStack;
    }

    /**
     * @throws \Exception
     */
    public function createImage(
        UploadedFile $file,
        string $title = null,
        string $locale = null
    ): LibraryImage {
        return $this->createOrUpdateImage($file, $title, $locale);
    }

    /**
     * @throws \Exception
     */
    public function updateImage(
        $imageId,
        UploadedFile $file = null,
        string $title = null,
        string $locale = null
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

        $imageFiles = LibraryImageI18nQuery::create()->filterById($imageId)
            ->find();

        foreach ($imageFiles as $imageFile) {
            if (null === $imageFile->getFileName()) {
                continue;
            }
            $fileSystem = new Filesystem();
            $fileSystem->remove(TheliaLibrary::getImageDirectory().$imageFile->getFileName());
        }

        $image->delete();

        return true;
    }

    public function getImagePublicUrl(
        LibraryImage $image,
        $width = null,
        $height = null,
        $resizeMode = Image::EXACT_RATIO_WITH_BORDERS,
        $allowZoom = false
    ) {
        return $this->getImageFilePublicUrl($image->getFileName(), $width, $height, $resizeMode, $allowZoom);
    }

    public function getImageFilePublicUrl(
        $imageName = null,
        $width = null,
        $height = null,
        $resizeMode = Image::EXACT_RATIO_WITH_BORDERS,
        $allowZoom = false
    ) {
        if (null == $imageName) {
            return null;
        }

        $imageEvent = new ImageEvent();
        $filePath = TheliaLibrary::getImageDirectory().$imageName;

        if (null !== $width) {
            $imageEvent->setWidth((float) $width);
        }
        if (null !== $height) {
            $imageEvent->setHeight((float) $height);
        }

        $imageEvent->setResizeMode($resizeMode);
        $imageEvent->setAllowZoom($allowZoom);

        if (!file_exists($filePath)) {
            return null;
        }

        $imageEvent->setSourceFilepath($filePath);
        $imageEvent->setCacheSubdirectory('library');

        $this->eventDispatcher->dispatch($imageEvent, TheliaEvents::IMAGE_PROCESS);

        return $imageEvent->getFileUrl();
    }

    protected function createOrUpdateImage(
        UploadedFile $file = null,
        string $title = null,
        string $locale = null,
        int $imageId = null
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

        if (null === $title && null === $image->getTitle()) {
            $title = $file->getClientOriginalName();
        }

        if (null != $title) {
            $image->setTitle($title);
        }

        if (null !== $file) {
            // Remove old file if already exist for this locale
            if (null !== $image->getFileName()) {
                $fileSystem = new Filesystem();
                $fileSystem->remove(TheliaLibrary::getImageDirectory().$image->getFileName());
            }
            $imageName = bin2hex(random_bytes(5)).'_'.$file->getClientOriginalName();
            $file->move(TheliaLibrary::getImageDirectory(), $imageName);
            $image->setFileName($imageName);
        }

        $image->save();

        return $image;
    }
}
