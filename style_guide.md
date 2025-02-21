# JavaScript Style Guide

## 1. Gunakan `const` dan `let`

- Gunakan `const` untuk nilai yang tidak berubah.
- Gunakan `let` jika nilai bisa berubah.

```js
const MAX_USERS = 100;
let counter = 0;
```

## 2. Gunakan Strict Mode

Aktifkan strict mode untuk menghindari kesalahan umum.

```js
"use strict";
```

## 3. Penamaan Variabel

- Gunakan **camelCase** untuk variabel dan fungsi.
- Gunakan **PascalCase** untuk class.
- Gunakan **UPPER\_CASE** untuk konstanta global.

```js
let userName = "John"; // Camel Case
class UserProfile {} // Pascal Case
const API_URL = "https://api.example.com"; // Upper Case
```

## 4. Gunakan Template Literals

Gunakan backticks (`` ` ``) untuk string yang dinamis.

```js
const name = "Alice";
console.log(`Hello, ${name}!`);
```

## 5. Hindari `var`

Gunakan `let` atau `const` karena `var` memiliki hoisting yang dapat menyebabkan bug.

```js
// Hindari
var age = 25;
```

## 6. Arrow Function

Gunakan arrow function untuk fungsi sederhana.

```js
const add = (a, b) => a + b;
```

## 7. Objek dan Array Destructuring

Gunakan destructuring untuk kode yang lebih bersih.

```js
const user = { name: "Bob", age: 30 };
const { name, age } = user;
```

## 8. Default Parameter

Gunakan default parameter untuk menghindari `undefined`.

```js
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
```

## 9. Gunakan `===` daripada `==`

`===` mengecek nilai dan tipe data, sedangkan `==` bisa melakukan type coercion yang tidak diinginkan.

```js
console.log(5 === "5"); // false
console.log(5 == "5");  // true (hindari)
```

## 10. Gunakan Async/Await daripada Callback

Hindari callback hell dengan `async/await`.

```js
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data", error);
  }
}
```

## 11. Gunakan ESLint dan Prettier

### Install ESLint dan Prettier

```sh
npm install --save-dev eslint prettier
```

### Konfigurasi ESLint (`.eslintrc.json`)

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
  }
}
```

### Konfigurasi Prettier (`.prettierrc`)

```json
{
  "singleQuote": true,
  "semi": true
}
```

## 12. Gunakan JSDoc untuk Dokumentasi

Tambahkan dokumentasi menggunakan JSDoc.

```js
/**
 * Menjumlahkan dua angka.
 * @param {number} a - Angka pertama
 * @param {number} b - Angka kedua
 * @returns {number} Hasil penjumlahan
 */
function add(a, b) {
  return a + b;
}
```

## 13. Gunakan Flow untuk Type Checking (Opsional)

Flow membantu mengecek tipe data secara statis.

### Install Flow

```sh
npm install --save-dev flow-bin
```

### Inisialisasi Flow

```sh
npx flow init
```

### Contoh Penggunaan

```js
// @flow
const myName: string = "Flow";
function greet(name: string) {
  console.log(`Hello, ${name}. My name is ${myName}`);
}
greet("Alice");
```

## Kesimpulan

Mengikuti style guide membantu menjaga konsistensi, meningkatkan keterbacaan, dan mengurangi bug dalam kode JavaScript.

