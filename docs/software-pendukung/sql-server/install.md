---
sidebar_position: 1
---

# Instalasi SQL Server

Menginstall Microsoft SQL Server dan SQL Server Management Studio

Sebelum menginstall Microsoft SQL Server 2014 dan Microsoft SQL Server Management Studio 2014, download dulu file installernya di link berikut ini:

- Khusus **Windows 32-bit** (download dan install dua-duanya):
  - <a href="https://download.microsoft.com/download/E/A/E/EAE6F7FC-767A-4038-A954-49B8B05D04EB/Express%2032BIT/SQLEXPR_x86_ENU.exe" target="_blank">Microsoft Sql Server 2014 Express 32-bit</a>
  - <a href="https://download.microsoft.com/download/E/A/E/EAE6F7FC-767A-4038-A954-49B8B05D04EB/MgmtStudio%2032BIT/SQLManagementStudio_x86_ENU.exe" target="_blank">Microsoft Sql Server Management Studio 2014 32-bit</a>

- Khusus **Windows 64-bit** (download dan install dua-duanya):
  - <a href="https://download.microsoft.com/download/E/A/E/EAE6F7FC-767A-4038-A954-49B8B05D04EB/Express%2064BIT/SQLEXPR_x64_ENU.exe" target="_blank">Microsoft Sql Server 2014 Express 64-bit</a>
  - <a href="https://download.microsoft.com/download/E/A/E/EAE6F7FC-767A-4038-A954-49B8B05D04EB/MgmtStudio%2064BIT/SQLManagementStudio_x64_ENU.exe" target="_blank">Microsoft Sql Server Management Studio 2014 64-bit</a>

- Bila ingin menggunakan Microsoft SQL Server versi lainnya, linkya ada <a href="https://www.hanselman.com/blog/download-sql-server-express" target="_blank">di sini</a>

## Menginstall SQL Server 2014 Express

Cara menginstall Microsoft SQL Server 2014 Express Edition adalah sebagai berikut:

1. Jalankan aplikasi installer SQL Server 2014 Express

    ![SQL Server 2014 Express Installer](/img/ss/ss0.png)

2. Klik tombol OK untuk mengekstrak file-file instalasi

    ![Ekstrak file-file instalasi](/img/ss/ss1.png)

3. Tunggu sampai proses ekstrak selesai dan aplikasi **SQL Server Installation Center** muncul.

    ![Selesai ekstrak](/img/ss/ss2.png)

4. Jika aplikasi **SQL Server Installation Center** sudah muncul, klik **New SQL Server stand-alone installation or add features to an existing installation**

    ![SQL Server Installation Center](/img/ss/ss3.png)

5. Kemudian akan tampil aplikasi **SQL Server 2014 Setup**. centang _I accept the license terms._ kemudian klik `Next`.

    ![SQL Server 2014 Setup](/img/ss/ss4.png)

6. Selanjutnya akan tampil halaman **Global Rules** dan aplikasinya akan menjalankan proses scanning. Setelah proses scanning selesai, klik tombol `Next`

    ![Halaman Global Rules](/img/ss/ss5.png)

7. Kemudian akan tampil halaman **Microsoft Update**. klik `Next`

    ![Halaman Microsoft Update](/img/ss/ss6.png)

8. Selanjutnya akan tampil halaman **Feature Selection**. Centang `Database Engine Service` dan `SQL Server Replication`, kemudian klik `Next`

    ![Halaman Feature Selection](/img/ss/ss7.png)

9. Di halaman **Instance Configuration**, pilih `Named Instance` kemudian klik `Next`

    ![Halaman Instance Configuration](/img/ss/ss8.png)

10. Di halaman **Server Configuration** langsung klik `Next`

    ![Halaman Server Configuration](/img/ss/ss9.png)

11. Pada halaman **Database Engine Configuration**, pilih `Windows Authentication Mode` kemudian klik `Add Current User`, selanjutnya klik `Next`

    ![Halaman Database Engine Configuration](/img/ss/ss10.png)

12. Tunggu sampai proses instalasi selesai

    ![Proses Instalasi SQL Server](/img/ss/ss11.png)

13. Setelah proses instalasi selesai, klik `Close` untuk menutup **SQL Server 2014 Setup** dan tutup juga **SQL Server Installation Center**

    ![Proses Instalasi Selesai](/img/ss/ss12.png)

14. Selanjutnya install **SQL Server Management Studio** untuk memudahkan dalam pengelolaan database

## Menginstall SQL Management Studio 2014

Setelah menginstall SQL Server, selanjutnya menginstall SQL Server Management Studio. Langkah-langkahnya:

1. Jalankan aplikasi installer SQL Server Management Studio

    ![SQL Server Management Studio Installer](/img/ssms/0.png)

2. Klik `OK` untuk mengekstrak file-file instalasi

    ![SQL Server Management Studio Installer](/img/ssms/1.png)

3. Tunggu sampai proses ekstraksi selesai

    ![Proses Ekstrak](/img/ssms/2.png)

4. Setelah selesai, maka akan muncul **SQL Server Installation Center**. Klik pada **New SQL Server stand-alone installation or add features to an existing installation**. Kemudian akan tampil **SQL Server 2014 Setup**

    ![SQL Server Installation Center](/img/ssms/3.png)

5. Di **SQL Server 2014 Setup**, halaman **Product Updates** klik `Next`

    ![Halaman Product Updates](/img/ssms/4.png)

6. Selanjutnya akan tampil halaman **Installation Type**, pilih **Add features to an existing instance of SQL Server 2014**. Kemudian pilih `SQLEXPRESS` pada dropdown di bawahnya dan klik `Next`

    ![Halaman Installation Type](/img/ssms/5.png)

7. Kemudian tampil halaman **Feature Selection**. Centang pada `Management Tools - Basic` dan `Management Tools - Complete` dan klik `Next`

    ![Halaman Feature Selection](/img/ssms/6.png)

8. Proses instalasi dimulai. Tunggu sampai proses instalasinya selesai

    ![Proses Ekstrak](/img/ssms/7.png)

9. Setelah proses instalasinya selesai, klik tombol `Close` untuk menutup **SQL Server 2014 Setup** dan tutup juga **SQL Server Installation Center**

    ![Proses Ekstrak](/img/ssms/8.png)
