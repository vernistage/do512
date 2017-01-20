// Namespace the app
EventModel = Backbone.Model.extend({

  initialize: function(){
  }

});

$(document).ready(function(){
  var event = new EventModel({title: "best"})
  alert("the event titles is" + event.get(title) + "!")
});
