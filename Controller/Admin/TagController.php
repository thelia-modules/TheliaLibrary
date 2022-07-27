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

namespace TheliaLibrary\Controller\Admin;

use OpenApi\Annotations as OA;
use OpenApi\Controller\Admin\BaseAdminOpenApiController;
use OpenApi\Model\Api\ModelFactory;
use OpenApi\Service\OpenApiService;
use Symfony\Component\Routing\Annotation\Route;
use Thelia\Core\HttpFoundation\JsonResponse;
use Thelia\Core\HttpFoundation\Request;
use TheliaLibrary\Service\LibraryTagService;

/**
 * @Route("/open_api/library/tag", name="library_tag")
 */
class TagController extends BaseAdminOpenApiController
{
    /**
     * @Route("", name="_create", methods="POST")
     *
     * @OA\Post(
     *     path="/library/tag",
     *     tags={ "Library tag"},
     *     summary="Create a new tag",
     *     @OA\RequestBody(
     *          required=true,
     *             @OA\JsonContent(
     *                 @OA\Property(
     *                     property="title",
     *                     type="string"
     *                 ),
     *                 @OA\Property(
     *                     property="colorCode",
     *                     default="#000000",
     *                     type="string"
     *                 ),
     *             )
     *     ),
     *     @OA\Response(
     *          response="200",
     *          description="Success",
     *          @OA\JsonContent(ref="#/components/schemas/LibraryTag")
     *     ),
     *     @OA\Response(
     *          response="400",
     *          description="Bad request",
     *          @OA\JsonContent(ref="#/components/schemas/Error")
     *     )
     * )
     */
    public function createTag(
        Request $request,
        ModelFactory $modelFactory,
        LibraryTagService $libraryTagService
    ) {
        $locale = $this->findLocale($request);

        $tag = $libraryTagService->createTag(
            $request->request->get('title'),
            $request->request->get('colorCode'),
            $locale
        );

        return OpenApiService::jsonResponse($modelFactory->buildModel('LibraryTag', $tag, $locale));
    }

    /**
     * @Route("/{tagId}", name="_update", methods="POST", requirements={"tagId"="\d+"})
     * @OA\Post(
     *     path="/library/tag/{tagId}",
     *     tags={ "Library tag"},
     *     summary="update a tag",
     *     @OA\Parameter(
     *          name="tagId",
     *          in="path",
     *          required=true,
     *          @OA\Schema(
     *              type="integer"
     *          )
     *     ),
     *     @OA\RequestBody(
     *          required=true,
     *             @OA\JsonContent(
     *                 @OA\Property(
     *                     property="title",
     *                     type="string"
     *                 ),
     *                 @OA\Property(
     *                     property="colorCode",
     *                     default="#000000",
     *                     type="string"
     *                 ),
     *             )
     *     ),
     *     @OA\Response(
     *          response="200",
     *          description="Success",
     *          @OA\JsonContent(ref="#/components/schemas/LibraryTag")
     *     ),
     *     @OA\Response(
     *          response="400",
     *          description="Bad request",
     *          @OA\JsonContent(ref="#/components/schemas/Error")
     *     )
     * )
     */
    public function updateTag(
        $tagId,
        Request $request,
        ModelFactory $modelFactory,
        LibraryTagService $libraryTagService
    ) {
        $locale = $this->findLocale($request);
        $tag = $libraryTagService->updateTag(
            $tagId,
            $request->request->get('title'),
            $request->request->get('colorCode'),
            $locale
        );

        return OpenApiService::jsonResponse($modelFactory->buildModel('LibraryTag', $tag, $locale));
    }

    /**
     * @Route("/{tagId}", name="_delete", methods="DELETE", requirements={"tagId"="\d+"})
     *
     * @OA\Delete(
     *     path="/library/tag/{tagId}",
     *     tags={ "Library tag"},
     *     summary="Delete a tag",
     *     @OA\Parameter(
     *          name="tagId",
     *          in="path",
     *          required=true,
     *          @OA\Schema(
     *              type="integer"
     *          )
     *     ),
     *     @OA\Response(
     *          response="204",
     *          description="Success"
     *     ),
     *     @OA\Response(
     *          response="400",
     *          description="Bad request",
     *          @OA\JsonContent(ref="#/components/schemas/Error")
     *     )
     * )
     */
    public function deleteTag(
        $tagId,
        LibraryTagService $libraryTagService
    ) {
        $libraryTagService->deleteTag($tagId);

        return new JsonResponse('Success', 204);
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
