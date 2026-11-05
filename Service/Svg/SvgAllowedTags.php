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

use enshrined\svgSanitize\data\AllowedTags;
use enshrined\svgSanitize\data\TagInterface;

/**
 * The tags the sanitizer allows, without the animation elements.
 *
 * An animation can set an attribute after the document was cleaned (an
 * `href` turned into a script URL, for instance). A still image needs none of
 * them, so they leave with the rest of what the library does not keep.
 */
final class SvgAllowedTags implements TagInterface
{
    private const ANIMATION_TAGS = [
        'animate',
        'animatecolor',
        'animatemotion',
        'animatetransform',
        'discard',
        'mpath',
        'set',
    ];

    /**
     * @return list<string>
     */
    public static function getTags(): array
    {
        return array_values(array_diff(AllowedTags::getTags(), self::ANIMATION_TAGS));
    }
}
