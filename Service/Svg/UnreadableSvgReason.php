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

enum UnreadableSvgReason: string
{
    case Doctype = 'doctype';
    case Entity = 'entity';
    case NotUtf8 = 'not_utf8';
    case MalformedXml = 'malformed_xml';
    case NotSvgRoot = 'not_svg_root';
    case TooLarge = 'too_large';
    case NoDimensions = 'no_dimensions';
}
