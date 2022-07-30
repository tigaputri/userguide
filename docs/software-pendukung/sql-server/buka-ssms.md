---
sidebar_position: 2
---

# Membuka SQL Server Management Studio

Cara membuka SQL Server Management Studio

Berikut langkah-langkah untuk membuka aplikasi SQL Server Management Studio. Sebagai contoh SQL Server Management Studio 2014:

1. Klik `Start`

2. Di menu `Start`, pilih `Microsoft SQL Server 2014` → `SQL Server 2014 Management Studio`. Maka SQL Server Mangement Studio akan terbuka

    ![Buka SSMS](/img/ssms/open_ssms_as_admin.png)

3. Ketika SQL Server Management Studio dibuka, akan tampil dialog **Connect to Server**. Bagian `Server Name` biasanya langsung terisi. Jika ada lebih dari satu SQL Server silakan pilih `Server Name` yang mau digunakan.

    ![Buka SSMS](/img/setting_koneksi/5.png)

4. Jika `Server Name`-nya kosong. Di `Server Name`-nya pilih `<Browse for more...>` sehingga akan tampil dialog **Browse for Servers**

    ![Buka SSMS](/img/ssms/browse_for_more.png)

5. Pada dialog **Browse for Servers** tersebut akan tampil SQL Server yang tersedia baik yang ada di komputer yang sama (tab **Local Servers**) maupun yang ada di jaringan (tab **Network Servers**). Sebagai contoh SQL Server yang mau dipakai ada di komputer yang sama, maka buka tab **Local Servers**, kemudian pilih SQL Servernya di `Database Engine` kemudian klik `OK`. Jika di `Database Engine`-nya tidak tampil daftar SQL Servernya, pastikan SQL Servernya sudah terinstall di komputer dan servisnya sudah berjalan

    ![Buka SSMS](/img/ssms/browse_servers.png)

6. Setelah dipilih, bagian `Server Name`-nya akan terisi

7. Jika SQL Servernya ada di komputer yang sama, biasanya `Authentication`-nya tinggal pilih yang `Windows Authentication` kemudian klik `Connect`. Jika tidak bisa atau SQL Servernya di komputer lain, `Authentication`-nya pilih `SQL Server Authentication` dan masukkan username dan password SQL Servernya kemudian klik `Connect`

    ![Buka SSMS](/img/ssms/login_smss.png)

8. Jika koneksi berhasil akan tampil daftar database-nya

    ![Buka SSMS](/img/ssms/databases.png)
