<?php

namespace Blog\BackendBundle\DataFixtures\ORM;

use Blog\BackendBundle\Entity\Post;
use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;

/**
 * @package Blog
 */
class LoadUserData implements FixtureInterface
{
    /**
     * {@inheritDoc}
     */
    public function load(ObjectManager $manager)
    {
        $post1 = new Post();
        $post1->setTitle('Lorem ipsum dolor sit amet');
        $post1->setBody('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc arcu. Aliquam eleifend tortor in quam blandit pellentesque. In hac habitasse platea dictumst. Sed et molestie libero. Nunc vel est vitae odio convallis vulputate. In eu felis et diam blandit cursus nec eget enim. Sed eget porta diam.');

        $manager->persist($post1);

        $post1 = new Post();
        $post1->setTitle('Aenean interdum ante quis ante maximus');
        $post1->setBody('Aenean interdum ante quis ante maximus, et auctor neque efficitur. Etiam quis magna non eros commodo volutpat. Ut vulputate sit amet mauris ut tristique. Aliquam eros augue, posuere ac volutpat ut, mollis eu sem. In hac habitasse platea dictumst. Donec ac odio sit amet quam rhoncus viverra. Praesent nec elit feugiat neque pretium tincidunt. Pellentesque vitae dignissim nisl. Curabitur nec justo ultrices, lobortis tellus quis, feugiat nisi. Nam lobortis ex placerat, vestibulum dolor quis, imperdiet lectus. Phasellus faucibus tellus nec laoreet gravida.');

        $manager->persist($post1);

        $post1 = new Post();
        $post1->setTitle('Nunc est lacus, ornare eget dignissim ut');
        $post1->setBody('Nunc est lacus, ornare eget dignissim ut, dictum non tortor. Aliquam interdum lectus velit, sit amet consectetur nibh venenatis vitae. Curabitur suscipit varius tortor, ut molestie nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ante lorem, mollis in tristique vel, luctus sit amet purus. Proin faucibus dignissim quam vel egestas. Suspendisse iaculis sollicitudin turpis, id pharetra diam lacinia non. Sed venenatis leo dapibus tortor laoreet tristique.');

        $manager->persist($post1);

        $post1 = new Post();
        $post1->setTitle('Phasellus blandit');
        $post1->setBody('Phasellus blandit, elit in pharetra semper, libero elit pellentesque purus, et fermentum mi velit et ante. Proin eget egestas nisi, quis sagittis tortor. Vestibulum augue lorem, facilisis eu malesuada vel, interdum et sem. Nam dui elit, imperdiet nec orci ut, efficitur auctor libero. Pellentesque vitae libero non elit mattis euismod. Curabitur id felis id orci fringilla convallis vel ac lacus. Donec aliquam arcu consequat, feugiat nulla ac, sollicitudin magna.');

        $manager->persist($post1);


        $manager->flush();
    }
}
