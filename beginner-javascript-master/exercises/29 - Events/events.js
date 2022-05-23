const butts = document.querySelector(".butts");

butts.addEventListener("click", function () {
  console.log("Button Clicked!");
});

// listen on multiple items

const buyButtons = document.querySelectorAll("button.buy");

function buyItem() {
    console.log("You bought something!");
}

buyButtons.forEach(function (buyButton) {
    console.log('Binding the buy button')
    buyButton.addEventListener("click", buyItem);
}  // end of forEach
); // end of addEventListener
