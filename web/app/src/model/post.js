define([
    'backbone',
    'src/config'
], function (Backbone, config) {

    var PostModel = Backbone.Model.extend({
        idAttribute: 'id',
        urlRoot: config.baseUrl + 'api/posts'
    });

    return PostModel;
});
