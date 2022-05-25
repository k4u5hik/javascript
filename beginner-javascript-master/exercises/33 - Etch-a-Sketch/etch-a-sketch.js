// select the elements on the page - canvas, shake button

const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector(".shake");
const MOVE_AMOUNT = 10;

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

function draw({key}){
  console.log(key);
  //start a new path
  ctx.beginPath();
  //move to the last point
  ctx.moveTo(x, y);
  //draw a line to the new point
    switch(key){
        case 'ArrowUp':
            y -= MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y += MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            x -= MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            x += MOVE_AMOUNT;
            break;
        default:
            break;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}



// write a handler for the MediaKeys


function handleKey(e){
    if (e.key.includes('Arrow')){
        e.preventDefault();
        draw({key: e.key});
        // console.log(e.key);
        // switch(e.key){
        //     case 'ArrowUp':
        //         y -= 10;
        //         break;
        //     case 'ArrowDown':
        //         y += 10;
        //         break;
        //     case 'ArrowLeft':
        //         x -= 10;
        //         break;
        //     case 'ArrowRight':
        //         x += 10;
        //         break;
        // }
        // ctx.beginPath();
        // ctx.moveTo(x, y);
        // ctx.lineTo(x, y);
        // ctx.stroke();
    }
}

// clear/shake function

// listen for arrow keys
window.addEventListener('keydown', handleKey);