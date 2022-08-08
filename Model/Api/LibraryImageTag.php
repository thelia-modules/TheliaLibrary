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

namespace TheliaLibrary\Model\Api;

use OpenApi\Annotations as OA;
use OpenApi\Constraint;
use OpenApi\Model\Api\BaseApiModel;
use TheliaLibrary\Model\LibraryImageTagQuery;
use TheliaLibrary\Model\LibraryTagQuery;

/**
 * Class LibraryImageTag.
 *
 * @OA\Schema(
 *     schema="LibraryImageTag",
 *     title="LibraryImageTag",
 * )
 */
class LibraryImageTag extends BaseApiModel
{
    /**
     * @var int
     * @OA\Property(
     *    type="integer",
     * )
     * @Constraint\NotBlank(groups={"read"})
     */
    protected $id;

    /**
     * @var int
     * @OA\Property(
     *    type="integer",
     * )
     * @Constraint\NotBlank(groups={"read"})
     */
    protected $imageId;

    /**
     * @var int
     * @OA\Property(
     *    type="integer",
     * )
     * @Constraint\NotBlank(groups={"read"})
     */
    protected $tagId;

    /**
     * @return int
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;
    }

    /**
     * @return int
     */
    public function getImageId(): ?int
    {
        return $this->imageId;
    }

    public function setImageId(int $id): self
    {
        $this->imageId = $id;

        return $this;
    }

    /**
     * @return int
     */
    public function getTagId(): ?int
    {
        return $this->tagId;
    }

    public function setTagId(int $tagId): self
    {
        $this->tagId = $tagId;

        return $this;
    }
}
