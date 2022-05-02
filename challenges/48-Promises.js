// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.
// A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.
// then catch - pass another callback function to handle the result of the promise. The catch() method returns a Promise and deals with rejected cases only.

const heading1 = document.querySelector("h1");
const heading2 = document.querySelector("h2");
const heading3 = document.querySelector("h3");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {});

const promise = new Promise((resolve, reject) => {});

console.log(promise);
