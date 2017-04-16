define([
    'backbone',
    'underscore',
    'jquery',
    'src/view/list',
    'src/view/post',
    'src/collection/posts',
    'src/model/post'
], function (Backbone, _, $, ListView, PostView, PostsCollection, PostModel) {

    var App = Backbone.View.extend({
        el: $("#app"),

        /**
         * Renders posts list.
         */
        renderList: function () {
            var postsCollection = new PostsCollection();
            var listView = new ListView({collection: postsCollection});

            postsCollection.fetch();
            $(this.el).html(listView.el);
        },

        /**
         * Renders a single post.
         */
        renderPost: function (id) {
            var postModel = new PostModel({'id': id});
            var postView = new PostView({model: postModel});

            postModel.fetch();
            $(this.el).html(postView.el);
        }
    });

    return App;
});
