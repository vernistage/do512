// Single Model

var EventModel = Backbone.Model.extend({
});

var EventView = Backbone.View.extend({
  el: '#container',
  initialize: function(){
    this.render();
  },
  render: function(){
    // console.log(this.model.toJSON())
    // var js = this.model.toJSON();
    //  var template = Handlebars.compile($("#eventsTemplate").html());
    //  $(this.el).html(template({events: js}));
    //   return this;
  }
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
    // for (var index in this.collection) {
    //   var test = new EventModel(this.collection[index])
    //   var view = new EventView({model: test});
    // }
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
