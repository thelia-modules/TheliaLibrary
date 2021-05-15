<?php

namespace TheliaLibrary\Controller\Front;

use OpenApi\Annotations as OA;
use OpenApi\Controller\Front\BaseFrontOpenApiController;
use OpenApi\Model\Api\ModelFactory;
use OpenApi\Service\OpenApiService;
use Symfony\Component\Routing\Annotation\Route;
use Thelia\Core\HttpFoundation\Request;
use TheliaLibrary\Model\LibraryImage;
use TheliaLibrary\Model\LibraryImageQuery;

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
     *          name="slug",
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

        if (null !== $slug = $request->get('slug')) {
            $imageQuery->filterBySlug($slug);
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

    protected function findLocale(Request $request)
    {
        $locale = $request->get('locale');

        if (null == $locale) {
            $locale = $request->getSession()->getAdminEditionLang()->getLocale();
        }

        return $locale;
    }
}
