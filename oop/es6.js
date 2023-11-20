//https://linkzy.dev/es6-classes-the-modern-face-of-javascript-oop/

// Class Declaration
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  }
  
  // Creating objects using the class
  const alice = new Person("Alice", 30);
  const bob = new Person("Bob", 25);
  
  alice.greet(); // Output: Hello, my name is Alice and I'm 30 years old.
  bob.greet();   // Output: Hello, my name is Bob and I'm 25 years old.
  
  // Class Inheritance
  class Student extends Person {
    constructor(name, age, studentId) {
      super(name, age); // Call the superclass constructor
      this.studentId = studentId;
    }
  
    study() {
      console.log(`${this.name} with ID ${this.studentId} is studying.`);
    }
  }
  
  // Creating objects using the subclass
  const john = new Student("John", 22, "S12345");
  
  john.greet();  // Output: Hello, my name is John and I'm 22 years old.
  john.study();  // Output: John with ID S12345 is studying.
  
  // Static Methods
  class MathUtils {
    static add(x, y) {
      return x + y;
    }
  
    static multiply(x, y) {
      return x * y;
    }
  }
  
  // Using static methods
  console.log(MathUtils.add(5, 3));       // Output: 8
  console.log(MathUtils.multiply(5, 3));  // Output: 15
  