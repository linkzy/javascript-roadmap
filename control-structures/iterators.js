//https://linkzy.dev/iterators-in-javascript/

// Sample array of numbers
const numbers = [1, 2, 3, 4, 5];

// Example of a for loop
for (let i = 0; i < numbers.length; i++) {
  console.log(`For loop: ${numbers[i]}`);
}

// Example of a for...of loop
for (const number of numbers) {
  console.log(`For...of loop: ${number}`);
}

// Example of the forEach() method
numbers.forEach((number) => {
  console.log(`forEach(): ${number}`);
});

// Sample object with properties
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

// Example of a for...in loop (iterating through object properties)
for (const property in person) {
  console.log(`for...in loop: ${property} - ${person[property]}`);
}

// Example of the map() method (doubling each number)
const doubledNumbers = numbers.map((number) => number * 2);
console.log(`map(): ${doubledNumbers}`);

// Example of the filter() method (filtering even numbers)
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(`filter(): ${evenNumbers}`);
