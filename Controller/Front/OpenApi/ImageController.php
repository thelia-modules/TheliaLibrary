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

namespace TheliaLibrary\Controller\Front\OpenApi;

use OpenApi\Annotations as OA;
use OpenApi\Controller\Front\BaseFrontOpenApiController;
use OpenApi\Model\Api\ModelFactory;
use OpenApi\Service\OpenApiService;
use Propel\Runtime\ActiveQuery\Criteria;
use Symfony\Component\Routing\Annotation\Route;
use Thelia\Core\HttpFoundation\Request;
use TheliaLibrary\Model\LibraryImage;
use TheliaLibrary\Model\LibraryImageQuery;
use TheliaLibrary\Model\LibraryItemImageQuery;

/**
 * @Route("/open_api/library/image", name="front_library_image")
 */
class ImageController extends BaseFrontOpenApiController
{
    /**
     * @Route("", name="_get", methods="GET")
     *
     * @OA\Get(
     *     path="/library/image",
     *     tags={"Library image"},
     *     summary="Get images",
     *     @OA\Parameter(
     *          name="id",
     *          in="query",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *     ),
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
     *          name="title",
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
     *          name="onlyVisible",
     *          in="query",
     *          @OA\Schema(
     *              type="boolean",
     *              default="true"
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
     *     @OA\Parameter(
     *          name="width",
     *          in="query",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *     ),
     *     @OA\Parameter(
     *          name="height",
     *          in="query",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *     ),
     *     @OA\Parameter(
     *          name="locale",
     *          in="query",
     *          @OA\Schema(
     *              type="string"
     *          )
     *     ),
     *     @OA\Response(
     *          response="200",
     *          description="Success",
     *          @OA\JsonContent(ref="#/components/schemas/LibraryImage")
     *     ),
     *     @OA\Response(
     *          response="400",
     *          description="Bad request",
     *          @OA\JsonContent(ref="#/components/schemas/Error")
     *     )
     * )
     */
    public function getImage(
        Request $request,
        ModelFactory $modelFactory
    ) {
        $locale = $this->findLocale($request);

        $imageQuery = LibraryImageQuery::create();

        if (null !== $id = $request->get('id')) {
            $imageQuery->filterById($id);
        }

        if (null !== $title = $request->get('title')) {
            $imageQuery->useLibraryImageI18nQuery()
                    ->filterByLocale($locale)
                    ->filterByTitle("%$title%", Criteria::LIKE)
                ->endUse();
        }

        $itemImageQuery = null;

        if (null !== $itemId = $request->get('itemId')) {
            $itemImageQuery = $this->getOrInitItemJoin($imageQuery, $itemImageQuery)->filterByItemId($itemId);
        }

        if (null !== $itemType = $request->get('itemType')) {
            $itemImageQuery = $this->getOrInitItemJoin($imageQuery, $itemImageQuery)->filterByItemType($itemType);
        }

        if (null !== $code = $request->get('code')) {
            $itemImageQuery = $this->getOrInitItemJoin($imageQuery, $itemImageQuery)->filterByCode($code);
        }

        if (true === $request->get('onlyVisible')) {
            $itemImageQuery = $this->getOrInitItemJoin($imageQuery, $itemImageQuery)->filterByVisible(true);
        }

        if (null !== $itemImageQuery) {
            $itemImageQuery->orderByPosition();
            $itemImageQuery->endUse();
        }

        if (null !== $limit = $request->get('limit', 20)) {
            $imageQuery->limit($limit);
        }

        if (null !== $offset = $request->get('offset', 0)) {
            $imageQuery->offset($offset);
        }

        $width = $request->get('width');
        $height = $request->get('height');

        return OpenApiService::jsonResponse(array_map(
            function (LibraryImage $image) use ($modelFactory, $locale, $width, $height) {
                /** @var \TheliaLibrary\Model\Api\LibraryImage $imageModel */
                $imageModel = $modelFactory->buildModel('LibraryImage', $image, $locale);
                $imageModel->generateUrl($width, $height);

                return $imageModel;
            },
            iterator_to_array($imageQuery->find())
        ));
    }

    protected function getOrInitItemJoin($query, $itemImageQuery = null): LibraryItemImageQuery
    {
        if (null !== $itemImageQuery) {
            return $itemImageQuery;
        }

        return $query->useLibraryItemImageQuery();
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
