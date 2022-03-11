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
use TheliaLibrary\Model\LibraryImageI18nQuery;
use TheliaLibrary\Model\LibraryImageQuery;
use TheliaLibrary\TheliaLibrary;

class LibraryImageService
{
    const LIBRARY_IMAGE_DIR = THELIA_WEB_DIR.'library'.DS.'images'.DS;
    const LIBRARY_IMAGE_BASE_ROUTE = '/library/images/';

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
        File $file = null,
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
        LibraryImage $image = null,
        $width = null,
        $height = null
    ) {
        if (null == $image) {
            return null;
        }

        $format = pathinfo($image->getFileName(), PATHINFO_EXTENSION);
        $size = "max";
        if ($width || $height) {
            $size = $width.','.$height;
        }

        return $this->imageService->getUrlForImage($image->getId(), $format, 'full', $size);
    }

    protected function createOrUpdateImage(
        File $file = null,
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
        $fileName = method_exists($file, "getClientOriginalName") ? $file->getClientOriginalName(): $file->getFilename();

        if (null === $title && null === $image->getTitle()) {
            $title = $fileName;
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
            $imageName = bin2hex(random_bytes(5)).'_'.$fileName;
            $file->move(TheliaLibrary::getImageDirectory(), $imageName);
            $image->setFileName($imageName);
        }

        $image->save();

        return $image;
    }
}
