<?php

namespace TheliaLibrary\Service;

use Thelia\Model\ConfigQuery;

class ImagePluginService
{
    public const LIBRARY = "library";

    public function __construct(private ImageService $imageService)
    {
    }

    public function getImages(array $params): string
    {
        $imagesData = $this->imageService->getImages($params);

        $processedImgTag = '';

        foreach ($imagesData as $image) {
            $processedImgTag .= $this->getHtmlImageRender($image, $params);
        }

        if (isset($params['container'])) {
            $containerAttrs = $this->concatHtmlAttrs($params['container_attrs'] ?? []);

            $tag = $params['container'] ?? "div";

            return '<'.$tag.' '.$containerAttrs.'>'.$processedImgTag.'</'.$tag.'>';
        }

        return $processedImgTag;
    }

    private function getHtmlImageRender(array $image, array $params): string
    {
        $sources = $image['sources'];
        $data = $image['data'];
        $render = '';

        foreach ($sources as $source) {
            if ($source['breakpoint'] === "default" || count($sources) <= 1) {
                $params['alt'] = $params['alt'] ?? $data['title'] ?? ConfigQuery::read("store_name");

                $render .= $this->createImgTag($source, $params);
            } else {
                $render .= $this->createSourceTag($source);
            }
        }
        if ($this->needsWrapper($params, $sources)) {
            $wrapperAttrs = $this->concatHtmlAttrs($params['wrapper_attrs'] ?? []);

            $tag = $params['wrapper'] ?? "picture";

            $caption = isset($params['caption']) ? '<figcaption>'.$params['caption'].'</figcaption>' : '';

            return '<'.$tag.' '.$wrapperAttrs.'>'.$render.$caption.'</'.$tag.'>';
        }

        return $render;
    }

    private function concatHtmlAttrs(?array $htmlAttrs): string
    {
        $attrs = '';

        if (isset($htmlAttrs)) {
            foreach ($htmlAttrs as $attr => $val) {
                if ($val) {
                    // Values reach us from back-office content (image titles, captions):
                    // a raw quote would close the attribute and let an onerror= through.
                    $attrs = $attrs.' '.$this->escapeAttrName($attr).'="'.$this->escapeAttrValue($val).'"';
                }
            }
        }

        return $attrs;
    }

    private function escapeAttrName(string $attr): string
    {
        return preg_replace('/[^A-Za-z0-9_:.-]/', '', $attr);
    }

    private function escapeAttrValue(mixed $val): string
    {
        return htmlspecialchars((string) $val, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
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

        // An alt or title explicitly passed in img_attrs wins over the computed
        // fallback, otherwise every image ends up labelled with the store name.
        $attrs = array_replace(
            ['alt' => $params['alt'] ?? '', 'title' => $params['alt'] ?? ''],
            $params['img_attrs'] ?? []
        );

        if ('' !== $imgStyle) {
            $attrs['style'] = $imgStyle;
        }

        return '<img src="'.$this->escapeAttrValue($image['url']).'" '.$this->concatHtmlAttrs($attrs).'/>';
    }

    private function createSourceTag(array $image): string
    {
        return '<source srcset="'.$this->escapeAttrValue($image['url']).'" media="(min-width:'.$this->escapeAttrValue($image['breakpoint']).')"/>';
    }

    private function needsWrapper(array $params, array $sources): bool
    {
        return (isset($params['wrapper']) && $params['wrapper']) || count($sources) > 1;
    }
}
