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
use Thelia\Model\Lang;
use TheliaLibrary\Controller\Admin\Support\LegacyLibraryImageSerializer;
use TheliaLibrary\Model\LibraryTagQuery;
use TheliaLibrary\Service\LibraryImageTagService;

/**
 * Backwards-compatibility shim for `/open_api/library/image_tag` endpoints.
 *
 * Canonical API: `/api/admin/library_image_tags` (AP 4.3).
 */
#[Route('/open_api/library/image_tag', name: 'thelialibrary_legacy_image_tag_admin')]
final class ImageTagController extends BaseAdminController
{
    #[Route('', name: '_associate', methods: ['POST'])]
    public function createAssociation(
        Request $request,
        LibraryImageTagService $libraryImageTagService,
    ): JsonResponse {
        $data = json_decode($request->getContent(), true) ?? [];

        $imageId = $data['imageId'] ?? null;
        $tagId = $data['tagId'] ?? null;

        if (null === $imageId || null === $tagId) {
            return $this->legacyJson(['error' => 'imageId and tagId are required'], 400);
        }

        $imageTag = $libraryImageTagService->associateImage(
            imageId: (string) $imageId,
            tagId: (string) $tagId,
        );

        $tag = LibraryTagQuery::create()->findPk((int) $tagId);
        $locale = $this->resolveLocale($request);

        return $this->legacyJson([
            'imageTag' => LegacyLibraryImageSerializer::imageTagToArray($imageTag),
            'tag' => null === $tag ? null : LegacyLibraryImageSerializer::tagToArray($tag, $locale),
        ]);
    }

    #[Route('/{imageTagId}', name: '_delete_association', methods: ['DELETE'], requirements: ['imageTagId' => '\d+'])]
    public function deleteAssociation(
        int $imageTagId,
        LibraryImageTagService $libraryImageTagService,
    ): JsonResponse {
        $libraryImageTagService->deleteImageAssociation($imageTagId);

        return $this->legacyJson('Success', 204);
    }

    private function resolveLocale(Request $request): string
    {
        $candidate = $request->request->get('locale') ?? $request->query->get('locale');

        if (\is_string($candidate) && '' !== $candidate) {
            return $candidate;
        }

        $session = $request->getSession();

        if ($session->has('thelia.admin.edition.lang')) {
            return $session->getAdminEditionLang()->getLocale();
        }

        return Lang::getDefaultLanguage()->getLocale();
    }

    private function legacyJson(mixed $data, int $status = 200): JsonResponse
    {
        $response = (new JsonResponse())->setContent(json_encode($data));
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->setStatusCode($status);

        return $response;
    }
}
