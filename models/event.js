// Namespace the app
EventModel = Backbone.Model.extend({
  initialize: function(){
  }
});

$(document).ready(function(){
  var event = new EventModel({title: "best"})
  alert("the event title is" + event.get(title) + "!")
});
