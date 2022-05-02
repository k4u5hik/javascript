boilWater(10000);
console.log("chop carrots");
boilWater(5000);
console.log("chop onion");
boilWater(5000);

function boilWater(time) {
  console.log("...boiling...");
  setTimeout(() => {
    console.log("done");
  }, time);
}

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();
