<?php

/*
 * This file is part of the Thelia package.
 * http://www.thelia.net
 *
 * (c) OpenStudio <info@thelia.net>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TheliaLibrary\Model\Api;

use OpenApi\Annotations as OA;
use OpenApi\Constraint;
use OpenApi\Model\Api\BaseApiModel;
use OpenApi\Model\Api\ModelFactory;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;
use Thelia\TaxEngine\TaxEngine;
use TheliaLibrary\Model\LibraryImageTagQuery;
use TheliaLibrary\Model\LibraryTagQuery;
use TheliaLibrary\Service\LibraryImageService;

/**
 * Class LibraryImage.
 *
 * @OA\Schema(
 *     schema="LibraryImage",
 *     title="LibraryImage",
 * )
 */
class LibraryImage extends BaseApiModel
{
    /**
     * @var int
     * @OA\Property(
     *    type="integer",
     * )
     * @Constraint\NotBlank(groups={"read"})
     */
    protected $id;

    /**
     * @var string
     * @OA\Property(
     *     type="string",
     * )
     */
    protected $title;

    /**
     * @var string
     * @OA\Property(
     *     type="string",
     * )
     */
    protected $fileName;

    /**
     * @var string
     * @OA\Property(
     *     type="string",
     * )
     */
    protected $url = null;

    protected $width = null;
    protected $height = null;

    /**
     * @var array
     * @OA\Property(
     *     readOnly=true,
     *    type="array",
     *     @OA\Items(type="string")
     * )
     */
    protected $tags = [];

    /**
     * @var LibraryImageService
     */
    protected $libraryImageService;

    public function __construct(
        ModelFactory $modelFactory,
        RequestStack $requestStack,
        TaxEngine $taxEngine,
        EventDispatcherInterface $dispatcher,
        LibraryImageService $libraryImageService,
        ValidatorInterface $validator
    ) {
        parent::__construct($modelFactory, $requestStack, $taxEngine, $dispatcher, $validator);
        $this->libraryImageService = $libraryImageService;
    }

    public function createOrUpdateFromData($data, $locale = null): void
    {
        parent::createOrUpdateFromData($data, $locale);
    }

    /**
     * @return int
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;
    }

    /**
     * @return string
     */
    public function getTitle(): ?string
    {
        return $this->title;
    }

    /**
     * @param string $title
     */
    public function setTitle(?string $title): self
    {
        $this->title = $title;

        return $this;
    }

    /**
     * @return string
     */
    public function getFileName(): ?string
    {
        return $this->fileName;
    }

    public function setFileName(?string $fileName = null): self
    {
        $this->fileName = $fileName;

        return $this;
    }

    /**
     * @return string
     */
    public function getUrl(): ?string
    {
        return $this->libraryImageService->getImagePublicUrl($this->getTheliaModel(), $this->width, $this->height);
    }

    /**
     * @param null $width
     */
    public function setWidth($width): void
    {
        $this->width = $width;
    }

    /**
     * @param null $height
     */
    public function setHeight($height): void
    {
        $this->height = $height;
    }

    public function getTags(): array
    {
        return $this->tags;
    }

    /**
     * @param array $tags
     */
    public function setTags($tags): void
    {
        $this->tags = $tags;
    }

    protected function getTheliaModel($propelModelName = null)
    {
        return parent::getTheliaModel(\TheliaLibrary\Model\LibraryImage::class);
    }

    public function createFromTheliaModel($theliaModel, $locale = null): void
    {
        parent::createFromTheliaModel($theliaModel, $locale);

        $tags = array_map(
            function ($item) use ($locale) {
                $query = LibraryTagQuery::create()
                    ->filterById($item['TagId'])
                    ->useI18nQuery()
                    ->filterByLocale($locale)
                    ->filterById($item['TagId'])
                    ->endUse()
                    ->with('LibraryTagI18n');

                $tag = $query->find()->getFirst();
                $association = LibraryImageTagQuery::create()->filterByImageId($this->getId())->filterByTagId($tag->getId())->findOne();

                return [
                    'tag' => [
                        'id' => $tag->getId(),
                        'title' => $tag->getTitle(),
                        'colorCode' => $tag->getColorCode(),
                    ],
                    'imageTag' => [
                        'id' => $association->getId(),
                        'imageId' => $this->getId(),
                        'tagId' => $tag->getId(),
                    ],
                ];
            },
            LibraryImageTagQuery::create()
                ->filterByImageId($this->getId())
                ->find()
                ->toArray()
        );

        $this->setTags($tags);
    }
}
