// Logical operators

const carModel = "Mazda "
const carAge = 5

if (carModel === "Honda" && carAge <= 5) {
  console.log("You are eligible for a discount")
}

if (carModel === "Honda" || carAge <= 5) {
  console.log("You are NOT eligible for a discount")
}
