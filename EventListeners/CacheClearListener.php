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

    public function deleteAllTheliaLibraryCachedImages(CacheEvent $event): void
    {
        $cachedPath = THELIA_WEB_DIR . ConfigQuery::read(
                search: 'image_cache_dir_from_web_root',
                default: 'cache' . DS . 'images'
            );
        $cachedDirectoryLegacy = THELIA_WEB_DIR . 'legacy-image-library';
        $cachedDirectoryLibrary = THELIA_WEB_DIR . 'image-library';
        if ($event->getDir() !== $cachedPath) {
            return;
        }
        if (is_dir($cachedDirectoryLegacy)) {
            $imageLibraryEventLegacy = new CacheEvent($cachedDirectoryLegacy);
            $this->dispatcher->dispatch(event: $imageLibraryEventLegacy, eventName: TheliaEvents::CACHE_CLEAR);
        }
        if (is_dir($cachedDirectoryLibrary)) {
            $imageLibraryEventLibrary = new CacheEvent($cachedDirectoryLibrary);
            $this->dispatcher->dispatch(event: $imageLibraryEventLibrary, eventName: TheliaEvents::CACHE_CLEAR);
        }
    }
}