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

namespace TheliaLibrary\Service;

use Symfony\Component\DependencyInjection\ParameterBag\ContainerBagInterface;
use Symfony\Component\HttpKernel\Exception\HttpException;

/**
 * The renderings a shop allows its public image addresses to ask for.
 *
 * Without configuration every well-formed request is rendered, as before. Once the
 * `thelia_library.allowed_variants` parameter is set, a request outside it answers 404
 * before anything is read, rendered or written: the files of a site are then the ones its
 * templates print, not the ones a visitor invents in the address.
 *
 * ```yaml
 * parameters:
 *     thelia_library.allowed_variants:
 *         regions: [full]              # default: [full]
 *         rotations: ['0']             # default: ['0']
 *         sizes:
 *             - max                    # a size, spelled as in the URL
 *             - '480,!'
 *             - '480,*'                # a width, at the height of the source's own proportions
 *             - native                 # the source's own width and height
 * ```
 *
 * A `W,*` size is accepted as `W,H` where H is `round(W * source height / source width)`
 * (one pixel of tolerance), the way a template that cannot know the proportions in
 * advance writes it. A width at or beyond the source's own is read as the source's own
 * width, because a template never asks for more than the file holds. At most
 * one file per listed width and image: the height is not the visitor's to choose.
 *
 * The proportions of a `W,*` size and the `native` size are those of the region the address
 * asks for (`x,y,w,h` cut at the edges of the image, `square`, `pct:…`), not of the whole image.
 *
 * Regions other than `full` and `square` are the visitor's to invent as well: they are
 * accepted only when listed: `square` by name; `registered` for an `x,y,w,h` or `pct:…` region
 * that a registry (ImageRegionRegistryInterface) knows for this image, which is how a module
 * that frames its images tells the library which frames it printed; `crop` for any region,
 * with the sizes listed.
 */
final class ImageVariantPolicy
{
    public const PARAMETER = 'thelia_library.allowed_variants';

    public const CROP = 'crop';
    public const REGISTERED = 'registered';
    public const NATIVE = 'native';

    /** @var array{regions: list<string>, rotations: list<string>, sizes: list<string>, widths: list<int>, native: bool}|null */
    private ?array $allowed = null;
    private bool $loaded = false;

    public function __construct(private readonly ContainerBagInterface $parameters)
    {
    }

    public function isRestricted(): bool
    {
        return null !== $this->allowed();
    }

    /**
     * @param \Closure(): ?array{int, int}|null $sourceDimensions   width and height of the source
     *                                                              image, read only for a `W,*` size
     *                                                              or a region
     * @param \Closure(string): bool|null       $regionIsRegistered whether a registry knows the region
     *                                                              for this image, asked only for a
     *                                                              region the policy lists as `registered`
     *
     * @throws HttpException 404 when the request is not allowed
     */
    public function assertAllowed(ImageVariantRequest $request, ?\Closure $sourceDimensions = null, ?\Closure $regionIsRegistered = null): void
    {
        $allowed = $this->allowed();

        if (null === $allowed) {
            return;
        }

        if (!$this->regionIsAllowed($request->region, $allowed['regions'], $regionIsRegistered)
            || !\in_array($request->rotation, $allowed['rotations'], true)
            || !$this->sizeIsAllowed($request->size, $request->region, $allowed, $sourceDimensions)) {
            throw new HttpException(404, 'Image variant not allowed');
        }
    }

    /**
     * @param list<string> $regions
     */
    private function regionIsAllowed(string $region, array $regions, ?\Closure $regionIsRegistered): bool
    {
        if (\in_array($region, $regions, true)) {
            return true;
        }

        if ('full' === $region || 'square' === $region) {
            return false;
        }

        return \in_array(self::CROP, $regions, true)
            || (\in_array(self::REGISTERED, $regions, true) && null !== $regionIsRegistered && $regionIsRegistered($region));
    }

    /**
     * Width and height of the part of the source a region keeps, as the renderer cuts it.
     *
     * @return array{int, int}|null null for a region that starts outside the source
     */
    private static function regionBox(string $region, int $sourceWidth, int $sourceHeight): ?array
    {
        if ('full' === $region) {
            return [$sourceWidth, $sourceHeight];
        }

        if ('square' === $region) {
            return [min($sourceWidth, $sourceHeight), min($sourceWidth, $sourceHeight)];
        }

        $percentage = str_starts_with($region, 'pct:');
        $values = array_map('floatval', explode(',', str_replace('pct:', '', $region)));
        if (4 !== \count($values)) {
            return null;
        }

        [$x, $y, $width, $height] = $percentage
            ? [$sourceWidth * $values[0] / 100, $sourceHeight * $values[1] / 100, $sourceWidth * $values[2] / 100, $sourceHeight * $values[3] / 100]
            : $values;

        if ($x >= $sourceWidth || $y >= $sourceHeight) {
            return null;
        }

        $width = (int) round(min($width, $sourceWidth - $x));
        $height = (int) round(min($height, $sourceHeight - $y));

        return $width < 1 || $height < 1 ? null : [$width, $height];
    }

    /**
     * @param array{sizes: list<string>, widths: list<int>, native: bool} $allowed
     */
    private function sizeIsAllowed(string $size, string $region, array $allowed, ?\Closure $sourceDimensions): bool
    {
        if (\in_array($size, $allowed['sizes'], true)) {
            return true;
        }

        if ([] === $allowed['widths'] && !$allowed['native']) {
            return false;
        }

        if (1 !== preg_match('/^(\d+),(\d+)$/', $size, $values)) {
            return false;
        }

        [, $width, $height] = array_map('intval', $values);
        $source = $sourceDimensions?->__invoke();

        if (null === $source || $source[0] < 1 || $source[1] < 1) {
            return false;
        }

        $box = self::regionBox($region, $source[0], $source[1]);

        if (null === $box) {
            return false;
        }

        // The proportions are those of the region the address asks for, not of the whole image.
        [$sourceWidth, $sourceHeight] = $box;

        if ($allowed['native'] && $width === $sourceWidth && $height === $sourceHeight) {
            return true;
        }

        if ([] === $allowed['widths']) {
            return false;
        }

        if ($width < $sourceWidth && !\in_array($width, $allowed['widths'], true)) {
            return false;
        }

        // At or beyond the source's own width, the only size is the source's own.
        if ($width >= $sourceWidth) {
            return $width === $sourceWidth && abs($height - $sourceHeight) <= 1;
        }

        return abs($height - max(1, (int) round($width * $sourceHeight / $sourceWidth))) <= 1;
    }

    /**
     * @return array{regions: list<string>, rotations: list<string>, sizes: list<string>, widths: list<int>, native: bool}|null
     */
    private function allowed(): ?array
    {
        if ($this->loaded) {
            return $this->allowed;
        }

        $this->loaded = true;

        if (!$this->parameters->has(self::PARAMETER)) {
            return null;
        }

        $configuration = $this->parameters->get(self::PARAMETER);

        if (!\is_array($configuration) || [] === $configuration) {
            return null;
        }

        $sizes = $configuration['sizes'] ?? null;
        if (!\is_array($sizes) || [] === $sizes) {
            throw new \LogicException(\sprintf('The "%s" parameter needs a non-empty "sizes" list.', self::PARAMETER));
        }

        $regions = [];
        foreach ((array) ($configuration['regions'] ?? ['full']) as $region) {
            $region = (string) $region;
            $regions[] = \in_array($region, [self::CROP, self::REGISTERED], true) ? $region : ImageVariantRequest::fromUrlSegments($region, 'max', '0', 'default', 'jpg')->region;
        }

        $rotations = [];
        foreach ((array) ($configuration['rotations'] ?? ['0']) as $rotation) {
            $rotations[] = ImageVariantRequest::fromUrlSegments('full', 'max', (string) $rotation, 'default', 'jpg')->rotation;
        }

        $exactSizes = [];
        $widths = [];
        $native = false;
        foreach ($sizes as $size) {
            $size = (string) $size;

            if (self::NATIVE === $size) {
                $native = true;
            } elseif (1 === preg_match('/^([1-9]\d{0,4}),\*$/', $size, $values)) {
                $widths[] = (int) $values[1];
            } else {
                $exactSizes[] = ImageVariantRequest::fromUrlSegments('full', $size, '0', 'default', 'jpg')->size;
            }
        }

        return $this->allowed = [
            'regions' => $regions,
            'rotations' => $rotations,
            'sizes' => $exactSizes,
            'widths' => array_values(array_unique($widths)),
            'native' => $native,
        ];
    }
}
