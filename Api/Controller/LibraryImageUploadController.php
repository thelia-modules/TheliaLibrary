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

namespace TheliaLibrary\Api\Controller;

use ApiPlatform\Metadata\Operation;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\HttpKernel\Exception\UnsupportedMediaTypeHttpException;
use Thelia\Api\Bridge\Propel\Service\ApiResourcePropelTransformerService;
use Thelia\Api\Resource\PropelResourceInterface;
use Thelia\Core\Translation\Translator;
use Thelia\Model\Lang;
use TheliaLibrary\Api\Resource\LibraryImage;
use TheliaLibrary\Exception\UnsupportedLibraryImageException;
use TheliaLibrary\Service\LibraryImageService;
use TheliaLibrary\TheliaLibrary;

/**
 * Handles `POST /api/admin/library_images` multipart upload.
 *
 * AP4 routes the multipart POST through this controller (rather than a
 * standard Processor) so the binary `image` field is read directly from
 * `Request::files`.
 */
#[AsController]
final readonly class LibraryImageUploadController
{
    public function __construct(
        private LibraryImageService $libraryImageService,
        private ApiResourcePropelTransformerService $apiResourceService,
    ) {
    }

    public function __invoke(
        Request $request,
    ): PropelResourceInterface {
        $file = $request->files->get('image');

        if (!$file instanceof UploadedFile) {
            throw new BadRequestHttpException('Missing required "image" file part.');
        }

        $locale = $this->resolveLocale($request);
        $title = $request->request->get('title');

        try {
            $propelModel = $this->libraryImageService->createImage(
                file: $file,
                title: \is_string($title) && '' !== $title ? $title : null,
                locale: $locale,
            );
        } catch (UnsupportedLibraryImageException $exception) {
            throw new UnsupportedMediaTypeHttpException(
                Translator::getInstance()->trans(
                    'Only JPEG, PNG, GIF, WebP and BMP images can be stored in the library.',
                    [],
                    TheliaLibrary::DOMAIN_NAME
                ),
                $exception
            );
        }

        /** @var Operation $operation */
        $operation = $request->attributes->get('_api_operation');

        return $this->apiResourceService->modelToResource(
            resourceClass: LibraryImage::class,
            propelModel: $propelModel,
            context: $operation->getNormalizationContext() ?? [],
            withAddon: false,
        );
    }

    private function resolveLocale(Request $request): string
    {
        $locale = $request->request->get('locale') ?? $request->query->get('locale');

        if (\is_string($locale) && '' !== $locale) {
            return $locale;
        }

        return Lang::getDefaultLanguage()->getLocale();
    }
}
