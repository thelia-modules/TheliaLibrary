<?php

declare(strict_types=1);

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

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Thelia\Controller\Admin\BaseAdminController;
use Thelia\Core\HttpFoundation\Request;
use TheliaLibrary\Controller\Admin\Support\LegacyLibraryImageSerializer;
use TheliaLibrary\Service\LibraryItemImageService;

/**
 * Backwards-compatibility shim for `/open_api/library/item_image` admin endpoints.
 *
 * Canonical API: `/api/admin/library_item_images` (AP 4.3).
 */
#[Route('/open_api/library/item_image', name: 'thelialibrary_legacy_item_image_admin')]
final class ItemImageController extends BaseAdminController
{
    #[Route('', name: '_associate', methods: ['POST'])]
    public function createAssociation(
        Request $request,
        LibraryItemImageService $libraryItemImageService,
    ): JsonResponse {
        $data = json_decode($request->getContent(), true) ?? [];

        $imageId = $data['imageId'] ?? null;
        $itemType = $data['itemType'] ?? null;
        $itemId = $data['itemId'] ?? null;

        if (null === $imageId || null === $itemType || null === $itemId) {
            return $this->legacyJson(['error' => 'imageId, itemType and itemId are required'], 400);
        }

        $itemImage = $libraryItemImageService->associateImage(
            imageId: $imageId,
            itemType: $itemType,
            itemId: $itemId,
            code: $data['code'] ?? null,
            visible: $data['visible'] ?? true,
            position: $data['position'] ?? null,
        );

        return $this->legacyJson(LegacyLibraryImageSerializer::itemImageToArray($itemImage));
    }

    #[Route('/{itemImageId}', name: '_update_association', methods: ['PATCH'], requirements: ['itemImageId' => '\d+'])]
    public function updateAssociation(
        int $itemImageId,
        Request $request,
        LibraryItemImageService $libraryItemImageService,
    ): JsonResponse {
        $data = json_decode($request->getContent(), true) ?? [];

        $itemImage = $libraryItemImageService->updateImageAssociation(
            itemImageId: $itemImageId,
            code: $data['code'] ?? null,
            visible: $data['visible'] ?? null,
            position: $data['position'] ?? null,
            positionMovement: $data['positionMovement'] ?? null,
        );

        return $this->legacyJson(LegacyLibraryImageSerializer::itemImageToArray($itemImage));
    }

    #[Route('/{itemImageId}', name: '_delete_association', methods: ['DELETE'], requirements: ['itemImageId' => '\d+'])]
    public function deleteAssociation(
        int $itemImageId,
        LibraryItemImageService $libraryItemImageService,
    ): JsonResponse {
        $libraryItemImageService->deleteImageAssociation($itemImageId);

        return $this->legacyJson('Success', 204);
    }

    private function legacyJson(mixed $data, int $status = 200): JsonResponse
    {
        $response = (new JsonResponse())->setContent(json_encode($data));
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->setStatusCode($status);

        return $response;
    }
}
