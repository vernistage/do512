define(function(require) {
	"use strict";

	// Libs
	var $ = require('jquery');
	var Backbone = require('backbone');

	// Models/Collections
	var Things = require('app/who/collection/things');

	// Template
    var tpl = require('text!app/who/tpl/who.html');
    var template = _.template(tpl);

    // SubViews
    var ThingView = require('app/who/thing');

    // var tplThing = require('text!app/who/tpl/thing.html');
    // var templateThing = _.template(tplThing);

    var frag = document.createDocumentFragment();
	
	return Backbone.View.extend({
		className: 'who',

		initialize: function() {
			Things.Collection.fetch({reset:true});

			Things.Collection.on('reset', this.render, this);
		},

		render: function() {
			this.$el.html(template());

			Things.Collection.each(function(thing) {

				var x = new ThingView({
		        	model: thing
		        });

		        frag.appendChild(x.render().el);

			}, this);

			this.$el.append(frag);
			
			return this;
		}
	});

});
