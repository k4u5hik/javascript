// forEach is a method that takes a callback function as an argument.
// The callback function is called for each element in the array.
// The callback function is called with three arguments:
// 1. The current element being processed in the array.
// 2. The index of the current element being processed in the array.
// 3. The array itself.
// The callback function must return a value.
// The return value is ignored.
// The forEach method returns undefined.
// The following code logs the numbers 1 through 5 to the console.
// The forEach method is called on the array [1, 2, 3, 4, 5].
// does not return a new array.

const people = [
  { name: "John", age: 20, job: "designer" },
  { name: "Jane", age: 21, job: "developer" },
  { name: "Joe", age: 22, job: "teacher" },
]

// function showPerson(person) {
//   console.log(person.job.toUpperCase())
// }

// people.forEach(showPerson)

// map does return a new array.
// map does not change size of the original array.
// map uses values from the original array as arguments to the callback function.

// const ages = people.map(function (person) {
//   return `${person.name} is ${person.age} years old.`
// })

// document.body.innerHTML = ages.join("<br>")
// console.log(ages)

// filter method returns a new array.
// filter does not change the size of the original array.
// filter uses values from the original array as arguments to the callback function.

const youngPeople = people.filter(function (person) {
  return person.age < 21
})

const developers = people.filter(function (person) {
  return person.job === "developer"
})

console.log(youngPeople)
console.log(developers)
