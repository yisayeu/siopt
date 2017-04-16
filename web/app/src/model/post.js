define([
    'backbone'
], function (Backbone) {

    var Post = Backbone.Model.extend({
        idAttribute: 'id',
        urlRoot: '/blog/posts'
    });

    return Post;
});
