const Madhura = "Madhura";
const Kaushik = "Kaushik";

//setting default value if no value is provided
function sayHi(person = "Yuki") {
  console.log(`Hi ${person}`);
}

const sayHello = (person = "Yuki") => {
  console.log(`Hello ${person}`);
};

sayHi();
sayHello();
