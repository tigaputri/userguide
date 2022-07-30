---
sidebar_position: 3
---

# Pindah PC

Untuk pengguna lama yang TigaPutrinya sudah teraktivasi dan ingin pindah PC

Berikut langkah-langkah untuk memindahkan TigaPutri ke PC baru:

1. Persiapkan hal-hal yang dibutuhkan di **PC baru**. Silakan baca <a href="persiapan" target="_blank">di sini</a>

2. Di **PC baru**, buat folder untuk TigaPutri. Jika di PC baru tersedia drive lain selain drive `C:` yang bisa digunakan (misal: `D:`,`E:`,`F:`, dst.) maka sebaiknya folder tigaputri dibuat di drive selain drive `C:`

3. Di **PC lama**, tutup Software TigaPutri dan tutup juga semua aplikasi add-onnya (`Management TigaPutri`, `Mutasi Bank`, `Terminal Web`) jika ada

4. Selanjutnya buka aplikasi <a href="/docs/software-pendukung/sql-server/buka-ssms" target="_blank">SQL Server Management Studio</a>

5. Klik kanan database `TigaPutri` → `Properties`, muncul dialog **Database Properties**

    ![Menu Properties](/img/pindah_pc/open_properties.png)

6. Di **Database Properties**, pilih menu `Files` di sebelah kiri. Selanjutnya cek lokasi penyimpanan file `.mdf` dan `.ldf` di kolom `Path`. Jika lokasinya di luar folder `TigaPutri`, catat dulu lokasinya. Kemudian klik tombol `Cancel` untuk menutup dialog **Database Properties**

    ![Cek lokasi tigaputri.mdf](/img/pindah_pc/lokasidb.png)

7. Klik kanan lagi di database `TigaPutri`, pilih `Tasks` → `Detach`. Maka akan muncul dialog **Detach Database**

    ![Menu Detach database](/img/pindah_pc/open_detach.png)

8. Centang kolom `Drop Connections` kemudian klik `OK`. Tunggu sampai prosesnya selesai

    ![Detach database](/img/pindah_pc/detachdb.png)

9. Klik kanan `Database` pilih `Refresh`. Cek kembali di `Database` seharusnya database `TigaPutri` sudah tidak ada

    ![Refresh database](/img/pindah_pc/refresh_db.png)

10. Jika lokasi file `.mdf` dan `.ldf` di luar folder `TigaPutri`, buka lokasi yang dicatat tadi di windows explorer, kemudian pindahkan file `.mdf` dan `.ldf` TigaPutri ke dalam folder `TigaPutri`. Buat sebuah folder dengan nama `db` di dalam folder `TigaPutri` dan pindahkan file  `.mdf` dan `.ldf`-nya tadi ke folder tersebut

11. Copy semua file dan folder yang ada di dalam folder `TigaPutri` **PC lama** ke folder `TigaPutri` di **PC Baru**

12. Di **PC baru**, buka <a href="/docs/software-pendukung/sql-server/buka-ssms" target="_blank">SQL Server Management Studio</a>

13. Klik kanan pada `Databases`, pilih `Attach`. Maka tampil dialog **Attach Databases**

    ![Mentu attach database](/img/pindah_pc/attachdbmenu.png)

14. Pada dialog **Attach Databases**, klik tombol `Add`

    ![Tombol add](/img/pindah_pc/attachdb.png)

15. Pada dialog **Locate Database File**, pilih file `.mdf` tigaputri yang sudah dicopy dari PC lama tadi, dan klik `OK`

    ![Pilih file mdf](/img/pindah_pc/selectmdf.png)

16. Pada dialog **Attach Databases** bagian `Databases to attach` dan `Databases detail` akan tampil lokasi file `.mdf` yang dipilih tadi. Klik `OK` untuk memulai proses _attach_. Tunggu hingga prosesnya selesai

    ![Attach database](/img/pindah_pc/do_attachdb.png)

17. Setelah proses _attach_ selesai, klik kanan `Databases` → `Refresh`. Maka database TigaPutri yang diattach tadi akan tampil

    ![Attach database](/img/pindah_pc/refresh_db.png)

18. Selanjutnya buka folder TigaPutri. Jalankan `TigaPutri.exe`

19. Jika muncul dialog setting koneksi, silakan <a href="db-conn-settings" target="_blank">setting koneksi databasenya</a>

20. Seharusnya `TigaPutri`-nya akan otomatis teraktivasi jika terhubung ke internet
