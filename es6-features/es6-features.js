// https://linkzy.dev/exploring-modern-javascript-es6-features/

// 1. let and const: Block-scoped variables
let myVariable = 10;
const myConstant = 20;

// 2. Arrow Functions: Shorter syntax for function expressions
const add = (a, b) => a + b;

// 3. Template Literals: String interpolation and multiline strings
const name = "John";
const greeting = `Hello, ${name}!`;

// 4. Destructuring Assignment: Extract values from objects and arrays
const person = { name: "Alice", age: 30 };
const { name, age } = person;

// 5. Spread and Rest Operators: Spread elements in arrays and objects
const numbers = [1, 2, 3];
const newArray = [...numbers, 4, 5];

// 6. Default Parameters: Default values for function parameters
const greet = (name = "Guest") => `Hello, ${name}!`;

// 7. Classes and Inheritance: Class syntax for object-oriented programming
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

// 8. Modules: Export and import modules
// Exporting module
export const myVariable = 42;

// Importing module
import { myVariable } from "./myModule";

// 9. Promises: Asynchronous programming with Promises
const fetchData = () => {
    return new Promise((resolve, reject) => {
        // Asynchronous operation
        if (/* operation is successful */) {
            resolve(data);
        } else {
            reject(error);
        }
    });
};

// 10. Async/Await: Simplifying asynchronous code
const fetchData = async () => {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log("Data:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};
