"use strict";(self.webpackChunkuserguide=self.webpackChunkuserguide||[]).push([[866],{3905:(a,e,t)=>{t.d(e,{Zo:()=>o,kt:()=>u});var n=t(7294);function i(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function l(a,e){if(null==a)return{};var t,n,i=function(a,e){if(null==a)return{};var t,n,i={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(i[t]=a[t]);return i}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(i[t]=a[t])}return i}var d=n.createContext({}),s=function(a){var e=n.useContext(d),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},o=function(a){var e=s(a.components);return n.createElement(d.Provider,{value:e},a.children)},k={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(a,e){var t=a.components,i=a.mdxType,r=a.originalType,d=a.parentName,o=l(a,["components","mdxType","originalType","parentName"]),m=s(t),u=i,c=m["".concat(d,".").concat(u)]||m[u]||k[u]||r;return t?n.createElement(c,p(p({ref:e},o),{},{components:t})):n.createElement(c,p({ref:e},o))}));function u(a,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var r=t.length,p=new Array(r);p[0]=m;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=a,l.mdxType="string"==typeof a?a:i,p[1]=l;for(var s=2;s<r;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8498:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>k,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=t(7462),i=(t(7294),t(3905));const r={sidebar_position:3},p="Pindah PC",l={unversionedId:"permulaan/instalasi/pindah-pc",id:"permulaan/instalasi/pindah-pc",title:"Pindah PC",description:"Untuk pengguna lama yang TigaPutrinya sudah teraktivasi dan ingin pindah PC",source:"@site/docs/permulaan/instalasi/pindah-pc.md",sourceDirName:"permulaan/instalasi",slug:"/permulaan/instalasi/pindah-pc",permalink:"/userguide/docs/permulaan/instalasi/pindah-pc",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Instalasi Baru",permalink:"/userguide/docs/permulaan/instalasi/fresh-install"},next:{title:"Koneksi ke Database",permalink:"/userguide/docs/permulaan/instalasi/db-conn-settings"}},d={},s=[],o={toc:s};function k(a){let{components:e,...r}=a;return(0,i.kt)("wrapper",(0,n.Z)({},o,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pindah-pc"},"Pindah PC"),(0,i.kt)("p",null,"Untuk pengguna lama yang TigaPutrinya sudah teraktivasi dan ingin pindah PC"),(0,i.kt)("p",null,"Berikut langkah-langkah untuk memindahkan TigaPutri ke PC baru:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Persiapkan hal-hal yang dibutuhkan di ",(0,i.kt)("strong",{parentName:"p"},"PC baru"),". Silakan baca ",(0,i.kt)("a",{href:"persiapan",target:"_blank"},"di sini"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Di ",(0,i.kt)("strong",{parentName:"p"},"PC baru"),", buat folder untuk TigaPutri. Jika di PC baru tersedia drive lain selain drive ",(0,i.kt)("inlineCode",{parentName:"p"},"C:")," yang bisa digunakan (misal: ",(0,i.kt)("inlineCode",{parentName:"p"},"D:"),",",(0,i.kt)("inlineCode",{parentName:"p"},"E:"),",",(0,i.kt)("inlineCode",{parentName:"p"},"F:"),", dst.) maka sebaiknya folder tigaputri dibuat di drive selain drive ",(0,i.kt)("inlineCode",{parentName:"p"},"C:"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Di ",(0,i.kt)("strong",{parentName:"p"},"PC lama"),", tutup Software TigaPutri dan tutup juga semua aplikasi add-onnya (",(0,i.kt)("inlineCode",{parentName:"p"},"Management TigaPutri"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Mutasi Bank"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Terminal Web"),") jika ada")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Selanjutnya buka aplikasi ",(0,i.kt)("a",{href:"/docs/software-pendukung/sql-server/buka-ssms",target:"_blank"},"SQL Server Management Studio"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Klik kanan database ",(0,i.kt)("inlineCode",{parentName:"p"},"TigaPutri")," \u2192 ",(0,i.kt)("inlineCode",{parentName:"p"},"Properties"),", muncul dialog ",(0,i.kt)("strong",{parentName:"p"},"Database Properties")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Menu Properties",src:t(4897).Z,width:"394",height:"438"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Di ",(0,i.kt)("strong",{parentName:"p"},"Database Properties"),", pilih menu ",(0,i.kt)("inlineCode",{parentName:"p"},"Files")," di sebelah kiri. Selanjutnya cek lokasi penyimpanan file ",(0,i.kt)("inlineCode",{parentName:"p"},".mdf")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},".ldf")," di kolom ",(0,i.kt)("inlineCode",{parentName:"p"},"Path"),". Jika lokasinya di luar folder ",(0,i.kt)("inlineCode",{parentName:"p"},"TigaPutri"),", catat dulu lokasinya. Kemudian klik tombol ",(0,i.kt)("inlineCode",{parentName:"p"},"Cancel")," untuk menutup dialog ",(0,i.kt)("strong",{parentName:"p"},"Database Properties")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Cek lokasi tigaputri.mdf",src:t(6498).Z,width:"734",height:"625"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Klik kanan lagi di database ",(0,i.kt)("inlineCode",{parentName:"p"},"TigaPutri"),", pilih ",(0,i.kt)("inlineCode",{parentName:"p"},"Tasks")," \u2192 ",(0,i.kt)("inlineCode",{parentName:"p"},"Detach"),". Maka akan muncul dialog ",(0,i.kt)("strong",{parentName:"p"},"Detach Database")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Menu Detach database",src:t(9653).Z,width:"609",height:"309"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Centang kolom ",(0,i.kt)("inlineCode",{parentName:"p"},"Drop Connections")," kemudian klik ",(0,i.kt)("inlineCode",{parentName:"p"},"OK"),". Tunggu sampai prosesnya selesai"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Detach database",src:t(1319).Z,width:"689",height:"626"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Klik kanan ",(0,i.kt)("inlineCode",{parentName:"p"},"Database")," pilih ",(0,i.kt)("inlineCode",{parentName:"p"},"Refresh"),". Cek kembali di ",(0,i.kt)("inlineCode",{parentName:"p"},"Database")," seharusnya database ",(0,i.kt)("inlineCode",{parentName:"p"},"TigaPutri")," sudah tidak ada"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Refresh database",src:t(8365).Z,width:"324",height:"282"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Jika lokasi file ",(0,i.kt)("inlineCode",{parentName:"p"},".mdf")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},".ldf")," di luar folder ",(0,i.kt)("inlineCode",{parentName:"p"},"TigaPutri"),", buka lokasi yang dicatat tadi di windows explorer, kemudian pindahkan file ",(0,i.kt)("inlineCode",{parentName:"p"},".mdf")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},".ldf")," TigaPutri ke dalam folder ",(0,i.kt)("inlineCode",{parentName:"p"},"TigaPutri"),". Buat sebuah folder dengan nama ",(0,i.kt)("inlineCode",{parentName:"p"},"db")," di dalam folder ",(0,i.kt)("inlineCode",{parentName:"p"},"TigaPutri")," dan pindahkan file  ",(0,i.kt)("inlineCode",{parentName:"p"},".mdf")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},".ldf"),"-nya tadi ke folder tersebut")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy semua file dan folder yang ada di dalam folder ",(0,i.kt)("inlineCode",{parentName:"p"},"TigaPutri")," ",(0,i.kt)("strong",{parentName:"p"},"PC lama")," ke folder ",(0,i.kt)("inlineCode",{parentName:"p"},"TigaPutri")," di ",(0,i.kt)("strong",{parentName:"p"},"PC Baru"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Di ",(0,i.kt)("strong",{parentName:"p"},"PC baru"),", buka ",(0,i.kt)("a",{href:"/docs/software-pendukung/sql-server/buka-ssms",target:"_blank"},"SQL Server Management Studio"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Klik kanan pada ",(0,i.kt)("inlineCode",{parentName:"p"},"Databases"),", pilih ",(0,i.kt)("inlineCode",{parentName:"p"},"Attach"),". Maka tampil dialog ",(0,i.kt)("strong",{parentName:"p"},"Attach Databases")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Mentu attach database",src:t(2173).Z,width:"375",height:"355"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Pada dialog ",(0,i.kt)("strong",{parentName:"p"},"Attach Databases"),", klik tombol ",(0,i.kt)("inlineCode",{parentName:"p"},"Add")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Tombol add",src:t(3418).Z,width:"691",height:"624"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Pada dialog ",(0,i.kt)("strong",{parentName:"p"},"Locate Database File"),", pilih file ",(0,i.kt)("inlineCode",{parentName:"p"},".mdf")," tigaputri yang sudah dicopy dari PC lama tadi, dan klik ",(0,i.kt)("inlineCode",{parentName:"p"},"OK")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Pilih file mdf",src:t(5488).Z,width:"595",height:"435"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Pada dialog ",(0,i.kt)("strong",{parentName:"p"},"Attach Databases")," bagian ",(0,i.kt)("inlineCode",{parentName:"p"},"Databases to attach")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"Databases detail")," akan tampil lokasi file ",(0,i.kt)("inlineCode",{parentName:"p"},".mdf")," yang dipilih tadi. Klik ",(0,i.kt)("inlineCode",{parentName:"p"},"OK")," untuk memulai proses ",(0,i.kt)("em",{parentName:"p"},"attach"),". Tunggu hingga prosesnya selesai"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Attach database",src:t(2563).Z,width:"692",height:"628"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Setelah proses ",(0,i.kt)("em",{parentName:"p"},"attach")," selesai, klik kanan ",(0,i.kt)("inlineCode",{parentName:"p"},"Databases")," \u2192 ",(0,i.kt)("inlineCode",{parentName:"p"},"Refresh"),". Maka database TigaPutri yang diattach tadi akan tampil"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Attach database",src:t(8365).Z,width:"324",height:"282"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Selanjutnya buka folder TigaPutri. Jalankan ",(0,i.kt)("inlineCode",{parentName:"p"},"TigaPutri.exe"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Jika muncul dialog setting koneksi, silakan ",(0,i.kt)("a",{href:"db-conn-settings",target:"_blank"},"setting koneksi databasenya"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Seharusnya ",(0,i.kt)("inlineCode",{parentName:"p"},"TigaPutri"),"-nya akan otomatis teraktivasi jika terhubung ke internet"))))}k.isMDXComponent=!0},3418:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/attachdb-f96d3a9d17f90d26b20a75cdce07f8d2.png"},2173:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/attachdbmenu-bceb64588233e69501367202f8db37b8.png"},1319:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/detachdb-d9dc4c8e80a1c4e00e5b3660bb1c0875.png"},2563:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/do_attachdb-0c109536fa501dcc7949e0e91d773427.png"},6498:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/lokasidb-c5c04727975a76cae497eb478521c3b9.png"},9653:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/open_detach-eb64bfa41cf3f4decae24e7af0abd8ba.png"},4897:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/open_properties-fd6a0d0daebd59cf2bb872ad797075c0.png"},8365:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/refresh_db-17cc191b418fa75624e99ef4b88f9d46.png"},5488:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/selectmdf-b2e7d639392fb7435923321fa4b8d4ef.png"}}]);