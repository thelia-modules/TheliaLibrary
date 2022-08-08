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

class BackHook extends BaseHook
{
    public function onItemEdition(HookRenderEvent $event): void
    {
        if (!$this->getRequest()->get('force_legacy_imagemanager')) {
            $content = $this->render('item-edition.html', [
                'itemType' => $event->getArgument('itemType'),
                'itemId' => $event->getArgument('itemId'),
            ]);

            $event->add($content);
        }
    }
}
