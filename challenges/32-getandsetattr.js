const first = document.querySelector(".first");
const idValue = first.getAttribute("id");
console.log("🚀 ~ file: 32-getandsetattr.js ~ line 3 ~ idValue", idValue);

const link = document.getElementById("link");
const showLink = link.getAttribute("href");
console.log("🚀 ~ file: 32-getandsetattr.js ~ line 7 ~ showLink", showLink);

const links = document.querySelectorAll(".first");
console.log("🚀 ~ file: 32-getandsetattr.js ~ line 7 ~ links", links);

const last = link.nextElementSibling;
last.setAttribute("class", "first");
last.textContent = "I have added this text from the setAttribute";
console.log("🚀 ~ file: 32-getandsetattr.js ~ line 13 ~ last", last);

const links1 = document.querySelectorAll(".first");
console.log("🚀 ~ file: 32-getandsetattr.js ~ line 18 ~ links1", links1);
