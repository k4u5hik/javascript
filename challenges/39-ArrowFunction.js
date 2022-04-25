const sayHi = (name) => {
  console.log(`Hello ${name}`);
};
sayHi("Kaushik");

const double = (value) => value * 2;
const num = double(2);
console.log(num);

// two parameters
const multiply = (a, b) => a * b;
const result = multiply(2, 3);
console.log(result);

// returning an object
const getPerson = () => ({
  name: "Kaushik",
  age: 25,
});
const person = getPerson();
console.log(person);
