//https://linkzy.dev/loops-in-javascript/

// Example of a for loop
for (let i = 0; i < 5; i++) {
    console.log(`for loop: Iteration ${i}`);
  }
  
  // Example of a while loop
  let counter = 0;
  while (counter < 5) {
    console.log(`while loop: Iteration ${counter}`);
    counter++;
  }
  
  // Example of a do...while loop
  let number = 0;
  do {
    console.log(`do...while loop: Iteration ${number}`);
    number++;
  } while (number < 5);
  
  // Sample array of numbers
  const numbers = [1, 2, 3, 4, 5];
  
  // Example of a for...of loop
  for (const number of numbers) {
    console.log(`for...of loop: Number ${number}`);
  }
  
  // Sample object with properties
  const person = {
    name: "Alice",
    age: 28,
    city: "San Francisco",
  };
  
  // Example of a for...in loop (iterating through object properties)
  for (const property in person) {
    console.log(`for...in loop: ${property} - ${person[property]}`);
  }
  