<?php

namespace TheliaLibrary\Command;

use Propel\Runtime\ActiveQuery\ModelCriteria;
use Propel\Runtime\ActiveRecord\ActiveRecordInterface;
use Symfony\Component\Console\Helper\ProgressBar;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Thelia\Command\ContainerAwareCommand;
use Thelia\Model\ConfigQuery;
use Thelia\Model\FolderImage;
use TheliaLibrary\Service\LibraryImageService;
use TheliaLibrary\Service\LibraryItemImageService;

class ImageMigrateCommand extends ContainerAwareCommand
{
    protected $libraryItemImageService;

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
                InputOption::VALUE_OPTIONAL|InputOption::VALUE_IS_ARRAY,
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
            $baseSourceFilePath = THELIA_LOCAL_DIR . 'media' . DS . 'images';
        } else {
            $baseSourceFilePath = THELIA_ROOT . $baseSourceFilePath;
        }

        foreach ($itemTypes as $itemType) {
            $output->writeln("<bg=blue>============================================================= </>");
            $output->writeln("<fg=blue>Image migration for item type $itemType started</>");
            /** @var ModelCriteria $queryClass */
            $queryClass = "Thelia\\Model\\".ucfirst($itemType)."ImageQuery";

            /** @var ModelCriteria $query */
            $images = ($queryClass::create())->find();
            $output->writeln(count($images)." image found for type $itemType");
            $progressBar = new ProgressBar($output, count($images));
            $progressBar->start();

            $itemIdGetter = "get".ucfirst($itemType).'Id';
            /** @var FolderImage $image */
            foreach ($images as $image) {
                $tmpFilePath = "/tmp/image/".$image->getFile();
                $filesystem->copy($baseSourceFilePath.DS.$itemType.DS.$image->getFile(), $tmpFilePath);
                $uploadedFile = new File(
                    $tmpFilePath
                );

                $this->libraryItemImageService->createAndAssociateImage(
                    $uploadedFile,
                    $image->getTitle(),
                    $image->getLocale(),
                    $itemType,
                    $image->$itemIdGetter(),
                    'thelia',
                    $image->getVisible(),
                    $image->getPosition()
                );
                $progressBar->advance();
            }
            $progressBar->finish();
            $output->writeln("<info>Image migration for item type $itemType ended</info>");
            $output->writeln("<bg=blue>============================================================= </>");
        }

        return 1;
    }

    private function migrateForItemType($itemType, OutputInterface $output)
    {
        /** @var ModelCriteria $queryClass */
        $queryClass = "Thelia\\Model\\".ucfirst($itemType)."ImageQuery";

        /** @var ModelCriteria $query */
        $images = ($queryClass::create())->find();

        /** @var ActiveRecordInterface $image */
        foreach ($images as $image) {
            $output->writeln($image->getFile());
        }
    }
}
