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

namespace TheliaLibrary\Model;

use TheliaLibrary\Model\Base\LibraryImage as BaseLibraryImage;
use TheliaLibrary\Service\LibraryImageFileNamer;

/**
 * Skeleton subclass for representing a row from the 'library_image' table.
 *
 * You should add additional methods to this class to meet the
 * application requirements.  This class will only be generated as
 * long as it does not already exist in the output directory.
 */
class LibraryImage extends BaseLibraryImage
{
    /**
     * A video of the library: served whole by the video route, never by the
     * image renderings.
     */
    public function isVideo(): bool
    {
        return \in_array($this->getMimeType(), LibraryImageFileNamer::VIDEO_MIME_TYPES, true);
    }
}
