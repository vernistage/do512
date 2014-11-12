define(function(require) {
	"use strict";

	// Libs
	var $ = require('jquery');
	var Backbone = require('backbone');

	// Template
    var tpl = require('text!app/who/tpl/thing.html');
    var template = _.template(tpl);

	return Backbone.View.extend({
		className: 'col-md-3',

		render: function() {
		    this.$el.html(template(this.model.toJSON()));
		    
		    return this;
		}
	});

});