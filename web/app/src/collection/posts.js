define([
    'backbone',
    'src/model/post'
], function (Backbone, Post) {

    var Posts = Backbone.Collection.extend({
        url: '/blog/posts',
        model: Post
    });

    return Posts;
});
