---
sidebar_position: 2
---

# Restore Database

Melakukan Restore Database TigaPutri dari file `.bak`

:::caution

Menurut pengalaman kami, file `.bak` dan (`.mdf`, `.ldf`) tidak support SQL Server versi di bawahnya. Misalnya: database TigaPutri yang berjalan di Microsoft SQL Server 2014, ketika dibackup menjadi file `.bak` hanya bisa di-_restore_ ke SQL Server 2014, 2016, dan versi diatasnya. Begitu juga file `.mdf` dan `.ldf`-nya hanya bisa di-_attach_ ke SQL Server 2014, 2016, dan versi diatasnya. Jika file `.bak` atau file `.mdf` dan `.ldf` dari SQL Server 2014 di-_restore_ atau di-_attach_ ke SQL Server 2016 atau versi diatasnya, maka database tersebut tidak dapat di-_restore_ atau di-_attach_ ke SQL Server 2014 lagi

:::

Berikut langkah-langkah untuk merestore database TigaPutri dari file `.bak`:

1. Pastikan **versi SQL Server** yang dipakai **sama atau versinya lebih tinggi** dari SQL Server yang digunakan untuk membackup (membuat file `.bak`)

2. Buka aplikasi <a href="/docs/software-pendukung/sql-server/buka-ssms" target="_blank">Microsoft SQL Server Management Studio</a>

3. Klik kanan pada `Databases` kemudian pilih `Restore Database`. Maka akan tampil dialog **Restore Database**

    ![Buka menu restore](/img/restore/1.png)

4. Pada bagian `Source` pilih `Device` dan klik tombol `...`

    ![Set source to Device](/img/restore/2.png)

5. Pada dialog **Select Backup Device** klik tombol `Add`

    ![Select Backup Device](/img/restore/3.png)

6. Cari file `.bak` yang mau direstore, kemudian klik `OK`

    ![Pilih lokasi file bak](/img/restore/4.png)

7. Pada dialog **Select Backup Device** klik `OK`

    ![Pilih lokasi file bak](/img/restore/5.png)

8. Pada `Backup sets to restore`, centang lokasi file `.bak` yang dipilih tadi

    ![Pilih lokasi file bak](/img/restore/6.png)

9. Pada **Select a Page** di sebelah kiri, pilih `Files`. Kemudian centang `Relocate all files to folder`. Pada `Data file folder`, pilih lokasi untuk menyimpan file `.mdf` yang akan dibuat (biasanya lokasinya di folder `db` didalam folder aplikasi `TigaPutri`). Untuk `Log file folder` lokasinya tinggal disamakan dengan `Data file folder`. Bila sudah, klik `OK`

    ![Ubah lokasi file mdf](/img/restore/7.png)

10. Tunggu proses restore-nya hingga selesai. Jika sudah selesai klik `OK`

    ![Proses restore selesai](/img/restore/8.png)

11. Klik kanan pada `Databases` kemudian pilih `Refresh`

    ![Refresh databases](/img/restore/9.png)

12. Jika proses restore-nya sukses, maka databasenya akan tampil

    ![Database hasil restore](/img/restore/10.png)
