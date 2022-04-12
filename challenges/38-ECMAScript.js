// Define, Update and Redefine:
// - You can define, update and redefine VAR
// - You can define and update LET but cannot redefine it
// - You can define CONST but cannot update or redefine it

// Scope:
// - LET & CONST are block scoped - anything within {} - same nesting level only
// - VAR is (so can LET & CONST be) function scoped - can be accessible within that function and cannot be used outside that function

// Arrow Functions are a new way to write functions in ES6. They are a shorter syntax for writing functions.

const sayHi = () => {
  console.log("Hi");
};
sayHi();

const sayHi2 = (name) => console.log("hi2");
sayHi2();

const double = (num) => num * 2;
const number = double(2);
console.log(number);

// two parameters and more than one line
const multiply = (num1, num2) => {
  const result = num1 * num2;
  return result;
};
const number2 = multiply(2, 3);
console.log(number2);

//return object
const object = () => ({ name: "John", age: 30 });
const obj = object();
console.log(obj);

// arrow functions as callback functions
const numbers = [1, 2, 3, 4, 5];
const big = numbers.filter((num, index) => {
  console.log(index);
  return num > 3;
});
console.log(big);

// arrow functions as event handlers

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  e = "clicked";
  console.log(e);
});
