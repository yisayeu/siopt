define([
    'backbone',
    'underscore',
    'jquery',
], function (Backbone, _, $) {

    var PostView = Backbone.View.extend({
        template: _.template($('#post-template').html()),

        initialize: function() {
            this.model.bind('sync', _.bind(this.render, this));
        },

        /**
         * Renders a signle list item.
         */
        render: function () {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return PostView;
});
