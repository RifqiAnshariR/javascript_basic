Event listener banyak digunakan di berbagai objek dalam Node.js dan JavaScript, terutama pada objek yang mewarisi `EventEmitter`. Beberapa tempat utama event listener digunakan:  

### 1. **Pada `request` dan `response` (HTTP Server)**
   - `request.on('data', callback)` → Menerima data dari client (*streaming*).  
   - `request.on('end', callback)` → Dipanggil saat semua data diterima.  
   - `response.on('finish', callback)` → Dipanggil saat response selesai dikirim.  

### 2. **Pada `fs` (File System)**
   - `fs.createReadStream().on('data', callback)` → Membaca file secara *streaming*.  
   - `fs.createReadStream().on('end', callback)` → Selesai membaca file.  

### 3. **Pada `process` (Event pada aplikasi Node.js)**
   - `process.on('exit', callback)` → Dipanggil saat program akan berhenti.  
   - `process.on('uncaughtException', callback)` → Menangani error yang tidak tertangkap.  

### 4. **Pada `EventEmitter` (Custom Events)**
   - `myEmitter.on('eventName', callback)` → Custom event listener.  
   - `myEmitter.emit('eventName')` → Memicu event secara manual.  

### 5. **Pada `WebSocket` (Real-time Communication)**
   - `socket.on('message', callback)` → Menerima pesan dari client.  
   - `socket.on('close', callback)` → Ketika koneksi WebSocket ditutup.  

### 6. **Pada DOM (Browser)**
   - `element.addEventListener('click', callback)` → Event listener di browser.  
   - `element.addEventListener('keydown', callback)` → Mendeteksi input keyboard.  

Jadi, event listener ada di banyak tempat, terutama pada objek yang bekerja secara asinkron atau berbasis event-driven.