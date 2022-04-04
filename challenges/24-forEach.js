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

const people = [
  { name: "John", age: 20, job: "developer" },
  { name: "Jane", age: 21, job: "designer" },
  { name: "Joe", age: 22, job: "teacher" },
]

function showPerson(person) {
  console.log(person.job.toUpperCase())
}

people.forEach(showPerson)
