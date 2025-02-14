// ----------------------------------
// Operators in JavaScript
// ----------------------------------

// Arithmetic Operators
let a = 10, b = 3;
console.log(a + b);  // 13 (Addition)
console.log(a - b);  // 7  (Subtraction)
console.log(a * b);  // 30 (Multiplication)
console.log(a / b);  // 3.3333 (Division)
console.log(a % b);  // 1 (Modulus - Remainder)
console.log(a ** b); // 1000 (Exponentiation)

// Assignment Operators
let x = 5;
x += 3;  // x = x + 3 → 8
x -= 2;  // x = x - 2 → 6
x *= 2;  // x = x * 2 → 12
x /= 3;  // x = x / 3 → 4
x %= 3;  // x = x % 3 → 1
x **= 2; // x = x ** 2 → 1

// Comparison Operators
console.log(10 == "10");  // true (equal, type conversion allowed)
console.log(10 === "10"); // false (strict equal, type conversion NOT allowed)
console.log(10 != "10");  // false (not equal, type conversion allowed)
console.log(10 !== "10"); // true (strict not equal, type conversion NOT allowed)
console.log(5 > 3);  // true (greater than)
console.log(5 < 3);  // false (less than)
console.log(5 >= 5); // true (greater than or equal to)
console.log(3 <= 5); // true (less than or equal to)

// Logical Operators
let p = true, q = false;
console.log(p && q); // false (AND)
console.log(p || q); // true (OR)
console.log(!p);     // false (NOT)

// Bitwise Operators
let m = 5, n = 1;
console.log(m & n);  // 1 (Bitwise AND)
console.log(m | n);  // 5 (Bitwise OR)
console.log(m ^ n);  // 4 (Bitwise XOR)
console.log(~m);     // -6 (Bitwise NOT)
console.log(m << 1); // 10 (Left Shift)
console.log(m >> 1); // 2 (Right Shift)
console.log(m >>> 1); // 2 (Unsigned Right Shift)

// Ternary Operator (Conditional Operator)
let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // "Adult"

// Type Operators
console.log(typeof 42);        // "number"
console.log(typeof "Hello");   // "string"
console.log(typeof true);      // "boolean"
console.log(typeof {});        // "object"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (special case in JS)

// Instanceof Operator
class Person {}
let person1 = new Person();
console.log(person1 instanceof Person); // true

// Spread Operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

// Rest Operator
function sum(...nums) {
    return nums.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// Nullish Coalescing Operator (??)
let value = null;
console.log(value ?? "Default Value"); // "Default Value"

// Optional Chaining Operator (?.)
const user = { profile: { name: "Alice" } };
console.log(user.profile?.name); // "Alice"
console.log(user.address?.city); // undefined
