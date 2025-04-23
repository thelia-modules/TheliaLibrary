<?php

namespace TheliaLibrary\Plugin;

use Liip\ImagineBundle\Imagine\Cache\CacheManager;
use Smarty_Internal_Template;
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
            new SmartyPluginDescriptor("function", "getImages", $this, "getImages"),
            new SmartyPluginDescriptor("function", "getImagesData", $this, "getImagesData")
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

    public function getImagesData(array $params, Smarty_Internal_Template $template): void
    {
        $images =  $this->imageService->getImages($params);
        $template->assign('images', $images);
    }

    public function getImages(array $params): string
    {
        return $this->imagePluginService->getImages($params);
    }
}
