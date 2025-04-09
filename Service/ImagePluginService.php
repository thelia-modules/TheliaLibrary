<?php

namespace TheliaLibrary\Service;

use Thelia\Model\ConfigQuery;

class ImagePluginService
{
    public const LIBRARY = "library";

    public function __construct(private ImageService $imageService)
    {
    }

    public function getImage(array $params): string
    {
        $imageData = $this->imageService->getImage($params);

        $images = $imageData['sources'];
        $i18n = $imageData['i18n'];
   
        if (empty($images) && !isset($params['placeholder'])) {
            return '';
        }

        if (empty($images)) {
            $images[] = [
                'url' => $params['placeholder'],
                'breakpoint' => 'default'
            ];
        }

        $processedImgTag = '';

        foreach ($images as $image) {
            if ($image['breakpoint'] === "default" || count($images) <= 1) {
                $params['alt'] = $params['alt'] ?? $i18n['title'] ?? ConfigQuery::read("store_name");

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
