// Make json data into event objects
var events = new event({
  eventTitle: this.title,
  startTime: this.time,
  venue: this.venue,
  image: this.image
})

// driver code
console.log(events.toJSON())
