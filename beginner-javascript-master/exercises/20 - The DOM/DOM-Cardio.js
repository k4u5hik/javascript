// Make a div

const div = document.createElement('div');

// add a class of wrapper to it

div.classList.add('wrapper');

// put it into the body

document.body.appendChild(div);

// make an unordered list
// add three list items with the words "one, two, three" in them

const ul = /*html*/ `
<ul>
  <li>one</li>
  <li>two</li>
  <li>three</li>
  </ul>
  `;

// put that list into the above wrapper

    div.innerHTML = ul;

// create an image

const img = document.createElement('img');

// set the source to an image

img.src = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

// set the width to 250
img.width = 250;
img.height = 250;

// add a class of cute

img.classList.add('cute');

// add an alt of Cute Puppy

    img.alt = 'Cute Puppy';
// Append that image to the wrapper

    div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above




    const myHTML = /*html*/ 
    `
    <div class = "myDiv">
        <p>This is the first paragraph</p>
        <p>This is the second paragraph</p>
    </div>
    `;

    const ulElement = div.querySelector('ul');
    ulElement.insertAdjacentHTML('beforebegin', myHTML);

    // remove the first paragraph
    const myDiv = div.querySelector('.myDiv');
    myDiv.firstElementChild.remove();

    // add a class to the second paragraph called warning
    myDiv.lastElementChild.classList.add('warning');


// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard (name, age, height) {
 const html = /*javascript*/ `
 <div class = "playerCard">
 <h2>${name} - Age: ${age}</h2>
 <p>His height is ${height} and in dog years this person would be ${
     age * 7
   } human equivalent age. That would be a tall dog</p>
 <button class="delete" type="button">&times; Delete</button>
 </div>
`;
 return html
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
// make 4 player cards using generatePlayerCard
let cardsHTML = generatePlayerCard('Kaushik', '39', '171');
cardsHTML += generatePlayerCard('Sachin', '21', '154');
cardsHTML += generatePlayerCard('Scott', '25', '165');
cardsHTML += generatePlayerCard('Tushar', '34', '189');
// console.log(cardsHTML);
cards.innerHTML = cardsHTML;
div.insertAdjacentElement('beforebegin', cards);
// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
