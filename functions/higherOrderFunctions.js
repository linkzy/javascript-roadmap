//https://linkzy.dev/higher-order-functions-embracing-the-power-of-functions/

// Functions as Parameters
function operate(operator, a, b) {
    return operator(a, b);
  }
  
  function add(x, y) {
    return x + y;
  }
  
  function multiply(x, y) {
    return x * y;
  }
  
  console.log(operate(add, 3, 4));      // Output: 7
  console.log(operate(multiply, 3, 4)); // Output: 12
  
  // Functions as Return Values
  function createMultiplier(factor) {
    return function(x) {
      return x * factor;
    };
  }
  
  const double = createMultiplier(2);
  console.log(double(5)); // Output: 10
  
  const triple = createMultiplier(3);
  console.log(triple(5)); // Output: 15
  
  // Practical Use Cases
  // Array Methods
  const numbers = [1, 2, 3, 4, 5];
  
  const doubled = numbers.map(function(x) {
    return x * 2;
  });
  
  console.log(doubled); // Output: [2, 4, 6, 8, 10]
  
  // Callbacks
  function fetchData(callback) {
    // Simulating an asynchronous operation
    setTimeout(function() {
      const data = "Some data";
      callback(data);
    }, 1000);
  }
  
  fetchData(function(result) {
    console.log(result); // Output: Some data
  });
  