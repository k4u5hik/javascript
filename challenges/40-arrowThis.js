// Arrow functions or fat arrow
// regular function: this refers to the left of the dot
// arrow function: this refers to it's current surrounding scope

const bob = {
  firstName: "Bob",
  lastName: "Jones",
  phoneNumber: "(650) 777-7777",
  email: "bob.jones@gmail.com",
  children: ["Susie", "Mike", "Joe"],
  address: {
    street: "111 Main St.",
    city: "San Francisco",
    state: "CA",
    zip: 94111,
  },
  sayName: function () {
    console.log(this);
    const self = this;
    setTimeout(function () {
      //   console.log(this);
      console.log(self);
      console.log(`${self.firstName} ${self.lastName}`);
    }, 2000);
  },
};

const anna = {
  firstName: "Anna",
  lastName: "Smith",
  phoneNumber: "(650) 888-8888",
  email: "annasmith@gmail.com",
  children: ["Mary", "Shelley"],
  address: {
    street: "222 Main St.",
    city: "San Francisco",
    state: "CA",
    zip: 94111,
  },
  sayName: () => {
    console.log(this);
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

bob.sayName();
// anna.sayName();
