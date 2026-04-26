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
use ApiPlatform\Metadata\Post;
use Propel\Runtime\Map\TableMap;
use Symfony\Component\Serializer\Annotation\Groups;
use Thelia\Api\Bridge\Propel\Attribute\Column;
use Thelia\Api\Bridge\Propel\Attribute\Relation;
use Thelia\Api\Bridge\Propel\Filter\SearchFilter;
use Thelia\Api\Resource\PropelResourceInterface;
use Thelia\Api\Resource\PropelResourceTrait;
use TheliaLibrary\Model\Map\LibraryImageTagTableMap;

#[ApiResource(
    operations: [
        new GetCollection(uriTemplate: '/admin/library_image_tags'),
        new Get(uriTemplate: '/admin/library_image_tags/{id}'),
        new Post(uriTemplate: '/admin/library_image_tags'),
        new Delete(uriTemplate: '/admin/library_image_tags/{id}'),
    ],
    normalizationContext: ['groups' => [self::GROUP_ADMIN_READ]],
    denormalizationContext: ['groups' => [self::GROUP_ADMIN_WRITE]],
)]
#[ApiFilter(
    filterClass: SearchFilter::class,
    properties: [
        'id',
        'libraryImage.id',
        'libraryTag.id',
    ],
)]
class LibraryImageTag implements PropelResourceInterface
{
    use PropelResourceTrait;

    public const GROUP_ADMIN_READ = 'admin:library_image_tag:read';
    public const GROUP_ADMIN_WRITE = 'admin:library_image_tag:write';

    #[Groups([self::GROUP_ADMIN_READ])]
    public ?int $id = null;

    #[Relation(targetResource: LibraryImage::class)]
    #[Column(propelSetter: 'setImageId')]
    #[Groups([self::GROUP_ADMIN_READ, self::GROUP_ADMIN_WRITE])]
    public ?LibraryImage $libraryImage = null;

    #[Relation(targetResource: LibraryTag::class)]
    #[Column(propelSetter: 'setTagId')]
    #[Groups([self::GROUP_ADMIN_READ, self::GROUP_ADMIN_WRITE])]
    public ?LibraryTag $libraryTag = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(?int $id): self
    {
        $this->id = $id;

        return $this;
    }

    public function getLibraryImage(): ?LibraryImage
    {
        return $this->libraryImage;
    }

    public function setLibraryImage(?LibraryImage $libraryImage): self
    {
        $this->libraryImage = $libraryImage;

        return $this;
    }

    public function getLibraryTag(): ?LibraryTag
    {
        return $this->libraryTag;
    }

    public function setLibraryTag(?LibraryTag $libraryTag): self
    {
        $this->libraryTag = $libraryTag;

        return $this;
    }

    public static function getPropelRelatedTableMap(): ?TableMap
    {
        return new LibraryImageTagTableMap();
    }
}
