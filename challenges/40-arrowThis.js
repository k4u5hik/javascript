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
    console.log(`${this.firstName} ${this.lastName}`);
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
anna.sayName();
