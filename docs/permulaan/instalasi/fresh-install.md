---
sidebar_position: 2
---

# Instalasi Baru

Cara install Software TigaPutri untuk pengguna baru

:::caution

Artikel ini untuk **pengguna baru** Software TigaPutri, atau **pengguna Software TigaPutri Free Edition**. Jika anda adalah pengguna lama Software TigaPutri yang sudah teraktivasi dan ingin pindah komputer, silakan baca artikel **[Pindah PC](pindah-pc.md)**

:::

Berikut ini langkah-langkah penginstalan Software TigaPutri:

1. Silakan baca dulu artikel tentang <a href="persiapan" target="_blank">hal-hal yang perlu disiapkan</a>

2. Download Software TigaPutri Free Edition [di sini](https://tigaputri.asia/tigaputri-software-pulsa/download-software-pulsa-gratis/)

3. Buat sebuah folder dengan nama `TigaPutri` di **selain** drive `C:` (misal: `D:`,`E:`, atau `F:`)

4. Buat sebuah folder dengan nama `db` di dalam folder TigaPutri tersebut sebagai penyimpanan database TigaPutri

5. Copy file TigaPutri Free Edition yang sudah didownlod ke dalam folder TigaPutri dan ekstrak menggunakan software WinRAR, 7-zip atau Windows Explorer

    ![Hasi ekstrak](/img/install/4.png)

6. Copy file `TigaPutri.bak` ke dalam folder `db`

    ![Copy file .bak ke folder db](/img/install/5.png)

7. Lakukan <a href="/docs/maintenance/restore-db-bak" target="_blank">restore database</a> ke Sql Server

8. Jalankan `TigaPutri.exe`

9. Jika muncul dialog **Setting koneksi database**. Silakan ikuti langkah-langkah setting koneksi database <a href="db-conn-settings" target="_blank">di sini</a>

10. Jika setting koneksi sudah OK, maka akan muncul **login TigaPutri**. Masukkan username dan password dan klik tombol `Login`. Default login → **user**: admin **password**: admin

    ![Login TigaPutri](/img/install/39.png)

11. Jika ingin membeli atau mengaktivasi Software TigaPutri Edisi Nusaybah atau edisi diatasnya, silakan ikuti langkah-langkah [di sini](new-activation.md)
