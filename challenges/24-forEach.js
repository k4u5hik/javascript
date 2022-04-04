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

// const people = [
//   { name: "John", age: 20, job: "designer", id: 1 },
//   { name: "Jane", age: 21, job: "developer", id: 2 },
//   { name: "Joe", age: 22, job: "teacher", id: 3 },
// ]

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

// const youngPeople = people.filter(function (person) {
//   return person.age < 21
// })

// const developers = people.filter(function (person) {
//   return person.job === "developer"
// })

// console.log(youngPeople)
// console.log(developers)

//find method returns the first element in the array that satisfies the provided testing function.
//find does not change the size of the original array.
//find uses values from the original array as arguments to the callback function.
// find returns a single instance of the first element in the array that satisfies the provided testing function.
// find returns undefined if no element in the array satisfies the provided testing function.
// find is great for finding unique values in an array.

// const person = people.find(function (person) {
//   return person.id === 2
// })

// console.log(person)

// reduce method returns a single value.
// reduce does not change the size of the original array.
// reduce uses values from the original array as arguments to the callback function.
// reduce returns a single value. The value returned by the callback function is the accumulator.
// The accumulator is the result of the previous callback function invocation.
// The first invocation of the callback function is with accumulator set to the first element in the array and the second invocation with accumulator set to the result of the first invocation.
// The third invocation with accumulator set to the result of the second invocation.
// The fourth invocation with accumulator set to the result of the third invocation.

const people = [
  { name: "John", age: 20, job: "designer", id: 1 },
  { name: "Jane", age: 21, job: "developer", id: 2 },
  { name: "Joe", age: 22, job: "teacher", id: 3 },
]

const total = people.reduce(function (accumulator, person) {
  return accumulator + person.age
}, 0)

console.log(total) // 63
