
    // const p = document.querySelector('#para1');
    // const c = document.querySelector('.classy');
    // console.log(p)
    // console.log(c)

// function result(price,qty) {
//     const total = price*qty
//     return total
// }

// // const myTotal = result(25,2)
// console.log(result(50,5));


// const total = (a,b=3) => a+b
// console.log(total(5));

// const makeABaby = (name,age) => {
//     return `${name} is a ${age} year old baby.`
// }
// console.log(makeABaby("Mooshoo",5));

// Callback functions
// Click Callback

const button = document.querySelector('.clickme');

function handleClick() {
    console.log('Clicked');
}
button.addEventListener('click',handleClick);