<?php

namespace TheliaLibrary\Model\Api;

use OpenApi\Annotations as OA;
use OpenApi\Model\Api\BaseApiModel;
use OpenApi\Constraint as Constraint;
use OpenApi\Model\Api\ModelFactory;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;
use Thelia\TaxEngine\TaxEngine;
use TheliaLibrary\Service\LibraryImageService;

/**
 * Class LibraryImage
 * @package OpenApi\Model\Api
 * @OA\Schema(
 *     schema="LibraryImage",
 *     title="LibraryImage",
 * )
 */
class LibraryImage extends BaseApiModel
{
    /**
     * @var integer
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

        $this->generateUrl();
    }

    public function generateUrl($width = null, $height = null)
    {
        $this->url = $this->libraryImageService->getImageFilePublicUrl($this->getFileName(), $width, $height);
    }

    /**
     * @return int
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @param int $id
     * @return LibraryImage
     */
    public function setId(int $id): LibraryImage
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
     * @return LibraryImage
     */
    public function setTitle(?string $title): LibraryImage
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

    /**
     * @param string|null $fileName
     * @return LibraryImage
     */
    public function setFileName(?string $fileName = null): LibraryImage
    {
        $this->fileName = $fileName;
        return $this;
    }

    /**
     * @return string
     */
    public function getUrl(): ?string
    {
        return $this->url;
    }

    /**
     * @param string $url
     * @return LibraryImage
     */
    public function setUrl(?string $url): LibraryImage
    {
        $this->url = $url;
        return $this;
    }

    protected function getTheliaModel($propelModelName = null)
    {
        return parent::getTheliaModel(\TheliaLibrary\Model\LibraryImage::class);
    }
}
