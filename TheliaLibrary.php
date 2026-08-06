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

use Propel\Runtime\Connection\ConnectionInterface;
use Propel\Runtime\Propel;
use Symfony\Component\DependencyInjection\Loader\Configurator\ServicesConfigurator;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Finder\Finder;
use Thelia\Core\Install\Database;
use Thelia\Module\BaseModule;

class TheliaLibrary extends BaseModule
{
    /** @var string */
    public const DOMAIN_NAME = 'thelialibrary';

    public const DEFAULT_IMAGE_DIRECTORY = THELIA_LOCAL_DIR.'library/images/';

    public const IMAGINE_CONFIG_FILE = THELIA_ROOT.'config/packages/liip_imagine_thelia.yaml';

    public function preActivation(?ConnectionInterface $con = null): bool
    {
        if (!$this->getConfigValue('is_initialized', false)) {
            $database = new Database($con);

            $database->insertSql(null, [__DIR__.'/Config/TheliaMain.sql']);

            $this->setConfigValue('is_initialized', true);
        }

        $fs = new Filesystem();
        if (!$fs->exists(THELIA_ROOT.'local/media/images')){
            $fs->mkdir(THELIA_ROOT.'local/media/images', 0755);
        }
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
    public function update($currentVersion, $newVersion, ?ConnectionInterface $con = null): void
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

        $this->moveFileNamesOutOfTranslations($con);

        $fs = new Filesystem();
        if (!$fs->exists(self::IMAGINE_CONFIG_FILE)) {
            $fs->copy(THELIA_MODULE_DIR.'TheliaLibrary/Config/liip_imagine_thelia.yaml.example', self::IMAGINE_CONFIG_FILE);
        }
    }

    /**
     * Carries stored file names over to library_image.file_name (1.4.0).
     *
     * Written here rather than in the update SQL because the statement reads a
     * column that a fresh install no longer creates: as an SQL file it could
     * only be replayed by chance, while here the column is looked up first.
     * The legacy column is left untouched, so the migration can be checked
     * after the fact and re-run if it was interrupted.
     */
    private function moveFileNamesOutOfTranslations(?ConnectionInterface $con = null): void
    {
        $con = $con ?? Propel::getConnection('TheliaMain');

        $legacyColumn = $con->prepare(
            'SELECT COUNT(*) FROM information_schema.columns
             WHERE table_schema = DATABASE() AND table_name = :table AND column_name = :column'
        );
        $legacyColumn->execute(['table' => 'library_image_i18n', 'column' => 'file_name']);

        if (1 > (int) $legacyColumn->fetchColumn()) {
            return;
        }

        $con->exec(
            'UPDATE `library_image` `image`
                SET `file_name` = (
                    SELECT `translation`.`file_name`
                    FROM `library_image_i18n` `translation`
                    WHERE `translation`.`id` = `image`.`id`
                      AND `translation`.`file_name` IS NOT NULL
                      AND `translation`.`file_name` <> \'\'
                    ORDER BY `translation`.`locale`
                    LIMIT 1
                )
                WHERE `image`.`file_name` IS NULL'
        );
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
            ->exclude([__DIR__.'/I18n/*'])
            ->autowire(true)
            ->autoconfigure(true);
    }
}
