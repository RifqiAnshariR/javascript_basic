# Asynchronous JavaScript: Panduan Lengkap

Asynchronous JavaScript memungkinkan kode berjalan tanpa harus menunggu operasi sebelumnya selesai. Berikut adalah beberapa metode utama yang digunakan dalam pemrograman asinkron di JavaScript.

## 1. setTimeout()
Digunakan untuk menunda eksekusi kode selama waktu tertentu (dalam milidetik).

```javascript
console.log("Mulai");
setTimeout(() => {
    console.log("Tertunda 2 detik");
}, 2000);
console.log("Selesai");
```
**Output:**
```
Mulai
Selesai
Tertunda 2 detik
```

## 2. setInterval()
Digunakan untuk menjalankan kode berulang kali dengan interval tertentu.

```javascript
let counter = 0;
const interval = setInterval(() => {
    console.log("Counter:", counter++);
    if (counter > 5) clearInterval(interval);
}, 1000);
```
**Penjelasan:**
- `setInterval()` menjalankan fungsi setiap 1 detik.
- `clearInterval(interval)` menghentikan eksekusi setelah 5 iterasi.

## 3. Callback
Callback adalah fungsi yang dikirimkan sebagai argumen ke fungsi lain dan dieksekusi nanti.

```javascript
function prosesData(input, callback) {
    console.log("Memproses data...");
    setTimeout(() => {
        callback(`Hasil: ${input * 2}`);
    }, 2000);
}

prosesData(5, (hasil) => {
    console.log(hasil);
});
```

## 4. Promise
Promise adalah cara yang lebih terstruktur untuk menangani operasi asinkron dibanding callback.

### 4.1. Membuat dan Menggunakan Promise
```javascript
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data berhasil diambil");
        }, 2000);
    });
}

fetchData().then(data => console.log(data)).catch(error => console.log(error));
```

### 4.2. Promise.all()
Menjalankan beberapa Promise sekaligus dan menunggu semua selesai.

```javascript
Promise.all([
    fetchData(),
    fetchData()
]).then(results => console.log(results));
```

## 5. Async/Await
Async/Await adalah sintaks modern untuk menangani Promise agar lebih mudah dibaca.

```javascript
async function getData() {
    try {
        let result = await fetchData();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
getData();
```

## 6. Fetch API
Menggunakan `fetch()` untuk mengambil data dari server dengan async/await.

```javascript
async function fetchUsers() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let users = await response.json();
        console.log(users);
    } catch (error) {
        console.log("Error:", error);
    }
}
fetchUsers();
```

---

## Kesimpulan
- **setTimeout & setInterval** digunakan untuk menjalankan kode setelah jeda waktu tertentu.
- **Callback** digunakan untuk menangani eksekusi kode asinkron dalam fungsi lain.
- **Promise** memberikan cara yang lebih baik untuk menangani asinkronisme dibanding callback.
- **Async/Await** membuat kode lebih mudah dibaca dan dikelola dibanding chaining `.then()`.
- **Fetch API** digunakan untuk mengambil data dari server secara asinkron.

Dengan memahami teknik-teknik ini, kamu bisa menangani operasi asinkron dengan lebih efisien di JavaScript! 🚀
