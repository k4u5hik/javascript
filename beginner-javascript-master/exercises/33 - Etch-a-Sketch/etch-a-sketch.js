// select the elements on the page - canvas, shake button

const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector(".shake");

// setup our canvas for drawing
// make a variable called height and width from the same properties on our canvas
const  {width, height} = canvas;

//create random x and y starting points on the canvas

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // start the drawing path
ctx.moveTo(x, y); // start at this point
ctx.lineTo(x, y); // draw a line to this point
ctx.stroke(); // draw it

// write a draw function



// write a handler for the MediaKeys

// clear/shake function

// listen for arrow keys