<?php

namespace TheliaLibrary\Service;

use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;
use Thelia\Core\HttpFoundation\Session\Session;
use Thelia\Core\Translation\Translator;
use TheliaLibrary\Model\LibraryImageQuery;
use TheliaLibrary\Model\LibraryItemImage;
use TheliaLibrary\Model\LibraryItemImageQuery;

class LibraryItemImageService
{
    /**
     * @var LibraryImageService
     */
    protected $libraryImageService;

    /** @var EventDispatcherInterface */
    protected $eventDispatcher;

    /** @var Session */
    protected $session;

    public function __construct(
        LibraryImageService $libraryImageService,
        EventDispatcherInterface $eventDispatcher,
        RequestStack $requestStack
    )
    {
        $this->eventDispatcher = $eventDispatcher;
        $this->session = $requestStack->getCurrentRequest()->getSession();
        $this->libraryImageService = $libraryImageService;
    }

    public function createAndAssociateImage(
        UploadedFile $file,
        string $imageTitle = null,
        string $locale = null,
        $itemType,
        $itemId,
        $code = null,
        $visible = true,
        $position = null,
        $replaceOld = false
    ): LibraryItemImage
    {
        if ($replaceOld) {
            $existingImages = LibraryImageQuery::create()
                    ->useLibraryItemImageQuery()
                        ->filterByItemType($itemType)
                        ->filterByItemId($itemId)
                        ->filterByCode($code)
                    ->endUse()
                ->find();

            if (!empty($existingImages)) {
                foreach ($existingImages as $existingImage) {
                    $this->libraryImageService->deleteImage($existingImage->getId());
                }
            }
        }

        $image = $this->libraryImageService->createImage($file, $imageTitle, $locale);

        return $this->associateImage(
            $image->getId(),
            $itemType,
            $itemId,
            $code,
            $visible,
            $position
        );
    }

    public function associateImage(
        $imageId,
        $itemType,
        $itemId,
        $code = null,
        $visible = true,
        $position = null
    ): LibraryItemImage
    {
        $itemImage = (new LibraryItemImage())
            ->setImageId($imageId)
            ->setItemType($itemType)
            ->setItemId($itemId)
            ->setCode($code)
            ->setVisible($visible);

        $itemImage->save();

        if (null != $position) {
            $itemImage->changeAbsolutePosition($position);
        }

        return $itemImage;
    }

    public function updateImageAssociation(
        $itemImageId,
        $code = null,
        $visible = true,
        $position = null,
        $positionMovement = null
    ): LibraryItemImage
    {
        $itemImage = LibraryItemImageQuery::create()
            ->filterById($itemImageId)
            ->findOne();

        if (null === $itemImage) {
            throw new \Exception(Translator::getInstance()->trans("Can't update an item image that doesn't exist"));
        }

        $itemImage->setCode($code);
        $itemImage->setVisible($visible);
        $itemImage->save();

        if (null != $position) {
            $itemImage->changeAbsolutePosition($position);
        }

        if ("up" === strtolower($positionMovement)) {
            $itemImage->movePositionUp();
        }

        if ("down" === strtolower($positionMovement)) {
            $itemImage->movePositionDown();
        }

        return $itemImage;
    }

    public function deleteImageAssociation(
        $itemImageId
    ): bool {
        $itemImage = LibraryItemImageQuery::create()
            ->filterById($itemImageId)
            ->findOne();

        if (null === $itemImage) {
            return false;
        }

        $itemImage->delete();

        return true;
    }
}
