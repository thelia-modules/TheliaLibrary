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

use TheliaLibrary\Exception\UnreadableSvgException;

/**
 * Cleans a submitted SVG before the library stores or serves it.
 *
 * A document is cleaned, never refused, unless it cannot be read safely: then
 * the exception names the reason. Every change made to a readable document is
 * listed, so the editor can be told what left the file.
 */
interface SvgSanitizerInterface
{
    /**
     * @throws UnreadableSvgException
     */
    public function sanitize(string $svg): SanitizedSvg;
}
