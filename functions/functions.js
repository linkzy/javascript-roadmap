//https://linkzy.dev/demystifying-javascript-functions/

// Function declaration with hoisting
greet("Alice");

function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Function expression for an anonymous function
const greetExpression = function(name) {
  console.log(`Hello, ${name}!`);
};

greetExpression("Bob");

// Arrow function for conciseness
const add = (a, b) => a + b;
console.log(add(3, 4)); // Output: 7

// Arrow function with lexical 'this'
function Counter() {
  this.count = 0;

  setInterval(() => {
    // 'this' refers to the Counter instance
    this.count++;
    console.log(this.count);
  }, 1000);
}

const counter = new Counter();

// Named function expression for better stack traces
const greetNamed = function sayHello(name) {
  console.log(`Hello, ${name}!`);
};

greetNamed("Eve");
