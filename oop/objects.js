//https://linkzy.dev/objects-in-javascript-unveiling-the-power-of-oop/

// Object literal
const personLiteral = {
    name: "Alice",
    age: 30,
    greet: function() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    },
  };
  
  personLiteral.greet(); // Output: Hello, my name is Alice and I'm 30 years old.
  
  // Object constructor
  const personConstructor = new Object();
  personConstructor.name = "Bob";
  personConstructor.age = 25;
  personConstructor.greet = function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  };
  
  personConstructor.greet(); // Output: Hello, my name is Bob and I'm 25 years old.
  
  // Object properties and methods
  const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    start: function() {
      console.log(`${this.brand} ${this.model} is starting...`);
    },
  };
  
  console.log(car.brand); // Output: Toyota
  car.start(); // Output: Toyota Camry is starting...
  
  // Object prototype and inheritance
  const animal = {
    makeSound: function() {
      console.log("Generic animal sound");
    },
  };
  
  const cat = Object.create(animal);
  cat.name = "Whiskers";
  cat.makeSound = function() {
    console.log("Meow!");
  };
  
  cat.makeSound(); // Output: Meow!
  
  // Constructor function
  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    };
  }
  
  const alice = new Person("Alice", 30);
  const bob = new Person("Bob", 25);
  
  alice.greet(); // Output: Hello, my name is Alice and I'm 30 years old.
  bob.greet();   // Output: Hello, my name is Bob and I'm 25 years old.
  