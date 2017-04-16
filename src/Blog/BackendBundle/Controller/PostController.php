<?php

namespace Blog\BackendBundle\Controller;

use Blog\BackendBundle\Entity\Post;
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
        // TODO: enable caching.
        // TODO: move this stuff into a separate service.

        $posts = $this
            ->getDoctrine()
            ->getRepository(Post::class)->findBy([], ['createdAt' => 'DESC'], 10);

        return $this->handleView($this->view($posts));
    }
}
