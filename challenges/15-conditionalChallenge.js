const person1 = {
  name: "John",
  age: 30,
  status: "",
}

const person2 = {
  name: "Jane",
  age: 15,
  status: "",
}

if (person1.age >= 18) {
  person1.status = "resident"
} else {
  person1.status = "tourist"
}

if (person2.age >= 18) {
  person2.status = "resident"
} else {
  person2.status = "tourist"
}

console.log(person1.status)
console.log(person2.status)
