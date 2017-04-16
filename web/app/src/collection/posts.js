define([
    'backbone',
    'src/model/post'
], function (Backbone, Post) {

    var Posts = Backbone.Collection.extend({
        url: '/api/posts',
        model: Post
    });

    return Posts;
});
