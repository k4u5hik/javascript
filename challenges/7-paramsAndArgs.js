// 1 inch is equal to 2.54cm

function convertToCm(inches) {
  const cmValue = inches * 2.54
  return cmValue
}
// Function parameters are the names listed in the function's definition.
// The function is called with the parameters initialized to the arguments.
// return is the value that is returned from the function.
// inches is the parameter.

const widthInInches = convertToCm(12)
const heightInInches = convertToCm(23)
// Function arguments are the real values passed to the function.
// The function is called with the arguments supplied.
// Parameters are initialized to the values of the arguments supplied.
// 12 and 23 are the arguments.

const dimensionInCm = [widthInInches, heightInInches]
console.log(dimensionInCm)

// Output
// [54.8, 91.6]
