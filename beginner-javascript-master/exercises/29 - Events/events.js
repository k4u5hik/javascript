// const butts = document.querySelector(".butts");

// butts.addEventListener("click", function () {
//   console.log("Button Clicked!");
// });

// listen on multiple items

const buyButtons = document.querySelectorAll("button.buy");

// function buyItem() {
//     console.log("You bought something!");
// }

// function handleBuyButtonClick(e) {
//     e.addEventListener("click", buyItem);
// }

// buyButtons.forEach(handleBuyButtonClick);

// buyButtons.forEach(button => {
//     button.addEventListener("click", () => {
//     console.log('You clicked a button!');
// })
// });

function handleBuyButtonClick(event){
    console.log('You clicked a button!');
    console.log(event.target)
    console.log(event.currentTarget)
    console.log(parseFloat(event.target.dataset.price))

}

buyButtons.forEach(function(buyButton){
    buyButton.addEventListener('click', handleBuyButtonClick);
})