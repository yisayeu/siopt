define([
    'backbone',
    'underscore',
    'jquery',
], function (Backbone, _, $) {

    /**
     * View for a single post.
     */
    var PostView = Backbone.View.extend({
        template: _.template($('#post-template').html()),

        initialize: function() {
            // When the model is reloaded, re-render this view.
            this.model.bind('sync', _.bind(this.render, this));
        },

        /**
         * Renders a signle post.
         */
        render: function () {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return PostView;
});
