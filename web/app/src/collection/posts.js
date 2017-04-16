define([
    'backbone',
    'src/model/post',
    'src/config'
], function (Backbone, PostModel, config) {

    var PostsCollection = Backbone.Collection.extend({
        url: config.baseUrl + 'api/posts',
        model: PostModel
    });

    return PostsCollection;
});
