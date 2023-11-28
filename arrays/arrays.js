//https://linkzy.dev/arrays-in-javascript-unveiling-the-power-of-ordered-collections/

// Basic Array
const myArray = [1, "Hello", true, { key: "value" }];

console.log(myArray);          // Output: [1, "Hello", true, { key: "value" }]
console.log(myArray.length);    // Output: 4
console.log(myArray[1]);         // Output: Hello

// Array Methods
const fruits = ["apple", "banana", "orange"];

// Add elements to the end
fruits.push("grape", "kiwi");
console.log(fruits);           // Output: ["apple", "banana", "orange", "grape", "kiwi"]

// Remove the last element
fruits.pop();
console.log(fruits);           // Output: ["apple", "banana", "orange", "grape"]

// Add elements to the beginning
fruits.unshift("melon", "cherry");
console.log(fruits);           // Output: ["melon", "cherry", "apple", "banana", "orange", "grape"]

// Remove the first element
fruits.shift();
console.log(fruits);           // Output: ["cherry", "apple", "banana", "orange", "grape"]

// Finding and Filtering Elements
const numbers = [10, 25, 30, 45, 50];

// Find the index of an element
const index = numbers.indexOf(30);
console.log(index);            // Output: 2

// Check if an element exists
const exists = numbers.includes(45);
console.log(exists);           // Output: true

// Filter elements based on a condition
const filteredNumbers = numbers.filter(num => num > 20);
console.log(filteredNumbers);  // Output: [25, 30, 45, 50]

// Transforming Elements
const colors = ["red", "green", "blue"];

// Map over elements and create a new array
const capitalizedColors = colors.map(color => color.toUpperCase());
console.log(capitalizedColors);  // Output: ["RED", "GREEN", "BLUE"]

// Reduce elements to a single value
const concatenatedColors = colors.reduce((result, color) => result + color, "");
console.log(concatenatedColors);  // Output: "redgreenblue"
