const numbers = [1, 2, 3, 4, 5];
console.log(Math.max(...numbers));

// spread operator is used to pass an array as arguments to a function

const john = ["John", "Smith", 1990, "designer", false];

const sayHello = (firstName, lastName, dob) => {
  console.log(firstName + " " + lastName + " " + dob);
};

sayHello(...john);
