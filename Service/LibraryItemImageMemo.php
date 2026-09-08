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

namespace TheliaLibrary\Service;

use TheliaLibrary\Model\LibraryItemImage;
use TheliaLibrary\Model\LibraryItemImageQuery;

/**
 * The library rows attached to one item, read once per request.
 *
 * An API resource addon is built by the Propel bridge with `new`, so it receives no
 * service: two addons built for the same item in one request cannot share anything but
 * class state. That happens on a product page, where the resource is transformed once
 * for itself and once through the back-reference of its categories, and each transform
 * paid its own query for the same rows.
 *
 * The store is emptied at the start of every request and console command, and whenever
 * an item image is written — see {@see \TheliaLibrary\EventListeners\LibraryItemImageMemoListener}.
 */
final class LibraryItemImageMemo
{
    /**
     * @var array<string, list<LibraryItemImage>>
     */
    private static array $rowsByItem = [];

    /**
     * @return list<LibraryItemImage>
     */
    public static function rowsForItem(string $itemType, int|string $itemId): array
    {
        $key = $itemType.'|'.$itemId;

        if (isset(self::$rowsByItem[$key])) {
            return self::$rowsByItem[$key];
        }

        $rows = LibraryItemImageQuery::create()
            ->filterByItemType($itemType)
            ->filterByItemId($itemId)
            ->orderByPosition()
            ->find();

        return self::$rowsByItem[$key] = array_values(iterator_to_array($rows));
    }

    public static function reset(): void
    {
        self::$rowsByItem = [];
    }
}
