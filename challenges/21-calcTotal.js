const gas = [10, 20, 30]
const food = [5, 10, 15]

function calc(arr) {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  console.log(total)
}

calc(gas)
calc(food)
