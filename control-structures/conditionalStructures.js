//https://linkzy.dev/conditional-structures-in-javascript/

// Sample input
let temperature = 28;
let timeOfDay = "morning";
let isRaining = false;
let grade = "A";

// Example of if statement
if (temperature > 25) {
  console.log("It's a hot day.");
} else {
  console.log("It's not very hot.");
}

// Example of if-else if-else statement
if (timeOfDay === "morning") {
  console.log("Good morning!");
} else if (timeOfDay === "afternoon") {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

// Example of if-else statement
if (isRaining) {
  console.log("Bring an umbrella.");
} else {
  console.log("No need for an umbrella.");
}

// Example of ternary (conditional) operator
let result = grade >= "B" ? "Pass" : "Fail";
console.log(`You ${result} the exam.`);

// Example of switch statement
switch (timeOfDay) {
  case "morning":
    console.log("It's time for breakfast.");
    break;
  case "afternoon":
    console.log("Lunchtime!");
    break;
  default:
    console.log("Enjoy your evening.");
}

// Conditional operators (&& and ||)
let hasPermission = true;
let isAuthenticated = false;
if (hasPermission && isAuthenticated) {
  console.log("Access granted.");
} else if (hasPermission || isAuthenticated) {
  console.log("You have partial access.");
} else {
  console.log("Access denied.");
}