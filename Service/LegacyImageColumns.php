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

/**
 * The columns the 1.4.0 update script adds, whatever version the database says it is on.
 *
 * Module versions follow one rule: the last major line (2.x) is the Thelia 3 one, the line before
 * (1.x) is Thelia 2. A database carried over from Thelia 2 is positioned on 2.0.0, so that no Thelia 2
 * script is ever replayed; the 1.4.0 script, numbered in the Thelia 3 history before the major bump,
 * is then skipped although its columns are missing. The script stays the single definition of those
 * columns: its ADD statements are replayed one by one, only for the columns that do not exist yet.
 */
final readonly class LegacyImageColumns
{
    private const STATEMENT = '/ALTER TABLE `(?<table>\w+)` ADD `(?<column>\w+)` [^;]+;/';

    public function __construct(private string $updateScript = __DIR__.'/../Config/update/1.4.0.sql')
    {
    }

    /**
     * @param callable(string $table, string $column): bool $columnExists
     *
     * @return list<string> the ALTER statements still to run
     */
    public function missingColumnStatements(callable $columnExists): array
    {
        $script = file_get_contents($this->updateScript);

        if (false === $script) {
            throw new \RuntimeException(\sprintf('Unable to read %s', $this->updateScript));
        }

        preg_match_all(self::STATEMENT, $script, $statements, \PREG_SET_ORDER);

        $missing = [];

        foreach ($statements as $statement) {
            if (!$columnExists($statement['table'], $statement['column'])) {
                $missing[] = $statement[0];
            }
        }

        return $missing;
    }
}
