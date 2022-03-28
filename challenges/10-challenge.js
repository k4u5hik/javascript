const car = {
  make: "Honda",
  model: "Civic",
  year: 2000,
  color: ["red", "blue", "green"],
  passengers: 4,
  hybrid: false,
  mileage: 0,
  started: false,
  start: function () {
    this.started = true
  },
  stop() {
    console.log("stopped")
  },
}

console.log(car.make)
console.log(car.model)
console.log(car.year)
console.log(car.color[0])
console.log(car.passengers)
console.log(car.hybrid)
console.log(car.mileage)
console.log(car.started)
car.start()
console.log(car.started)
car.stop()
