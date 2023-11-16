//https://linkzy.dev/scope-and-closures-unveiling-javascripts-execution-context/

// Global scope
const globalVar = "I'm global!";

function exampleFunction() {
  console.log(globalVar); // Accessible
}

exampleFunction();

// Local scope
function exampleFunction() {
  const localVar = "I'm local!";
  console.log(localVar); // Accessible
}

exampleFunction();

// Closures
function outerFunction() {
  const outerVar = "I'm outer!";

  function innerFunction() {
    console.log(outerVar); // Accessing outerVar from the outer function's scope
  }

  return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Output: I'm outer!

// Practical use case: Data Encapsulation
function createCounter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter(); // Output: 1
counter(); // Output: 2

// Practical use case: Event Handlers
function addClickListener() {
  const button = document.getElementById("myButton");

  button.addEventListener("click", function() {
    console.log("Button clicked!");
  });
}

addClickListener();