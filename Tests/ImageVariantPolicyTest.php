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
use Symfony\Component\DependencyInjection\Container;
use Symfony\Component\DependencyInjection\ParameterBag\ContainerBag;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBag;
use Symfony\Component\HttpKernel\Exception\HttpException;
use TheliaLibrary\Service\ImageVariantPolicy;
use TheliaLibrary\Service\ImageVariantRequest;

/**
 * A shop that lists the renderings it uses gets those and nothing else; a shop that lists
 * nothing keeps every well-formed request.
 */
final class ImageVariantPolicyTest extends TestCase
{
    private const SOURCE_WIDTH = 1000;
    private const SOURCE_HEIGHT = 750;

    private const CONFIGURATION = [
        'sizes' => ['max', '480,!', '^!150,150', '320,*', '960,*', 'native'],
    ];

    /**
     * @param array<string, mixed>|null $configuration
     */
    private static function policy(?array $configuration): ImageVariantPolicy
    {
        $parameters = null === $configuration ? [] : [ImageVariantPolicy::PARAMETER => $configuration];

        return new ImageVariantPolicy(new ContainerBag(new Container(new ParameterBag($parameters))));
    }

    private static function allowed(ImageVariantPolicy $policy, string $region, string $size, string $rotation = '0'): bool
    {
        try {
            $policy->assertAllowed(
                ImageVariantRequest::fromUrlSegments($region, $size, $rotation, 'default', 'webp'),
                static fn (): array => [self::SOURCE_WIDTH, self::SOURCE_HEIGHT],
            );
        } catch (HttpException $exception) {
            self::assertSame(404, $exception->getStatusCode());

            return false;
        }

        return true;
    }

    /**
     * @return iterable<string, array{string, string, string}>
     */
    public static function listedRequests(): iterable
    {
        yield 'the original' => ['full', 'max', '0'];
        yield 'a listed size' => ['full', '480,!', '0'];
        yield 'a listed size spelled with the modifier first' => ['full', '!480,', '0'];
        yield 'a listed upscaled box' => ['full', '^!150,150', '0'];
        yield 'a listed width at the proportions of the source' => ['full', '320,240', '0'];
        yield 'the same one pixel off' => ['full', '320,241', '0'];
        yield 'another listed width' => ['full', '960,720', '0'];
        yield 'the size of the source' => ['full', '1000,750', '0'];
        yield 'a full turn is the zero turn' => ['full', 'max', '360'];
    }

    #[DataProvider('listedRequests')]
    public function testAListedRequestIsRendered(string $region, string $size, string $rotation): void
    {
        $policy = self::policy(self::CONFIGURATION);

        self::assertTrue(self::allowed($policy, $region, $size, $rotation));
    }

    /**
     * @return iterable<string, array{string, string, string}>
     */
    public static function unlistedRequests(): iterable
    {
        yield 'a size nobody lists' => ['full', '481,!', '0'];
        yield 'a listed width at a height of the visitor\'s choosing' => ['full', '320,9000', '0'];
        yield 'a listed width two pixels off the proportions' => ['full', '320,242', '0'];
        yield 'a width nobody lists at the proportions of the source' => ['full', '500,375', '0'];
        yield 'the listed box without its modifier' => ['full', '150,150', '0'];
        yield 'a percentage' => ['full', 'pct:50', '0'];
        yield 'a width beyond the source' => ['full', '1200,900', '0'];
        yield 'the width of the source at another height' => ['full', '1000,1000', '0'];
        yield 'a square region' => ['square', 'max', '0'];
        yield 'a crop' => ['10,10,100,100', 'max', '0'];
        yield 'a rotation' => ['full', 'max', '90'];
        yield 'a mirror' => ['full', 'max', '!0'];
    }

    #[DataProvider('unlistedRequests')]
    public function testAnUnlistedRequestAnswersNotFound(string $region, string $size, string $rotation): void
    {
        self::assertFalse(self::allowed(self::policy(self::CONFIGURATION), $region, $size, $rotation));
    }

    public function testWithoutConfigurationEveryRequestIsAllowed(): void
    {
        $policy = self::policy(null);

        self::assertFalse($policy->isRestricted());
        self::assertTrue(self::allowed($policy, '10,10,100,100', '^!4321,1234', '45'));
    }

    public function testAnEmptyConfigurationIsNoConfiguration(): void
    {
        self::assertFalse(self::policy([])->isRestricted());
    }

    public function testRegionsAndRotationsAreListedToo(): void
    {
        $policy = self::policy(['regions' => ['full', 'square'], 'rotations' => ['0', '90'], 'sizes' => ['max']]);

        self::assertTrue(self::allowed($policy, 'square', 'max', '90'));
        self::assertFalse(self::allowed($policy, 'square', 'max', '180'));
        self::assertFalse(self::allowed($policy, '1,1,10,10', 'max'));
    }

    public function testCropAllowsEveryRegionWithTheListedSizes(): void
    {
        $policy = self::policy(['regions' => ['full', 'crop'], 'sizes' => ['max']]);

        self::assertTrue(self::allowed($policy, '1,1,10,10', 'max'));
        self::assertTrue(self::allowed($policy, 'pct:1,1,50,50', 'max'));
        self::assertFalse(self::allowed($policy, '1,1,10,10', '480,!'));
        self::assertFalse(self::allowed($policy, 'square', 'max'));
    }

    public function testAProportionalSizeNeedsTheDimensionsOfTheSource(): void
    {
        $policy = self::policy(['sizes' => ['320,*']]);
        $request = ImageVariantRequest::fromUrlSegments('full', '320,240', '0', 'default', 'webp');

        $this->expectException(HttpException::class);

        $policy->assertAllowed($request, static fn (): ?array => null);
    }

    public function testTheDimensionsAreNotReadForAListedSize(): void
    {
        $policy = self::policy(['sizes' => ['max', '320,*']]);
        $read = false;

        $policy->assertAllowed(
            ImageVariantRequest::fromUrlSegments('full', 'max', '0', 'default', 'webp'),
            static function () use (&$read): ?array {
                $read = true;

                return null;
            },
        );

        self::assertFalse($read);
    }

    public function testAConfigurationWithoutSizesIsRefusedAtOnce(): void
    {
        $this->expectException(\LogicException::class);

        self::policy(['regions' => ['full']])->isRestricted();
    }

    public function testASizeOutsideTheGrammarIsRefusedAtOnce(): void
    {
        $this->expectException(HttpException::class);

        self::policy(['sizes' => ['big']])->isRestricted();
    }
}
