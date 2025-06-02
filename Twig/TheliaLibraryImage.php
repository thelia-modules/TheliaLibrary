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

namespace TheliaLibrary\Twig;

use Symfony\UX\LiveComponent\DefaultActionTrait;
use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;
use Symfony\UX\TwigComponent\Attribute\ExposeInTemplate;
use TheliaLibrary\Service\ImagePluginService;

#[AsTwigComponent(name: 'TheliaLibraryImage', template: '@TheliaLibraryModule/components/TheliaLibraryImage.html.twig')]
class TheliaLibraryImage
{
    use DefaultActionTrait;

    public array $params = [];

    #[ExposeInTemplate()]
    public string $renderHtmlImages = '';

    public function __construct(private ImagePluginService $imagePluginService)
    {
    }

    public function getRenderHtmlImages(): string
    {
        return $this->imagePluginService->getImages($this->params);
    }
}
