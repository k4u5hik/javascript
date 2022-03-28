const add = function (a, b) {
  return a + b
}
const firstValue = add(1, 2)
const secondValue = add(firstValue, 3)
const thirdValue = add(secondValue, 4)

const values = [firstValue, secondValue, thirdValue]
console.log(values)
