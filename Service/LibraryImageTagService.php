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

use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;
use TheliaLibrary\Model\LibraryImageTag;
use TheliaLibrary\Model\LibraryImageTagQuery;

class LibraryImageTagService
{
    protected EventDispatcherInterface $eventDispatcher;

    public function __construct(
        EventDispatcherInterface $eventDispatcher
    ) {
        $this->eventDispatcher = $eventDispatcher;
    }

    public function associateImage(
        string $imageId,
        string $tagId
    ): LibraryImageTag {
        $imageTag = (new LibraryImageTag())
        ->setImageId($imageId)
        ->setTagId($tagId);

        $imageTag->save();

        return $imageTag;
    }

    public function deleteImageAssociation(
        $tagImageId
    ): bool {
        $imageTag = LibraryImageTagQuery::create()
            ->filterById($tagImageId)
            ->findOne();

        if (null === $imageTag) {
            return false;
        }

        $imageTag->delete();

        return true;
    }
}
