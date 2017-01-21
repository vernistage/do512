// Single Model

EventModel = Backbone.Model.extend({
  // defaults: {
  // }
});

var EventView = Backbone.View.extend({
  el: '#container',

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html(this.model.toJSON().title)
  }

});

// Collections

TodayCollection = Backbone.Collection.extend({
  model: EventModel,
  url: "http://do512.com/events/today.json",
  // sync: function(method, collection, options) {
  //   options.dataType = "jsonp";
  //   return Backbone.sync(method, collection, options);
  // },
  parse: function(response) {
    return response.events;
  }
});

TomorrowCollection = Backbone.Collection.extend({
  model: EventModel,
  url: "http://do512.com/events/tomorrow.json"
});

var TodayView = Backbone.View.extend({
  el: '#container',
  collection: TodayCollection,

  initialize: function(options){
    this.collection = options.collection;
    this.render()
  },

  render: function(){
    for (var index in this.collection) {
      var test = new EventModel(this.collection[index])
      var view = new EventView({model: test});
    }
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
