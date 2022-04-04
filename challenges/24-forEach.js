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
  { name: "John", age: 20, job: "developer" },
  { name: "Jane", age: 21, job: "designer" },
  { name: "Joe", age: 22, job: "teacher" },
]

// function showPerson(person) {
//   console.log(person.job.toUpperCase())
// }

// people.forEach(showPerson)

// map does return a new array.
// map does not change size of the original array.
// map uses values from the original array as arguments to the callback function.

console.log(map1)
// expected output: Array [2, 8, 18, 32]

const ages = people.map((person) => person.age)
console.log(ages)
