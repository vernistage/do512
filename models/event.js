// Single Model

var EventModel = Backbone.Model.extend({
});

// Collections

TodayCollection = Backbone.Collection.extend({
  model: EventModel,
  url: "http://do512.com/events/today.json",
  parse: function(response) {
    return response.events;
  }
});

TomorrowCollection = Backbone.Collection.extend({
  model: EventModel,
  url: "http://do512.com/events/tomorrow.json"
});

var TodayView = Backbone.View.extend({
  el: '#eventsTemplate',
  collection: TodayCollection,

  initialize: function(options){
    this.collection = options.collection;
    this.render()
  },

  render: function(){
    var theHtml = document.getElementById("eventsTemplate").innerHTML;
    var template = Handlebars.compile(theHtml);
    var eventData = (template({events: this.collection}));
    document.getElementById("eventData").innerHTML += eventData
  }
})

// Driver code

$(document).ready(function(){
  var todays_events = new TodayCollection();
  todays_events.fetch({
    dataType: 'json',
    success: function(collection, response, options){
      var eventer = new TodayView({collection: collection.parse(response, options)});
    }
  })
  var tomorrows_events = new TomorrowCollection();
  tomorrows_events.fetch({
    dataType: 'json'
  })

});
