// ----------------------------------
// String
// ----------------------------------
console.group("String");

const text = "Hello, World!";

console.log(text.length);           // 13 (panjang string)
console.log(text.charAt(0));       // 'H' (karakter di index 0)
console.log(text.includes("World")); // true (cek substring)
console.log(text.indexOf("o"));   // 4 (index pertama 'o')
console.log(text.lastIndexOf("o")); // 8 (index terakhir 'o')
console.log(text.toUpperCase());   // "HELLO, WORLD!"
console.log(text.toLowerCase());   // "hello, world!"
console.log(text.replace("World", "JS")); // "Hello, JS!"
console.log(text.split(", "));   // ["Hello", "World!"]
console.log(text.trim());          // "Hello, World!" (hapus spasi di awal/akhir)
console.log(text.slice(0, 5));     // "Hello" (potong string)

console.groupEnd();
// ----------------------------------
// Number
// ----------------------------------
console.group("Number");

const num = 42.567;

console.log(Number.isInteger(num));  // false (bukan bilangan bulat)
console.log(num.toFixed(2));        // "42.57" (format desimal 2 angka)
console.log(num.toPrecision(4));    // "42.57" (presisi 4 digit total)
console.log(Math.round(num));       // 43 (pembulatan terdekat)
console.log(Math.floor(num));       // 42 (pembulatan ke bawah)
console.log(Math.ceil(num));        // 43 (pembulatan ke atas)
console.log(Math.sqrt(16));         // 4 (akar kuadrat)
console.log(Math.pow(2, 3));        // 8 (pangkat 2^3)
console.log(Math.random());         // Bilangan random antara 0 - 1

console.groupEnd();
// ----------------------------------
// Date
// ----------------------------------
console.group("Date");

const now = new Date();

console.log(now.toDateString());   // "Tue Feb 14 2025" (format tanggal)
console.log(now.toISOString());    // "2025-02-14T10:00:00.000Z"
console.log(now.getFullYear());    // 2025
console.log(now.getMonth());       // 1 (Februari, karena index mulai dari 0)
console.log(now.getDate());        // 14 (tanggal)
console.log(now.getDay());         // 5 (Jumat, karena index mulai dari 0)
console.log(now.getHours());       // 10 (jam)
console.log(now.getMinutes());     // 30 (menit)
console.log(now.getSeconds());     // 15 (detik)
console.log(Date.now());           // Timestamp saat ini

console.groupEnd();
// ----------------------------------
// Function Methods
// ----------------------------------
console.group("Function");

function greet(name) {
    console.log(`Hello, ${name}`);
}

greet.call(null, "Alice"); // "Hello, Alice"
greet.apply(null, ["Bob"]); // "Hello, Bob"
const greetBob = greet.bind(null, "Bob");
greetBob(); // "Hello, Bob"

console.groupEnd();
// ----------------------------------
// Error Handling
// ----------------------------------
console.group("Error Handling");

try {
    throw new Error("Something went wrong");
} catch (error) {
    console.error(error.message); // "Something went wrong"
}

console.groupEnd();
// ----------------------------------
// DOM Manipulation
// ----------------------------------
console.group("DOM Manipulation");

document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector("h1");
    heading.innerHTML = "Updated Heading";
    heading.style.color = "red";
    heading.addEventListener("click", () => alert("Clicked!"));
});

console.groupEnd();
// ----------------------------------
// Local Storage & Session Storage
// ----------------------------------
console.group("Local Storage & Session Storage");

localStorage.setItem("username", "Alice");
console.log(localStorage.getItem("username")); // "Alice"
sessionStorage.setItem("sessionKey", "12345");
console.log(sessionStorage.getItem("sessionKey")); // "12345"

console.groupEnd();
// ----------------------------------
// Fetch API & AJAX
// ----------------------------------
console.group("Fetch API & AJAX");

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));

console.groupEnd();
// ----------------------------------
// JSON
// ----------------------------------
console.group("JSON");

const obj = { name: "Alice", age: 25 };
const jsonString = JSON.stringify(obj);
console.log(jsonString); // "{\"name\":\"Alice\",\"age\":25}"

const parsedObj = JSON.parse(jsonString);
console.log(parsedObj);  // { name: "Alice", age: 25 }

console.groupEnd();
// ----------------------------------
// Regex (Regular Expressions)
// ----------------------------------
console.group("REGEX");

const regex = /hello/i;  // Case-insensitive regex
console.log(regex.test("Hello World")); // true (cocok dengan "Hello")
console.log("Hello World".match(regex)); // ["Hello", index: 0, input: "Hello World"]
console.log("Hello World".replace(regex, "Hi")); // "Hi World"

console.groupEnd();
