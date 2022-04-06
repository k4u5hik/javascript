// HTML Collection = array-like object
// index, length property but not array methods (forEach, map, filter, etc.)

// querySelectorAll() returns a NodeList
// querySelector() returns a single element
// NodeList - objects are collection of nodes
// can run forEach() on NodeList
// turn them into an array - spread operator[...]
// after that can use any array properties

const headings = document.getElementsByTagName("h2")
console.log(
  "🚀 ~ file: 29-getElementsByTagname.js ~ line 12 ~ headings",
  headings
)

headings[0].style.color = "red"

const items = document.getElementsByTagName("li")
items[2].style.color = "orange"

const betterItems = [...items]
betterItems.forEach((item) => {
  console.log(item)
})

console.log(items)
console.log(
  "🚀 ~ file: 29-getElementsByTagname.js ~ line 23 ~ betterItems",
  betterItems
)
