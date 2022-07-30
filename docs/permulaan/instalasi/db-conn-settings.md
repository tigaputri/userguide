---
sidebar_position: 4
---

# Koneksi ke Database

Setting koneksi ke database di Software TigaPutri

Dialog setting koneksi database biasanya muncul ketika TigaPutri pertama kali dijalankan atau koneksi ke database gagal. Berikut langkah-langkah untuk setting koneksi database di TigaPutri:

**Cara 1: Menggunakan ConnectionString yang sudah ada**

1. Pilih `Gunakan ConnectionString`, kemudian klik `Test`

    ![Tes koneksi](/img/setting_koneksi/2.png)

2. Jika koneksi berhasil, klik `Simpan`. Jika tidak berhasil, coba Cara 2

    ![Tes koneksi](/img/setting_koneksi/3.png)

**Cara 2: Setting Koneksi Manual**

1. Buka aplikasi SQL Server Management Studio

    ![Buka SSMS](/img/ssms/buka_ssms.png)

2. Saat muncul dialog login di **SQL Server Management Studio**, copy `Server Name` dan paste ke `Nama Server` di setting koneksi. Kemudian tutup **SQL Server Management Studio**-nya

    ![SSMS login dialog](/img/setting_koneksi/5.png)

3. Jika SQL Servernya ada di satu komputer dengan TigaPutri, maka pilih `Gunakan Autentikasi Windows`. Jika beda komputer, maka pilih `Gunakan Autentikasi SQL Server` dan wajib memasukkan `Username` dan `Password` SQL Server

    ![Dialog bayar iuran](/img/setting_koneksi/6.png)

4. Klik `Test`. Jika koneksi berhasil, klik `Simpan`.

    ![Dialog bayar iuran](/img/setting_koneksi/7.png)
