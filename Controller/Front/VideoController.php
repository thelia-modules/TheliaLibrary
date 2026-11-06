<?php

/*
 * This file is part of the Thelia package.
 * http://www.thelia.net
 *
 * (c) OpenStudio <info@thelia.net>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TheliaLibrary\Controller\Front;

use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\Routing\Attribute\Route;
use Thelia\Controller\Front\BaseFrontController;
use TheliaLibrary\Service\ImageService;

/**
 * The videos of the library, served whole: the browser asks for ranges of the
 * file as the visitor plays and seeks, which BinaryFileResponse answers.
 */
#[Route('/video-library', name: 'video_library_')]
class VideoController extends BaseFrontController
{
    #[Route('/{identifier}.{format}', name: 'view', requirements: ['identifier' => '\d+', 'format' => 'mp4'], methods: ['GET', 'HEAD'])]
    public function getVideo(int $identifier, ImageService $imageService): BinaryFileResponse
    {
        $response = new BinaryFileResponse($imageService->videoPath($identifier));

        // The type of the format the file was stored under, and the browser
        // told not to read it as anything else.
        $response->headers->set('Content-Type', 'video/mp4');
        $response->headers->set('X-Content-Type-Options', 'nosniff');

        return $response;
    }
}
