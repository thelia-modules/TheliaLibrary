<?php

namespace TheliaLibrary\ApiExtend;

use OpenApi\Events\ModelExtendDataEvent;
use OpenApi\Model\Api\ModelFactory;
use OpenApi\Model\Api\Product;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use TheliaLibrary\Model\LibraryItemImage;
use TheliaLibrary\Model\LibraryItemImageQuery;

class ProductApiListener implements EventSubscriberInterface
{
    public function __construct(
        private ModelFactory $modelFactory,
        private RequestStack $requestStack
    ){
    }

    /**
     * @OA\Schema(
     *    schema="TheliaLibraryExtendProduct",
     *    @OA\Property(
     *      property="libraryImages",
     *      type="array",
     *      @OA\Items(
     *          ref="#/components/schemas/LibraryItemImage"
     *      )
     *    )
     * )
     */
    public function addImageToProduct(ModelExtendDataEvent $event)
    {
        /** @var Product $product */
        $product = $event->getModel();

        $productImage = LibraryItemImageQuery::create()
            ->filterByItemType('product')
            ->filterByItemId($product->getId())
            ->filterByVisible(1)
            ->find();

        $request = $this->requestStack->getCurrentRequest();
        $locale = $request->get('locale');

        if (null == $locale) {
            $locale = $request->getLocale();
        }

        $images = array_map(
            function (LibraryItemImage $itemImage) use ($locale) {
                return $this->modelFactory->buildModel('LibraryItemImage', $itemImage, $locale);
            },
            iterator_to_array($productImage)
        );

        if (!empty($images)) {
            $event->setExtendDataKeyValue('libraryImages', $images);
        }
    }

    public static function getSubscribedEvents()
    {
        $events = [];
        if (class_exists('OpenApi\Events\ModelExtendDataEvent')){
            $events[ModelExtendDataEvent::ADD_EXTEND_DATA_PREFIX.'product'] = ['addImageToProduct',0];
        }

        return $events;
    }
}
