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

enum SvgChangeKind: string
{
    case RemovedElement = 'removed_element';
    case RemovedAttribute = 'removed_attribute';
    case ExternalReference = 'external_reference';
    case AddedViewBox = 'added_viewbox';
}
