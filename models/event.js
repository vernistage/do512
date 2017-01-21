// Namespace the app
EventModel = Backbone.Model.extend({
  defaults: {
    "title": "TBD",
    "begin_time":"<p>DESCRIPTION TBD</p>",
    "venue": "TBD",
    "image": null
  },
  initialize: function(){
  }
});

EventCollection = Backbone.Collection.extend({
  model: EventModel
});

$(document).ready(function(){
  var event = new EventModel();
  var today_events = new EventCollection([]);
  var tom_events = new EventCollection([]);
  console.log(today_events.size())
});
