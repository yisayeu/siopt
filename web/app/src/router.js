define([
    'backbone',
    'src/view/app'
], function (Backbone, AppView) {

    var Router = Backbone.Router.extend({
        routes: {
            '': 'showList',
            'view/:id': 'showPost'
        },

        appView: new AppView(),

        showList: function () {
            this.appView.renderList();
        },

        showPost: function(id) {
            this.appView.renderPost(id);
        }
    });

    return Router;
});
