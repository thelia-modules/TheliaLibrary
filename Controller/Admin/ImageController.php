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
use TheliaLibrary\Service\LibraryImageService;

/**
 * Backwards-compatibility shim for the legacy `/open_api/library/image`
 * endpoints still consumed by the bundled `@thelia/media-library` admin UI.
 *
 * The canonical API for new integrations lives under `/api/admin/library_images`
 * (API Platform 4.3 resources). This controller exposes the same Propel logic
 * but returns the legacy JSON shape expected by the npm bundle.
 */
#[Route('/open_api/library/image', name: 'thelialibrary_legacy_image_admin')]
final class ImageController extends BaseAdminController
{
    #[Route('', name: '_create', methods: ['POST'])]
    public function createImage(
        Request $request,
        LibraryImageService $libraryImageService,
    ): JsonResponse {
        $file = $request->files->get('image');

        if (null === $file) {
            return $this->legacyJson(['error' => 'Missing required image file'], 400);
        }

        $locale = $this->resolveLocale($request);

        $image = $libraryImageService->createImage(
            file: $file,
            title: self::asString($request->request->get('title')),
            locale: $locale,
        );

        return $this->legacyJson(LegacyLibraryImageSerializer::imageToArray($image, $locale));
    }

    #[Route('/{imageId}', name: '_update', methods: ['POST'], requirements: ['imageId' => '\d+'])]
    public function updateImage(
        int $imageId,
        Request $request,
        LibraryImageService $libraryImageService,
    ): JsonResponse {
        $locale = $this->resolveLocale($request);

        $image = $libraryImageService->updateImage(
            imageId: $imageId,
            file: $request->files->get('image'),
            title: self::asString($request->request->get('title')),
            locale: $locale,
        );

        return $this->legacyJson(LegacyLibraryImageSerializer::imageToArray($image, $locale));
    }

    #[Route('/{imageId}', name: '_delete', methods: ['DELETE'], requirements: ['imageId' => '\d+'])]
    public function deleteImage(
        int $imageId,
        LibraryImageService $libraryImageService,
    ): JsonResponse {
        $libraryImageService->deleteImage($imageId);

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

    private static function asString(mixed $value): ?string
    {
        return \is_string($value) && '' !== $value ? $value : null;
    }

    private function legacyJson(mixed $data, int $status = 200): JsonResponse
    {
        $response = (new JsonResponse())->setContent(json_encode($data));
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->setStatusCode($status);

        return $response;
    }
}
