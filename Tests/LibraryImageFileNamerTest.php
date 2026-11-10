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
use TheliaLibrary\Exception\UnreadableSvgException;
use TheliaLibrary\Exception\UnsupportedLibraryImageException;
use TheliaLibrary\Service\LibraryImageFileNamer;
use TheliaLibrary\Service\Svg\SvgChangeDetector;
use TheliaLibrary\Service\Svg\SvgSanitizer;
use TheliaLibrary\Service\Svg\UnreadableSvgReason;

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

        $name = $this->namer()->generateFileName($file);

        self::assertMatchesRegularExpression('/^[0-9a-f]{20}\.png$/', $name);
        self::assertStringNotContainsString('picture', $name);
    }

    public function testItIgnoresAnExtensionThatContradictsTheContent(): void
    {
        $file = $this->pngFile('picture.jpg');

        self::assertStringEndsWith('.png', $this->namer()->generateFileName($file));
    }

    public function testItRejectsAScriptWearingAnImageExtension(): void
    {
        $file = $this->temporaryFile('payload.jpg', '<?php echo 1;');

        $this->expectException(UnsupportedLibraryImageException::class);

        $this->namer()->generateFileName($file);
    }

    public function testItNamesAnSvgItCanRead(): void
    {
        $file = $this->temporaryFile(
            'drawing.png',
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><script>x()</script></svg>'
        );

        self::assertMatchesRegularExpression('/^[0-9a-f]{20}\.svg$/', $this->namer()->generateFileName($file));
    }

    public function testItFindsAnSvgTheContentDetectionCallsText(): void
    {
        $file = $this->temporaryFile(
            'drawing.svg',
            "<!-- exported -->\n\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 10 10\"/>"
        );

        self::assertSame('text/plain', $file->getMimeType());
        self::assertSame('svg', $this->namer()->resolveExtension($file));
    }

    public function testItFindsTheRootOfAnSvgAfterALongComment(): void
    {
        $file = $this->temporaryFile(
            'drawing.svg',
            '<!-- '.str_repeat('exported by a tool that writes a lot ', 300)."-->\n"
            .'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"/>'
        );

        self::assertSame('svg', $this->namer()->resolveExtension($file));
    }

    public function testItRejectsAnSvgItCannotReadSafely(): void
    {
        $file = $this->temporaryFile(
            'drawing.svg',
            '<!DOCTYPE svg [<!ATTLIST svg onload CDATA "x()">]><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"/>'
        );

        try {
            $this->namer()->generateFileName($file);
        } catch (UnreadableSvgException $exception) {
            self::assertSame(UnreadableSvgReason::Doctype, $exception->reason);

            return;
        }

        self::fail('The SVG was not refused.');
    }

    public function testItRejectsTextThatIsNotAnSvg(): void
    {
        $file = $this->temporaryFile('notes.svg', 'Nothing but notes about an <svg> element.');

        try {
            $this->namer()->generateFileName($file);
        } catch (UnreadableSvgException $exception) {
            self::assertSame(UnreadableSvgReason::MalformedXml, $exception->reason);

            return;
        }

        self::fail('The text was not refused.');
    }

    public function testItRejectsAnImageHeaderFollowedByAnythingElse(): void
    {
        $file = $this->temporaryFile('polyglot.png', "\x89PNG\r\n\x1a\n<?php echo 1;");

        $this->expectException(UnsupportedLibraryImageException::class);

        $this->namer()->generateFileName($file);
    }

    public function testItNamesAnMp4VideoAfterItsContent(): void
    {
        $file = $this->mp4File('clip.MOV');

        $name = $this->namer()->generateFileName($file);

        self::assertMatchesRegularExpression('/^[0-9a-f]{20}\.mp4$/', $name);
    }

    public function testItNamesAQuickTimeAndAWebmVideoAfterTheirContent(): void
    {
        self::assertSame('video/quicktime', $this->brandedFile('clip.mp4', 'qt  ')->getMimeType(), 'Fixture: libmagic reads the qt brand as QuickTime.');
        self::assertMatchesRegularExpression('/^[0-9a-f]{20}\.mov$/', $this->namer()->generateFileName($this->brandedFile('clip.mp4', 'qt  ')));

        $webm = $this->temporaryFile('clip.mp4', "\x1A\x45\xDF\xA3\x42\x82\x84webm\x42\x87\x81\x04\x42\x85\x81\x02");
        self::assertSame('video/webm', $webm->getMimeType(), 'Fixture: libmagic reads the EBML header as WebM.');
        self::assertMatchesRegularExpression('/^[0-9a-f]{20}\.webm$/', $this->namer()->generateFileName($webm));
    }

    public function testEveryStoredVideoFormatIsListedAsAVideo(): void
    {
        foreach (['video/mp4', 'video/quicktime', 'video/webm'] as $type) {
            self::assertContains($type, LibraryImageFileNamer::VIDEO_MIME_TYPES);
        }
    }

    public function testItRejectsATextFileWearingAVideoExtension(): void
    {
        $file = $this->temporaryFile('clip.mp4', 'Not a video, only a name.');

        $this->expectException(UnsupportedLibraryImageException::class);

        $this->namer()->generateFileName($file);
    }

    private function brandedFile(string $name, string $brand): File
    {
        $box = static fn (string $type, string $payload = ''): string => pack('N', 8 + \strlen($payload)).$type.$payload;

        return $this->temporaryFile($name, $box('ftyp', $brand.pack('N', 0).$brand).$box('moov', $box('free')).$box('free'));
    }

    private function mp4File(string $name): File
    {
        // The smallest file libmagic names video/mp4: an ftyp box (brand isom),
        // then a moov box holding an empty mvhd. Written out, no encoder needed.
        $box = static fn (string $type, string $payload = ''): string => pack('N', 8 + \strlen($payload)).$type.$payload;
        $movieHeader = str_repeat("\0", 12).pack('NN', 1000, 0).pack('Nn', 0x10000, 0x100).str_repeat("\0", 10)
            .pack('N9', 0x10000, 0, 0, 0, 0x10000, 0, 0, 0, 0x40000000).str_repeat("\0", 24).pack('N', 2);

        return $this->temporaryFile(
            $name,
            $box('ftyp', 'isom'.pack('N', 512).'isomiso2avc1mp41').$box('moov', $box('mvhd', $movieHeader)).$box('free'),
        );
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

    private function namer(): LibraryImageFileNamer
    {
        return new LibraryImageFileNamer(new SvgSanitizer(new SvgChangeDetector()));
    }

    private function temporaryFile(string $name, string $contents): File
    {
        $path = sys_get_temp_dir().\DIRECTORY_SEPARATOR.uniqid('library-namer-', true).'-'.$name;
        file_put_contents($path, $contents);
        $this->temporaryFiles[] = $path;

        return new File($path);
    }
}
