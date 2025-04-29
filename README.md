📦 HTML Template Generator Setup Guide

🛠️ **SETUP & INSTALLASI**

1. Clone repository ini:
   ```bash
   git clone https://github.com/RyanBagusB/html-template-generator.git
   ```

2. Pindah ke direktori project:
   ```bash
   cd html-template-generator
   ```

3. Install dependensi:
   ```bash
   npm install
   ```

4. Setup file .env:
   Salin file .env dari contoh:
   ```bash
   cp .env.example .env
   ```

5. Pastikan variabel `DATABASE_URL` sudah sesuai.
   Jika Anda menggunakan MySQL default (user: root, tanpa password), contoh penulisan:
   ```env
   DATABASE_URL="mysql://root@localhost:3306/html_template_generator"
   ```

6. Jalankan perintah berikut untuk menghasilkan JWT key:
   ```bash
   npm run generate:jwt
   ```

🧩 **PRISMA ORM**

7. Konfigurasi database di Prisma:
   Buka file: `prisma/schema.prisma`

   Temukan bagian:
   ```prisma
   datasource db {
     provider = "mysql"
     url      = env("DATABASE_URL")
   }
   ```

   Jika Anda menggunakan database selain MySQL, ubah `provider` sesuai.
   Contoh: `provider = "mongodb"` jika Anda menggunakan MongoDB.

8. Generate Prisma Client dan juga seeder:
   ```bash
   npm run migrate:deploy
   ```

9. Jalankan migrasi database (menggunakan folder migrations/):
   ```bash
   npx prisma migrate deploy
   ```

▶️ **MENJALANKAN PROJECT**

10. Mode Development:
    ```bash
    npm run dev
    ```

11. Build untuk Production:
    ```bash
    npm run build
    ```

12. Start Production:
    ```bash
    npm start
    ```
