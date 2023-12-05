//https://linkzy.dev/async-await-simplifying-asynchronous-javascript/

// Async/Await in JavaScript

// Basic Syntax
async function fetchData() {
    try {
      // Simulating an asynchronous operation (e.g., fetching data from an API)
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      console.log("Data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  // Error Handling
  async function example() {
    try {
      const result = await someAsyncOperation();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  
  // Parallel Execution
  async function parallelOperations() {
    try {
      const [result1, result2] = await Promise.all([
        asyncOperation1(),
        asyncOperation2(),
      ]);
      console.log("Result 1:", result1);
      console.log("Result 2:", result2);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  // Async Functions and Promises
  async function returnValueAsync() {
    return "Hello, Async/Await!";
  }
  
  returnValueAsync()
    .then((result) => {
      console.log("Returned Value:", result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  
  // Call the async functions
  fetchData();
  example();
  parallelOperations();
  