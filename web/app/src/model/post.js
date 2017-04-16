define([
    'backbone'
], function (Backbone) {
    'use strict';

    var Post = Backbone.Model.extend({
        idAttribute: 'id'
    });

    return Post;
});
