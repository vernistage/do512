define(function (require) {

    "use strict";

    // Vendor
    var $ = require('jquery');
    var Backbone = require('backbone');

    // Model
    var Data = Backbone.Model.extend({});

    // Collection
    var MetaData = Backbone.Collection.extend({

        model: Data,

        url: '/metadata.json'

    });

    return {
        Model: Data,
        Collection: new MetaData()
    };

});