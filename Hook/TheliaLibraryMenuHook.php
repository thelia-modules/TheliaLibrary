<?php

/*
 * This file is part of the Thelia package.
 * http://www.thelia.net
 *
 * (c) OpenStudio <info@thelia.net>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TheliaLibrary\Hook;

use Thelia\Core\Event\Hook\HookRenderEvent;
use Thelia\Core\Hook\BaseHook;

class TheliaLibraryMenuHook extends BaseHook
{
    public function onMainInTopMenuItems(HookRenderEvent $event): void
    {
        $event->add(
            $this->render('in-top-menu-items-page.html', [])
        );
    }
}
