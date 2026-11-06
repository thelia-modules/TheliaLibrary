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

namespace TheliaLibrary\Exception;

use TheliaLibrary\Service\Svg\UnreadableSvgReason;

/**
 * Raised when a submitted SVG cannot be read safely. The reason is data, so a
 * caller can word the refusal in the language of its screen.
 */
final class UnreadableSvgException extends UnsupportedLibraryImageException
{
    public function __construct(public readonly UnreadableSvgReason $reason)
    {
        parent::__construct(\sprintf('The submitted SVG cannot be read safely: %s.', $reason->value));
    }
}
