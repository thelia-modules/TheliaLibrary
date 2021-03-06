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
use OpenApi\Constraint as Constraint;
use OpenApi\Model\Api\BaseApiModel;
use OpenApi\Model\Api\ModelFactory;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;
use Thelia\TaxEngine\TaxEngine;
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
     * @var LibraryImageService
     */
    protected $libraryImageService;

    public function __construct(
        ModelFactory $modelFactory,
        RequestStack $requestStack,
        TaxEngine $taxEngine,
        EventDispatcherInterface $dispatcher,
        LibraryImageService $libraryImageService
    ) {
        parent::__construct($modelFactory, $requestStack, $taxEngine, $dispatcher);
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

    protected function getTheliaModel($propelModelName = null)
    {
        return parent::getTheliaModel(\TheliaLibrary\Model\LibraryImage::class);
    }
}
