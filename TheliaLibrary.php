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

namespace TheliaLibrary;

use phpDocumentor\Reflection\Types\Self_;
use Propel\Runtime\Connection\ConnectionInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;
use Symfony\Component\DependencyInjection\Loader\Configurator\ServicesConfigurator;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Finder\Finder;
use Thelia\Install\Database;
use Thelia\Module\BaseModule;

class TheliaLibrary extends BaseModule
{

    public function __construct()
    {
    }

    /** @var string */
    public const DOMAIN_NAME = 'thelialibrary';

    public const DEFAULT_IMAGE_DIRECTORY = THELIA_LOCAL_DIR.'library/images/';

    public const IMAGINE_CONFIG_FILE = THELIA_ROOT.'config/packages/liip_imagine_thelia.yaml';

    public function preActivation(ConnectionInterface $con = null): bool
    {
        if (!$this->getConfigValue('is_initialized', false)) {
            $database = new Database($con);

            $database->insertSql(null, [__DIR__.'/Config/TheliaMain.sql']);

            $this->setConfigValue('is_initialized', true);
        }

        $fs = new Filesystem();
        if (!$fs->exists(self::IMAGINE_CONFIG_FILE)) {
            $fs->copy(THELIA_MODULE_DIR.'TheliaLibrary/Config/liip_imagine_thelia.yaml.example', self::IMAGINE_CONFIG_FILE);
        }

        return true;
    }

    /**
     * Execute sql files in Config/update/ folder named with module version (ex: 1.0.1.sql).
     *
     * @param $currentVersion
     * @param $newVersion
     */
    public function update($currentVersion, $newVersion, ConnectionInterface $con = null): void
    {
        if (file_exists(__DIR__.DS.'Config'.DS.'update')) {
            $finder = Finder::create()
                ->name('*.sql')
                ->depth(0)
                ->sortByName()
                ->in(__DIR__.DS.'Config'.DS.'update');

            $database = new Database($con);

            /** @var \SplFileInfo $file */
            foreach ($finder as $file) {
                if (version_compare($currentVersion, $file->getBasename('.sql'), '<')) {
                    $database->insertSql(null, [$file->getPathname()]);
                }
            }
        }

        $fs = new Filesystem();
        if (!$fs->exists(self::IMAGINE_CONFIG_FILE)) {
            $fs->copy(THELIA_MODULE_DIR.'TheliaLibrary/Config/liip_imagine_thelia.yaml.example', self::IMAGINE_CONFIG_FILE);
        }
    }

    public static function getImageDirectory(): string
    {
        return self::getConfigValue('image_directory', self::DEFAULT_IMAGE_DIRECTORY);
    }

    /*
     * You may now override BaseModuleInterface methods, such as:
     * install, destroy, preActivation, postActivation, preDeactivation, postDeactivation
     *
     * Have fun !
     */

    /**
     * Defines how services are loaded in your modules.
     */
    public static function configureServices(ServicesConfigurator $servicesConfigurator): void
    {
        $servicesConfigurator->load(self::getModuleCode().'\\', __DIR__)
            ->exclude([THELIA_MODULE_DIR.ucfirst(self::getModuleCode()).'/I18n/*'])
            ->autowire(true)
            ->autoconfigure(true);
    }
}
