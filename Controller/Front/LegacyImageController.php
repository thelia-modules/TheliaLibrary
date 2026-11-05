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

use Imagine\Image\ImageInterface;
use Propel\Runtime\ActiveQuery\ModelCriteria;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\Routing\Attribute\Route;
use Thelia\Controller\Front\BaseFrontController;
use Thelia\Model\ConfigQuery;
use Thelia\Model\ProductImage;
use Thelia\Tools\URL;
use TheliaLibrary\Service\ImageService;
use TheliaLibrary\Service\ImageVariantRequest;
use TheliaMain\PropelResolver;

#[Route("/legacy-image-library", name: "legacy_image_library_")]
class LegacyImageController extends BaseFrontController
{
    #[Route("/{itemType}_image_{imageId}/{region}/{size}/{rotation}/{quality}.{format}", name: "view")]
    public function getImage(
        $itemType,
        $imageId,
        $region,
        $size,
        $rotation,
        $quality,
        $format,
        ImageService $imageService
    ) {
        $request = ImageVariantRequest::fromUrlSegments((string) $region, (string) $size, (string) $rotation, (string) $quality, (string) $format);
        $sourceFilePath = $this->getSourceFilePath($itemType, $imageId);

        $imagePath = $imageService->formattedImagePath(
            THELIA_WEB_DIR.'legacy-image-library'.DS.$itemType.'_image_'.(int) $imageId,
            static fn (): ImageInterface => $imageService->getImagineInstance()->open($sourceFilePath),
            $request,
        );

        $response = new BinaryFileResponse($imagePath);
        if ($imageService->isTemporaryVariant($imagePath)) {
            $response->deleteFileAfterSend();
        }

        return $response;
    }

    #[Route("/{itemType}_image_{imageId}/info.json", name: "info")]
    public function getImageInformation(
        $itemType,
        $imageId,
        ImageService $imageService
    ): Response {
        $sourceFilePath = $this->getSourceFilePath($itemType, $imageId);

        $image = $imageService->getImagineInstance()->open($sourceFilePath);
        $size = $image->getSize();
        $maxSize = $imageService->getMaxSize($image);

        return new Response(
            json_encode(
                [
                    '@context' => 'http://iiif.io/api/image/3/context.json',
                    'id' => URL::getInstance()->absoluteUrl('legacy-image-library/'.$itemType.'_image_'.$imageId),
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

    private function getSnakeFromCamelCase($camelCase): string
    {
        $pattern = '/(?<=\\w)(?=[A-Z])|(?<=[a-z])(?=[0-9])/';
        $snakeCase = preg_replace($pattern, '_', $camelCase);
        return strtolower($snakeCase);
    }

    private function getSourceFilePath($itemType, $imageId)
    {
        if (!preg_match('/^[A-Za-z]+$/', (string) $itemType) || !ctype_digit((string) $imageId)) {
            throw new HttpException(404);
        }

        $tableMapClass = PropelResolver::getTableMapByTableName($this->getSnakeFromCamelCase($itemType.'Image'));
        if (null === $tableMapClass) {
            throw new HttpException(404);
        }
        $tableMap = new $tableMapClass();

        /** @var ModelCriteria $queryClass */
        $queryClass = $tableMap->getClassName().'Query';

        /** @var ProductImage $image */
        $image = $queryClass::create()
            ->filterById($imageId)
            ->filterByVisible(1)
            ->findOne();

        if (null === $image) {
            throw new HttpException(404);
        }

        $baseSourceFilePath = ConfigQuery::read('images_library_path');
        if ($baseSourceFilePath === null) {
            $baseSourceFilePath = THELIA_LOCAL_DIR.'media'.DS.'images';
        } else {
            $baseSourceFilePath = THELIA_ROOT.$baseSourceFilePath;
        }

        $sourceFilePath = sprintf(
            '%s/%s/%s',
            $baseSourceFilePath,
            $itemType,
            $image->getFile()
        );

        if (!is_file($sourceFilePath)) {
            throw new HttpException(404);
        }

        return $sourceFilePath;
    }
}
