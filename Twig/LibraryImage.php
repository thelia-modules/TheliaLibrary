<?php

namespace TheliaLibrary\Twig;

use TheliaBlocks\Service\JsonBlockService;
use TheliaLibrary\Model\Base\LibraryImageQuery;
use TheliaLibrary\Service\LibraryImageService;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class LibraryImage extends AbstractExtension
{
    public function __construct(
        private JsonBlockService $jsonBlockService,
        private LibraryImageService $libraryImageService
    ) {
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('getImages', [$this, 'getImages']),
            
        ];
    }

    public function getImages(string $itemType ,int $itemId,int $width,int $height, string $format) {
        $query = LibraryImageQuery::create();
   
        $images = $query
            ->useLibraryItemImageQuery()
            ->filterByItemType($itemType)
            ->filterByItemId($itemId)
            ->endUse();
        
      

        $results = [];

        foreach($images as $image) {

            $imageUrl = $this->libraryImageService->getImagePublicUrl(
                $image,
                $width,
                $height,
                $format
                );
          
          $results[] = [
            'URL' => $imageUrl,
            'ID' => $image->getId(),
            ];
        }
        return $results;
        
        
    }

   

}