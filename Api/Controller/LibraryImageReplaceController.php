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
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Thelia\Api\Bridge\Propel\Service\ApiResourcePropelTransformerService;
use Thelia\Api\Resource\PropelResourceInterface;
use Thelia\Model\Lang;
use TheliaLibrary\Api\Resource\LibraryImage;
use TheliaLibrary\Model\LibraryImageQuery;
use TheliaLibrary\Service\LibraryImageService;

/**
 * Handles `POST /api/admin/library_images/{id}/replace` multipart replace.
 *
 * Replaces the binary file (and optionally the title) of an existing
 * `LibraryImage`. PATCH cannot be used here because `multipart/form-data`
 * is not a defined PATCH content-type.
 */
#[AsController]
final readonly class LibraryImageReplaceController
{
    public function __construct(
        private LibraryImageService $libraryImageService,
        private ApiResourcePropelTransformerService $apiResourceService,
    ) {
    }

    public function __invoke(
        Request $request,
        int $id,
    ): PropelResourceInterface {
        if (null === LibraryImageQuery::create()->findPk($id)) {
            throw new NotFoundHttpException(\sprintf('LibraryImage #%d not found.', $id));
        }

        $file = $request->files->get('image');

        if (!$file instanceof UploadedFile) {
            throw new BadRequestHttpException('Missing required "image" file part.');
        }

        $locale = $this->resolveLocale($request);
        $title = $request->request->get('title');

        $propelModel = $this->libraryImageService->updateImage(
            imageId: $id,
            file: $file,
            title: \is_string($title) && '' !== $title ? $title : null,
            locale: $locale,
        );

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
