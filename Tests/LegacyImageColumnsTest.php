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

namespace TheliaLibrary\Tests;

use PHPUnit\Framework\TestCase;
use TheliaLibrary\Service\LegacyImageColumns;

final class LegacyImageColumnsTest extends TestCase
{
    private const UPDATE_SCRIPT = __DIR__.'/../Config/update/1.4.0.sql';

    public function testAThelia2DatabaseGetsEveryColumnOfTheScript(): void
    {
        $statements = (new LegacyImageColumns(self::UPDATE_SCRIPT))->missingColumnStatements(
            static fn (string $table, string $column): bool => false,
        );

        self::assertCount(10, $statements);
        self::assertContains('ALTER TABLE `library_image` ADD `file_name` VARCHAR(255) NULL;', $statements);
        self::assertContains('ALTER TABLE `library_image_i18n` ADD `caption` TEXT NULL;', $statements);
    }

    public function testAnUpToDateDatabaseGetsNothing(): void
    {
        $statements = (new LegacyImageColumns(self::UPDATE_SCRIPT))->missingColumnStatements(
            static fn (string $table, string $column): bool => true,
        );

        self::assertSame([], $statements);
    }

    public function testOnlyTheMissingColumnsAreAdded(): void
    {
        $statements = (new LegacyImageColumns(self::UPDATE_SCRIPT))->missingColumnStatements(
            static fn (string $table, string $column): bool => !('library_image' === $table && 'file_name' === $column),
        );

        self::assertSame(['ALTER TABLE `library_image` ADD `file_name` VARCHAR(255) NULL;'], $statements);
    }
}
