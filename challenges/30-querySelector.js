// querySelector is a method that returns the first element that matches a specified CSS selector(s) in the document.
// querySelectorAll is a method that returns a static NodeList of all the elements that match a specified CSS selector(s) in the document.

const result = document.querySelector("#result")
result.style.backgroundColor = "lightblue"

const item = document.querySelector("special")
// console.log(item)

const lastItem = document.querySelector("li:last-child")
// console.log(lastItem)

const list = document.querySelectorAll(".special")
console.log(list)

list.forEach(function (item) {
  console.log(item)
  item.style.color = "yellow"
})
