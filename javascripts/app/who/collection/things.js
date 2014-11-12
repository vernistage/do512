define(function (require) {

    "use strict";

    // Vendor
    var $ = require('jquery');
    var Backbone = require('backbone');

    // Model
    var Thing = Backbone.Model.extend({});

    // Collection
    var Things = Backbone.Collection.extend({

        model: Thing,

        url: '/things.json'

    });

    return {
        Model: Thing,
        Collection: new Things()
    };

});