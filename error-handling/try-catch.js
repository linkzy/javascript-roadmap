//https://linkzy.dev/error-handling-in-javascript-trycatch/

// Handling Exceptions with try...catch

// Example 1: Basic try...catch
function divide(a, b) {
    try {
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
  
      return a / b;
    } catch (error) {
      console.error("Error:", error.message);
      // You can handle the error or rethrow it if needed
      // throw error;
    } finally {
      console.log("This code always runs, regardless of an exception");
    }
  }
  
  console.log(divide(10, 2)); // Output: 5
  console.log(divide(10, 0)); // Output: Error: Cannot divide by zero
  // Output: This code always runs, regardless of an exception
  
  // Example 2: Handling different error types
  try {
    // Code that might throw an exception
    throw new TypeError("This is a custom type error");
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    console.log("Cleanup code");
  }
  
  // Example 3: Async/Await with try...catch
  async function fetchData() {
    try {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error.message);
      throw error; // Rethrow if needed
    }
  }
  
  // Usage:
  fetchData().then(data => console.log("Data:", data)).catch(err => console.error("Fetch error:", err));  