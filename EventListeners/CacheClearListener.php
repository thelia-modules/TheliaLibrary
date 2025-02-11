<?php

namespace TheliaLibrary\EventListeners;

use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Thelia\Core\Event\Cache\CacheEvent;
use Thelia\Core\Event\TheliaEvents;
use Thelia\Model\ConfigQuery;

class CacheClearListener implements EventSubscriberInterface
{

    public function __construct(private EventDispatcherInterface $dispatcher)
    {
    }

    public static function getSubscribedEvents(): array
    {
        return [
            TheliaEvents::CACHE_CLEAR => ['deleteAllTheliaLibraryCachedImages'],
        ];
    }

    public function deleteAllTheliaLibraryCachedImages(CacheEvent $event) : void
    {
        $cachedPath = THELIA_WEB_DIR.ConfigQuery::read(
                search: 'image_cache_dir_from_web_root',
                default: 'cache'.DS.'images'
        );
        $cachedDirectory = THELIA_WEB_DIR.'legacy-image-library';
        if ($event->getDir() === $cachedPath && is_dir($cachedDirectory)) {
            $imageLibraryEvent = new CacheEvent($cachedDirectory);
            $this->dispatcher->dispatch(event: $imageLibraryEvent, eventName: TheliaEvents::CACHE_CLEAR);
        }
    }
}