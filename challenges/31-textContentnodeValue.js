// nodeValue
// textContent

var byId = function (id) {
  return document.getElementById(id);
};

const item = byId("special");
const value = item.firstChild.nodeValue;
const easyValue = item.textContent;

console.log(value);
console.log(easyValue);
