//https://linkzy.dev/a-comprehensive-guide-to-javascript-operators/

// Arithmetic Operators
let addition = 5 + 3;           // Addition
let subtraction = 10 - 4;        // Subtraction
let multiplication = 4 * 6;     // Multiplication
let division = 15 / 3;          // Division
let modulus = 17 % 4;           // Modulus (Remainder)
let exponentiation = 2 ** 3;    // Exponentiation (ES6)

// Assignment Operators
let x = 5;
x += 3;  // x is now 8 (x = x + 3)
x -= 2;  // x is now 6 (x = x - 2)
x *= 4;  // x is now 24 (x = x * 4)
x /= 6;  // x is now 4 (x = x / 6)
x %= 3;  // x is now 1 (x = x % 3)
x **= 2; // x is now 1 (x = x ** 2, ES6)

// Comparison Operators
let isEqual = 5 == "5";        // Equality (type coercion, true)
let isStrictEqual = 5 === "5";  // Strict Equality (false)
let isNotEqual = 5 != 8;       // Inequality (true)
let isNotStrictEqual = 5 !== 8; // Strict Inequality (true)
let isGreater = 10 > 7;        // Greater Than (true)
let isLess = 3 < 2;            // Less Than (false)
let isGreaterOrEqual = 6 >= 6; // Greater Than or Equal To (true)
let isLessOrEqual = 5 <= 4;    // Less Than or Equal To (false)

// Logical Operators
let logicalAnd = true && false;  // Logical AND (false)
let logicalOr = true || false;    // Logical OR (true)
let logicalNot = !true;           // Logical NOT (false)

// Unary Operators
let number = 5;
number++;        // Increment (number is now 6)
number--;        // Decrement (number is now 5)
let negate = -number;   // Negation (negate is -5)
let type = typeof number;  // Typeof operator

// Bitwise Operators
let a = 5;       // Binary: 0101
let b = 3;       // Binary: 0011
let bitwiseAnd = a & b;   // Bitwise AND (Binary result: 0001, Decimal: 1)
let bitwiseOr = a | b;    // Bitwise OR (Binary result: 0111, Decimal: 7)
let bitwiseXor = a ^ b;   // Bitwise XOR (Binary result: 0110, Decimal: 6)
let bitwiseNot = ~a;      // Bitwise NOT (Binary result: 11111111111111111111111111111010)
let leftShift = a << 2;   // Left Shift (Binary result: 010100, Decimal: 20)
let rightShift = a >> 1;  // Right Shift (Binary result: 0010, Decimal: 2)
let unsignedRightShift = a >>> 1; // Unsigned Right Shift (Binary result: 0010, Decimal: 2)
