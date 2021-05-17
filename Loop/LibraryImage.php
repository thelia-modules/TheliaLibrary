<?php

namespace TheliaLibrary\Loop;

use Thelia\Core\Template\Element\BaseI18nLoop;
use Thelia\Core\Template\Element\LoopResult;
use Thelia\Core\Template\Element\LoopResultRow;
use Thelia\Core\Template\Element\PropelSearchLoopInterface;
use Thelia\Core\Template\Loop\Argument\Argument;
use Thelia\Core\Template\Loop\Argument\ArgumentCollection;
use TheliaLibrary\Model\LibraryImageQuery;
use TheliaLibrary\Model\LibraryItemImageQuery;
use TheliaLibrary\Service\LibraryImageService;

/**
 * Class LibraryImage.
 *
 * @method int getId()
 * @method int getItemId()
 * @method string getItemType()
 * @method string getCode()
 * @method boolean getOnlyVisible()
 * @method int getWidth()
 * @method int getHeight()
 */
class LibraryImage extends BaseI18nLoop implements PropelSearchLoopInterface
{
    protected function getArgDefinitions()
    {
        return new ArgumentCollection(
            Argument::createIntTypeArgument('id'),
            Argument::createIntTypeArgument('item_id'),
            Argument::createAlphaNumStringTypeArgument('item_type'),
            Argument::createAlphaNumStringTypeArgument('code'),
            Argument::createBooleanTypeArgument('only_visible'),
            Argument::createIntTypeArgument('width'),
            Argument::createIntTypeArgument('height'),
        );
    }

    public function buildModelCriteria()
    {
        $query = LibraryImageQuery::create();

        $this->configureI18nProcessing(
            $query,
            [
                'TITLE',
                'FILE_NAME',
            ]
        );

        if (null !== $id = $this->getId()) {
            $query->filterById($id);
        }

        if (null !== $itemId = $this->getItemId()) {
            $this->getOrInitItemJoin($query)->filterByItemId($itemId);
        }

        if (null !== $itemType = $this->getItemType()) {
            $this->getOrInitItemJoin($query)->filterByItemType($itemType);
        }

        if (null !== $code = $this->getCode()) {
            $this->getOrInitItemJoin($query)->filterByCode($code);
        }

        if (true === $this->getOnlyVisible()) {
            $this->getOrInitItemJoin($query)->filterByVisible(true);
        }

        if ($query instanceof LibraryItemImageQuery) {
            $query->orderByPosition();
            $query->endUse();
        }

        return $query;
    }

    public function parseResults(LoopResult $loopResult)
    {
        /** @var LibraryImage $entry */
        foreach ($loopResult->getResultDataCollection() as $entry) {
            /** @var LibraryImageService $libraryImageService */
            $libraryImageService = $this->container->get('thelia_library_image');
            $imageUrl = $libraryImageService->getImageFilePublicUrl(
                $entry->getVirtualColumn('i18n_FILE_NAME'),
                $this->getWidth(),
                $this->getHeight()
            );

            $row = new LoopResultRow($entry);
            $row
                ->set('ID', $entry->getId())
                ->set('TITLE', $entry->getVirtualColumn('i18n_TITLE'))
                ->set('FILE_NAME', $entry->getVirtualColumn('i18n_FILE_NAME'))
                ->set('URL', $imageUrl)
            ;

            $this->addOutputFields($row, $entry);

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
