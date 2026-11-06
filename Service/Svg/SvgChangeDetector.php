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

/**
 * Lists what the cleaning removed, by comparing the submitted document with
 * the cleaned one.
 *
 * The sanitizer's own issue list misses some removals (a processing
 * instruction, for instance), so the two trees are compared instead. The
 * sanitizer only removes: the nodes of the cleaned document are the nodes of
 * the submitted one, minus what left, in the same order. A node that left is
 * reported once, without the nodes under it.
 */
final readonly class SvgChangeDetector
{
    private const REMOTE_REFERENCE = '~(?:^|url\(\s*[\'"]?|@import\s+[\'"]?)\s*(?:https?:|ftp:|//)~i';

    /**
     * @return list<SvgChange>
     */
    public function detect(\DOMDocument $submitted, \DOMDocument $cleaned): array
    {
        $kept = $this->nodesInOrder($cleaned);
        $changes = [];
        $next = 0;

        $this->walk($submitted, $kept, $next, $changes);

        return $changes;
    }

    /**
     * @param list<\DOMElement|\DOMProcessingInstruction> $kept
     * @param list<SvgChange>                             $changes
     */
    private function walk(\DOMNode $parent, array $kept, int &$next, array &$changes): void
    {
        foreach ($parent->childNodes as $node) {
            if (!$node instanceof \DOMElement && !$node instanceof \DOMProcessingInstruction) {
                continue;
            }

            $match = $kept[$next] ?? null;

            if (null === $match || $this->key($match) !== $this->key($node)) {
                $changes[] = $this->removal($node);

                continue;
            }

            ++$next;

            if ($node instanceof \DOMElement && $match instanceof \DOMElement) {
                $this->compareElement($node, $match, $changes);
                $this->walk($node, $kept, $next, $changes);
            }
        }
    }

    /**
     * @param list<SvgChange> $changes
     */
    private function compareElement(\DOMElement $submitted, \DOMElement $cleaned, array &$changes): void
    {
        foreach ($submitted->attributes ?? [] as $attribute) {
            $cleanedValue = $this->attributeValue($cleaned, $attribute);

            if ($cleanedValue === $attribute->value) {
                continue;
            }

            $changes[] = $this->isRemote($attribute->value)
                ? new SvgChange(SvgChangeKind::ExternalReference, $submitted->nodeName)
                : new SvgChange(SvgChangeKind::RemovedAttribute, $attribute->nodeName);
        }

        if ('style' === strtolower($submitted->localName ?? '') && $submitted->textContent !== $cleaned->textContent) {
            $changes[] = new SvgChange(SvgChangeKind::ExternalReference, $submitted->nodeName);
        }
    }

    private function removal(\DOMElement|\DOMProcessingInstruction $node): SvgChange
    {
        return new SvgChange(
            SvgChangeKind::RemovedElement,
            $node instanceof \DOMProcessingInstruction ? '?'.$node->target : $node->nodeName,
        );
    }

    private function attributeValue(\DOMElement $element, \DOMAttr $attribute): ?string
    {
        $match = null === $attribute->namespaceURI
            ? $element->getAttributeNode($attribute->nodeName)
            : $element->getAttributeNodeNS($attribute->namespaceURI, $attribute->localName ?? $attribute->nodeName);

        return $match instanceof \DOMAttr ? $match->value : null;
    }

    private function isRemote(string $value): bool
    {
        return 1 === preg_match(self::REMOTE_REFERENCE, trim($value));
    }

    private function key(\DOMNode $node): string
    {
        if ($node instanceof \DOMProcessingInstruction) {
            return '?'.$node->target;
        }

        return ($node->namespaceURI ?? '').' '.($node->localName ?? $node->nodeName);
    }

    /**
     * @return list<\DOMElement|\DOMProcessingInstruction>
     */
    private function nodesInOrder(\DOMNode $parent): array
    {
        $nodes = [];

        foreach ($parent->childNodes as $node) {
            if ($node instanceof \DOMElement || $node instanceof \DOMProcessingInstruction) {
                $nodes[] = $node;
                array_push($nodes, ...$this->nodesInOrder($node));
            }
        }

        return $nodes;
    }
}
