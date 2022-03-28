// Conditional statements

if (true) {
  console.log("This is true")
}

if (2 > 1) {
  console.log("2 is greater than 1")
}

const value = 2 > 1

if (value) {
  console.log("Value is true")
}

const value2 = 1 > 2

if (value2) {
  console.log("Value 2 is true")
} else {
  console.log("Value 2 is false")
}

const num1 = 4
const num2 = 6
const result = num1 === num2
if (num1 > num2) {
  console.log("num1 is greater than num2")
} else if (result) {
  console.log("num1 is equal to num2")
} else {
  console.log("num1 is less than num2")
}

const trueExpression = false
if (!trueExpression) {
  console.log("Output 1")
} else if (trueExpression) {
  console.log("Output 2")
}
