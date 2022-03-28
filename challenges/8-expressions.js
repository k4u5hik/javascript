function addValues(a, b) {
  return a + b
}

const firstValue = addValues(1, 2)
const secondValue = addValues(firstValue, 3)
const thirdValue = addValues(secondValue, 4)

const values = [firstValue, secondValue, thirdValue]
console.log(values)
