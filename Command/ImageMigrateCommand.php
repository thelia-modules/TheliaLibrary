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

namespace TheliaLibrary\Command;

use Propel\Runtime\ActiveQuery\ModelCriteria;
use Propel\Runtime\ActiveRecord\ActiveRecordInterface;
use Symfony\Component\Console\Helper\ProgressBar;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\File\File;
use Thelia\Command\ContainerAwareCommand;
use Thelia\Model\ConfigQuery;
use Thelia\Model\FolderImage;
use Thelia\Model\LangQuery;
use TheliaLibrary\Service\LibraryItemImageService;

class ImageMigrateCommand extends ContainerAwareCommand
{
    protected LibraryItemImageService $libraryItemImageService;

    public function __construct(LibraryItemImageService $libraryItemImageService)
    {
        parent::__construct();
        $this->libraryItemImageService = $libraryItemImageService;
    }

    protected function configure(): void
    {
        $this
            ->setName('library:image:migrate')
            ->setDescription('Reset all password and send reset link')
            ->addOption(
                'itemTypes',
                null,
                InputOption::VALUE_OPTIONAL | InputOption::VALUE_IS_ARRAY,
                'Only image of this item type will be migrated',
                []
            );
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $filesystem = new Filesystem();
        $itemTypes = $input->getOption('itemTypes');

        $baseSourceFilePath = ConfigQuery::read('images_library_path');
        if ($baseSourceFilePath === null) {
            $baseSourceFilePath = THELIA_LOCAL_DIR.'media'.DS.'images';
        } else {
            $baseSourceFilePath = THELIA_ROOT.$baseSourceFilePath;
        }

        $langs = LangQuery::create()
            ->find();

        foreach ($itemTypes as $itemType) {
            $output->writeln('<bg=blue>============================================================= </>');
            $output->writeln("<fg=blue>Image migration for item type $itemType started</>");

            /** @var ModelCriteria $queryClass */
            $queryClass = 'Thelia\\Model\\'.ucfirst($itemType).'ImageQuery';

            /** @var ModelCriteria $query */
            $images = ($queryClass::create())->find();
            $output->writeln(\count($images)." image found for type $itemType");
            $progressBar = new ProgressBar($output, \count($images));
            $progressBar->start();

            $itemIdGetter = 'get'.ucfirst($itemType).'Id';
            foreach ($images as $image) {
                $tmpFilePath = '/tmp/image/'.$image->getFile();
                $filesystem->copy($baseSourceFilePath.DS.$itemType.DS.$image->getFile(), $tmpFilePath);
                $uploadedFile = new File(
                    $tmpFilePath
                );

                $itemImage = $this->libraryItemImageService->createAndAssociateImage(
                    $uploadedFile,
                    $image->getTitle(),
                    $image->getLocale(),
                    $itemType,
                    $image->$itemIdGetter(),
                    'thelia',
                    $image->getVisible(),
                    $image->getPosition()
                );
                $libraryImage = $itemImage->getLibraryImage();
                $libraryFilePath = $libraryImage->getFileName();


                foreach ($langs as $lang) {
                    $image->setLocale($lang->getLocale());

                    if (empty($image->getTitle())) {
                        continue;
                    }

                    $libraryImage->setLocale($lang->getLocale())
                        ->setTitle($image->getTitle())
                        ->setFileName($libraryFilePath)
                        ->save();
                }
                $progressBar->advance();
            }
            $progressBar->finish();
            $output->writeln("");
            $output->writeln("<info>Image migration for item type $itemType ended</info>");
            $output->writeln('<bg=blue>============================================================= </>');
        }

        return 1;
    }
}
