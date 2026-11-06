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

namespace TheliaLibrary\Service\Svg;

/**
 * A cleaned SVG: its content, what the cleaning changed, and the size its
 * viewBox gives it. When the cleaning removed nothing, the content is the
 * submitted bytes, unchanged, unless they hold something an HTML page would
 * read differently (a CDATA section, a tab in an attribute): the content is
 * then rewritten, with no change listed for it.
 */
final readonly class SanitizedSvg
{
    /**
     * @param list<SvgChange> $changes in document order
     */
    public function __construct(
        public string $content,
        public array $changes,
        public float $width,
        public float $height,
    ) {
    }
}
