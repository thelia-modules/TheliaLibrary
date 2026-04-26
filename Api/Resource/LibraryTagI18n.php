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

namespace TheliaLibrary\Api\Resource;

use Symfony\Component\Serializer\Annotation\Groups;
use Thelia\Api\Resource\I18n;

class LibraryTagI18n extends I18n
{
    #[Groups([
        LibraryTag::GROUP_ADMIN_READ,
        LibraryTag::GROUP_ADMIN_WRITE,
        LibraryTag::GROUP_FRONT_READ,
        LibraryImageTag::GROUP_ADMIN_READ,
    ])]
    protected ?string $title = null;

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(?string $title): self
    {
        $this->title = $title;

        return $this;
    }
}
