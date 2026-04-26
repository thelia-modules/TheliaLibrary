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
use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use Propel\Runtime\Map\TableMap;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;
use Thelia\Api\Bridge\Propel\Filter\OrderFilter;
use Thelia\Api\Bridge\Propel\Filter\SearchFilter;
use Thelia\Api\Resource\AbstractTranslatableResource;
use Thelia\Api\Resource\I18nCollection;
use TheliaLibrary\Api\Controller\LibraryImageReplaceController;
use TheliaLibrary\Api\Controller\LibraryImageUploadController;
use TheliaLibrary\Api\State\LibraryImageDeleteProcessor;
use TheliaLibrary\Model\Map\LibraryImageTableMap;

#[ApiResource(
    operations: [
        new Post(
            uriTemplate: '/admin/library_images',
            inputFormats: ['multipart' => ['multipart/form-data']],
            controller: LibraryImageUploadController::class,
            normalizationContext: ['groups' => [self::GROUP_ADMIN_READ, self::GROUP_ADMIN_READ_SINGLE]],
            denormalizationContext: ['groups' => [self::GROUP_ADMIN_WRITE]],
            deserialize: false,
            validate: false,
            write: false,
        ),
        new GetCollection(uriTemplate: '/admin/library_images'),
        new Get(
            uriTemplate: '/admin/library_images/{id}',
            normalizationContext: ['groups' => [self::GROUP_ADMIN_READ, self::GROUP_ADMIN_READ_SINGLE]],
        ),
        new Patch(uriTemplate: '/admin/library_images/{id}'),
        new Delete(
            uriTemplate: '/admin/library_images/{id}',
            processor: LibraryImageDeleteProcessor::class,
        ),
        new Post(
            uriTemplate: '/admin/library_images/{id}/replace',
            inputFormats: ['multipart' => ['multipart/form-data']],
            controller: LibraryImageReplaceController::class,
            normalizationContext: ['groups' => [self::GROUP_ADMIN_READ, self::GROUP_ADMIN_READ_SINGLE]],
            denormalizationContext: ['groups' => [self::GROUP_ADMIN_WRITE]],
            deserialize: false,
            validate: false,
            read: false,
            write: false,
        ),
    ],
    normalizationContext: ['groups' => [self::GROUP_ADMIN_READ]],
    denormalizationContext: ['groups' => [self::GROUP_ADMIN_WRITE]],
)]
#[ApiResource(
    operations: [
        new GetCollection(uriTemplate: '/front/library_images'),
        new Get(
            uriTemplate: '/front/library_images/{id}',
            normalizationContext: ['groups' => [self::GROUP_FRONT_READ, self::GROUP_FRONT_READ_SINGLE]],
        ),
    ],
    normalizationContext: ['groups' => [self::GROUP_FRONT_READ]],
)]
#[ApiFilter(
    filterClass: SearchFilter::class,
    properties: [
        'id',
        'title' => 'partial',
    ],
)]
#[ApiFilter(
    filterClass: OrderFilter::class,
    properties: [
        'id',
    ],
)]
class LibraryImage extends AbstractTranslatableResource
{
    public const GROUP_ADMIN_READ = 'admin:library_image:read';
    public const GROUP_ADMIN_READ_SINGLE = 'admin:library_image:read:single';
    public const GROUP_ADMIN_WRITE = 'admin:library_image:write';
    public const GROUP_FRONT_READ = 'front:library_image:read';
    public const GROUP_FRONT_READ_SINGLE = 'front:library_image:read:single';

    #[Groups([self::GROUP_ADMIN_READ, self::GROUP_FRONT_READ])]
    public ?int $id = null;

    #[ApiProperty(
        openapiContext: [
            'type' => 'string',
            'format' => 'binary',
        ],
    )]
    #[Assert\Image(mimeTypes: [
        'image/bmp',
        'image/gif',
        'image/jpeg',
        'image/png',
        'image/webp',
    ])]
    public ?UploadedFile $image = null;

    #[Groups([
        self::GROUP_ADMIN_READ,
        self::GROUP_ADMIN_WRITE,
        self::GROUP_FRONT_READ,
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

    public function getImage(): ?UploadedFile
    {
        return $this->image;
    }

    public function setImage(?UploadedFile $image): self
    {
        $this->image = $image;

        return $this;
    }

    public static function getPropelRelatedTableMap(): ?TableMap
    {
        return new LibraryImageTableMap();
    }

    public static function getI18nResourceClass(): string
    {
        return LibraryImageI18n::class;
    }
}
