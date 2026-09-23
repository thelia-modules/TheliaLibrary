<?php

namespace TheliaLibrary\Service;

use Thelia\Model\ConfigQuery;

class ImagePluginService
{
    public const LIBRARY = "library";

    public function __construct(private ImageService $imageService)
    {
    }

    public function getImages(array $params): ?string
    {
        $imagesData = $this->imageService->getImages($params);

        if ($params['no_placeholder'] ?? false) {
            $hasUrl = false;
            foreach ($imagesData as $image) {
                foreach ($image['sources'] ?? [] as $source) {
                    if (!empty($source['url'])) {
                        $hasUrl = true;
                        break 2;
                    }
                }
            }

            if (!$hasUrl) {
                return null;
            }
        }

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

        $fallbackIndex = $this->fallbackSourceIndex($sources);

        foreach ($sources as $index => $source) {
            // The modern formats come first, so the browser takes the lightest one it
            // reads and never looks at the rest. Each carries the same media condition as
            // the source-format entry it precedes, so a breakpoint still selects a size
            // before a format is chosen.
            foreach ($source['variants'] ?? [] as $variant) {
                $render .= $this->createSourceTag($variant, $index === $fallbackIndex ? null : $source['breakpoint']);
            }

            if ($index === $fallbackIndex) {
                $params['alt'] = $params['alt'] ?? $data['title'] ?? ConfigQuery::read("store_name");

                $render .= $this->createImgTag($source, $params);
            } else {
                $render .= $this->createSourceTag($source, $source['breakpoint']);
            }
        }

        // <source> is only legal inside <picture>. A caller that asked for a <figure>
        // still gets its <figure>, with the picture nested where the browser expects it.
        if ($this->needsPicture($sources) && ($params['wrapper'] ?? 'picture') !== 'picture') {
            $render = '<picture>'.$render.'</picture>';
        }

        if ($this->needsWrapper($params, $sources)) {
            $wrapperAttrs = $this->concatHtmlAttrs($params['wrapper_attrs'] ?? []);

            $tag = $params['wrapper'] ?? "picture";

            $caption = isset($params['caption']) ? '<figcaption>'.$params['caption'].'</figcaption>' : '';

            return '<'.$tag.' '.$wrapperAttrs.'>'.$render.$caption.'</'.$tag.'>';
        }

        return $render;
    }

    /**
     * Which source carries the <img> every browser falls back to.
     *
     * The theme names it "default" and puts it last. A caller that names none still gets
     * an <img>: the last source is taken, because a <picture> without one renders
     * nothing at all.
     */
    private function fallbackSourceIndex(array $sources): ?int
    {
        if ([] === $sources) {
            return null;
        }

        foreach ($sources as $index => $source) {
            if (($source['breakpoint'] ?? null) === "default") {
                return $index;
            }
        }

        return array_key_last($sources);
    }

    /** Whether anything in this image has to be rendered as a <source>. */
    private function needsPicture(array $sources): bool
    {
        if (count($sources) > 1) {
            return true;
        }

        foreach ($sources as $source) {
            if ([] !== ($source['variants'] ?? [])) {
                return true;
            }
        }

        return false;
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

    private function createSourceTag(array $image, ?string $breakpoint = null): string
    {
        $type = isset($image['mime_type']) ? ' type="'.$this->escapeAttrValue($image['mime_type']).'"' : '';
        $media = null !== $breakpoint && "default" !== $breakpoint
            ? ' media="(min-width:'.$this->escapeAttrValue($breakpoint).')"'
            : '';

        return '<source srcset="'.$this->escapeAttrValue($image['url']).'"'.$type.$media.'/>';
    }

    private function needsWrapper(array $params, array $sources): bool
    {
        return (isset($params['wrapper']) && $params['wrapper']) || $this->needsPicture($sources);
    }
}
