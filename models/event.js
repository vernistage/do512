// Namespace the app
var app = app || {};

app.event = Backbone.Model.extend({

  defaults:{
    eventTitle: "TBD",
    startTime: "TBD",
    venue: "TBD",
    image: null    
  }

});
