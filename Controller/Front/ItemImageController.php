<?php

namespace TheliaLibrary\Controller\Front;

use OpenApi\Controller\Front\BaseFrontOpenApiController;
use OpenApi\Model\Api\ModelFactory;
use OpenApi\Service\OpenApiService;
use Thelia\Core\HttpFoundation\Request;
use TheliaLibrary\Model\LibraryItemImage;
use TheliaLibrary\Model\LibraryItemImageQuery;

/**
 * @Route("/open_api/library/item_image", name="front_library_item_image")
 */
class ItemImageController extends BaseFrontOpenApiController
{
    /**
     * @Route("", name="_get", methods="GET")
     *
     * @OA\Get(
     *     path="/library/item_image",
     *     tags={"Library image"},
     *     summary="Get item images association",
     *     @OA\Parameter(
     *          name="itemId",
     *          in="query",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *     ),
     *     @OA\Parameter(
     *          name="itemType",
     *          in="query",
     *          @OA\Schema(
     *              type="string"
     *          )
     *     ),
     *     @OA\Parameter(
     *          name="code",
     *          in="query",
     *          @OA\Schema(
     *              type="string"
     *          )
     *     ),
     *     @OA\Parameter(
     *          name="offset",
     *          in="query",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *     ),
     *     @OA\Parameter(
     *          name="limit",
     *          in="query",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *     ),
     *     @OA\Response(
     *          response="200",
     *          description="Success",
     *          @OA\JsonContent(ref="#/components/schemas/LibraryItemImage")
     *     ),
     *     @OA\Response(
     *          response="400",
     *          description="Bad request",
     *          @OA\JsonContent(ref="#/components/schemas/Error")
     *     )
     * )
     */
    public function getItemImage(
        Request $request,
        ModelFactory $modelFactory
    ) {
        $locale = $this->findLocale($request);

        $itemImageQuery = LibraryItemImageQuery::create();

        if (null !== $imageId = $request->get('imageId')) {
            $itemImageQuery->filterByImageId($imageId);
        }

        if (null !== $itemType = $request->get('itemType')) {
            $itemImageQuery->filterByItemType($itemType);
        }

        if (null !== $itemId = $request->get('itemId')) {
            $itemImageQuery->filterByItemId($itemId);
        }

        if (null !== $code = $request->get('code')) {
            $itemImageQuery->filterByCode($code);
        }

        if (null !== $limit = $request->get('limit', 20)) {
            $itemImageQuery->limit($limit);
        }

        if (null !== $offset = $request->get('offset', 0)) {
            $itemImageQuery->offset($offset);
        }

        $itemImageQuery->orderByPosition();

        return OpenApiService::jsonResponse(array_map(
            function (LibraryItemImage $itemImage) use ($modelFactory, $locale) {
                return $modelFactory->buildModel('LibraryItemImage', $itemImage, $locale);
            },
            iterator_to_array($itemImageQuery->find())
        ));
    }

    protected function findLocale(Request $request)
    {
        $locale = $request->get('locale');

        if (null == $locale) {
            $locale = $request->getSession()->getAdminEditionLang()->getLocale();
        }

        return $locale;
    }
}
