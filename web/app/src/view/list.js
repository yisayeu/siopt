define([
    'backbone',
    'underscore',
    'jquery',
    'src/view/listItem'
], function (Backbone, _, $, ListItemView) {

    /**
     * View for list of posts.
     */
    var ListView = Backbone.View.extend({
        template: _.template($('#list-template').html()),

        initialize: function() {
            // When the collection is reloaded, re-render this view.
            this.collection.bind('sync', _.bind(this.render, this));
        },

        /**
         * Renders list of posts.
         */
        render: function () {
            $(this.el).html(this.template());
            this.collection.each(_.bind(this.renderListItem, this));
            return this;
        },

        /**
         * Renders an item and appends it to the list.
         */
        renderListItem: function (post) {
            var listItemView = new ListItemView({model: post});

            listItemView.render();

            $(this.el).append(listItemView.el);
        }
    });

    return ListView;
});
