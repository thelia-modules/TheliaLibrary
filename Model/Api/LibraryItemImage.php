<?php

namespace TheliaLibrary\Model\Api;

use OpenApi\Annotations as OA;
use OpenApi\Model\Api\BaseApiModel;
use OpenApi\Constraint as Constraint;
use Symfony\Component\HttpFoundation\File\UploadedFile;

/**
 * Class LibraryItemImage
 * @package OpenApi\Model\Api
 * @OA\Schema(
 *     schema="LibraryItemImage",
 *     title="LibraryItemImage",
 * )
 */
class LibraryItemImage extends BaseApiModel
{
    /**
     * @var integer
     * @OA\Property(
     *    type="integer",
     * )
     * @Constraint\NotBlank(groups={"read"})
     */
    protected $id;

    /**
     * @var integer
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
     * @var integer
     * @OA\Property(
     *     type="integer",
     * )
     */
    protected $itemId;

    /**
     * @var boolean
     * @OA\Property(
     *     type="boolean",
     * )
     */
    protected $visible = true;

    /**
     * @var integer
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
     * @param int $id
     * @return LibraryImage
     */
    public function setId(int $id): LibraryItemImage
    {
        $this->id = $id;
        return $this;
    }

    /**
     * @return int
     */
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

    /**
     * @param LibraryImage $image
     * @return LibraryItemImage
     */
    public function setLibraryImage(LibraryImage $image): LibraryItemImage
    {
        $this->image = $image;
        return $this;
    }

    /**
     * @param int $imageId
     * @return LibraryItemImage
     */
    public function setImageId(int $imageId): LibraryItemImage
    {
        $this->imageId = $imageId;
        return $this;
    }

    /**
     * @return string
     */
    public function getItemType(): string
    {
        return $this->itemType;
    }

    /**
     * @param string $itemType
     * @return LibraryItemImage
     */
    public function setItemType(string $itemType): LibraryItemImage
    {
        $this->itemType = $itemType;
        return $this;
    }

    /**
     * @return int
     */
    public function getItemId(): int
    {
        return $this->itemId;
    }

    /**
     * @param int $itemId
     * @return LibraryItemImage
     */
    public function setItemId(int $itemId): LibraryItemImage
    {
        $this->itemId = $itemId;
        return $this;
    }

    /**
     * @return bool
     */
    public function isVisible(): bool
    {
        return $this->visible;
    }

    /**
     * @param bool $visible
     * @return LibraryItemImage
     */
    public function setVisible(bool $visible = true): LibraryItemImage
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
     * @return LibraryItemImage
     */
    public function setPosition(?int $position): LibraryItemImage
    {
        $this->position = $position;
        return $this;
    }

    protected function getTheliaModel($propelModelName = null)
    {
        return parent::getTheliaModel(\TheliaLibrary\Model\LibraryItemImage::class);
    }
}
