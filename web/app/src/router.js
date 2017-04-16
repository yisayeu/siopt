define([
    'backbone',
    'src/collection/posts'
], function (Backbone, Posts) {
    'use strict';

    var Router = Backbone.Router.extend({
        routes: {
            '': 'listPosts'
        },

        listPosts: function () {

        }
    });

    return Router;
});
