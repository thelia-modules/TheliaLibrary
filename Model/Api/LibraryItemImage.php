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

/**
 * Class LibraryItemImage.
 *
 * @OA\Schema(
 *     schema="LibraryItemImage",
 *     title="LibraryItemImage",
 * )
 */
class LibraryItemImage extends BaseApiModel
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
     *     type="integer",
     * )
     */
    protected $imageId;

    /**
     * @var LibraryImage
     * @OA\Property(
     *     readOnly=true,
     *     ref="#/components/schemas/LibraryImage"
     * )
     */
    protected $image;

    /**
     * @var string
     * @OA\Property(
     *     type="string",
     * )
     */
    protected $itemType;

    /**
     * @var int
     * @OA\Property(
     *     type="integer",
     * )
     */
    protected $itemId;

    /**
     * @var string
     * @OA\Property(
     *     type="string",
     * )
     */
    protected $code;

    /**
     * @var bool
     * @OA\Property(
     *     type="boolean",
     * )
     */
    protected $visible = true;

    /**
     * @var int
     * @OA\Property(
     *     type="integer",
     * )
     */
    protected $position;

    /**
     * @return int
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return LibraryImage
     */
    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;
    }

    public function getImageId(): int
    {
        return $this->imageId;
    }

    /**
     * @return LibraryImage
     */
    public function getImage(): ?LibraryImage
    {
        return $this->image;
    }

    public function setLibraryImage(LibraryImage $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function setImageId(int $imageId): self
    {
        $this->imageId = $imageId;

        return $this;
    }

    public function getItemType(): string
    {
        return $this->itemType;
    }

    public function setItemType(string $itemType): self
    {
        $this->itemType = $itemType;

        return $this;
    }

    public function getItemId(): int
    {
        return $this->itemId;
    }

    public function setItemId(int $itemId): self
    {
        $this->itemId = $itemId;

        return $this;
    }

    /**
     * @return string
     */
    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(?string $code): self
    {
        $this->code = $code;

        return $this;
    }

    public function isVisible(): bool
    {
        return $this->visible;
    }

    public function setVisible(bool $visible = true): self
    {
        $this->visible = $visible;

        return $this;
    }

    /**
     * @return int
     */
    public function getPosition(): ?int
    {
        return $this->position;
    }

    /**
     * @param int $position
     */
    public function setPosition(?int $position): self
    {
        $this->position = $position;

        return $this;
    }

    protected function getTheliaModel($propelModelName = null)
    {
        return parent::getTheliaModel(\TheliaLibrary\Model\LibraryItemImage::class);
    }
}
