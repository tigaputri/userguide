"use strict";(self.webpackChunkuserguide=self.webpackChunkuserguide||[]).push([[661],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>c});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),o=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},d=function(e){var a=o(e.components);return n.createElement(s.Provider,{value:a},e.children)},k={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=o(t),c=i,u=m["".concat(s,".").concat(c)]||m[c]||k[c]||r;return t?n.createElement(u,p(p({ref:a},d),{},{components:t})):n.createElement(u,p({ref:a},d))}));function c(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,p=new Array(r);p[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,p[1]=l;for(var o=2;o<r;o++)p[o]=t[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3305:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>p,default:()=>k,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var n=t(7462),i=(t(7294),t(3905));const r={sidebar_position:2},p="Restore Database",l={unversionedId:"maintenance/restore-db-bak",id:"maintenance/restore-db-bak",title:"Restore Database",description:"Melakukan Restore Database TigaPutri dari file .bak",source:"@site/docs/maintenance/restore-db-bak.md",sourceDirName:"maintenance",slug:"/maintenance/restore-db-bak",permalink:"/userguide/docs/maintenance/restore-db-bak",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Backup Database",permalink:"/userguide/docs/maintenance/backup-db-bak"},next:{title:"Hapus Data dan Shrink Database",permalink:"/userguide/docs/maintenance/hapus-data"}},s={},o=[],d={toc:o};function k(e){let{components:a,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"restore-database"},"Restore Database"),(0,i.kt)("p",null,"Melakukan Restore Database TigaPutri dari file ",(0,i.kt)("inlineCode",{parentName:"p"},".bak")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Menurut pengalaman kami, file ",(0,i.kt)("inlineCode",{parentName:"p"},".bak")," dan (",(0,i.kt)("inlineCode",{parentName:"p"},".mdf"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".ldf"),") tidak support SQL Server versi di bawahnya. Misalnya: database TigaPutri yang berjalan di Microsoft SQL Server 2014, ketika dibackup menjadi file ",(0,i.kt)("inlineCode",{parentName:"p"},".bak")," hanya bisa di-",(0,i.kt)("em",{parentName:"p"},"restore")," ke SQL Server 2014, 2016, dan versi diatasnya. Begitu juga file ",(0,i.kt)("inlineCode",{parentName:"p"},".mdf")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},".ldf"),"-nya hanya bisa di-",(0,i.kt)("em",{parentName:"p"},"attach")," ke SQL Server 2014, 2016, dan versi diatasnya. Jika file ",(0,i.kt)("inlineCode",{parentName:"p"},".bak")," atau file ",(0,i.kt)("inlineCode",{parentName:"p"},".mdf")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},".ldf")," dari SQL Server 2014 di-",(0,i.kt)("em",{parentName:"p"},"restore")," atau di-",(0,i.kt)("em",{parentName:"p"},"attach")," ke SQL Server 2016 atau versi diatasnya, maka database tersebut tidak dapat di-",(0,i.kt)("em",{parentName:"p"},"restore")," atau di-",(0,i.kt)("em",{parentName:"p"},"attach")," ke SQL Server 2014 lagi")),(0,i.kt)("p",null,"Berikut langkah-langkah untuk merestore database TigaPutri dari file ",(0,i.kt)("inlineCode",{parentName:"p"},".bak"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Pastikan ",(0,i.kt)("strong",{parentName:"p"},"versi SQL Server")," yang dipakai ",(0,i.kt)("strong",{parentName:"p"},"sama atau versinya lebih tinggi")," dari SQL Server yang digunakan untuk membackup (membuat file ",(0,i.kt)("inlineCode",{parentName:"p"},".bak"),")")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Buka aplikasi ",(0,i.kt)("a",{href:"/docs/software-pendukung/sql-server/buka-ssms",target:"_blank"},"Microsoft SQL Server Management Studio"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Klik kanan pada ",(0,i.kt)("inlineCode",{parentName:"p"},"Databases")," kemudian pilih ",(0,i.kt)("inlineCode",{parentName:"p"},"Restore Database"),". Maka akan tampil dialog ",(0,i.kt)("strong",{parentName:"p"},"Restore Database")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Buka menu restore",src:t(8629).Z,width:"398",height:"336"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Pada bagian ",(0,i.kt)("inlineCode",{parentName:"p"},"Source")," pilih ",(0,i.kt)("inlineCode",{parentName:"p"},"Device")," dan klik tombol ",(0,i.kt)("inlineCode",{parentName:"p"},"...")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Set source to Device",src:t(1147).Z,width:"859",height:"490"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Pada dialog ",(0,i.kt)("strong",{parentName:"p"},"Select Backup Device")," klik tombol ",(0,i.kt)("inlineCode",{parentName:"p"},"Add")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Select Backup Device",src:t(7430).Z,width:"511",height:"382"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Cari file ",(0,i.kt)("inlineCode",{parentName:"p"},".bak")," yang mau direstore, kemudian klik ",(0,i.kt)("inlineCode",{parentName:"p"},"OK")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Pilih lokasi file bak",src:t(9577).Z,width:"646",height:"472"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Pada dialog ",(0,i.kt)("strong",{parentName:"p"},"Select Backup Device")," klik ",(0,i.kt)("inlineCode",{parentName:"p"},"OK")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Pilih lokasi file bak",src:t(4548).Z,width:"498",height:"372"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Pada ",(0,i.kt)("inlineCode",{parentName:"p"},"Backup sets to restore"),", centang lokasi file ",(0,i.kt)("inlineCode",{parentName:"p"},".bak")," yang dipilih tadi"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Pilih lokasi file bak",src:t(7281).Z,width:"862",height:"731"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Pada ",(0,i.kt)("strong",{parentName:"p"},"Select a Page")," di sebelah kiri, pilih ",(0,i.kt)("inlineCode",{parentName:"p"},"Files"),". Kemudian centang ",(0,i.kt)("inlineCode",{parentName:"p"},"Relocate all files to folder"),". Pada ",(0,i.kt)("inlineCode",{parentName:"p"},"Data file folder"),", pilih lokasi untuk menyimpan file ",(0,i.kt)("inlineCode",{parentName:"p"},".mdf")," yang akan dibuat (biasanya lokasinya di folder ",(0,i.kt)("inlineCode",{parentName:"p"},"db")," didalam folder aplikasi ",(0,i.kt)("inlineCode",{parentName:"p"},"TigaPutri"),"). Untuk ",(0,i.kt)("inlineCode",{parentName:"p"},"Log file folder")," lokasinya tinggal disamakan dengan ",(0,i.kt)("inlineCode",{parentName:"p"},"Data file folder"),". Bila sudah, klik ",(0,i.kt)("inlineCode",{parentName:"p"},"OK")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Ubah lokasi file mdf",src:t(1817).Z,width:"864",height:"732"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Tunggu proses restore-nya hingga selesai. Jika sudah selesai klik ",(0,i.kt)("inlineCode",{parentName:"p"},"OK")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Proses restore selesai",src:t(815).Z,width:"542",height:"300"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Klik kanan pada ",(0,i.kt)("inlineCode",{parentName:"p"},"Databases")," kemudian pilih ",(0,i.kt)("inlineCode",{parentName:"p"},"Refresh")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Refresh databases",src:t(4882).Z,width:"324",height:"282"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Jika proses restore-nya sukses, maka databasenya akan tampil"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Database hasil restore",src:t(7319).Z,width:"315",height:"634"})))))}k.isMDXComponent=!0},8629:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/1-e0335f6497edd5a045ed44d6754de766.png"},7319:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/10-ad39444e647c24c999c101ef5b75ee50.png"},1147:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2-7cd1cb1ca0372b6cf4d9c3ad425dd54a.png"},7430:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/3-57d83799ca8712ca3fade1799a8c9c50.png"},9577:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/4-7f73318e74afd4219063687853ae3196.png"},4548:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/5-52a3d2d39d7cd7a9b4ab1b61b7d04fe2.png"},7281:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/6-01b7f4a6c7cb2837cfe3913282470476.png"},1817:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/7-8ba6d044c1acd721ded3981246d01ba1.png"},815:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/8-fd4bb96921154271e6773387a06a6eaa.png"},4882:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/9-2667773bddb01837f0304a37c87fb1bb.png"}}]);