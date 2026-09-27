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

namespace TheliaLibrary\Tests;

use PHPUnit\Framework\TestCase;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Yaml\Yaml;
use TheliaLibrary\Service\LiipImagineConfigFile;

final class LiipImagineConfigFileTest extends TestCase
{
    private string $directory;

    private string $target;

    protected function setUp(): void
    {
        $this->directory = sys_get_temp_dir().'/thelia-library-'.bin2hex(random_bytes(6));
        $this->target = $this->directory.'/liip_imagine_thelia.yaml';
        (new Filesystem())->mkdir($this->directory);
    }

    protected function tearDown(): void
    {
        (new Filesystem())->remove($this->directory);
    }

    public function testAMissingFileIsWrittenWithoutWebRootSoLiipImagineKeepsPublic(): void
    {
        (new LiipImagineConfigFile($this->target))->install();

        $webPath = Yaml::parseFile($this->target)['liip_imagine']['resolvers']['default']['web_path'];
        self::assertSame(['cache_prefix' => 'cache/images'], $webPath);
    }

    public function testAFileHoldingTheFormerWebRootLosesThatLineOnly(): void
    {
        file_put_contents($this->target, <<<'YAML'
            liip_imagine:
                resolvers:
                    default:
                        web_path:
                            web_root: "%kernel.project_dir%/web"
                            cache_prefix: "cache/images"
                filter_sets:
                    my_thumb:
                        quality: 90

            YAML);

        (new LiipImagineConfigFile($this->target))->install();

        self::assertSame(<<<'YAML'
            liip_imagine:
                resolvers:
                    default:
                        web_path:
                            cache_prefix: "cache/images"
                filter_sets:
                    my_thumb:
                        quality: 90

            YAML, file_get_contents($this->target));
    }

    public function testACustomWebRootIsLeftUntouched(): void
    {
        $custom = <<<'YAML'
            liip_imagine:
                resolvers:
                    default:
                        web_path:
                            web_root: "%kernel.project_dir%/web/shop"
                            cache_prefix: "cache/images"

            YAML;
        file_put_contents($this->target, $custom);

        (new LiipImagineConfigFile($this->target))->install();

        self::assertSame($custom, file_get_contents($this->target));
    }
}
