<?php

namespace BlogBundle\Controller;

use BlogBundle\Entity\Post;
use FOS\RestBundle\Controller\FOSRestController;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use Symfony\Component\HttpFoundation\Response;

/**
 * @package BlogBundle
 */
class PostController extends FOSRestController
{
    /**
     * Gets a post.
     *
     * @ApiDoc
     *
     * @param Post $post
     *
     * @return Response
     */
    public function getPostAction(Post $post)
    {
        return $this->handleView($this->view($post));
    }

    /**
     * Gets a list of posts. Newest first.
     *
     * @ApiDoc
     *
     * @return Response
     */
    public function getPostsAction()
    {
        // TODO: implement pagination.

        $posts = $this
            ->getDoctrine()
            ->getRepository(Post::class)->findBy([], ['createdAt' => 'DESC'], 10);

        return $this->handleView($this->view($posts));
    }
}
