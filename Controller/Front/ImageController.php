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
use Symfony\Component\Routing\Annotation\Route;
use Thelia\Controller\Front\BaseFrontController;
use Thelia\Core\HttpFoundation\Response;
use Thelia\Tools\URL;
use TheliaLibrary\Service\ImageTransformationService;

/**
 * @Route("/image-library", name="image_library_")
 */
class ImageController extends BaseFrontController
{
    /**
     * @Route("/{identifier}/{region}/{size}/{rotation}/{quality}.{format}", name="view")
     */
    public function getImage(
        $identifier,
        $region,
        $size,
        $rotation,
        $quality,
        $format,
        ImageTransformationService $imageTransformationService
    ) {
        $imagePath = $imageTransformationService->geFormattedImage($identifier, $region, $size, $rotation, $quality, $format);

        return new BinaryFileResponse($imagePath);
    }

    /**
     * @Route("/{identifier}/info.json", name="info")
     */
    public function getImageInformation(
        $identifier,
        ImageTransformationService $imageTransformationService
    ): Response {
        $image = $imageTransformationService->openImage($identifier);
        $size = $image->getSize();
        $maxSize = $imageTransformationService->getMaxSize($image);

        return new Response(
            json_encode(
                [
                    '@context' => 'http://iiif.io/api/image/3/context.json',
                    'id' => URL::getInstance()->absoluteUrl('image-library/'.$identifier),
                    'type' => 'ImageService3',
                    'protocol' => 'http://iiif.io/api/image',
                    'profile' => 'level2',
                    'width' => $size->getWidth(),
                    'height' => $size->getHeight(),
                    'maxWidth' => $maxSize->getWidth(),
                    'maxHeight' => $maxSize->getHeight(),
                ]
            ),
            200,
            [
                'Content-Type' => 'application/ld+json;profile="http://iiif.io/api/image/3/context.json"',
            ]
        );
    }
}
