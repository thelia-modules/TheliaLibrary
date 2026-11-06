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

namespace TheliaLibrary\Service\Svg;

use enshrined\svgSanitize\Sanitizer;
use TheliaLibrary\Exception\UnreadableSvgException;

/**
 * Cleans an SVG with enshrined/svg-sanitize, behind checks of its own.
 *
 * What the library refuses before the sanitizer sees it: a DOCTYPE with an
 * internal subset or an entity (the sanitizer strips some of them without
 * saying so), bytes that are not UTF-8, a document over the size cap. A
 * root with no namespace gets the SVG one. Then the sanitizer cleans with
 * a tag list that has no animation, and remote references removed. What it
 * removed is read by comparing the two documents, and the stored content is
 * the submitted bytes whenever nothing was removed: the sanitizer rewrites the
 * layout of every document it reads, even a clean one.
 */
final readonly class SvgSanitizer implements SvgSanitizerInterface
{
    public const MAXIMUM_BYTES = 5 * 1024 * 1024;

    /**
     * Largest side recorded, in pixels: the size is stored in a signed
     * 32-bit column, and `1e400` reads as infinity.
     */
    public const MAXIMUM_SIDE = 2147483647.0;

    /**
     * Most elements read: comparing the two documents holds every element in
     * memory, about a kilobyte each, and 5 MiB of `<g/>` would exhaust it.
     */
    public const MAXIMUM_ELEMENTS = 50000;

    private const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

    private const UTF8_BYTE_ORDER_MARK = "\xEF\xBB\xBF";

    private const UNIT_TO_PIXELS = [
        '' => 1.0,
        'px' => 1.0,
        'pt' => 4 / 3,
        'pc' => 16.0,
        'in' => 96.0,
        'cm' => 96 / 2.54,
        'mm' => 96 / 25.4,
    ];

    public function __construct(private SvgChangeDetector $changeDetector)
    {
    }

    public function sanitize(string $svg): SanitizedSvg
    {
        $this->refuseUnreadableBytes($svg);

        $submitted = $this->parse($svg);
        $changes = [];

        // A DOCTYPE with no internal subset (the "SVG 1.1" line some editors
        // write) declares nothing: it leaves with the rest of the cleaning.
        // One the bytes check missed (a `>` in a quoted identifier before the
        // subset) is refused here, once the parser has read it.
        if (null !== $submitted->doctype) {
            if ('' !== (string) $submitted->doctype->internalSubset) {
                throw new UnreadableSvgException(UnreadableSvgReason::Doctype);
            }

            $changes[] = new SvgChange(SvgChangeKind::RemovedElement, '!DOCTYPE');
        }

        // Comments always leave, an editor's signature as much as markup an
        // HTML page would read in one: a single change, however many there are.
        if ($this->holdsComments($submitted)) {
            $changes[] = new SvgChange(SvgChangeKind::RemovedComment, '!--');
        }

        // A drawing copied out of an HTML page has no namespace: it is not SVG
        // to an XML parser, and would not display once stored on its own.
        $prepared = $svg;
        if ('' === (string) $submitted->documentElement?->namespaceURI) {
            $prepared = $this->withSvgNamespace($svg);
            $submitted = $this->parse($prepared);
            $changes[] = new SvgChange(SvgChangeKind::AddedNamespace, self::SVG_NAMESPACE);
        }

        $cleaned = $this->parse($this->clean($prepared));
        $this->removeMarkupFromTextElements($cleaned);

        // Equal canonical forms mean nothing was removed, even something the
        // change list would have missed. Some bytes rule the submitted ones
        // out all the same: an HTML page that inlines the drawing reads them
        // differently from an XML parser. `<!-->` closes a comment there, and
        // a tab in an attribute is kept, then dropped from a URL, where an XML
        // parser reads a space. The sanitizer's output has none of them: it
        // drops comments, writes CDATA as escaped text, and attribute values
        // as it read them.
        $unchanged = !$this->holdsMarkupAnHtmlParserRereads($svg)
            && !$this->holdsAttributeWhitespaceAnHtmlParserKeeps($svg)
            && $this->canonicalForm($submitted) === $this->canonicalForm($cleaned);

        array_push($changes, ...$this->changeDetector->detect($submitted, $cleaned));
        $root = $cleaned->documentElement ?? throw new UnreadableSvgException(UnreadableSvgReason::MalformedXml);
        [$width, $height] = $this->dimensions($root, $changes);

        $content = $unchanged && [] === $changes
            ? $svg
            : (string) $cleaned->saveXML($root);

        return new SanitizedSvg($content, $changes, $width, $height);
    }

    private function refuseUnreadableBytes(string $svg): void
    {
        if (\strlen($svg) > self::MAXIMUM_BYTES || preg_match_all('~<[A-Za-z_]~', $svg) > self::MAXIMUM_ELEMENTS) {
            throw new UnreadableSvgException(UnreadableSvgReason::TooLarge);
        }

        $text = str_starts_with($svg, self::UTF8_BYTE_ORDER_MARK) ? substr($svg, 3) : $svg;

        if (!mb_check_encoding($text, 'UTF-8') || str_contains($text, "\0")) {
            throw new UnreadableSvgException(UnreadableSvgReason::NotUtf8);
        }

        // A pattern that fails to run refuses as much as one that matches.
        if (0 !== preg_match('~^\s*<\?xml[^>]*\bencoding\s*=\s*["\'](?!utf-8["\'])~i', $text)) {
            throw new UnreadableSvgException(UnreadableSvgReason::NotUtf8);
        }

        if (false !== stripos($text, '<!ENTITY')) {
            throw new UnreadableSvgException(UnreadableSvgReason::Entity);
        }

        // Only a DOCTYPE that declares something is refused: an internal
        // subset can set attributes the sanitizer strips without saying so.
        // Square brackets anywhere in it are taken as one.
        if (0 !== preg_match('~<!DOCTYPE[^>]*\[~i', $text)) {
            throw new UnreadableSvgException(UnreadableSvgReason::Doctype);
        }
    }

    private function parse(string $svg): \DOMDocument
    {
        $document = new \DOMDocument();
        $previous = libxml_use_internal_errors(true);

        try {
            $loaded = '' !== trim($svg) && $document->loadXML($svg, \LIBXML_NONET);
        } finally {
            libxml_clear_errors();
            libxml_use_internal_errors($previous);
        }

        if (!$loaded || !$document->documentElement instanceof \DOMElement) {
            throw new UnreadableSvgException(UnreadableSvgReason::MalformedXml);
        }

        $root = $document->documentElement;
        $namespace = (string) $root->namespaceURI;

        if ('svg' !== $root->localName || ('' !== $namespace && self::SVG_NAMESPACE !== $namespace)) {
            throw new UnreadableSvgException(UnreadableSvgReason::NotSvgRoot);
        }

        return $document;
    }

    /**
     * The document without what the sanitizer rewrites in every document it
     * reads: the declaration, the empty-element syntax, unused namespace
     * declarations, comments and the blank text around them. None of these
     * can carry anything.
     */
    private function canonicalForm(\DOMDocument $document): string
    {
        $copy = clone $document;
        $xpath = new \DOMXPath($copy);
        $nodes = $xpath->query('//comment() | //text()[normalize-space() = ""]');

        foreach (false === $nodes ? [] : iterator_to_array($nodes) as $node) {
            if ($node instanceof \DOMNode) {
                $node->parentNode?->removeChild($node);
            }
        }

        return (string) $copy->C14N(true, false);
    }

    /**
     * The submitted document with the SVG namespace on its root element, the
     * first element after the prolog (declaration, comments, instructions,
     * DOCTYPE).
     */
    private function withSvgNamespace(string $svg): string
    {
        if (1 !== preg_match('~\A(?:\xEF\xBB\xBF)?(?:\s+|<\?.*?\?>|<!--.*?-->|<!DOCTYPE[^>]*>)*<svg(?=[\s/>])~is', $svg, $matches)) {
            throw new UnreadableSvgException(UnreadableSvgReason::NotSvgRoot);
        }

        $rootStart = \strlen($matches[0]);

        return substr($svg, 0, $rootStart).' xmlns="'.self::SVG_NAMESPACE.'"'.substr($svg, $rootStart);
    }

    private function holdsComments(\DOMDocument $document): bool
    {
        $comments = (new \DOMXPath($document))->query('//comment()');

        return false !== $comments && $comments->length > 0;
    }

    /**
     * `title` and `desc` are where an HTML page that inlines the drawing
     * reads HTML again: an `<image>` there is an `<img>`, a `<style/>` opens a
     * style sheet that runs to the next `</style>`. They keep their text only.
     */
    private function removeMarkupFromTextElements(\DOMDocument $document): void
    {
        $xpath = new \DOMXPath($document);
        $xpath->registerNamespace('svg', self::SVG_NAMESPACE);
        $nodes = $xpath->query('//svg:title/* | //svg:desc/*');

        foreach (false === $nodes ? [] : iterator_to_array($nodes) as $node) {
            if ($node instanceof \DOMNode) {
                $node->parentNode?->removeChild($node);
            }
        }
    }

    /**
     * A literal tab or line break inside an attribute value. Text that merely
     * looks like an attribute counts too: it only costs a rewrite.
     */
    private function holdsAttributeWhitespaceAnHtmlParserKeeps(string $svg): bool
    {
        return 0 !== preg_match('~=\s*(?:"[^"]*[\t\r\n][^"]*"|\'[^\']*[\t\r\n][^\']*\')~', $svg);
    }

    private function holdsMarkupAnHtmlParserRereads(string $svg): bool
    {
        return str_contains($svg, '<!--') || false !== stripos($svg, '<![CDATA[');
    }

    private function clean(string $svg): string
    {
        $sanitizer = new Sanitizer();
        $sanitizer->setAllowedTags(new SvgAllowedTags());
        $sanitizer->removeRemoteReferences(true);

        $clean = $sanitizer->sanitize($svg);

        // The checks above leave the sanitizer only its own limits to refuse
        // on: nesting depth and the expansion of `use` references.
        if (!\is_string($clean) || '' === $clean) {
            throw new UnreadableSvgException(UnreadableSvgReason::TooLarge);
        }

        return $clean;
    }

    /**
     * Reads the size from the viewBox, or adds a viewBox from width and
     * height when the document has none.
     *
     * @param list<SvgChange> $changes
     *
     * @return array{float, float}
     */
    private function dimensions(\DOMElement $root, array &$changes): array
    {
        $viewBox = $this->viewBoxSize($root->getAttribute('viewBox'));

        if (null !== $viewBox) {
            return $viewBox;
        }

        $width = $this->length($root->getAttribute('width'));
        $height = $this->length($root->getAttribute('height'));

        if (null === $width || null === $height) {
            throw new UnreadableSvgException(UnreadableSvgReason::NoDimensions);
        }

        $value = \sprintf('0 0 %s %s', $this->number($width), $this->number($height));
        $root->setAttribute('viewBox', $value);
        $changes[] = new SvgChange(SvgChangeKind::AddedViewBox, $value);

        return [$width, $height];
    }

    /**
     * @return array{float, float}|null
     */
    private function viewBoxSize(string $viewBox): ?array
    {
        $values = preg_split('~[\s,]+~', trim($viewBox), -1, \PREG_SPLIT_NO_EMPTY);

        if (false === $values || 4 !== \count($values) || [] !== array_filter($values, static fn (string $value): bool => !is_numeric($value))) {
            return null;
        }

        $width = (float) $values[2];
        $height = (float) $values[3];

        return $this->isUsableSize($width) && $this->isUsableSize($height) ? [$width, $height] : null;
    }

    private function length(string $length): ?float
    {
        if (1 !== preg_match('~^\s*(\d+(?:\.\d+)?|\.\d+)\s*(px|pt|pc|in|cm|mm)?\s*$~i', $length, $matches)) {
            return null;
        }

        $value = (float) $matches[1] * self::UNIT_TO_PIXELS[strtolower($matches[2] ?? '')];

        return $this->isUsableSize($value) ? $value : null;
    }

    /**
     * A side the library can record: positive, finite, and within the integer
     * column the size is stored in.
     */
    private function isUsableSize(float $value): bool
    {
        return $value > 0 && $value <= self::MAXIMUM_SIDE;
    }

    private function number(float $value): string
    {
        return rtrim(rtrim(\sprintf('%.4F', $value), '0'), '.');
    }
}
