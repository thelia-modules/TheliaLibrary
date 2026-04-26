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

namespace TheliaLibrary\Api\Resource\Addon;

use ApiPlatform\Metadata\Operation;
use Propel\Runtime\ActiveQuery\ModelCriteria;
use Propel\Runtime\ActiveRecord\ActiveRecordInterface;
use Propel\Runtime\Map\TableMap;
use Symfony\Component\Serializer\Annotation\Groups;
use Thelia\Api\Resource\Product;
use Thelia\Api\Resource\PropelResourceInterface;
use Thelia\Api\Resource\ResourceAddonInterface;
use Thelia\Api\Resource\ResourceAddonTrait;
use TheliaLibrary\Api\Resource\LibraryImage;
use TheliaLibrary\Api\Resource\LibraryItemImage;
use TheliaLibrary\Model\LibraryItemImage as LibraryItemImageModel;
use TheliaLibrary\Model\LibraryItemImageQuery;

/**
 * Exposes the polymorphic `library_item_image` rows attached to a `Product`
 * resource as a `libraryImages` collection on `/api/admin/products/{id}` and
 * `/api/front/products/{id}` (single read scopes).
 *
 * The relation is polymorphic (`item_type` / `item_id`) and not declared as a
 * Propel foreign key, so the default JOIN-based `extendQuery` cannot apply:
 * the addon overrides it as a no-op and resolves the rows on demand inside
 * `buildFromModel()`.
 */
class ProductLibraryImagesAddon implements ResourceAddonInterface
{
    use ResourceAddonTrait;

    /**
     * @var array<int, LibraryItemImage>
     */
    #[Groups([
        Product::GROUP_ADMIN_READ_SINGLE,
        Product::GROUP_FRONT_READ_SINGLE,
    ])]
    public array $libraryImages = [];

    public static function getResourceParent(): string
    {
        return Product::class;
    }

    public static function getPropelRelatedTableMap(): ?TableMap
    {
        return null;
    }

    public static function extendQuery(ModelCriteria $query, ?Operation $operation = null, array $context = []): void
    {
        // Polymorphic relation: rows are resolved on demand in buildFromModel().
    }

    public function buildFromModel(ActiveRecordInterface $activeRecord, PropelResourceInterface $abstractPropelResource): ResourceAddonInterface
    {
        $productId = $activeRecord->getId();

        if (null === $productId) {
            return $this;
        }

        $itemImageModels = LibraryItemImageQuery::create()
            ->filterByItemType('product')
            ->filterByItemId($productId)
            ->orderByPosition()
            ->find();

        $this->libraryImages = array_map(
            static fn (LibraryItemImageModel $itemImageModel): LibraryItemImage => self::mapItemImage($itemImageModel),
            iterator_to_array($itemImageModels),
        );

        return $this;
    }

    public function buildFromArray(array $data, PropelResourceInterface $abstractPropelResource): ResourceAddonInterface
    {
        return $this;
    }

    public function doSave(ActiveRecordInterface $activeRecord, PropelResourceInterface $abstractPropelResource): void
    {
        // Read-only addon: no inline persistence path.
    }

    public function doDelete(ActiveRecordInterface $activeRecord, PropelResourceInterface $abstractPropelResource): void
    {
        // Read-only addon: cascade is handled by the foreign key on library_item_image.image_id.
    }

    private static function mapItemImage(LibraryItemImageModel $model): LibraryItemImage
    {
        $itemImage = (new LibraryItemImage())
            ->setId($model->getId())
            ->setItemType($model->getItemType())
            ->setItemId($model->getItemId())
            ->setCode($model->getCode())
            ->setVisible(null === $model->getVisible() ? null : (bool) $model->getVisible())
            ->setPosition($model->getPosition());

        if (null !== $model->getImageId()) {
            $itemImage->setLibraryImage(
                (new LibraryImage())->setId($model->getImageId()),
            );
        }

        return $itemImage;
    }
}
