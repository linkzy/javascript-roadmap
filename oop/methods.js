//https://linkzy.dev/object-methods-in-javascript-unleashing-the-power-of-functions-within-objects/

// Basic Object Method
const car = {
    brand: "Toyota",
    model: "Camry",
    start: function() {
      console.log(`${this.brand} ${this.model} is starting...`);
    }
  };
  
  car.start(); // Output: Toyota Camry is starting...
  
  // Shorthand Method Declaration
  const person = {
    name: "Alice",
    greet() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
  
  person.greet(); // Output: Hello, my name is Alice.
  
  // Object Methods with Parameters
  const calculator = {
    add: function(x, y) {
      return x + y;
    },
    multiply: function(x, y) {
      return x * y;
    }
  };
  
  console.log(calculator.add(3, 5));       // Output: 8
  console.log(calculator.multiply(3, 5));  // Output: 15
  
  // Arrow Functions as Object Methods
  const anotherPerson = {
    name: "Bob",
    greet: () => {
      console.log(`Hello, my name is ${this.name}.`); // 'this' will not refer to the object
    }
  };
  
  anotherPerson.greet(); // Output: Hello, my name is undefined.  