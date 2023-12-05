//https://linkzy.dev/javascript-promises-managing-asynchronous-operations/

// Promises in JavaScript

// Basic Syntax
const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    if (/* operation is successful */) {
      resolve(result); // Fulfill the promise with a value
    } else {
      reject(error); // Reject the promise with a reason (error)
    }
  });
  
  // Using the Promise
  myPromise
    .then((result) => {
      console.log("Fulfilled:", result);
    })
    .catch((error) => {
      console.error("Rejected:", error);
    });
  
  // Chaining Promises
  const firstAsyncOperation = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("First operation completed");
        resolve(1);
      }, 1000);
    });
  };
  
  const secondAsyncOperation = (value) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Second operation completed");
        resolve(value + 1);
      }, 1000);
    });
  };
  
  firstAsyncOperation()
    .then((result) => secondAsyncOperation(result))
    .then((finalResult) => {
      console.log("Final result:", finalResult);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  
  // Error Handling with Promises
  const asyncOperationWithError = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.5; // Simulating success or failure
        if (success) {
          resolve("Operation completed successfully");
        } else {
          reject(new Error("Operation failed"));
        }
      }, 1000);
    });
  };
  
  asyncOperationWithError()
    .then((result) => {
      console.log("Success:", result);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
  
  // Promisifying Callbacks
  const readFilePromise = (path) => {
    return new Promise((resolve, reject) => {
      readFile(path, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  };
  
  readFilePromise('/path/to/file.txt')
    .then((content) => {
      console.log('File content:', content);
    })
    .catch((error) => {
      console.error('Error reading file:', error.message);
    });
  