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
    public static function getSubscribedHooks(): array
    {
        return [
            'thelia.blocks.plugins' => [
                ['type' => 'back', 'method' => 'onTheliaBlocksPlugins'],
            ],
            'thelia.blocks.plugincss' => [
                ['type' => 'back', 'method' => 'onTheliaBlocksPluginCss'],
            ],
        ];
    }

    public function onTheliaBlocksPlugins(HookRenderEvent $event): void
    {
        $event->add($this->render('tb-plugin/import-plugin.html'));
    }

    public function onTheliaBlocksPluginCss(HookRenderEvent $event): void
    {
        $event->add($this->render('tb-plugin/import-styles.html'));
    }

    public function onItemEdition(HookRenderEvent $event): void
    {
        $request = $this->getRequest();
        $forceLegacy = $request->request->get('force_legacy_imagemanager')
            ?? $request->query->get('force_legacy_imagemanager');

        if (!$forceLegacy) {
            $content = $this->render('item-edition.html', [
                'itemType' => $event->getArgument('itemType'),
                'itemId' => $event->getArgument('itemId'),
            ]);

            $event->add($content);
        }
    }
}
