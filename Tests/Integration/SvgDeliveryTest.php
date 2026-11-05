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
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\Storage\MockArraySessionStorage;
use Thelia\Core\HttpFoundation\Request;
use Thelia\Core\HttpFoundation\Session\Session;
use Thelia\Test\WebIntegrationTestCase;
use TheliaLibrary\Model\LibraryImage;
use TheliaLibrary\Service\ImageService;
use TheliaLibrary\Service\LibraryImageService;
use TheliaLibrary\TheliaLibrary;

/**
 * A stored SVG is served as it is stored, never through Imagine, with the
 * headers that keep it from running as a page of the site.
 */
final class SvgDeliveryTest extends WebIntegrationTestCase
{
    // A 1x1 PNG, written out so the test does not need GD to make one.
    private const PNG = "\x89PNG\r\n\x1a\n\0\0\0\rIHDR\0\0\0\x01\0\0\0\x01\x08\x06\0\0\0\x1f\x15\xc4\x89\0\0\0\rIDATx\xdac\xfc\xcf\xc0P\x0f\0\x04\x85\x01\x80\x84\xa9\x8c!\0\0\0\0IEND\xaeB`\x82";

    private const SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="30" height="20"/></svg>';

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

    public function testItServesTheStoredSvgInASandbox(): void
    {
        $image = $this->store(self::SVG, 'drawing.svg');
        $renderedBefore = $this->hasRenderedCopies($image);

        $this->client->request('GET', '/image-library/'.$image->getId().'/full/max/0/default.svg');
        $response = $this->client->getResponse();

        self::assertSame(200, $response->getStatusCode());
        self::assertSame('image/svg+xml', $response->headers->get('Content-Type'));
        self::assertSame('nosniff', $response->headers->get('X-Content-Type-Options'));
        self::assertSame('sandbox', $response->headers->get('Content-Security-Policy'));
        self::assertSame(self::SVG, $this->client->getInternalResponse()->getContent());
        self::assertSame($renderedBefore, $this->hasRenderedCopies($image), 'An SVG is not copied under the public directory.');
    }

    public function testItDoesNotDrawAnSvgInAnotherFormat(): void
    {
        $image = $this->store(self::SVG, 'drawing.svg');

        $renderedBefore = $this->hasRenderedCopies($image);

        $this->client->request('GET', '/image-library/'.$image->getId().'/full/max/0/default.png');

        self::assertSame(400, $this->client->getResponse()->getStatusCode());
        self::assertSame($renderedBefore, $this->hasRenderedCopies($image), 'A refused rendering leaves no directory behind.');
    }

    public function testItDoesNotServeAPictureAsSvg(): void
    {
        $image = $this->store(self::PNG, 'picture.png');

        $this->client->request('GET', '/image-library/'.$image->getId().'/full/max/0/default.svg');

        self::assertSame(400, $this->client->getResponse()->getStatusCode());
    }

    public function testItDescribesAnSvgWithTheSizeOfItsViewBox(): void
    {
        $image = $this->store(self::SVG, 'drawing.svg');

        $this->client->request('GET', '/image-library/'.$image->getId().'/info.json');
        $response = $this->client->getResponse();

        self::assertSame(200, $response->getStatusCode());

        /** @var array<string, mixed> $information */
        $information = json_decode((string) $response->getContent(), true, flags: \JSON_THROW_ON_ERROR);

        self::assertSame(30, $information['width']);
        self::assertSame(20, $information['height']);
        self::assertSame(['svg'], $information['preferredFormats']);
        self::assertArrayNotHasKey('maxWidth', $information);
    }

    public function testItStillDescribesAPictureByItsPixels(): void
    {
        $image = $this->store(self::PNG, 'picture.png');

        $this->client->request('GET', '/image-library/'.$image->getId().'/info.json');

        /** @var array<string, mixed> $information */
        $information = json_decode((string) $this->client->getResponse()->getContent(), true, flags: \JSON_THROW_ON_ERROR);

        self::assertSame(
            ['@context', 'id', 'type', 'protocol', 'profile', 'width', 'height', 'maxWidth', 'maxHeight'],
            array_keys($information),
        );
        self::assertSame([1, 1, 2, 2], [$information['width'], $information['height'], $information['maxWidth'], $information['maxHeight']]);
    }

    public function testThePublicUrlOfAnSvgIgnoresTheRequestedFormat(): void
    {
        $image = $this->store(self::SVG, 'drawing.svg');

        /** @var LibraryImageService $service */
        $service = static::getContainer()->get(LibraryImageService::class);

        self::assertSame(
            '/image-library/'.$image->getId().'/full/200,100/0/default.svg',
            $service->getImagePublicUrl($image, 200, 100, 'webp'),
        );
    }

    public function testEveryBreakpointOfAnSvgPointsAtTheStoredFile(): void
    {
        $image = $this->store(self::SVG, 'drawing.svg');

        // The service reads the language of the visitor from the session.
        $request = new Request();
        $request->setSession(new Session(new MockArraySessionStorage()));
        /** @var RequestStack $requestStack */
        $requestStack = static::getContainer()->get(RequestStack::class);
        $requestStack->push($request);

        /** @var ImageService $imageService */
        $imageService = static::getContainer()->get(ImageService::class);
        $processed = $imageService->getImages([
            'source_type' => ImageService::LIBRARY,
            'img_id' => $image->getId(),
            'filters' => ['default' => 'thumbnail', '768' => 'medium'],
        ]);

        $url = '/image-library/'.$image->getId().'/full/max/0/default.svg';

        self::assertSame([
            ['breakpoint' => 'default', 'url' => $url, 'variants' => []],
            ['breakpoint' => 768, 'url' => $url, 'variants' => []],
        ], $processed[0]['sources']);
    }

    /**
     * Test ids follow the shop's own ids: a directory left there by an earlier
     * run may already exist, so what is checked is that the request adds none.
     */
    private function hasRenderedCopies(LibraryImage $image): bool
    {
        return is_dir(THELIA_WEB_DIR.'image-library'.\DIRECTORY_SEPARATOR.$image->getId());
    }

    private function store(string $content, string $name): LibraryImage
    {
        $path = sys_get_temp_dir().\DIRECTORY_SEPARATOR.uniqid('library-delivery-', true).'-'.$name;
        file_put_contents($path, $content);
        $this->writtenFiles[] = $path;

        /** @var LibraryImageService $service */
        $service = static::getContainer()->get(LibraryImageService::class);
        $image = $service->createImage(new File($path), 'Drawing', 'en_US');
        $this->writtenFiles[] = TheliaLibrary::getImageDirectory().$image->getFileName();

        return $image;
    }
}
