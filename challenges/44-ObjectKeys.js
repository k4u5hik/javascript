// Object.keys()

const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]

// Object.values()
const object2 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.values(object2));
// expected output: Array ["somestring", 42, false]

// Object.entries()
const object3 = {
  a: "somestring",
  b: 42,
  c: false,
};
for (const [key, value] of Object.entries(object3)) {
  console.log(`${key}: ${value}`);
}
