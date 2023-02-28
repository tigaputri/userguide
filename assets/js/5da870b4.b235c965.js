"use strict";(self.webpackChunkuserguide=self.webpackChunkuserguide||[]).push([[34],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>k});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),l=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},m=function(e){var a=l(e.components);return n.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=l(t),k=r,c=d["".concat(p,".").concat(k)]||d[k]||u[k]||i;return t?n.createElement(c,s(s({ref:a},m),{},{components:t})):n.createElement(c,s({ref:a},m))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=d;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4804:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=t(7462),r=(t(7294),t(3905));const i={sidebar_position:2},s="Membuka SQL Server Management Studio",o={unversionedId:"software-pendukung/sql-server/buka-ssms",id:"software-pendukung/sql-server/buka-ssms",title:"Membuka SQL Server Management Studio",description:"Cara membuka SQL Server Management Studio",source:"@site/docs/software-pendukung/sql-server/buka-ssms.md",sourceDirName:"software-pendukung/sql-server",slug:"/software-pendukung/sql-server/buka-ssms",permalink:"/userguide/docs/software-pendukung/sql-server/buka-ssms",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Instalasi SQL Server",permalink:"/userguide/docs/software-pendukung/sql-server/install"},next:{title:"Membuat User di SQL Server Management Studio",permalink:"/userguide/docs/software-pendukung/sql-server/buat-user"}},p={},l=[],m={toc:l};function u(e){let{components:a,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"membuka-sql-server-management-studio"},"Membuka SQL Server Management Studio"),(0,r.kt)("p",null,"Cara membuka SQL Server Management Studio"),(0,r.kt)("p",null,"Berikut langkah-langkah untuk membuka aplikasi SQL Server Management Studio. Sebagai contoh SQL Server Management Studio 2014:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Klik ",(0,r.kt)("inlineCode",{parentName:"p"},"Start"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Di menu ",(0,r.kt)("inlineCode",{parentName:"p"},"Start"),", pilih ",(0,r.kt)("inlineCode",{parentName:"p"},"Microsoft SQL Server 2014")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"p"},"SQL Server 2014 Management Studio"),". Maka SQL Server Mangement Studio akan terbuka"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Buka SSMS",src:t(6551).Z,width:"820",height:"687"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ketika SQL Server Management Studio dibuka, akan tampil dialog ",(0,r.kt)("strong",{parentName:"p"},"Connect to Server"),". Bagian ",(0,r.kt)("inlineCode",{parentName:"p"},"Server Name")," biasanya langsung terisi. Jika ada lebih dari satu SQL Server silakan pilih ",(0,r.kt)("inlineCode",{parentName:"p"},"Server Name")," yang mau digunakan."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Buka SSMS",src:t(615).Z,width:"413",height:"315"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Jika ",(0,r.kt)("inlineCode",{parentName:"p"},"Server Name"),"-nya kosong. Di ",(0,r.kt)("inlineCode",{parentName:"p"},"Server Name"),"-nya pilih ",(0,r.kt)("inlineCode",{parentName:"p"},"<Browse for more...>")," sehingga akan tampil dialog ",(0,r.kt)("strong",{parentName:"p"},"Browse for Servers")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Buka SSMS",src:t(4797).Z,width:"420",height:"318"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Pada dialog ",(0,r.kt)("strong",{parentName:"p"},"Browse for Servers")," tersebut akan tampil SQL Server yang tersedia baik yang ada di komputer yang sama (tab ",(0,r.kt)("strong",{parentName:"p"},"Local Servers"),") maupun yang ada di jaringan (tab ",(0,r.kt)("strong",{parentName:"p"},"Network Servers"),"). Sebagai contoh SQL Server yang mau dipakai ada di komputer yang sama, maka buka tab ",(0,r.kt)("strong",{parentName:"p"},"Local Servers"),", kemudian pilih SQL Servernya di ",(0,r.kt)("inlineCode",{parentName:"p"},"Database Engine")," kemudian klik ",(0,r.kt)("inlineCode",{parentName:"p"},"OK"),". Jika di ",(0,r.kt)("inlineCode",{parentName:"p"},"Database Engine"),"-nya tidak tampil daftar SQL Servernya, pastikan SQL Servernya sudah terinstall di komputer dan servisnya sudah berjalan"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Buka SSMS",src:t(5121).Z,width:"428",height:"418"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Setelah dipilih, bagian ",(0,r.kt)("inlineCode",{parentName:"p"},"Server Name"),"-nya akan terisi")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Jika SQL Servernya ada di komputer yang sama, biasanya ",(0,r.kt)("inlineCode",{parentName:"p"},"Authentication"),"-nya tinggal pilih yang ",(0,r.kt)("inlineCode",{parentName:"p"},"Windows Authentication")," kemudian klik ",(0,r.kt)("inlineCode",{parentName:"p"},"Connect"),". Jika tidak bisa atau SQL Servernya di komputer lain, ",(0,r.kt)("inlineCode",{parentName:"p"},"Authentication"),"-nya pilih ",(0,r.kt)("inlineCode",{parentName:"p"},"SQL Server Authentication")," dan masukkan username dan password SQL Servernya kemudian klik ",(0,r.kt)("inlineCode",{parentName:"p"},"Connect")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Buka SSMS",src:t(4823).Z,width:"420",height:"316"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Jika koneksi berhasil akan tampil daftar database-nya"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Buka SSMS",src:t(1884).Z,width:"343",height:"309"})))))}u.isMDXComponent=!0},615:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/5-5eb7978d83454c679daa2460ba7671f5.png"},4797:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/browse_for_more-ffc72ada05ec6efd646645dcd31b1dad.png"},5121:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/browse_servers-4d31973248a1ebe2530815540d8f3e12.png"},1884:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/databases-3e90675a109f90242f96ee18c598894a.png"},4823:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/login_smss-b4d37cb683200982dc087b5431653e12.png"},6551:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/open_ssms_as_admin-cbbac974e6fdae90e6783245b826503d.png"}}]);