// Function parameters are the names listed in the function's definition.
// Function arguments are the real values passed to the function.
// Parameters are initialized to the values of the arguments supplied.
// In the above example, the parameters is "name" and the argument is "John".

// 1inch is equal to 2.54cm

function convertToCm(inches) {
  const newValue = inches * 2.54
  return newValue
}
const width = convertToCm(1)
const height = convertToCm(2)

const dimension = [width, height]
console.log(dimension)

// Output
// [2.54, 5.08]

// return is the value that is returned from the function.
// The function is called with the arguments supplied.
// The function is called with the parameters initialized to the arguments.
