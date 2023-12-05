//https://linkzy.dev/javascript-callbacks-understanding-asynchronous-programming/

// Callbacks in Asynchronous JavaScript

// Basic Example
function fetchData(callback) {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
      const data = { message: "Data fetched successfully" };
      callback(null, data); // Passing null as the first argument indicates no error
    }, 1000);
  }
  
  // Using the fetchData function with a callback
  fetchData((error, result) => {
    if (error) {
      console.error("Error:", error);
    } else {
      console.log("Result:", result);
    }
  });
  
  // Handling Errors
  function readFile(path, callback) {
    // Simulating reading a file asynchronously
    setTimeout(() => {
      const success = Math.random() > 0.5; // Simulating success or failure
      if (success) {
        const content = "File content";
        callback(null, content);
      } else {
        const error = new Error("Failed to read the file");
        callback(error, null);
      }
    }, 1000);
  }
  
  // Using the readFile function with a callback
  readFile("/path/to/file.txt", (error, content) => {
    if (error) {
      console.error("Error:", error.message);
    } else {
      console.log("File Content:", content);
    }
  });
  
  // Nested Callbacks (Callback Hell)
  asyncFunction1((err1, result1) => {
    if (!err1) {
      asyncFunction2((err2, result2) => {
        if (!err2) {
          asyncFunction3((err3, result3) => {
            if (!err3) {
              // More nested callbacks...
            } else {
              console.error("Error 3:", err3);
            }
          });
        } else {
          console.error("Error 2:", err2);
        }
      });
    } else {
      console.error("Error 1:", err1);
    }
  });
  
  // Mitigating Callback Hell with Promises and Async/Await
  function asyncFunction1() {
    return new Promise((resolve, reject) => {
      // Asynchronous operation
      resolve(result1);
    });
  }
  
  function asyncFunction2(result1) {
    return new Promise((resolve, reject) => {
      // Asynchronous operation
      resolve(result2);
    });
  }
  
  // Usage with async/await
  async function example() {
    try {
      const result1 = await asyncFunction1();
      const result2 = await asyncFunction2(result1);
      // More operations...
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  // Call the example function
  example();
  