const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]

const object2 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.values(object2));
// expected output: Array ["somestring", 42, false]
