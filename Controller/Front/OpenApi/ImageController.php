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

use Propel\Runtime\ActiveQuery\Criteria;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Thelia\Controller\Front\BaseFrontController;
use Thelia\Core\HttpFoundation\Request;
use Thelia\Model\Lang;
use TheliaLibrary\Controller\Admin\Support\LegacyLibraryImageSerializer;
use TheliaLibrary\Model\LibraryImage;
use TheliaLibrary\Model\LibraryImageQuery;

/**
 * Backwards-compatibility shim for `/open_api/library/image` (front, GET).
 *
 * Canonical API: `/api/front/library_images` (AP 4.3).
 */
#[Route('/open_api/library/image', name: 'thelialibrary_legacy_image_front')]
final class ImageController extends BaseFrontController
{
    #[Route('', name: '_get', methods: ['GET'])]
    public function getImage(Request $request): JsonResponse
    {
        $locale = $this->resolveLocale($request);
        $query = LibraryImageQuery::create()->orderById(Criteria::DESC);

        if (null !== $id = $request->query->get('id')) {
            $query->filterById((int) $id);
        }

        if (null !== $title = $request->query->get('title')) {
            $query->useLibraryImageI18nQuery()
                ->filterByLocale($locale)
                ->filterByTitle('%'.$title.'%', Criteria::LIKE)
                ->endUse();
        }

        $itemImageQuery = null;

        if (null !== $itemId = $request->query->get('itemId')) {
            $itemImageQuery = $this->getOrInitItemJoin($query, $itemImageQuery)->filterByItemId((int) $itemId);
        }

        if (null !== $itemType = $request->query->get('itemType')) {
            $itemImageQuery = $this->getOrInitItemJoin($query, $itemImageQuery)->filterByItemType($itemType);
        }

        if (null !== $code = $request->query->get('code')) {
            $itemImageQuery = $this->getOrInitItemJoin($query, $itemImageQuery)->filterByCode($code);
        }

        if (true === filter_var($request->query->get('onlyVisible'), \FILTER_VALIDATE_BOOLEAN)) {
            $itemImageQuery = $this->getOrInitItemJoin($query, $itemImageQuery)->filterByVisible(1);
        }

        if (null !== $itemImageQuery) {
            $itemImageQuery->orderByPosition();
            $itemImageQuery->endUse();
        }

        if (null !== $tagId = $request->query->get('tagId')) {
            $query->useLibraryImageTagQuery()
                ->filterByTagId((int) $tagId)
                ->endUse();
        }

        $query->limit((int) $request->query->get('limit', 20));
        $query->offset((int) $request->query->get('offset', 0));

        $width = self::asInt($request->query->get('width'));
        $height = self::asInt($request->query->get('height'));

        $payload = array_map(
            static fn (LibraryImage $image): array => LegacyLibraryImageSerializer::imageToArray($image, $locale, $width, $height),
            iterator_to_array($query->find()),
        );

        return $this->legacyJson($payload);
    }

    private function getOrInitItemJoin($query, $itemImageQuery = null)
    {
        if (null !== $itemImageQuery) {
            return $itemImageQuery;
        }

        return $query->useLibraryItemImageQuery();
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

    private static function asInt(mixed $value): ?int
    {
        if (null === $value || '' === $value) {
            return null;
        }

        return (int) $value;
    }

    private function legacyJson(mixed $data, int $status = 200): JsonResponse
    {
        $response = (new JsonResponse())->setContent(json_encode($data));
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->setStatusCode($status);

        return $response;
    }
}
