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

use Symfony\Component\DependencyInjection\Attribute\AutoconfigureTag;

/**
 * Tells the library which regions (`x,y,w,h`) of an image a module has printed in its pages.
 *
 * Asked only for a region the `thelia_library.allowed_variants` policy lists as `registered`,
 * and only when the rendering is not stored yet: an address printed by a page is served, one
 * a visitor made up is not. Implementations are tagged automatically.
 */
#[AutoconfigureTag(ImageRegionRegistryInterface::TAG)]
interface ImageRegionRegistryInterface
{
    public const TAG = 'thelia_library.image_region_registry';

    /**
     * @param string $region the region segment as written in the address, e.g. `0,228,5886,3311`
     */
    public function isRegistered(int $imageId, string $region): bool;
}
