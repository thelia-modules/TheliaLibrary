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

use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;
use TheliaLibrary\Exception\UnreadableSvgException;
use TheliaLibrary\Exception\UnsupportedLibraryImageException;
use TheliaLibrary\Service\Svg\SanitizedSvg;
use TheliaLibrary\Service\Svg\SvgChange;
use TheliaLibrary\Service\Svg\SvgChangeDetector;
use TheliaLibrary\Service\Svg\SvgChangeKind;
use TheliaLibrary\Service\Svg\SvgSanitizer;
use TheliaLibrary\Service\Svg\UnreadableSvgReason;

final class SvgSanitizerTest extends TestCase
{
    private const SVG = 'xmlns="http://www.w3.org/2000/svg"';

    public function testItListsEveryChangeInDocumentOrder(): void
    {
        $result = $this->sanitize(
            '<svg '.self::SVG.' width="24" height="24" onload="alert(1)"><script>alert(2)</script>'
            .'<use href="https://evil.example/s.svg#a"/><rect width="10" height="10"/></svg>'
        );

        self::assertEquals([
            new SvgChange(SvgChangeKind::RemovedAttribute, 'onload'),
            new SvgChange(SvgChangeKind::RemovedElement, 'script'),
            new SvgChange(SvgChangeKind::ExternalReference, 'use'),
            new SvgChange(SvgChangeKind::AddedViewBox, '0 0 24 24'),
        ], $result->changes);
        self::assertSame(24.0, $result->width);
        self::assertSame(24.0, $result->height);
        self::assertStringNotContainsString('alert', $result->content);
        self::assertStringNotContainsString('evil.example', $result->content);
        self::assertStringContainsString('viewBox="0 0 24 24"', $result->content);
        self::assertStringContainsString('<rect', $result->content);
    }

    public function testItKeepsTheSubmittedBytesOfACleanDocument(): void
    {
        $svg = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg ".self::SVG." viewBox=\"0 0 16 8\">\n"
            ."  <!-- a comment -->\n  <path d=\"M0 0h16v8z\"></path>\n</svg>\n";

        $result = $this->sanitize($svg);

        self::assertSame([], $result->changes);
        self::assertSame($svg, $result->content);
        self::assertSame(16.0, $result->width);
        self::assertSame(8.0, $result->height);
    }

    public function testItAcceptsAUtf8ByteOrderMark(): void
    {
        $svg = "\xEF\xBB\xBF<svg ".self::SVG.' viewBox="0 0 1 1"/>';

        self::assertSame($svg, $this->sanitize($svg)->content);
    }

    public function testItRemovesAnimations(): void
    {
        $result = $this->sanitize(
            '<svg '.self::SVG.' viewBox="0 0 10 10"><a href="#x"><animate attributeName="href" to="javascript:alert(1)"/>'
            .'<text>x</text></a><rect width="1" height="1"><animateTransform attributeName="transform" type="rotate"/>'
            .'<set attributeName="fill" to="red"/></rect></svg>'
        );

        self::assertEquals([
            new SvgChange(SvgChangeKind::RemovedElement, 'animate'),
            new SvgChange(SvgChangeKind::RemovedElement, 'animateTransform'),
            new SvgChange(SvgChangeKind::RemovedElement, 'set'),
        ], $result->changes);
        self::assertStringNotContainsString('javascript', $result->content);
    }

    public function testItRemovesAProcessingInstruction(): void
    {
        $result = $this->sanitize('<svg '.self::SVG.' viewBox="0 0 1 1"><?php echo 1; ?><rect width="1" height="1"/></svg>');

        self::assertEquals([new SvgChange(SvgChangeKind::RemovedElement, '?php')], $result->changes);
        self::assertStringNotContainsString('php', $result->content);
    }

    public function testItReportsARemoteImageAsAnExternalReference(): void
    {
        $result = $this->sanitize(
            '<svg '.self::SVG.' xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 1">'
            .'<image width="1" height="1" xlink:href="http://tracker.example/pixel.png"/></svg>'
        );

        self::assertEquals([new SvgChange(SvgChangeKind::ExternalReference, 'image')], $result->changes);
        self::assertStringNotContainsString('tracker.example', $result->content);
    }

    public function testItReportsARemoteImportInAStyleElement(): void
    {
        $result = $this->sanitize(
            '<svg '.self::SVG.' viewBox="0 0 1 1"><style>@import url("https://evil.example/a.css"); rect { fill: red; }</style>'
            .'<rect width="1" height="1"/></svg>'
        );

        self::assertEquals([new SvgChange(SvgChangeKind::ExternalReference, 'style')], $result->changes);
        self::assertStringNotContainsString('evil.example', $result->content);
        self::assertStringContainsString('fill: red', $result->content);
    }

    public function testItAddsAViewBoxInPixelsFromAPhysicalSize(): void
    {
        $result = $this->sanitize('<svg '.self::SVG.' width="25.4mm" height="72pt"/>');

        self::assertEquals([new SvgChange(SvgChangeKind::AddedViewBox, '0 0 96 96')], $result->changes);
        self::assertSame(96.0, $result->width);
        self::assertSame(96.0, $result->height);
    }

    public function testARefusalIsAnUnsupportedImage(): void
    {
        $this->expectException(UnsupportedLibraryImageException::class);

        $this->sanitize('not an svg');
    }

    /**
     * @return iterable<string, array{string, UnreadableSvgReason}>
     */
    public static function unreadableDocuments(): iterable
    {
        yield 'doctype' => ['<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg '.self::SVG.' viewBox="0 0 1 1"/>', UnreadableSvgReason::Doctype];
        yield 'doctype with an attribute list' => ['<!DOCTYPE svg [<!ATTLIST svg onload CDATA "alert(1)">]><svg '.self::SVG.' viewBox="0 0 1 1"/>', UnreadableSvgReason::Doctype];
        yield 'entity' => ['<!DOCTYPE svg [<!ENTITY a "aaaa">]><svg '.self::SVG.' viewBox="0 0 1 1"><text>&a;</text></svg>', UnreadableSvgReason::Entity];
        yield 'utf-16' => ["\xFF\xFE".mb_convert_encoding('<svg '.self::SVG.' viewBox="0 0 1 1"/>', 'UTF-16LE', 'UTF-8'), UnreadableSvgReason::NotUtf8];
        yield 'latin-1 bytes' => ['<svg '.self::SVG." viewBox=\"0 0 1 1\"><text>caf\xE9</text></svg>", UnreadableSvgReason::NotUtf8];
        yield 'latin-1 declared' => ['<?xml version="1.0" encoding="ISO-8859-1"?><svg '.self::SVG.' viewBox="0 0 1 1"/>', UnreadableSvgReason::NotUtf8];
        yield 'broken xml' => ['<svg '.self::SVG.' viewBox="0 0 1 1"><g></svg>', UnreadableSvgReason::MalformedXml];
        yield 'empty' => ['  ', UnreadableSvgReason::MalformedXml];
        yield 'html root' => ['<html><body><svg '.self::SVG.' viewBox="0 0 1 1"/></body></html>', UnreadableSvgReason::NotSvgRoot];
        yield 'svg root in another namespace' => ['<svg xmlns="http://www.w3.org/1999/xhtml" viewBox="0 0 1 1"/>', UnreadableSvgReason::NotSvgRoot];
        yield 'over the size cap' => ['<svg '.self::SVG.' viewBox="0 0 1 1"><!--'.str_repeat('a', SvgSanitizer::MAXIMUM_BYTES).'--></svg>', UnreadableSvgReason::TooLarge];
        yield 'no size' => ['<svg '.self::SVG.'><rect width="1" height="1"/></svg>', UnreadableSvgReason::NoDimensions];
        yield 'relative size only' => ['<svg '.self::SVG.' width="100%" height="100%"/>', UnreadableSvgReason::NoDimensions];
        yield 'empty viewBox and no size' => ['<svg '.self::SVG.' viewBox="0 0 0 0"/>', UnreadableSvgReason::NoDimensions];
    }

    #[DataProvider('unreadableDocuments')]
    public function testItRefusesADocumentItCannotReadSafely(string $svg, UnreadableSvgReason $reason): void
    {
        try {
            $this->sanitize($svg);
        } catch (UnreadableSvgException $exception) {
            self::assertSame($reason, $exception->reason);

            return;
        }

        self::fail(\sprintf('The document was not refused (%s expected).', $reason->value));
    }

    private function sanitize(string $svg): SanitizedSvg
    {
        return (new SvgSanitizer(new SvgChangeDetector()))->sanitize($svg);
    }
}
