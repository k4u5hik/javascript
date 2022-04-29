// const name = "Kaushik";
// console.log(Array.from(name));

// function countTotal() {
//   let total = Array.from(arguments).reduce((total, curr) => (total += curr), 0);
//   console.log(total);
// }
// countTotal(24, 46, 56, 67, 78, 89, 90, 100);

const p = document.querySelectorAll("p");
const result = document.getElementById("result");
const second = document.getElementById("second");

// first way to convert node list to array
let newText = Array.from(p);
newText = newText.map((item) => `<span>${item.textContent}</span>`).join(" ");

result.innerHTML = newText;

// second way to convert node list to array
const text = Array.from(document.querySelectorAll("p"), (item) => {
  return `<span>${item.textContent}</span>`;
}).join(" ");

second.innerHTML = text;
