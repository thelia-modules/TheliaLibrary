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

namespace TheliaLibrary\Loop;

use Propel\Runtime\ActiveQuery\ModelCriteria;
use Thelia\Action\Image;
use Thelia\Core\Template\Element\BaseI18nLoop;
use Thelia\Core\Template\Element\LoopResult;
use Thelia\Core\Template\Element\LoopResultRow;
use Thelia\Core\Template\Element\PropelSearchLoopInterface;
use Thelia\Core\Template\Loop\Argument\Argument;
use Thelia\Core\Template\Loop\Argument\ArgumentCollection;
use Thelia\Type\EnumType;
use Thelia\Type\TypeCollection;
use TheliaLibrary\Model\LibraryImage as LibraryImageModel;
use TheliaLibrary\Model\LibraryImageQuery;
use TheliaLibrary\Model\LibraryItemImageQuery;
use TheliaLibrary\Service\LibraryImageService;

/**
 * Class LibraryImage.
 *
 * @method int    getId()
 * @method int    getItemId()
 * @method string getItemType()
 * @method string getCode()
 * @method bool   getOnlyVisible()
 * @method int    getWidth()
 * @method int    getHeight()
 */
class LibraryImage extends BaseI18nLoop implements PropelSearchLoopInterface
{
    protected function getArgDefinitions(): ArgumentCollection
    {
        return new ArgumentCollection(
            Argument::createIntTypeArgument('id'),
            Argument::createIntTypeArgument('item_id'),
            Argument::createAlphaNumStringTypeArgument('item_type'),
            Argument::createAlphaNumStringTypeArgument('code'),
            Argument::createBooleanTypeArgument('only_visible'),
            Argument::createIntTypeArgument('width'),
            Argument::createIntTypeArgument('height'),
            Argument::createAlphaNumStringTypeArgument('format'),
            new Argument(
                'resize_mode',
                new TypeCollection(
                    new EnumType([
                        Image::EXACT_RATIO_WITH_BORDERS,
                        Image::EXACT_RATIO_WITH_CROP,
                        Image::KEEP_IMAGE_RATIO,
                    ])
                ),
                'none'
            ),
            Argument::createBooleanTypeArgument('allow_zoom', false),
        );
    }

    public function buildModelCriteria(): ModelCriteria
    {
        $query = LibraryImageQuery::create();

        if (null !== $id = $this->getId()) {
            $query->filterById($id);
        }

        if (null !== $itemId = $this->getItemId()) {
            $query = $this->getOrInitItemJoin($query)->filterByItemId($itemId);
        }

        if (null !== $itemType = $this->getItemType()) {
            $query = $this->getOrInitItemJoin($query)->filterByItemType($itemType);
        }

        if (null !== $code = $this->getCode()) {
            $query = $this->getOrInitItemJoin($query)->filterByCode($code);
        }

        if (true === $this->getOnlyVisible()) {
            $query = $this->getOrInitItemJoin($query)->filterByVisible(true);
        }

        if ($query instanceof LibraryItemImageQuery) {
            $query->orderByPosition();
            $query = $query->endUse();
        }

        $this->configureI18nProcessing(
            $query,
            [
                'TITLE',
                'FILE_NAME',
            ]
        );

        return $query;
    }

    public function parseResults(LoopResult $loopResult): LoopResult
    {
        /** @var LibraryImageModel $image */
        foreach ($loopResult->getResultDataCollection() as $image) {
            /** @var LibraryImageService $libraryImageService */
            $libraryImageService = $this->container->get('thelia_library_image');
            $imageUrl = $libraryImageService->getImagePublicUrl(
                $image,
                $this->getWidth(),
                $this->getHeight(),
                $this->getFormat()
            );

            $row = new LoopResultRow($image);
            $row
                ->set('ID', $image->getId())
                ->set('TITLE', $image->getVirtualColumn('i18n_TITLE'))
                ->set('FILE_NAME', $image->getVirtualColumn('i18n_FILE_NAME'))
                ->set('URL', $imageUrl)
            ;

            $this->addOutputFields($row, $image);

            $loopResult->addRow($row);
        }

        return $loopResult;
    }

    protected function getOrInitItemJoin($query): LibraryItemImageQuery
    {
        if ($query instanceof LibraryItemImageQuery) {
            return $query;
        }

        return $query->useLibraryItemImageQuery();
    }
}
