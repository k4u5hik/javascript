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

// arrow function as a callback function
const numbers = [1, 2, 3, 4, 5];
const big = numbers.filter((number) => number > 2);
console.log(big);

// callback function
const people = ["Kaushik", "Krishna", "Karthik"];
const greeting = (name) => `Hello ${name}`;
const greetPeople = (people, greeting) => {
  people.forEach((person) => {
    console.log(greeting(person));
  });
};
greetPeople(people, greeting);

// arrow function as an event listener callback function
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  console.log("button clicked");
});
