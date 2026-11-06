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
 * One change the cleaning made. The subject is the element or attribute name
 * as written in the document (`script`, `onload`, `xlink:href`, `!DOCTYPE`,
 * `?php` for an instruction, `!--` for the comments), the viewBox value or
 * the namespace that was added.
 */
final readonly class SvgChange
{
    public function __construct(
        public SvgChangeKind $kind,
        public string $subject,
    ) {
    }
}
