<?php

namespace TheliaLibrary\Plugin;

use Liip\ImagineBundle\Imagine\Cache\CacheManager;
use TheliaLibrary\Service\ImageService;
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
            new SmartyPluginDescriptor("function", "getImage", $this, "getImage"),
            new SmartyPluginDescriptor("function", "getImageData", $this, "getImageData")
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


    public function getImageData(array $params): array
    {
        return $this->imageService->getImage($params);
    }

    public function getImage(array $params): string
    {
        $images = $this->imageService->getImage($params);

        if ((empty($images))) {
            $images[] = [
                'url' => $params['placeholder'],
                'breakpoint' => 'default'
            ];
        }

        $processedImgTag = '';

        foreach ($images as $image) {
            if ($image['breakpoint'] === "default" || count($images) <= 1) {
                $processedImgTag .= $this->createImgTag($image, $params);
            } else {
                $processedImgTag .= $this->createSourceTag($image);
            }
        }

        if ($this->needsWrapper($params, $images)) {
            $wrapperAttrs = $this->concatHtmlAttrs($params['wrapper_attrs'] ?? []);

            $tag = $params['wrapper'] ?? "picture";

            $caption = isset($params['caption']) ? '<figcaption>'.$params['caption'].'</figcaption>' : '';

            return '<'.$tag.' '.$wrapperAttrs.'>'.$processedImgTag.$caption.'</'.$tag.'>';
        }

        return $processedImgTag;
    }

    private function concatHtmlAttrs(?array $htmlAttrs): string
    {
        $attrs = '';

        if (isset($htmlAttrs)) {
            foreach ($htmlAttrs as $attr => $val) {
                if ($val) {
                    $attrs = $attrs.' '.$attr.'="'.$val.'"';
                }
            }
        }

        return $attrs;
    }

    private function concatStyle(?array $htmlStyle): string
    {
        $style = '';

        if (isset($htmlStyle)) {
            foreach ($htmlStyle as $prop => $val) {
                if ($val) {
                    $style = $style.$prop.':'.$val.';';
                }
            }
        }

        return $style;
    }

    private function createImgTag(array $image, array $params): string
    {
        $imgStyle = isset($params['img_style']) ? $this->concatStyle($params['img_style']) : '';

        $imgAttrs = $this->concatHtmlAttrs(array_replace(
            $params['img_attrs'] ?? [],
            ['alt' => $params['alt'] ?? ''],
            ['title' => $params['alt'] ?? ''],
            ['style' => $imgStyle]
        ));

        return '<img src="'.$image['url'].'" '.$imgAttrs.'/>';
    }

    private function createSourceTag(array $image): string
    {
        return '<source srcset="'.$image['url'].'" media="(min-width:'.$image['breakpoint'].')"/>';
    }

    private function needsWrapper(array $params, array $images): bool
    {
        return (isset($params['wrapper']) && $params['wrapper']) || count($images) > 1;
    }
}
