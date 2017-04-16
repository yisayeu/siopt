requirejs.config({
    baseUrl: 'app',
    paths: {
        backbone: 'vendor/backbone/backbone',
        underscore: 'vendor/underscore/underscore',
        jquery: 'vendor/jquery/jquery'
    }
});

require([
    'backbone',
    'src/router'
], function (Backbone, Router) {
    var router = new Router();

    Backbone.history.start();
});
