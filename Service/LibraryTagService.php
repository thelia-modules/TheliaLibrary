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

use Thelia\Core\Translation\Translator;
use TheliaLibrary\Model\LibraryTag;
use TheliaLibrary\Model\LibraryTagQuery;

class LibraryTagService
{
    public function createTag(
        string $title,
        string $colorCode
    ): LibraryTag {
        $imageTag = (new LibraryTag())
        ->setTitle($title)
        ->setColorCode($colorCode);

        $imageTag->save();

        return $imageTag;
    }

    public function updateTag(
        int $tagId,
        string $title = null,
        string $colorCode = null
    ): LibraryTag {
        $tag = LibraryTagQuery::create()
            ->filterById($tagId)
            ->findOne();

        if (null === $tag) {
            throw new \Exception(Translator::getInstance()->trans("Can't update a tag that doesn't exist"));
        }

        if (null != $title) {
            $tag->setTitle($title);
        }
        if (null != $colorCode) {
            $tag->setColorCode($colorCode);
        }

        $tag->save();

        return $tag;
    }

    public function deleteTag(
        $tagId
    ): bool {
        $tag = LibraryTagQuery::create()
            ->filterById($tagId)
            ->findOne();

        if (null === $tag) {
            throw new \Exception(Translator::getInstance()->trans("Can't delete a tag that doesn't exist"));
        }

        $tag->delete();

        return true;
    }
}
