const butts = document.querySelector(".butts");

butts.addEventListener("click", function () {
  console.log("Button Clicked!");
});

// listen on multiple items

const buyButtons = document.querySelectorAll("button.buy");

function buyItem() {
    console.log("You bought something!");
}

function handleBuyButtonClick(e) {
    e.addEventListener("click", buyItem);
}

buyButtons.forEach(handleBuyButtonClick);
