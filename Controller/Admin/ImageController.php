<?php

namespace TheliaLibrary\Controller\Admin;

use OpenApi\Annotations as OA;
use OpenApi\Controller\Admin\BaseAdminOpenApiController;
use OpenApi\Model\Api\ModelFactory;
use OpenApi\Service\OpenApiService;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Thelia\Core\HttpFoundation\Request;
use TheliaLibrary\Service\LibraryImageService;

/**
 * @Route("/open_api/library/image", name="library_image")
 */
class ImageController extends BaseAdminOpenApiController
{
    /**
     * @Route("", name="_create", methods="POST")
     *
     * @OA\Post(
     *     path="/library/image",
     *     tags={ "Library image"},
     *     summary="Create a new image",
     *     @OA\RequestBody(
     *          required=true,
     *          @OA\MediaType(
     *             mediaType="multipart/form-data",
     *             @OA\Schema(
     *                   @OA\Property(
     *                      property="title",
     *                      type="string",
     *                  ),
     *                   @OA\Property(
     *                      property="slug",
     *                      type="string",
     *                  ),
     *                   @OA\Property(
     *                      property="locale",
     *                      type="string",
     *                  ),
     *                   @OA\Property(
     *                      property="image",
     *                      type="string",
     *                      format="binary"
     *                  )
     *             )
     * )
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
    public function createImage(
        Request $request,
        ModelFactory $modelFactory,
        LibraryImageService $libraryImageService
    )
    {
        $locale = $this->findLocale($request);

        $image = $libraryImageService->createImage(
            $request->files->get('image'),
            $request->request->get('title'),
            $request->request->get('slug'),
            $locale
        );

        return OpenApiService::jsonResponse($modelFactory->buildModel('LibraryImage', $image, $locale));
    }

    // Method POST because patch doesn't work with multipart/form-data
    /**
     *
     * @Route("/{imageId}", name="_update", methods="POST", requirements={"imageId"="\d+"})
     *
     * @OA\Post(
     *     path="/library/image/{imageId}",
     *     tags={ "Library image"},
     *     summary="Update an image",
     *     @OA\Parameter(
     *          name="imageId",
     *          in="path",
     *          required=true,
     *          @OA\Schema(
     *              type="integer"
     *          )
     *     ),
     *     @OA\RequestBody(
     *          required=true,
     *          @OA\MediaType(
     *             mediaType="multipart/form-data",
     *             @OA\Schema(
     *                   @OA\Property(
     *                      property="title",
     *                      type="string",
     *                  ),
     *                   @OA\Property(
     *                      property="slug",
     *                      type="string",
     *                  ),
     *                   @OA\Property(
     *                      property="locale",
     *                      type="string",
     *                  ),
     *                   @OA\Property(
     *                      property="image",
     *                      type="string",
     *                      format="binary"
     *                  )
     *             )
     * )
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
    public function updateImage(
        $imageId,
        Request $request,
        ModelFactory $modelFactory,
        LibraryImageService $libraryImageService
    )
    {
        $locale = $this->findLocale($request);
        $image = $libraryImageService->updateImage(
            $imageId,
            $request->files->get('image'),
            $request->request->get('title'),
            $request->request->get('slug'),
            $locale
        );

        return OpenApiService::jsonResponse($modelFactory->buildModel('LibraryImage', $image, $locale));
    }

    /**
     * @Route("/{imageId}", name="_delete", methods="DELETE", requirements={"imageId"="\d+"})
     *
     * @OA\Delete(
     *     path="/library/image/{imageId}",
     *     tags={ "Library image"},
     *     summary="Delete an image",
     *     @OA\Parameter(
     *          name="imageId",
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
    public function deleteImage(
        $imageId,
        LibraryImageService $libraryImageService
    ) {
        $libraryImageService->deleteImage($imageId);

        return new JsonResponse("Success", 204);
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
