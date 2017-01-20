// Namespace the app
EventModel = Backbone.Model.extend({
  initialize: function(){
  }
});

$(document).ready(function(){
  var event = new EventModel({name: "best"});
  alert("hello" + event.get("name"));
});
