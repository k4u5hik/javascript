const person = {
  name: "John",
  age: 30,
  job: "developer",
};

const newPerson = { ...person, city: "New York", name: "Susan" };
console.log(person);
console.log(newPerson);
