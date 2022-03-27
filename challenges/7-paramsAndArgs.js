// 1 inch is equal to 2.54cm

function convertToCm(inches) {
  // Function parameters are the names listed in the function's definition.
  // The function is called with the parameters initialized to the arguments.
  const newValue = inches * 2.54
  return newValue
  // return is the value that is returned from the function.
}
const width = convertToCm(1)
// Function arguments are the real values passed to the function.
// The function is called with the arguments supplied.
// Parameters are initialized to the values of the arguments supplied.
const height = convertToCm(2)
// Function arguments are the real values passed to the function.
// The function is called with the arguments supplied.
// Parameters are initialized to the values of the arguments supplied.

const dimensionInCm = [width, height]
console.log(dimensionInCm)

// Output
// [2.54, 5.08]
