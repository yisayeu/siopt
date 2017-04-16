<?php

namespace BlogBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;

/**
 * @package BlogBundle
 */
class PostController extends FOSRestController
{
    /**
     * @ApiDoc
     *
     * @param int $id
     */
    public function getPostAction($id)
    {
        $view = $this->view(['requestedId' => $id]);

        return $this->handleView($view);
    }
}
