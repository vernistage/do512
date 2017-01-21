// Namespace the app
EventModel = Backbone.Model.extend({
  defaults: {
    "title": "TBD",
    "begin_time":"<p>DESCRIPTION TBD</p>",
    "venue": "TBD",
    "image": null
  }
});

TodayCollection = Backbone.Collection.extend({
  model: EventModel,
  urlRoot: "http://do512.com/events/today.json"
});

TomorrowCollection = Backbone.Collection.extend({
  model: EventModel,
  urlRoot: "http://do512.com/events/tomorrow.json"
});

$(document).ready(function(){
  var event = new EventModel();
  var today_events = new TodayCollection([]);
  var tom_events = new TomorrowCollection([]);
  console.log(today_events.size())
});
