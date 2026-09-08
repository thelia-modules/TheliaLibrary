<?php

declare(strict_types=1);

/*
 * This file is part of the Thelia package.
 * http://www.thelia.net
 *
 * (c) OpenStudio <info@thelia.net>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TheliaLibrary\EventListeners;

use Symfony\Component\Console\ConsoleEvents;
use Symfony\Component\Console\Event\ConsoleCommandEvent;
use Symfony\Component\EventDispatcher\Attribute\AsEventListener;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use TheliaLibrary\Model\Event\LibraryItemImageEvent;
use TheliaLibrary\Service\LibraryItemImageMemo;

/**
 * Keeps {@see LibraryItemImageMemo} honest: the rows it holds never outlive a request or
 * a console command, and a write on an item image drops them at once.
 */
readonly class LibraryItemImageMemoListener
{
    #[AsEventListener(event: LibraryItemImageEvent::POST_SAVE)]
    #[AsEventListener(event: LibraryItemImageEvent::POST_DELETE)]
    public function onItemImageWrite(): void
    {
        LibraryItemImageMemo::reset();
    }

    #[AsEventListener(event: KernelEvents::REQUEST, priority: 4096)]
    public function onKernelRequest(RequestEvent $event): void
    {
        if ($event->isMainRequest()) {
            LibraryItemImageMemo::reset();
        }
    }

    #[AsEventListener(event: ConsoleEvents::COMMAND)]
    public function onConsoleCommand(ConsoleCommandEvent $event): void
    {
        LibraryItemImageMemo::reset();
    }
}
