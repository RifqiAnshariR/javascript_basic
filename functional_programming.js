// ----------------------------------
// 1. Pure Function Example
// ----------------------------------
function add(a, b) {
    return a + b; // No side effects, always returns the same output for given inputs
}
console.log(add(2, 3)); // Output: 5

// ----------------------------------
// 2. High-Order Function Example
// ----------------------------------
function multiplyBy(factor) {
    return (number) => number * factor; // Returns a function
}
const double = multiplyBy(2);
console.log(double(5)); // Output: 10

// ----------------------------------
// 3. Recursive Function Example
// ----------------------------------
function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1); // Calls itself until base case
}
console.log(factorial(5)); // Output: 120

// ----------------------------------
// 4. Immutability Example
// ----------------------------------
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map(n => n * 2); // Creates a new array instead of modifying existing one
console.log(doubledNumbers); // Output: [2, 4, 6]

/**
 * Functional Programming helps create structured, predictable, and testable code
 * by leveraging pure functions, high-order functions, recursion, and immutability.
 */
