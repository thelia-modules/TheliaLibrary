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

use PHPUnit\Framework\Attributes\Test;
use Thelia\Test\WebIntegrationTestCase;
use TheliaLibrary\Model\LibraryImage;
use TheliaLibrary\Service\LibraryImageService;
use TheliaLibrary\TheliaLibrary;

/**
 * A video of the library is served whole, by ranges, from its own route, and
 * never reaches the image renderings.
 */
final class VideoRouteTest extends WebIntegrationTestCase
{
    /** @var list<string> */
    private array $writtenFiles = [];

    protected function tearDown(): void
    {
        foreach ($this->writtenFiles as $path) {
            if (is_file($path)) {
                unlink($path);
            }
        }

        parent::tearDown();
    }

    #[Test]
    public function itServesAVideoAsMp4(): void
    {
        $video = $this->video();

        $this->client->request('GET', '/video-library/'.$video->getId().'.mp4');

        $response = $this->client->getResponse();
        self::assertSame(200, $response->getStatusCode());
        self::assertSame('video/mp4', $response->headers->get('Content-Type'));
        self::assertSame('nosniff', $response->headers->get('X-Content-Type-Options'));
        self::assertSame('bytes', $response->headers->get('Accept-Ranges'));
    }

    #[Test]
    public function itAnswersARangeOfTheVideo(): void
    {
        $video = $this->video();

        $this->client->request('GET', '/video-library/'.$video->getId().'.mp4', server: ['HTTP_RANGE' => 'bytes=0-7']);

        $response = $this->client->getResponse();
        self::assertSame(206, $response->getStatusCode());
        self::assertStringStartsWith('bytes 0-7/', (string) $response->headers->get('Content-Range'));
    }

    #[Test]
    public function itDoesNotServeAnImageAsAVideo(): void
    {
        $image = (new LibraryImage())->setFileName('not-a-video.png')->setMimeType('image/png');
        $image->save();

        $this->client->request('GET', '/video-library/'.$image->getId().'.mp4');

        self::assertSame(404, $this->client->getResponse()->getStatusCode());
    }

    #[Test]
    public function itAnswersAMissingVideoFileWithA404(): void
    {
        $video = (new LibraryImage())->setFileName('gone-from-disk.mp4')->setMimeType('video/mp4');
        $video->save();

        $this->client->request('GET', '/video-library/'.$video->getId().'.mp4');

        self::assertSame(404, $this->client->getResponse()->getStatusCode());
    }

    #[Test]
    public function itKeepsAVideoAwayFromTheImageRenderings(): void
    {
        $video = $this->video();

        $this->client->request('GET', '/image-library/'.$video->getId().'/full/max/0/default.jpg');

        self::assertSame(404, $this->client->getResponse()->getStatusCode());
    }

    #[Test]
    public function itGivesTheVideoRouteAsThePublicUrlOfAVideo(): void
    {
        $video = $this->video();

        /** @var LibraryImageService $images */
        $images = $this->getService(LibraryImageService::class);

        self::assertSame('/video-library/'.$video->getId().'.mp4', $images->getImagePublicUrl($video));
    }

    private function video(): LibraryImage
    {
        $directory = TheliaLibrary::getImageDirectory();

        if (!is_dir($directory)) {
            mkdir($directory, 0o775, true);
        }

        $fileName = bin2hex(random_bytes(10)).'.mp4';
        $path = $directory.$fileName;
        file_put_contents($path, self::mp4Bytes());
        $this->writtenFiles[] = $path;

        $video = (new LibraryImage())->setFileName($fileName)->setMimeType('video/mp4')->setFileSize((int) filesize($path));
        $video->save();

        return $video;
    }

    /**
     * The smallest file libmagic names video/mp4: an ftyp box, then a moov box
     * holding an empty mvhd.
     */
    private static function mp4Bytes(): string
    {
        $box = static fn (string $type, string $payload = ''): string => pack('N', 8 + \strlen($payload)).$type.$payload;
        $movieHeader = str_repeat("\0", 12).pack('NN', 1000, 0).pack('Nn', 0x10000, 0x100).str_repeat("\0", 10)
            .pack('N9', 0x10000, 0, 0, 0, 0x10000, 0, 0, 0, 0x40000000).str_repeat("\0", 24).pack('N', 2);

        return $box('ftyp', 'isom'.pack('N', 512).'isomiso2avc1mp41').$box('moov', $box('mvhd', $movieHeader)).$box('free');
    }
}
