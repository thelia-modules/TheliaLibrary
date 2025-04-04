<?php

namespace TheliaLibrary\Plugin;

use Liip\ImagineBundle\Imagine\Cache\CacheManager;
use Thelia\Model\ProductImageQuery;
use TheliaLibrary\Service\ImageService;
use TheliaLibrary\Service\LibraryImageService;
use TheliaSmarty\Template\AbstractSmartyPlugin;
use TheliaSmarty\Template\SmartyPluginDescriptor;

class ImaginePlugin extends AbstractSmartyPlugin
{
    public function __construct(private readonly CacheManager $cacheManager, private ImageService $imageService)
    {
    }

    public function getPluginDescriptors()
    {
        return [
            new SmartyPluginDescriptor("function", "imagine_filter", $this, "handleImagineFilter"),
            new SmartyPluginDescriptor("function", "getPictureTag", $this, "getPictureTag")
        ];
    }

    public function handleImagineFilter($params): string
    {
        $path = null;

        if (array_key_exists('source', $params) && array_key_exists('source_id', $params)) {
            $path = $this->getImagePathWithType($params['source'], $params['source_id']);
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

    public function getImages(array $params): array
    {
        $images =  $this->imageService->getProcessedImages($params['source_type'], $params['source_id'], $params['filters']);

        return $images;
    }

    public function getPictureTag(array $params): string
    {
        $images = $this->imageService->getProcessedImages($params['source_type'], $params['source_id'], $params['filters']);


        if ((empty($images))) {
            $images[] = [
                'url' => $params['placeholder'],
            ];
        }

        $processedImgTag = '';

        foreach ($images as $image) {

            if ($image['breakpoint'] === "default" || count($images) <= 1) {
                $imgAttrs = $this->concatHtmlAttrs(array_replace($params['img_attrs'], ['alt' => $params['alt'] ?? ''], ['title' => $params['alt'] ?? '']));
                $processedImgTag = $processedImgTag.'<img src="'.$image['url'].'" '.$imgAttrs.'/>';
            } else {
                $processedImgTag = $processedImgTag.'<source srcset="'.$image['url'].'" media="(min-width:'.$image['breakpoint'].')"/>';
            }
        }

        if ($params['wrapper'] || count($images) > 1) {
            $wrapperAttrs = $this->concatHtmlAttrs($params['wrapper_attrs']);

            $tag = $params['wrapper'] ?? "picture";

            return '<'.$tag.' '.$wrapperAttrs.'>'.$processedImgTag.'</'.$tag.'>';
        }

        return $processedImgTag;
    }


    private function concatHtmlAttrs(?array $htmlAttrs): string
    {
        $attrs = '';

        if (isset($htmlAttrs)) {
            foreach ($htmlAttrs as $attr => $val) {
                $attrs = $attrs.' '.$attr.'="'.$val.'"';
            }
        }

        return $attrs;
    }
}
