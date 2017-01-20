// Make json data into event objects
var events = new event({
  eventTitle: .title,
  startTime: .time,
  venue: .venue,
  image: .image
})

// driver code
console.log(events.toJSON())
