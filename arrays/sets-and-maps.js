//https://linkzy.dev/sets-and-maps-in-javascript/

// Sets: Unordered Collections of Unique Values
const mySet = new Set([1, 2, 3, 1, 2]);
mySet.add(4).add(5);
mySet.delete(2);
console.log(mySet.has(3)); // Output: true
mySet.forEach(value => console.log(value));
// Output:
// 1
// 3
// 4
// 5

// Maps: Key-Value Pairs for Efficient Data Storage
const myMap = new Map();
myMap.set("name", "Alice");
myMap.set("age", 30);
console.log(myMap.get("name")); // Output: Alice
console.log(myMap.has("gender")); // Output: false
myMap.delete("age");
myMap.forEach((value, key) => console.log(`${key}: ${value}`));
// Output:
// name: Alice

// WeakSet: Garbage Collection-Friendly Sets
let object1 = { key: "value" };
let object2 = { key: "value" };
const weakSet = new WeakSet([object1, object2]);

// WeakMap: Garbage Collection-Friendly Maps
const weakMap = new WeakMap();
weakMap.set(object1, "info");

// Using WeakSet and WeakMap
object1 = null;
object2 = null;

// Ensure garbage collection before checking WeakSet and WeakMap
globalThis.gc && globalThis.gc();

console.log(weakSet.has(object1)); // Output: false
console.log(weakMap.get(object1)); // Output: undefined
