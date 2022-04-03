// callback functions are used to pass functions as arguments to other functions
// this is a higher order function
// higher order functions are functions that take other functions as arguments
// or return functions as return values

// function greetMorning(name) {
//   const myName = "Kaushik"
//   console.log(`Good Morning ${name}, my name is ${myName} `)
// }

// function greetAfternoon(name) {
//   const myName = "Kaushik"
//   console.log(`Good Afternoon ${name}, my name is ${myName} `)
// }

// greetMorning("Madhura")
// greetAfternoon("Madhura")

//===========================

// function morning(){
//     return `Good Morning Bob`
// }

// function greet(name) {
//   const myName = "Kaushik"
//   console.log(`Good Afternoon ${name}, my name is ${myName} `)
// }

// greet("Madhura")
// greet("Yuki")

//===========================

// callback function example

function greeting(name) {
  alert("Hello " + name)
}

function processUserInput(callback) {
  var name = prompt("Please enter your name.")
  callback(name)
}

processUserInput(greeting)
