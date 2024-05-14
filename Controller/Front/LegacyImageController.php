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

use Propel\Runtime\ActiveQuery\ModelCriteria;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\Routing\Annotation\Route;
use Thelia\Controller\Front\BaseFrontController;
use Thelia\Core\HttpFoundation\Response;
use Thelia\Model\ConfigQuery;
use Thelia\Model\ProductImage;
use Thelia\Tools\URL;
use TheliaLibrary\Service\ImageService;
use TheliaMain\PropelResolver;

/**
 * @Route("/legacy-image-library", name="legacy_image_library_")
 */
class LegacyImageController extends BaseFrontController
{
    /**
     * @Route("/{itemType}_image_{imageId}/{region}/{size}/{rotation}/{quality}.{format}", name="view")
     */
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
        $sourceFilePath = $this->getSourceFilePath($itemType, $imageId);

        if (!\in_array(strtolower($format), ['jpg', 'jpeg', 'png', 'gif', 'jp2', 'webp'])) {
            throw new HttpException(400, 'Bad format value');
        }

        $formattedImagePath = THELIA_WEB_DIR.'legacy-image-library'.DS.$itemType.'_image_'.$imageId.DS.$region.DS.$size.DS.$rotation;
        if (!is_dir($formattedImagePath)) {
            if (!@mkdir($formattedImagePath, 0755, true)) {
                throw new \RuntimeException(sprintf('Failed to create %s file in cache directory', $formattedImagePath));
            }
        }

        $formattedImagePath .= DS.$quality.'.'.$format;

        if (file_exists($formattedImagePath)) {
            return new BinaryFileResponse($formattedImagePath);
        }

        $image = $imageService->getImagineInstance()->open($sourceFilePath);
        $image = $imageService->applyRegion($image, $region);
        $image = $imageService->applySize($image, $size);
        $image = $imageService->applyRotation($image, $rotation, $format);
        $image = $imageService->applyQuality($image, $quality);
        $image->save($formattedImagePath);

        return new BinaryFileResponse($formattedImagePath);
    }

    /**
     * @Route("/{itemType}_image_{imageId}/info.json", name="info")
     */
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
        $tableMapClass = PropelResolver::getTableMapByTableName($this->getSnakeFromCamelCase($itemType));
        $tableMap = new $tableMapClass();

        /** @var ModelCriteria $queryClass */
        $queryClass = $tableMap->getClassName().'ImageQuery';

        /** @var ProductImage $image */
        $image = $queryClass::create()
            ->filterById($imageId)
            ->filterByVisible(1)
            ->findOne();

        if (null === $image) {
            return new Response(null, 404);
        }

        $baseSourceFilePath = ConfigQuery::read('images_library_path');
        if ($baseSourceFilePath === null) {
            $baseSourceFilePath = THELIA_LOCAL_DIR.'media'.DS.'images';
        } else {
            $baseSourceFilePath = THELIA_ROOT.$baseSourceFilePath;
        }

        return sprintf(
            '%s/%s/%s',
            $baseSourceFilePath,
            $itemType,
            $image->getFile()
        );
    }
}
