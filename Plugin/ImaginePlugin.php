<?php

namespace TheliaLibrary\Plugin;

use Liip\ImagineBundle\Imagine\Cache\CacheManager;
use Thelia\Model\ConfigQuery;
use TheliaLibrary\Service\ImagePluginService;
use TheliaLibrary\Service\ImageService;
use TheliaSmarty\Template\AbstractSmartyPlugin;
use TheliaSmarty\Template\SmartyPluginDescriptor;

class ImaginePlugin extends AbstractSmartyPlugin
{
    public function __construct(private readonly CacheManager $cacheManager, private ImagePluginService $imagePluginService, private ImageService $imageService)
    {
    }

    public function getPluginDescriptors()
    {
        return [
            new SmartyPluginDescriptor("function", "imagine_filter", $this, "handleImagineFilter"),
            new SmartyPluginDescriptor("function", "getImage", $this, "getImage"),
            new SmartyPluginDescriptor("function", "getImageData", $this, "getImageData")
        ];
    }

    public function handleImagineFilter($params): string
    {
        $path = null;

        if (array_key_exists('source', $params) && array_key_exists('source_id', $params)) {
            $imageData = $this->imageService->getImageDataWithType($params['source'], $params['source_id'], $params['position'] ?? null);
            $path = $imageData['path'];
        }

        if (array_key_exists('path', $params)) {
            $path = $params['path'];
        }

        return $this->cacheManager->getBrowserPath(
            $path,
            $params['filter'] ?? null,
            $params['runtimeConfig'] ?? [],
            $params['resolver'] ?? null
        );
    }

    public function getImageData(array $params): array
    {
        return $this->imageService->getImage($params);
    }

    public function getImage(array $params): string
    {
        return $this->imagePluginService->getImage($params);
    }
}
