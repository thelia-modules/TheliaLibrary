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

namespace TheliaLibrary\Tests\Integration;

use Symfony\Component\HttpFoundation\File\File;
use Thelia\Test\IntegrationTestCase;
use TheliaLibrary\Exception\UnreadableSvgException;
use TheliaLibrary\Model\LibraryImage;
use TheliaLibrary\Service\LibraryImageService;
use TheliaLibrary\TheliaLibrary;

/**
 * What the library writes to disk and records for a submitted SVG: the cleaned
 * document when the cleaning removed something, the submitted bytes otherwise,
 * with the type and size the sanitizer read.
 */
final class SvgStorageTest extends IntegrationTestCase
{
    // A 1x1 PNG, written out so the test does not need GD to make one.
    private const PNG = "\x89PNG\r\n\x1a\n\0\0\0\rIHDR\0\0\0\x01\0\0\0\x01\x08\x06\0\0\0\x1f\x15\xc4\x89\0\0\0\rIDATx\xdac\xfc\xcf\xc0P\x0f\0\x04\x85\x01\x80\x84\xa9\x8c!\0\0\0\0IEND\xaeB`\x82";

    /** @var list<string> */
    private array $writtenFiles = [];

    protected function tearDown(): void
    {
        foreach ($this->writtenFiles as $path) {
            if (is_file($path)) {
                unlink($path);
            }
        }

        $this->writtenFiles = [];

        parent::tearDown();
    }

    public function testItStoresTheCleanedDocumentWhenTheCleaningRemovedSomething(): void
    {
        $image = $this->store(
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="12" onload="alert(1)">'
            .'<script>alert(2)</script><rect width="10" height="10"/></svg>'
        );

        $stored = $this->storedContent($image);

        self::assertStringEndsWith('.svg', (string) $image->getFileName());
        self::assertStringNotContainsString('alert', $stored);
        self::assertStringContainsString('viewBox="0 0 24 12"', $stored);
        self::assertStringContainsString('<rect', $stored);
        self::assertSame('image/svg+xml', $image->getMimeType());
        self::assertSame(24, $image->getWidth());
        self::assertSame(12, $image->getHeight());
        self::assertSame(\strlen($stored), $image->getFileSize());
    }

    public function testItKeepsTheSubmittedBytesOfADocumentTheCleaningLeftAsItWas(): void
    {
        $svg = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16.4 8.6\">\n"
            ."  <path d=\"M0 0h16v8z\"></path>\n</svg>\n";

        $image = $this->store($svg);

        self::assertSame($svg, $this->storedContent($image));
        self::assertSame('image/svg+xml', $image->getMimeType());
        self::assertSame(16, $image->getWidth());
        self::assertSame(9, $image->getHeight());
    }

    public function testAPictureReplacedByAnSvgIsDescribedAsTheSvg(): void
    {
        $image = $this->store(self::PNG);
        $replacedFile = TheliaLibrary::getImageDirectory().$image->getFileName();

        $path = $this->temporaryFile('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 30"/>');

        /** @var LibraryImageService $service */
        $service = $this->getService(LibraryImageService::class);
        $image = $service->updateImage((int) $image->getId(), new File($path), null, 'en_US');
        $this->writtenFiles[] = TheliaLibrary::getImageDirectory().$image->getFileName();

        self::assertFileDoesNotExist($replacedFile);
        self::assertStringEndsWith('.svg', (string) $image->getFileName());
        self::assertSame('image/svg+xml', $image->getMimeType());
        self::assertSame([40, 30], [$image->getWidth(), $image->getHeight()]);
    }

    public function testItWritesNothingForAnSvgItCannotReadSafely(): void
    {
        $before = $this->storedFileNames();

        try {
            $this->store('<!DOCTYPE svg [<!ENTITY a "a">]><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1">&a;</svg>');
            self::fail('The SVG was not refused.');
        } catch (UnreadableSvgException) {
        }

        self::assertSame($before, $this->storedFileNames());
    }

    private function store(string $svg): LibraryImage
    {
        $path = $this->temporaryFile($svg);

        /** @var LibraryImageService $service */
        $service = $this->getService(LibraryImageService::class);
        $image = $service->createImage(new File($path), 'Drawing', 'en_US');
        $this->writtenFiles[] = TheliaLibrary::getImageDirectory().$image->getFileName();

        return $image;
    }

    private function temporaryFile(string $content): string
    {
        $path = sys_get_temp_dir().\DIRECTORY_SEPARATOR.uniqid('library-svg-', true);
        file_put_contents($path, $content);
        $this->writtenFiles[] = $path;

        return $path;
    }

    private function storedContent(LibraryImage $image): string
    {
        return (string) file_get_contents(TheliaLibrary::getImageDirectory().$image->getFileName());
    }

    /**
     * @return list<string>
     */
    private function storedFileNames(): array
    {
        $names = scandir(TheliaLibrary::getImageDirectory());

        return false === $names ? [] : $names;
    }
}
