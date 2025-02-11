<?php

namespace TheliaLibrary\EventListeners;

use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Thelia\Core\Event\Cache\CacheEvent;
use Thelia\Core\Event\File\FileCreateOrUpdateEvent;
use Thelia\Core\Event\TheliaEvents;

class UpdateImageListener implements EventSubscriberInterface
{
    public function __construct(private RequestStack $request, private EventDispatcherInterface $dispatcher)
    {
    }

    public static function getSubscribedEvents() : array
    {
        return [
            TheliaEvents::IMAGE_UPDATE => ['deleteTheliaLibraryCachedImage'],
        ];
    }

    public function deleteTheliaLibraryCachedImage(FileCreateOrUpdateEvent $event): void
    {
        $uri = $this->request->getCurrentRequest()?->getUri();
        if (!$uri){
            return;
        }
        $segments = explode('/', $uri);
        $index = array_search('type', $segments);
        if (!$index){
            return;
        }
        $type = $segments[$index + 1] ?? null;
        if (!$type){
            return;
        }
        $imageId = $event->getModel()->getId();
        $cachedDir = THELIA_WEB_DIR.'legacy-image-library'.DS.$type.'_image_'.$imageId;
        if (!is_dir($cachedDir)){
            return;
        }
        $imageLibraryEvent = new CacheEvent($cachedDir);
        $this->dispatcher->dispatch(event: $imageLibraryEvent, eventName: TheliaEvents::CACHE_CLEAR);
    }
}
