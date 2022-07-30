---
sidebar_position: 1
---

# Backup Database

Backup Database TigaPutri kedalam file `.bak`

:::caution

Menurut pengalaman kami, file `.bak` dan (`.mdf`, `.ldf`) tidak support SQL Server versi di bawahnya. Misalnya: database TigaPutri yang berjalan di Microsoft SQL Server 2014, ketika dibackup menjadi file `.bak` hanya bisa di-_restore_ ke SQL Server 2014, 2016, dan versi diatasnya. Begitu juga file `.mdf` dan `.ldf`-nya hanya bisa di-_attach_ ke SQL Server 2014, 2016, dan versi diatasnya. Jika file `.bak` atau file `.mdf` dan `.ldf` dari SQL Server 2014 di-_restore_ atau di-_attach_ ke SQL Server 2016 atau versi diatasnya, maka database tersebut tidak dapat di-_restore_ atau di-_attach_ ke SQL Server 2014 lagi

:::

Berikut langkah-langkah untuk membackup database TigaPutri kedalam file `.bak`:

1. Buka aplikasi <a href="/docs/software-pendukung/sql-server/buka-ssms" target="_blank">Microsoft SQL Server Management Studio</a>

2. Klik kanan pada database `TigaPutri` kemudian pilih `Tasks` → `Backup`. Maka akan tampil dialog **Backup Database**

    ![Buka menu backup](/img/backup/1.png)

3. Di dialog **Backup Database**, klik item di _list_ di bagian _Destination_ kemudian klik tombol remove untuk menghapus item lokasi penyimpanan file backup

    ![Hapus lokasi backup lama](/img/backup/2.png)

4. Kemudian klik tombol Add untuk menambah lokasi peyimpanan file backup

    ![Tambah lokasi backup](/img/backup/3.png)

5. Pada dialog **Select Backup Destination** klik tombol `...`

    ![Browse lokasi](/img/backup/4.png)

6. Pada dialog **Locate Database Files**, Pilih folder/lokasi untuk menyimpan file `.bak` hasil backup dan isi `File Name` dengan nama file `.bak` yang diinginkan. Misalnya: `tigaputri_28072022.bak`. kemudian klik `OK`

    ![Pilih lokasi dan nama file backup](/img/backup/5.png)

7. Di **Select Backup Destination**, bagian `File Name`-nya akan berubah sesuai lokasi yang dipilih tadi. Kemudian klik `OK`

    ![Select Backup Destination](/img/backup/6.png)

8. Lokasi yang telah dipilih tadi akan muncul di _list_. Klik lokasi tersebut untuk memilihnya sebagai lokasi penyimpanan

9. Pada `Backup Type` pilih `Full` untuk melakukan full backup, kemudian klik `OK` untuk memulai proses backup

    ![Settingan backup](/img/backup/7.png)

10. Tunggu sampai proses backupnya selesai. Setelah prosesnya selesai, klik `OK`

    ![Backup selesai](/img/backup/8.png)
