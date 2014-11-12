define(function (require) {

    "use strict";

    // Vendor
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var stateEvents = require('libs/stateEvents');

    // Template
    var tpl = require('text!app/navigation/header/tpl/nav.html');
    var template = _.template(tpl);

    return Backbone.View.extend({

        tagName: 'nav',

        className: 'navbar navbar-default navbar-fixed-top',

        initialize: function() {
            // Trigger for updating title
            stateEvents.on("update:title", function(title) {
                document.title = 'DoStuff | ' + title;
                // Add Nav Highlight
            }, this);

            this.render();
        },

        render: function() {
            this.$el.html(template());

            return this;
        }

    });

});