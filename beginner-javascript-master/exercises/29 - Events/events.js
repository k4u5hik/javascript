const butts = document.querySelector(".butts");

butts.addEventListener("click", function () {
  console.log("Button Clicked!");
});

// listen on multiple items

const buyButtons = document.querySelectorAll("button.buy");
console.log(buyButtons);