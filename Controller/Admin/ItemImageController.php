<?php

namespace TheliaLibrary\Controller\Admin;

use OpenApi\Annotations as OA;
use OpenApi\Controller\Admin\BaseAdminOpenApiController;
use OpenApi\Model\Api\ModelFactory;
use OpenApi\Service\OpenApiService;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Thelia\Core\HttpFoundation\Request;
use TheliaLibrary\Model\Api\LibraryItemImage;
use TheliaLibrary\Service\LibraryItemImageService;

/**
 * @Route("/open_api/library/item_image", name="library_item_image")
 */
class ItemImageController extends BaseAdminOpenApiController
{
    /**
     * @Route("", name="_associate", methods="POST")
     *
     * @OA\Post(
     *     path="/library/item_image",
     *     tags={ "Library image"},
     *     summary="Associate an image to an item",
     *     @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(
     *                   @OA\Property(
     *                      property="imageId",
     *                      type="integer",
     *                  ),
     *                   @OA\Property(
     *                      property="itemType",
     *                      type="string",
     *                  ),
     *                   @OA\Property(
     *                      property="itemId",
     *                      type="integer",
     *                  ),
     *                   @OA\Property(
     *                      property="code",
     *                      type="string",
     *                  ),
     *                   @OA\Property(
     *                      property="visible",
     *                      type="boolean",
     *                  )
     * )
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
    public function createAssociation(
        Request $request,
        ModelFactory $modelFactory,
        LibraryItemImageService $libraryItemImageService
    )
    {
        $data = json_decode($request->getContent(), true);
        /** @var LibraryItemImage $openApiLibraryItemImage */
        $openApiLibraryItemImage = $modelFactory->buildModel('LibraryItemImage', $data);
        $openApiLibraryItemImage->validate(self::GROUP_UPDATE);

        $image = $libraryItemImageService->associateImage(
            $openApiLibraryItemImage->getImageId(),
            $openApiLibraryItemImage->getItemType(),
            $openApiLibraryItemImage->getItemId(),
            $openApiLibraryItemImage->getCode(),
            $openApiLibraryItemImage->isVisible(),
            $openApiLibraryItemImage->getPosition()
        );

        return OpenApiService::jsonResponse($modelFactory->buildModel('LibraryItemImage', $image));
    }

    /**
     * @Route("/{itemImageId}", name="_update_association", methods="PATCH", requirements={"itemImageId"="\d+"})
     *
     * @OA\Patch(
     *     path="/library/item_image/{itemImageId}",
     *     tags={ "Library image"},
     *     summary="Update an association",
     *     @OA\Parameter(
     *          name="itemImageId",
     *          in="path",
     *          required=true,
     *          @OA\Schema(
     *              type="integer"
     *          )
     *     ),
     *     @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(
     *                   @OA\Property(
     *                      property="visible",
     *                      type="boolean",
     *                  ),
     *                  @OA\Property(
     *                      property="code",
     *                      type="string",
     *                  ),
     *                   @OA\Property(
     *                      property="position",
     *                      type="integer",
     *                  ),
     *                   @OA\Property(
     *                      property="positionMovement",
     *                      type="string",
     *                      enum={"up", "down"}
     *                  )
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
    public function updateAssociation(
        $itemImageId,
        Request $request,
        ModelFactory $modelFactory,
        LibraryItemImageService $libraryItemImageService
    )
    {
        $data = json_decode($request->getContent(), true);

        $image = $libraryItemImageService->updateImageAssociation(
            $itemImageId,
            $data['code']?? null,
            $data['visible']?? null,
            $data['position']?? null,
            $data['positionMovement']?? null
        );

        return OpenApiService::jsonResponse($modelFactory->buildModel('LibraryItemImage', $image));
    }

    /**
     * @Route("/{itemImageId}", name="_delete_association", methods="DELETE", requirements={"itemImageId"="\d+"})
     *
     * @OA\Delete(
     *     path="/library/item_image/{itemImageId}",
     *     tags={ "Library image"},
     *     summary="Delete an association",
     *     @OA\Parameter(
     *          name="itemImageId",
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
        $itemImageId,
        LibraryItemImageService $libraryItemImageService
    )
    {
        $libraryItemImageService->deleteImageAssociation($itemImageId);

        return new JsonResponse("Success", 204);
    }
}
