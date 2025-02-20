- **Callback** → Fungsi yang dikirim sebagai argumen dan dieksekusi nanti.  
- **Promise** → Objek yang mewakili hasil async yang bisa `resolve` (sukses) atau `reject` (gagal).  
- **then()** → Metode pada `Promise` untuk menangani hasil sukses.  
- **catch()** → Metode untuk menangani error pada `Promise`.  
- **async/await** → Cara modern untuk menangani async, membuat kode lebih rapi.  
- **setTimeout** → Fungsi untuk menjalankan kode setelah waktu tertentu (asynchronous).  
- **setInterval** → Fungsi untuk menjalankan kode berulang dalam interval waktu tertentu.  
- **Event Loop** → Mekanisme yang menangani eksekusi async di JavaScript.  
- **Promise.all** → Menjalankan beberapa `Promise` sekaligus, gagal jika ada satu yang gagal.  
- **Promise.allSettled** → Menjalankan semua `Promise` dan mengembalikan status masing-masing. 

---

Berikut adalah beberapa **method asynchronous** yang sering digunakan di JavaScript:  

### **1. Timer Functions** (Menunda Eksekusi)  
✅ `setTimeout(fn, ms)` → Menjalankan fungsi setelah delay tertentu.  
✅ `setInterval(fn, ms)` → Menjalankan fungsi secara berulang dalam interval waktu tertentu.  

```js
setTimeout(() => console.log("Executed after 2s"), 2000);
setInterval(() => console.log("Runs every 1s"), 1000);
```

---

### **2. HTTP Requests & API Calls** (Mengambil Data)  
✅ `fetch(url)` → Mengambil data dari server/API.  
✅ `axios.get(url)` → Alternatif `fetch()` dengan fitur tambahan (harus install axios).  
✅ `XMLHttpRequest()` → Cara lama sebelum `fetch()`.  

```js
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(data => console.log(data));
```

---

### **3. Event Listeners** (Menunggu Interaksi)  
✅ `element.addEventListener(event, callback)` → Menjalankan kode saat event terjadi (klik, input, dll).  

```js
document.getElementById("btn").addEventListener("click", () => {
  console.log("Button clicked!");
});
```

---

### **4. File & Database Operations (Node.js)**  
✅ `fs.readFile(path, callback)` → Membaca file secara async di Node.js.  
✅ `fs.writeFile(path, data, callback)` → Menulis file secara async.  
✅ `db.query(sql, callback)` → Query database secara async.  

```js
const fs = require("fs");
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

---

### **5. Web APIs & Workers**  
✅ `setImmediate(fn)` → Menjalankan fungsi segera setelah event loop kosong (Node.js).  
✅ `requestAnimationFrame(fn)` → Digunakan untuk animasi yang berjalan optimal pada browser.  
✅ `Web Workers` → Menjalankan script di thread terpisah agar tidak membebani UI.  
✅ `Service Workers` → Cache data agar website bisa berjalan offline.  

```js
requestAnimationFrame(() => {
  console.log("Executed in next repaint cycle");
});
```

---

### **Kesimpulan**  
Method async yang sering digunakan:  
✔ **Timer** → `setTimeout()`, `setInterval()`, `setImmediate()`  
✔ **Networking** → `fetch()`, `axios.get()`, `XMLHttpRequest()`  
✔ **Event Handling** → `addEventListener()`  
✔ **File & Database (Node.js)** → `fs.readFile()`, `db.query()`  
✔ **Web APIs** → `requestAnimationFrame()`, `Web Workers`, `Service Workers`  

Jadi, banyak sekali metode async di JavaScript, tergantung kebutuhan! 🚀