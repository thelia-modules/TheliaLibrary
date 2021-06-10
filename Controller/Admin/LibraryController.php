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

namespace TheliaLibrary\Controller\Admin;

use Thelia\Controller\Admin\BaseAdminController;

/**
 * Class LibraryController.
 *
 * @author Damien Foulhoux <dfoulhoux@openstudio.fr>
 */
class LibraryController extends BaseAdminController
{
    public function libraryViewAction()
    {
        return $this->render('thelia-library');
    }
}
