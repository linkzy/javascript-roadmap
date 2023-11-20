//https://linkzy.dev/prototypes-in-javascript-embracing-inheritance/

// Object prototype
const animal = {
    makeSound: function() {
      console.log("Generic animal sound");
    },
  };
  
  // Object with inheritance
  const cat = Object.create(animal);
  cat.name = "Whiskers";
  cat.makeSound = function() {
    console.log("Meow!");
  };
  
  cat.makeSound(); // Output: Meow!
  
  // Accessing the prototype
  const catPrototype = Object.getPrototypeOf(cat);
  console.log(catPrototype === animal); // Output: true
  
  // Constructor function
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Adding a method to the prototype
  Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  };
  
  // Creating objects using the constructor
  const alice = new Person("Alice", 30);
  const bob = new Person("Bob", 25);
  
  alice.greet(); // Output: Hello, my name is Alice and I'm 30 years old.
  bob.greet();   // Output: Hello, my name is Bob and I'm 25 years old.
  
  // Base object
  const baseObject = {
    baseProperty: "I'm in the base object",
  };
  
  // Object with inheritance
  const derivedObject = Object.create(baseObject);
  derivedObject.derivedProperty = "I'm in the derived object";
  
  console.log(derivedObject.baseProperty);    // Output: I'm in the base object
  console.log(baseObject.derivedProperty);    // Output: undefined
  