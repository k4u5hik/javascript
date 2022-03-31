// function fullName(firstName, lastName) {
//   const fullName = `${firstName} ${lastName}`
//   return fullName.toUpperCase()
// }
// const actualName = fullName("John", "Doe")
// console.log(actualName)

function fullName({ firstName, lastName }) {
  const fullName = `${firstName} ${lastName}`
  return fullName.toUpperCase()
}

console.log(fullName({ firstName: "John", lastName: "Doe" }))
