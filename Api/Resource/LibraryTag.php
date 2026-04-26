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

use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use Propel\Runtime\Map\TableMap;
use Symfony\Component\Serializer\Annotation\Groups;
use Thelia\Api\Bridge\Propel\Filter\OrderFilter;
use Thelia\Api\Bridge\Propel\Filter\SearchFilter;
use Thelia\Api\Resource\AbstractTranslatableResource;
use Thelia\Api\Resource\I18nCollection;
use TheliaLibrary\Model\Map\LibraryTagTableMap;

#[ApiResource(
    operations: [
        new Post(uriTemplate: '/admin/library_tags'),
        new GetCollection(uriTemplate: '/admin/library_tags'),
        new Get(
            uriTemplate: '/admin/library_tags/{id}',
            normalizationContext: ['groups' => [self::GROUP_ADMIN_READ, self::GROUP_ADMIN_READ_SINGLE]],
        ),
        new Patch(uriTemplate: '/admin/library_tags/{id}'),
        new Delete(uriTemplate: '/admin/library_tags/{id}'),
    ],
    normalizationContext: ['groups' => [self::GROUP_ADMIN_READ]],
    denormalizationContext: ['groups' => [self::GROUP_ADMIN_WRITE]],
)]
#[ApiResource(
    operations: [
        new GetCollection(uriTemplate: '/front/library_tags'),
        new Get(
            uriTemplate: '/front/library_tags/{id}',
            normalizationContext: ['groups' => [self::GROUP_FRONT_READ, self::GROUP_FRONT_READ_SINGLE]],
        ),
    ],
    normalizationContext: ['groups' => [self::GROUP_FRONT_READ]],
)]
#[ApiFilter(
    filterClass: SearchFilter::class,
    properties: [
        'id',
        'colorCode',
        'title' => 'partial',
    ],
)]
#[ApiFilter(
    filterClass: OrderFilter::class,
    properties: [
        'id',
    ],
)]
class LibraryTag extends AbstractTranslatableResource
{
    public const GROUP_ADMIN_READ = 'admin:library_tag:read';
    public const GROUP_ADMIN_READ_SINGLE = 'admin:library_tag:read:single';
    public const GROUP_ADMIN_WRITE = 'admin:library_tag:write';
    public const GROUP_FRONT_READ = 'front:library_tag:read';
    public const GROUP_FRONT_READ_SINGLE = 'front:library_tag:read:single';

    #[Groups([
        self::GROUP_ADMIN_READ,
        self::GROUP_FRONT_READ,
        LibraryImageTag::GROUP_ADMIN_READ,
    ])]
    public ?int $id = null;

    #[Groups([
        self::GROUP_ADMIN_READ,
        self::GROUP_ADMIN_WRITE,
        self::GROUP_FRONT_READ,
        LibraryImageTag::GROUP_ADMIN_READ,
    ])]
    public ?string $colorCode = null;

    #[Groups([
        self::GROUP_ADMIN_READ,
        self::GROUP_ADMIN_WRITE,
        self::GROUP_FRONT_READ,
        LibraryImageTag::GROUP_ADMIN_READ,
    ])]
    public I18nCollection $i18ns;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(?int $id): self
    {
        $this->id = $id;

        return $this;
    }

    public function getColorCode(): ?string
    {
        return $this->colorCode;
    }

    public function setColorCode(?string $colorCode): self
    {
        $this->colorCode = $colorCode;

        return $this;
    }

    public static function getPropelRelatedTableMap(): ?TableMap
    {
        return new LibraryTagTableMap();
    }

    public static function getI18nResourceClass(): string
    {
        return LibraryTagI18n::class;
    }
}
