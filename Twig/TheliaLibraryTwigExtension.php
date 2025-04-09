<?php

namespace TheliaLibrary\Twig;

use TheliaLibrary\Service\ImagePluginService;
use TheliaLibrary\Service\ImageService;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class TheliaLibraryTwigExtension extends AbstractExtension
{
    public function __construct(private ImageService $imageService, private ImagePluginService $imagePluginService)
    {
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('getImageData', [$this, 'getImageData']),
            new TwigFunction('getImages', [$this, 'getImages']),
        ];
    }

    public function getImageData(array $params): array
    {
        return $this->imageService->getImage($params);
    }

    public function getImages(array $data)
    {
        return $this->imagePluginService->getImage($data);
    }
}
