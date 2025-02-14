// ----------------------------------
// Array
// ----------------------------------

const fruits = ['apple', 'banana', 'orange'];
const fruits_copy = Array.from(fruits);

console.log(fruits[0]);     // 'apple'
console.log(fruits.length); // 3
console.log(fruits_copy);   // ['apple', 'banana', 'orange']

fruits.push('mango');       // Tambah di akhir
fruits.pop();               // Hapus di akhir
fruits.unshift('grapes');   // Tambah di awal
fruits.shift();             // Hapus di awal

console.log(fruits);

// Destrukturisasi Array
const [first, second, third] = fruits;
console.log(first);     // 'apple'
console.log(second);    // 'banana'
console.log(third);     // 'orange'

// Metode Array Lainnya:
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.sort());            // Urutkan elemen
console.log(numbers.splice(2, 1));      // Hapus elemen di index 2
console.log(numbers.slice(1, 3));       // Ambil elemen dari index 1 sampai 2
console.log(numbers.concat([6, 7]));    // Gabungkan dengan array lain
console.log(numbers.reverse());         // Balik urutan elemen
console.log(numbers.every(num => num > 0)); // Cek apakah semua elemen memenuhi kondisi
console.log(numbers.some(num => num > 3));  // Cek apakah minimal satu elemen memenuhi kondisi
console.log(numbers.indexOf(4));        // Cari index dari elemen tertentu
console.log(numbers.lastIndexOf(2));    // Cari index terakhir dari elemen tertentu
console.log(Array.isArray(numbers));    // Cek apakah ini array
console.log(numbers.fill(0, 2, 4));     // Isi elemen dari index 2 hingga 4 dengan 0
console.log(numbers.find(num => num > 2)); // Cari elemen pertama yang memenuhi kondisi
console.log(numbers.findIndex(num => num > 2)); // Cari index pertama dari elemen yang memenuhi kondisi
console.log(numbers.flat());            // Ratakan array bersarang (nested array)

// ----------------------------------
// Object
// ----------------------------------

const person = {
    'first name': 'Alice',
    age: 25,
    city: 'Jakarta'
};

console.log(person['first name']); // 'Alice'
console.log(person.age);           // 25

// Destrukturisasi Objek
const { ['first name']: name, age, city } = person;
console.log(name);  // 'Alice'
console.log(age);   // 25
console.log(city);  // 'Jakarta'

// Menambahkan dan Menghapus Properti
person.job = 'Engineer';
console.log(person);

delete person.city;
console.log(person);

// Metode Object Lainnya:
console.log(Object.assign({}, person, { country: 'Indonesia' })); // Salin & gabungkan objek
console.log(Object.freeze(person));   // Bekukan objek agar tidak bisa diubah
console.log(Object.seal(person));     // Kunci objek agar tidak bisa ditambah/hapus, hanya bisa diubah nilainya
console.log(Object.getOwnPropertyNames(person)); // Ambil semua properti termasuk non-enumerable
console.log(Object.hasOwn(person, 'age'));  // Cek apakah objek memiliki properti tertentu
console.log(Object.entries(person));  // Ambil array pasangan key-value dari objek
console.log(Object.values(person));   // Ambil array nilai dari objek

// ----------------------------------
// Map (Key-Value Pair)
// ----------------------------------

const myMap = new Map();
myMap.set('name', 'Alice');
myMap.set(1, 'One');
myMap.set(true, 'Yes');

console.log(myMap.get('name')); // 'Alice'
console.log(myMap.has(1));      // true
console.log(myMap.size);        // 3

myMap.delete(1);
console.log(myMap.size); // 2

// Menambahkan elemen baru ke Map
myMap.set('age', 30);
console.log(myMap);

// Menghapus elemen dari Map
myMap.delete('name');
console.log(myMap);

// Metode Map Lainnya:
console.log(myMap.keys());     // Iterator semua key dalam Map
console.log(myMap.values());   // Iterator semua nilai dalam Map
console.log(myMap.entries());  // Iterator pasangan key-value dalam Map

// Looping Map
for (let [key, value] of myMap) {
    console.log(`${key}: ${value}`);
}

myMap.forEach((value, key) => {
    console.log(`${key} => ${value}`);
});

myMap.clear(); // Hapus semua elemen dalam Map
console.log(myMap.size); // 0

// ----------------------------------
// Set (Kumpulan Nilai Unik)
// ----------------------------------

let mySet = new Set([1, 2, 3, 3, 4]);
console.log(mySet);         // Set { 1, 2, 3, 4 }

mySet.add(5);               // Tambah elemen
mySet.delete(2);            // Hapus elemen
console.log(mySet.has(3));  // true
console.log(mySet.size);    // 4

// Menambahkan elemen baru ke Set
mySet.add(10);
console.log(mySet);

// Menghapus elemen dari Set
mySet.delete(1);
console.log(mySet);

// Metode Set Lainnya:
console.log([...mySet]); // Konversi Set ke Array
console.log(mySet.values()); // Ambil iterator nilai dalam Set
console.log(mySet.keys());   // Ambil iterator key dalam Set (sama dengan values di Set)
console.log(mySet.entries()); // Ambil pasangan key-value (unik untuk Set)

mySet.clear(); // Hapus semua elemen dalam Set
console.log(mySet.size); // 0
