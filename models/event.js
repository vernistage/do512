var EventModel = Backbone.Model.extend({
});

TodayCollection = Backbone.Collection.extend({
  model: EventModel,
  url: "http://do512.com/events/today.json",
  parse: function(response) {
    return response.events;
  }
});
TomorrowCollection = Backbone.Collection.extend({
  model: EventModel,
  url: "http://do512.com/events/tomorrow.json",
  parse: function(response) {
    return response.events;
  }
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
var TomView = Backbone.View.extend({
  el: '#tomTemplate',
  collection: TomorrowCollection,
  initialize: function(options){
    this.collection = options.collection;
    this.render()
  },
  render: function(){
    var theHtml = document.getElementById("tomTemplate").innerHTML;
    var template = Handlebars.compile(theHtml);
    var data = (template({events: this.collection}));
    document.getElementById("tomData").innerHTML += data
  }
})
$(document).ready(function(){
  var todays_events = new TodayCollection();
  todays_events.fetch({
    dataType: 'jsonp',
    success: function(collection, response, options){
      var eventer = new TodayView({collection: collection.parse(response, options)});
    }
  })
  $('#today').click(function(){
    $("#tomData").hide()
    $("#eventData").show()
  });
  $('#tomorrow').click(function(){
    $("#eventData").hide()
    $("#tomData").show()
    var tomorrows_events = new TomorrowCollection();
    tomorrows_events.fetch({
      dataType: 'jsonp',
      success: function(collection, response, options){
        var eventer = new TomView({collection: collection.parse(response, options)});
      }
    })
  });
});
// Helpers
Handlebars.registerHelper('dateFormat', function(context, block) {
  return moment(context).format("h:mm a");
});
