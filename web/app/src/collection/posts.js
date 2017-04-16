define([
    'backbone',
    'src/model/post'
], function (Backbone, Post) {
    'use strict';

    var Posts = Backbone.Collection.extend({
        url: '/blog/posts.json',
        model: Post
    });

    return Posts;
});
