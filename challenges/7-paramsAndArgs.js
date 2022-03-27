// function hello(name) {
//   console.log(`Hello, ${name}!`)
// }
// hello("John")
// hello("Mary")
// hello("Joe")

// Function parameters are the names listed in the function's definition.
// Function arguments are the real values passed to the function.
// Parameters are initialized to the values of the arguments supplied.
// In the above example, the parameters is "name" and the argument is "John".

// 1inch is equal to 2.54cm

function convert(inches) {
  console.log("The result is " + inches * 2.54 + "cm")
  return "hello world"
}
const width = convert(1)
const height = convert(2)

const dimension = [width, height]
console.log(dimension)

// Output
// The result is 2.54cm
// The result is 5.08cm
// [ 'hello world', 'hello world' ]

// return is the value that is returned from the function.
// The function is called with the arguments supplied.
// The function is called with the parameters initialized to the arguments.
