define(function (require) {

    "use strict";

    // Vendor
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var stateEvents = require('libs/stateEvents');

    // Models/Collections
    var MetaData = require('app/navigation/header/collection/metadata');

    // Template
    var tpl = require('text!app/navigation/header/tpl/nav.html');
    var template = _.template(tpl);

    var frag = document.createDocumentFragment();

    return Backbone.View.extend({

        tagName: 'nav',

        className: 'navbar navbar-default navbar-fixed-top',

        initialize: function() {
            // Trigger for updating title
            stateEvents.on("update:title", function(title) {
                document.title = 'DoStuff | ' + title;

                this.$el
                    .find('.active')
                    .removeClass('active')
                    .end()
                    .find('.nav-' + title.replace(/\s+/g, '-').toLowerCase())
                    .addClass('active');
            }, this);

            MetaData.Collection.fetch({reset:true});

            MetaData.Collection.on('reset', this.render, this);
        },

        render: function() {
            var pages = MetaData.Collection.first().get("pages");

            _.each(pages, function(data) {

                var title = data.title.replace(/\s+/g, '-').toLowerCase();
                var hashPath = data.path.replace('/', '#');
                var li = document.createElement("li");

                li.className = 'nav-' + title;
                li.innerHTML = '<a href="' + hashPath + '">' + data.title + '</a></li>';
                frag.appendChild(li);

            }, this);

            this.$el
                .html(template())
                .find('.navbar-nav')
                .append(frag);

            return this;
        }

    });

});