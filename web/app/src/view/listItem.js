define([
    'backbone',
    'underscore',
    'jquery',
], function (Backbone, _, $) {

    var ListItemView = Backbone.View.extend({
        template: _.template($('#list-item-template').html()),

        /**
         * Renders a signle list item.
         */
        render: function () {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return ListItemView;
});
