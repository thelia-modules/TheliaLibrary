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
use Symfony\Component\HttpFoundation\File\File;
use TheliaLibrary\Exception\UnsupportedLibraryImageException;
use TheliaLibrary\Service\LibraryImageFileNamer;

final class LibraryImageFileNamerTest extends TestCase
{
    /** @var list<string> */
    private array $temporaryFiles = [];

    protected function tearDown(): void
    {
        foreach ($this->temporaryFiles as $path) {
            if (is_file($path)) {
                unlink($path);
            }
        }

        $this->temporaryFiles = [];
    }

    public function testItNamesAPngAfterItsContent(): void
    {
        $file = $this->pngFile('picture.png');

        $name = (new LibraryImageFileNamer())->generateFileName($file);

        self::assertMatchesRegularExpression('/^[0-9a-f]{20}\.png$/', $name);
        self::assertStringNotContainsString('picture', $name);
    }

    public function testItIgnoresAnExtensionThatContradictsTheContent(): void
    {
        $file = $this->pngFile('picture.jpg');

        self::assertStringEndsWith('.png', (new LibraryImageFileNamer())->generateFileName($file));
    }

    public function testItRejectsAScriptWearingAnImageExtension(): void
    {
        $file = $this->temporaryFile('payload.jpg', '<?php echo 1;');

        $this->expectException(UnsupportedLibraryImageException::class);

        (new LibraryImageFileNamer())->generateFileName($file);
    }

    public function testItRejectsAnSvgDocument(): void
    {
        $file = $this->temporaryFile(
            'drawing.svg',
            '<svg xmlns="http://www.w3.org/2000/svg"><script>x()</script></svg>'
        );

        $this->expectException(UnsupportedLibraryImageException::class);

        (new LibraryImageFileNamer())->generateFileName($file);
    }

    public function testItRejectsAnImageHeaderFollowedByAnythingElse(): void
    {
        $file = $this->temporaryFile('polyglot.png', "\x89PNG\r\n\x1a\n<?php echo 1;");

        $this->expectException(UnsupportedLibraryImageException::class);

        (new LibraryImageFileNamer())->generateFileName($file);
    }

    private function pngFile(string $name): File
    {
        // A 1x1 PNG, written out rather than generated, so the test does not
        // need the GD extension to run.
        $contents = base64_decode(
            'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
            true
        );

        return $this->temporaryFile($name, (string) $contents);
    }

    private function temporaryFile(string $name, string $contents): File
    {
        $path = sys_get_temp_dir().\DIRECTORY_SEPARATOR.uniqid('library-namer-', true).'-'.$name;
        file_put_contents($path, $contents);
        $this->temporaryFiles[] = $path;

        return new File($path);
    }
}
