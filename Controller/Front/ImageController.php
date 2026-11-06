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
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Thelia\Controller\Front\BaseFrontController;
use Thelia\Tools\URL;
use TheliaLibrary\Service\ImageService;
use TheliaLibrary\Service\LibraryImageFileNamer;

#[Route("/image-library", name: "image_library_")]
class ImageController extends BaseFrontController
{
    #[Route("/{identifier}/{region}/{size}/{rotation}/{quality}.{format}", name: "view")]
    public function getImage(
        $identifier,
        $region,
        $size,
        $rotation,
        $quality,
        $format,
        ImageService $imageService
    ) {
        if (LibraryImageFileNamer::SVG_EXTENSION === strtolower((string) $format)) {
            return $this->svgResponse($imageService->getSvgFilePath($identifier));
        }

        $imagePath = $imageService->geFormattedImage($identifier, $region, $size, $rotation, $quality, $format);

        $response = new BinaryFileResponse($imagePath);
        if ($imageService->isTemporaryVariant($imagePath)) {
            $response->deleteFileAfterSend();
        }

        return $response;
    }

    #[Route("/{identifier}/info.json", name: "info")]
    public function getImageInformation(
        $identifier,
        ImageService $imageService
    ): Response {
        $information = [
            '@context' => 'http://iiif.io/api/image/3/context.json',
            'id' => URL::getInstance()->absoluteUrl('image-library/'.$identifier),
            'type' => 'ImageService3',
            'protocol' => 'http://iiif.io/api/image',
            'profile' => 'level2',
        ];

        $storedImage = $imageService->findStoredImage($identifier);

        if ($imageService->isSvg($storedImage)) {
            // A drawing has no pixels to read and no largest size: the size
            // is the one its viewBox gave it when it was stored, and it is
            // only offered as SVG.
            $information += [
                'width' => $storedImage->getWidth(),
                'height' => $storedImage->getHeight(),
                'preferredFormats' => [LibraryImageFileNamer::SVG_EXTENSION],
            ];
        } else {
            $image = $imageService->openImage($identifier);
            $size = $image->getSize();
            $maxSize = $imageService->getMaxSize($image);

            $information += [
                'width' => $size->getWidth(),
                'height' => $size->getHeight(),
                'maxWidth' => $maxSize->getWidth(),
                'maxHeight' => $maxSize->getHeight(),
            ];
        }

        return new Response(
            json_encode($information, \JSON_THROW_ON_ERROR),
            200,
            [
                'Content-Type' => 'application/ld+json;profile="http://iiif.io/api/image/3/context.json"',
            ]
        );
    }

    /**
     * An SVG is a document that may still carry what a browser would run if
     * the file were opened on its own: whatever is left after cleaning gets no
     * script, no cookie and no storage of the site. The core already tells
     * the browser not to guess another type (`X-Content-Type-Options`).
     */
    private function svgResponse(string $path): BinaryFileResponse
    {
        $response = new BinaryFileResponse($path);
        $response->headers->set('Content-Type', 'image/svg+xml');
        $response->headers->set('Content-Security-Policy', 'sandbox');

        return $response;
    }
}
