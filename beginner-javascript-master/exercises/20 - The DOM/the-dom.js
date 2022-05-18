function init(){
    const p = document.querySelector('p')
    // console.log(p)
}

document.addEventListener('DOMContentLoaded', init)

const imgs = document.querySelectorAll('.item img')
const item2 = document.querySelector('.item2')
const item2Image = item2.querySelector('img')
const heading = document.querySelector('h2')
heading.textContent = "Kaushik's new heading"
// console.dir(heading.textContent)

// console.log(heading.innerText) // Aware of CSS styling
// console.log(heading.innerHTML)
// console.log(heading.outerHTML)
// console.log(heading.textContent)

const pizzaList = document.querySelector('.pizza')
console.log(pizzaList.textContent)
console.log(pizzaList.outerHTML)
pizzaList.insertAdjacentText("beforeend", ` Pizza is good! 🍕`);
console.log(pizzaList.textContent);
console.log(pizzaList.outerHTML);

const pic = document.querySelector('.photo')
pic.classList.add('open')
pic.classList.remove('cool')
// pic.classList.toggle('round')

function toggleRound(){
    pic.classList.toggle('round')
}

pic.addEventListener('click',toggleRound)