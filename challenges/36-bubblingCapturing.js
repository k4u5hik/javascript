// allows selecting dynamic elements
// event propagation - order the events are fired
// bubbling - event bubbles up the DOM tree
// capturing - event fires from the bottom up
// event bubbling - clicked element first, then parent, then grandparent, etc., (bubbles up) - default
// event capturing - fires at the root and fires until it reaches the clicked element (captures)/target

const container = document.querySelector(".container");
const list = document.querySelector(".list-items");

function showBubbling(e) {
  console.log("current target", e.currentTarget);
  //   console.log("bubbling", e.target);
  //   if (e.target.classList.contains("link")) {
  //     console.log("you clicked a link");
  //   }
}

function stopPropagation(e) {
  console.log("You clicked on a list (stopped propagation)");
  e.stopPropagation();
}

list.addEventListener("click", showBubbling, { capture: true });
container.addEventListener("click", showBubbling, { capture: true });
document.addEventListener("click", showBubbling, { capture: true });
window.addEventListener("click", showBubbling, { capture: true });

// returns inverse to the order of the events - window first, then document, then container, then list
