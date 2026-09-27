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

namespace TheliaLibrary\Service;

use Symfony\Component\Filesystem\Filesystem;

/**
 * The LiipImagine configuration the module writes into the project.
 *
 * Up to 2.0.9 the template set the cache resolver web root to web/, the Thelia 2 one: on Thelia 3
 * the web root is public/, so the generated thumbnails were written where nothing serves them.
 * The template no longer sets it, which leaves LiipImagine on its own default, public/. A file
 * still holding that former value loses the line; any other web root was chosen by the project
 * and is left alone.
 */
final readonly class LiipImagineConfigFile
{
    private const LEGACY_WEB_ROOT_LINE = '/^[ \t]*web_root:[ \t]*"%kernel\.project_dir%\/web"[ \t]*\R/m';

    public function __construct(
        private string $target,
        private string $template = __DIR__.'/../Config/liip_imagine_thelia.yaml.example',
    ) {
    }

    public function install(): void
    {
        $filesystem = new Filesystem();

        if (!$filesystem->exists($this->target)) {
            $filesystem->copy($this->template, $this->target);

            return;
        }

        $content = file_get_contents($this->target);

        if (false === $content) {
            return;
        }

        $fixed = preg_replace(self::LEGACY_WEB_ROOT_LINE, '', $content);

        if (null !== $fixed && $fixed !== $content) {
            $filesystem->dumpFile($this->target, $fixed);
        }
    }
}
