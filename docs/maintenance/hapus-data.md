---
sidebar_position: 3
---

# Hapus Data dan Shrink Database

Menghapus data TigaPutri yang telah lampau dan mengecilkan ukuran file mdf dan ldf

## Menghapus data TigaPutri

:::caution

Sebelum memulai proses hapus data, sangat disarankan untuk melakukan <a href="/docs/maintenance/backup-db-bak" target="_blank">backup database</a> dulu.

:::

Berikut langkah-langkah untuk menghapus data:

1. Buka aplikasi Management (minimal versi 1.1.7)

    ![Buka aplikasi management](/img/hapus_dan_shrink/management_1.png)

2. Klik gambar **Hapus Data** di sebelah kanan untuk membuka halaman hapus data

    ![Buka halaman hapus data](/img/hapus_dan_shrink/management_2.png)

3. Pilih tanggal awal penghapusan. Contoh: jika dipilih tanggal 21 februari 2023, maka data yang dihapus mulai dari tanggal 21 februari 2023 ke belakang (<= 21 februari 2023)

    ![Memilih tanggal awal hapus data](/img/hapus_dan_shrink/management_3.png)

4. Centang tabel-tabel yang ingin dihapus. Jika mau menghapus semua tabel, maka centang semua

    ![Memilih tabel-tabel yang mau dihapus](/img/hapus_dan_shrink/management_4.png)

5. Jika sudah klik `Execute` untuk memulai proses hapus data. Tunggu sampai prosesnya selesai

    ![Klik tombol Execute](/img/hapus_dan_shrink/management_5.png)

6. Jika proses hapusnya sudah selesai, maka ukuran file database `.mdf` dan `.ldf` tidak langsung berkurang. Untuk mengurangi atau mengecilkan ukuran file `.mdf` dan `.ldf`, silakan lakukan proses **Shrink Database**

    ![Log hapus data selesai](/img/hapus_dan_shrink/management_6.png)

## Shrink Database

:::caution

Sebelum memulai proses shrink database, sangat disarankan menutup aplikasi TigaPutri dulu untuk menghindari database corrupt dan kesalahan di software TigaPutri

:::

Berikut langkah-langkah untuk melakukan Shrink Database:

1. Buka aplikasi Management (minimal versi 1.1.7)

    ![Buka aplikasi management](/img/hapus_dan_shrink/management_1.png)

2. Klik icon **Hapus Data** di sebelah kanan untuk membuka halaman hapus data

    ![Buka halaman hapus data](/img/hapus_dan_shrink/management_2.png)

3. Hilangkan centangan semua tabel, kemudian centang pada **Shrink Database**

    ![Pilih Shrink database](/img/hapus_dan_shrink/management_7.png)

4. Jika sudah klik `Execute` untuk memulai proses Shrink database. Tunggu sampai prosesnya selesai

    ![Klik tombol Execute](/img/hapus_dan_shrink/management_5.png)

5. Jika sudah selesai, cek ukuran file `.mdf` dan `.ldf`-nya dan silakan jalankan software TigaPutrinya lagi

    ![Log shrink database selesai](/img/hapus_dan_shrink/management_6.png)
