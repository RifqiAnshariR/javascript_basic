// Variables
const PI = 3.14;
let radius = 10;
var diameter = radius * 2;

console.log(PI);
console.log(radius);
console.log(diameter);

// ----------------------------------
// Primitive Data Types
// ----------------------------------

// String
const text = "Hello, World!";
console.log(typeof text); // "string"

// Number
const num = 42;
console.log(typeof num); // "number"

// BigInt
const bigNum = 9007199254740991n;
console.log(typeof bigNum); // "bigint"

// Boolean
const isTrue = true;
console.log(typeof isTrue); // "boolean"

// Undefined
let notDefined;
console.log(typeof notDefined); // "undefined"

// Null
const emptyValue = null;
console.log(typeof emptyValue); // "object" (JavaScript quirk)

// Symbol
const uniqueId = Symbol("id");
console.log(typeof uniqueId); // "symbol"

// ----------------------------------
// Non-Primitive Data Types
// ----------------------------------

// Object
const person = { name: "Alice", age: 25 };
console.log(typeof person); // "object"

// Array (special type of object)
const numbers = [1, 2, 3, 4];
console.log(typeof numbers); // "object"

// Function (special type of object)
function greet() {
    console.log("Hello!");
}
console.log(typeof greet); // "function"

// Date (built-in object)
const now = new Date();
console.log(typeof now); // "object"

// Regular Expression (RegExp - special object)
const regex = /hello/i;
console.log(typeof regex); // "object"

// ----------------------------------
// Type Conversion
// ----------------------------------

// String to Number
console.log(Number("123")); // 123
console.log(parseInt("123.45")); // 123
console.log(parseFloat("123.45")); // 123.45

// Number to String
console.log(String(123)); // "123"
console.log((123).toString()); // "123"

// Boolean to Number
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// Number to Boolean
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false

// Object to JSON String
const obj = { key: "value" };
console.log(JSON.stringify(obj)); // "{"key":"value"}"

// JSON String to Object
const jsonString = '{"key":"value"}';
console.log(JSON.parse(jsonString)); // { key: "value" }

// ----------------------------------
// Checking Data Types
// ----------------------------------

console.log(Array.isArray(numbers)); // true (cek apakah array)
console.log(person instanceof Object); // true (cek apakah instance dari Object)
console.log(now instanceof Date); // true (cek apakah instance dari Date)
