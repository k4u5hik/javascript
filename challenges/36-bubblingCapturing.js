// allows selecting dynamic elements
// event propogation - order the events are fired
// bubbling - event bubbles up the DOM tree
// capturing - event fires from the bottom up
// event bubbling - clicked element first, then parent, then grandparent, etc., (bubbles up)
// event capturing - fires at the root and fires until it reaches the clicked element (captures)/target

const container = document.querySelector(".container");
const list = document.querySelector(".list-items");

function showBubbling(e) {
  console.log("current target", e.currentTarget);
  console.log("bubbling", e.target);
  if (e.target.classList.contains("link")) {
    e.target.classList.toggle("active");
  }
}

list.addEventListener("click", showBubbling);
// container.addEventListener("click", showBubbling);
// document.addEventListener("click", showBubbling);
// window.addEventListener("click", showBubbling);
