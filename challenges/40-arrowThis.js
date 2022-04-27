// Arrow functions or fat arrow
// regular function: this refers to the left of the dot
// arrow function: this refers to it's current surrounding scope

// select elements with this

const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  console.log(this);
  this.style.color = "black";
});
