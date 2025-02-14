// ----------------------------------
// Function Basics
// ----------------------------------

// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // "Hello, Alice!"

// Function Expression
const greetExpression = function(name) {
    return `Hello, ${name}!`;
};
console.log(greetExpression("Bob")); // "Hello, Bob!"

// Arrow Function
const greetArrow = name => `Hello, ${name}!`;
console.log(greetArrow("Charlie")); // "Hello, Charlie!"

// Default Parameters
function greetDefault(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greetDefault()); // "Hello, Guest!"

// Rest Parameters
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// Spread Operator
function multiply(a, b, c) {
    return a * b * c;
}
const nums = [2, 3, 4];
console.log(multiply(...nums)); // 24

// ----------------------------------
// Function Methods
// ----------------------------------

// Call Method
function introduce(language) {
    console.log(`${this.name} is learning ${language}.`);
}
const person = { name: "Alice" };
introduce.call(person, "JavaScript"); // "Alice is learning JavaScript."

// Apply Method
introduce.apply(person, ["Python"]); // "Alice is learning Python."

// Bind Method
const introduceAlice = introduce.bind(person);
introduceAlice("C++"); // "Alice is learning C++."

// ----------------------------------
// Closures
// ----------------------------------

function outerFunction(outerValue) {
    return function innerFunction(innerValue) {
        return `Outer: ${outerValue}, Inner: ${innerValue}`;
    };
}
const closureExample = outerFunction("Hello");
console.log(closureExample("World")); // "Outer: Hello, Inner: World"

// ----------------------------------
// Higher-Order Functions
// ----------------------------------

function doMath(operation, a, b) {
    return operation(a, b);
}
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
console.log(doMath(add, 5, 3)); // 8
console.log(doMath(subtract, 5, 3)); // 2

// ----------------------------------
// Recursion
// ----------------------------------

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// ----------------------------------
// Immediately Invoked Function Expression (IIFE)
// ----------------------------------

(function() {
    console.log("This runs immediately!");
})();

// ----------------------------------
// Generator Functions
// ----------------------------------

function* generatorExample() {
    yield 1;
    yield 2;
    yield 3;
}
const gen = generatorExample();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

// ----------------------------------
// Async Functions
// ----------------------------------

async function fetchData() {
    return "Data fetched!";
}
fetchData().then(console.log); // "Data fetched!"

// Using Await
async function delayedMessage() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Waited 1 second!");
}
delayedMessage();

// ----------------------------------
// Function Composition
// ----------------------------------

const double = x => x * 2;
const square = x => x * x;
const composedFunction = x => square(double(x));
console.log(composedFunction(3)); // 36
