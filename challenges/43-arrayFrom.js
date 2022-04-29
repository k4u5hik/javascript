const name = "Kaushik";
console.log(Array.from(name));

function countTotal() {
  let total = Array.from(arguments).reduce((total, curr) => (total += curr), 0);
  console.log(total);
}
countTotal(24, 46, 56, 67, 78, 89, 90, 100);
