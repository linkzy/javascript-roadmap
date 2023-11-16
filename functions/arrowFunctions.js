//https://linkzy.dev/arrow-functions-the-concise-syntax/

// Basic syntax
const add = (a, b) => a + b;
console.log(add(3, 4)); // Output: 7

// Single parameter
const square = x => x * x;
console.log(square(5)); // Output: 25

// No parameters
const greet = () => "Hello, world!";
console.log(greet()); // Output: Hello, world!

// Lexical 'this' binding
function Counter() {
  this.count = 0;

  setInterval(() => {
    // 'this' refers to the Counter instance
    this.count++;
    console.log(this.count);
  }, 1000);
}

const counter = new Counter();

// Implicit return
const double = x => x * 2;
console.log(double(6)); // Output: 12

// Object method with traditional function
const person = {
  name: "Alice",
  sayHello: function() {
    // 'this' refers to the person object
    console.log(`Hello, ${this.name}!`);
  },
};

person.sayHello();


