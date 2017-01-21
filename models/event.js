// Model
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
    this.$el.html(this.model.get('title'))
  }

});

// Collections
TodayCollection = Backbone.Collection.extend({
  model: EventModel,
  url: "http://do512.com/events/today.json",
  sync : function(method, collection, options) {
    options.dataType = "jsonp";
    return Backbone.sync(method, collection, options);
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
    console.log(this);
  }
})

// Driver code

$(document).ready(function(){
  var todays_events = new TodayCollection();
  var data
  todays_events.fetch({
    dataType: 'jsonp',
    success: function(collection, response, options){
      data = response.events;
    }
  })
  var tomorrows_events = new TomorrowCollection();
  tomorrows_events.fetch({
    dataType: 'jsonp'
  })

  var test = new EventModel({title: "bonjour"})
  var view = new EventView({model: test})
  var eventer = new TodayView({collection: data});
});
