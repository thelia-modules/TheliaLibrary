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
use TheliaLibrary\Model\LibraryTag;
use TheliaLibrary\Model\LibraryTagQuery;
use TheliaLibrary\Service\LibraryTagService;

/**
 * Backwards-compatibility shim for the legacy `/open_api/library/tag` endpoints.
 *
 * Canonical API: `/api/admin/library_tags` (AP 4.3).
 */
#[Route('/open_api/library/tag', name: 'thelialibrary_legacy_tag_admin')]
final class TagController extends BaseAdminController
{
    #[Route('', name: '_view', methods: ['GET'])]
    public function getTags(Request $request): JsonResponse
    {
        $locale = $this->resolveLocale($request);

        $payload = array_map(
            static fn (LibraryTag $tag): array => LegacyLibraryImageSerializer::tagToArray($tag, $locale),
            iterator_to_array(LibraryTagQuery::create()->find()),
        );

        return $this->legacyJson($payload);
    }

    #[Route('', name: '_create', methods: ['POST'])]
    public function createTag(
        Request $request,
        LibraryTagService $libraryTagService,
    ): JsonResponse {
        $locale = $this->resolveLocale($request);

        $tag = $libraryTagService->createTag(
            title: (string) ($request->request->get('title') ?? ''),
            colorCode: (string) ($request->request->get('colorCode') ?? ''),
        );

        return $this->legacyJson(LegacyLibraryImageSerializer::tagToArray($tag, $locale));
    }

    #[Route('/{tagId}', name: '_update', methods: ['POST'], requirements: ['tagId' => '\d+'])]
    public function updateTag(
        int $tagId,
        Request $request,
        LibraryTagService $libraryTagService,
    ): JsonResponse {
        $locale = $this->resolveLocale($request);

        $title = $request->request->get('title');
        $colorCode = $request->request->get('colorCode');

        $tag = $libraryTagService->updateTag(
            tagId: $tagId,
            title: \is_string($title) ? $title : null,
            colorCode: \is_string($colorCode) ? $colorCode : null,
        );

        return $this->legacyJson(LegacyLibraryImageSerializer::tagToArray($tag, $locale));
    }

    #[Route('/{tagId}', name: '_delete', methods: ['DELETE'], requirements: ['tagId' => '\d+'])]
    public function deleteTag(
        int $tagId,
        LibraryTagService $libraryTagService,
    ): JsonResponse {
        $libraryTagService->deleteTag($tagId);

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
