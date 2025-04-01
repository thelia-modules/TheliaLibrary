<?php

namespace TheliaLibrary\Plugin;

use Liip\ImagineBundle\Imagine\Cache\CacheManager;
use Liip\ImagineBundle\Imagine\Filter\FilterManager;
use Liip\ImagineBundle\Service\FilterService;
use Thelia\Model\ProductImageQuery;
use TheliaSmarty\Template\AbstractSmartyPlugin;
use TheliaSmarty\Template\SmartyPluginDescriptor;

class ImaginePlugin extends AbstractSmartyPlugin
{
    public function __construct(private readonly CacheManager $cacheManager)
    {
    }

    public function getPluginDescriptors()
    {
        return [
            new SmartyPluginDescriptor("function", "imagine_filter", $this, "handleImagineFilter")
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

    private function getImagePathWithType($source, $sourceId)
    {
        /** @var ProductImageQuery $query */
        $query = $this->createSearchQuery($source, $sourceId);
        $image = $query
            ->orderByPosition()
            ->findOne();

        return $image?->getFile() ? '/'.$source.'/'.$image?->getFile() : '';
    }

    private function createSearchQuery($source, $sourceId)
    {
        $queryClass = 'Thelia\\Model\\'.ucfirst($source).'ImageQuery';
        $filterMethod = sprintf('filterBy%sId', $source);

        // xxxImageQuery::create()
        $method = new \ReflectionMethod($queryClass, 'create');
        $search = $method->invoke(null); // Static !

        // $query->filterByXXX(id)
        if (null !== $sourceId) {
            $method = new \ReflectionMethod($queryClass, $filterMethod);
            $method->invoke($search, $sourceId);
        }

        return $search;
    }

}