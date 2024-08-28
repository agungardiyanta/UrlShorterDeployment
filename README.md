# UrlShorterDeployment
Repository ini bagian dari repositoy [UrlShorter](https://github.com/agungardiyanta/UrlShorter) yang menyimpan infrastructure code atau script yang digunakan.

UrlShorter project merupakan aplikasi yang menyediakan layanan untuk mengubah atau memperpendek link menjadi `short_id` yang unik.\
Project ini dibagi menjadi 3 service utama frontend, core dan analytic
* frontend service sebagai tampilan web menggunakan vite.js + react
Lalu ada dua backend service menggunakan bahasa Golang 1.22
* core service merupakan API backend yang membuat dan melakukan redirect link dengan short_id 
* analytic service merupakan API backend yang menyimpan berapa banyak total sebuah link short_id diakses

## Infrastructure
Project ini di deploy dalam cluster Google Kubernetes Engine dengan konfigurasi 2 node 


