var square = x => x * x;
console.log(square(9));

var user = {
  name: 'David',
  sayHi: () => {
    console.log(`Hi ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi ${this.name}`);
  }
};

user.sayHi();
user.sayHiAlt(1, 2, 3);
