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

namespace TheliaLibrary\Api\State;

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProcessorInterface;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use TheliaLibrary\Service\LibraryImageService;

/**
 * Custom delete processor for `LibraryImage` resources.
 *
 * The default `PropelRemoveProcessor` only deletes the database row; it leaves
 * the binary file on disk. This processor delegates to `LibraryImageService`
 * which removes both the row and every locale-scoped file.
 */
final readonly class LibraryImageDeleteProcessor implements ProcessorInterface
{
    public function __construct(
        private LibraryImageService $libraryImageService,
    ) {
    }

    public function process(mixed $data, Operation $operation, array $uriVariables = [], array $context = []): void
    {
        $imageId = $uriVariables['id'] ?? null;

        if (null === $imageId) {
            throw new NotFoundHttpException('Missing library_image id.');
        }

        $deleted = $this->libraryImageService->deleteImage((int) $imageId);

        if (false === $deleted) {
            throw new NotFoundHttpException(\sprintf('LibraryImage #%s not found.', $imageId));
        }
    }
}
