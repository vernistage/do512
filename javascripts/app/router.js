define(function(require) {

  "use strict";

  // Vendor
  var $ = require('jquery');
  var Backbone = require('backbone');

  // Libs
  var ViewHandler = require('libs/viewHandler');

  // Elements
  var $body = $("body");
  var $content = $(".content");
  
  // Collections

  // Navigation Views
  var HeaderView = require('app/navigation/header/header');

  // Page Views
  var WhoView = require('app/who/who');
  var WhatView = require('app/what/what');
  var WhereView = require('app/where/where');
  var HowView = require('app/how/how');
  var ContactView = require('app/contact/contact');
    
  return Backbone.Router.extend({

    routes: {
		  '': 'who',
      '/': 'who',
      'who': 'who',
      'what': 'what',
      'where': 'where',
      'how': 'how',
      'contact': 'contact'
    },

    initialize: function() {
      this.addHeader();
    },

    addHeader: function() {
      var headerView = new HeaderView();

      $body
        .prepend(headerView.$el);
    },

    who: function() {
      var whoView = new WhoView();

      ViewHandler.setCurrent(whoView, "Who");
    },

    what: function() {
      var whatView = new WhatView();

      ViewHandler.setCurrent(whatView, "What");
    },

    where: function() {
      var whereView = new WhereView();

      ViewHandler.setCurrent(whereView, "Where");
    },

    how: function() {
      var howView = new HowView();

      ViewHandler.setCurrent(howView, "How");
    },

    contact: function() {
      var contactView = new ContactView();

      ViewHandler.setCurrent(contactView, "Contact");
    }

  });

});