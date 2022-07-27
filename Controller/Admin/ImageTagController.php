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
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Thelia\Core\HttpFoundation\Request;
use TheliaLibrary\Model\LibraryImageTag;
use TheliaLibrary\Service\LibraryImageTagService;

/**
 * @Route("/open_api/library/image_tag", name="library_image_tag")
 */
class ImageTagController extends BaseAdminOpenApiController
{
    /**
     * @Route("", name="_associate", methods="POST")
     *
     * @OA\Post(
     *     path="/library/image_tag",
     *     tags={ "Library tag"},
     *     summary="Associate a tag to an image",
     *     @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(
     *                   @OA\Property(
     *                      property="imageId",
     *                      type="integer",
     *                  ),
     *                   @OA\Property(
     *                      property="tagId",
     *                      type="integer",
     *                  )
     * )
     *     ),
     *     @OA\Response(
     *          response="200",
     *          description="Success",
     *          @OA\JsonContent(ref="#/components/schemas/LibraryImageTag")
     *     ),
     *     @OA\Response(
     *          response="400",
     *          description="Bad request",
     *          @OA\JsonContent(ref="#/components/schemas/Error")
     *     )
     * )
     */
    public function createAssociation(
        Request $request,
        ModelFactory $modelFactory,
        LibraryImageTagService $libraryImageTagService
    ) {
        $data = json_decode($request->getContent(), true);
        /** @var LibraryImageTag $openApiLibraryImageTag */
        $openApiLibraryImageTag = $modelFactory->buildModel('LibraryImageTag', $data);
        $openApiLibraryImageTag->validate(self::GROUP_UPDATE);

        $image = $libraryImageTagService->associateImage(
            $openApiLibraryImageTag->getImageId(),
            $openApiLibraryImageTag->getTagId(),
        );

        return OpenApiService::jsonResponse($modelFactory->buildModel('LibraryImageTag', $image));
    }

    /**
     * @Route("/{imageTagId}", name="_delete_association", methods="DELETE", requirements={"imageTagId"="\d+"})
     *
     * @OA\Delete(
     *     path="/library/image_tag/{imageTagId}",
     *     tags={ "Library tag"},
     *     summary="Delete an association",
     *     @OA\Parameter(
     *          name="imageTagId",
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
    public function deleteAssociation(
        $imageTagId,
        LibraryImageTagService $libraryImageTagService
    ) {
        $libraryImageTagService->deleteImageAssociation($imageTagId);

        return new JsonResponse('Success', 204);
    }
}
