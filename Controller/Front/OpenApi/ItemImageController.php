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

namespace TheliaLibrary\Controller\Front\OpenApi;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Thelia\Controller\Front\BaseFrontController;
use Thelia\Core\HttpFoundation\Request;
use Thelia\Model\Lang;
use TheliaLibrary\Controller\Admin\Support\LegacyLibraryImageSerializer;
use TheliaLibrary\Model\LibraryItemImage;
use TheliaLibrary\Model\LibraryItemImageQuery;

/**
 * Backwards-compatibility shim for `/open_api/library/item_image` (front, GET).
 *
 * Canonical API: `/api/front/library_item_images` (AP 4.3).
 */
#[Route('/open_api/library/item_image', name: 'thelialibrary_legacy_item_image_front')]
final class ItemImageController extends BaseFrontController
{
    private const DEFAULT_TYPES = ['product', 'category', 'content', 'folder'];

    #[Route('', name: '_get', methods: ['GET'])]
    public function getItemImage(Request $request): JsonResponse
    {
        $locale = $this->resolveLocale($request);
        $query = LibraryItemImageQuery::create();

        if (null !== $imageId = $request->query->get('imageId')) {
            $query->filterByImageId((int) $imageId);
        }

        if (null !== $itemType = $request->query->get('itemType')) {
            $query->filterByItemType($itemType);
        }

        if (null !== $itemId = $request->query->get('itemId')) {
            $query->filterByItemId((int) $itemId);
        }

        if (null !== $code = $request->query->get('code')) {
            $query->filterByCode($code);
        }

        $query->limit((int) $request->query->get('limit', 20));
        $query->offset((int) $request->query->get('offset', 0));
        $query->orderByPosition();

        $payload = array_map(
            static fn (LibraryItemImage $itemImage): array => LegacyLibraryImageSerializer::itemImageToArray($itemImage, $locale),
            iterator_to_array($query->find()),
        );

        return $this->legacyJson($payload);
    }

    #[Route('/types', name: '_type_list', methods: ['GET'])]
    public function getItemTypes(Request $request): JsonResponse
    {
        $existingTypes = array_values(array_filter(array_map(
            static fn (LibraryItemImage $itemImage): ?string => $itemImage->getItemType(),
            iterator_to_array(
                LibraryItemImageQuery::create()->groupByItemType()->find(),
            ),
        )));

        $onlyExisting = filter_var($request->query->get('onlyExisting', false), \FILTER_VALIDATE_BOOLEAN);

        $payload = $onlyExisting
            ? $existingTypes
            : array_values(array_unique(array_merge(self::DEFAULT_TYPES, $existingTypes)));

        return $this->legacyJson($payload);
    }

    private function resolveLocale(Request $request): string
    {
        $candidate = $request->query->get('locale');

        if (\is_string($candidate) && '' !== $candidate) {
            return $candidate;
        }

        $session = $request->getSession();

        if ($session->has('thelia.session.lang')) {
            return $session->getLang()->getLocale();
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
