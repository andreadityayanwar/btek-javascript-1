// 20 Method yang ada di JavaScript

// 1. Method : fill()
// Kegunaan  : Untuk mengganti isi yang ada di dalam array dengan yang sudah di tentukan,
//             Menimpa array asli yang sudah dibuat,
//             Posisi awal dan akhir dapat kita tentukan sendiri. Jika tidak, semua elemen akan terganti.
// Contoh Pertama :
const mahasiswa = ["Andre", "Aditya", "Yanwar"];
mahasiswa.fill("Abdullah");
// Output : Abdullah,Abdullah,Abdullah
// Contoh Kedua :
const month = ["January", "February", "August"];
month.fill("December", 2, 3);
// Output : January,February,December

// 2. Method : every()
// Kegunaan  : Mengeksekusi fungsi untuk setiap element array,
//             Fungsi tidak dijalankan jika element kosong,
//             Tidak mengubah array asli.
// Contoh :
const ages = [21, 24, 28, 19];
ages.every(checkAge);

function checkAge(age) {
    return age > 20;
}
// Output : true

// 3. Method : filter()
// Kegunaan  : Membuat array baru yang diisi dengan element yang telah lulus pengujian
//             yang disediakan oleh suatu fungsi.
// Contoh :
const ages = [21, 24, 28, 19];
const result = ages.filter(checkAdult);

function checkAdult(age) {
    return age >= 20;
}
// Output : 21,24,28

// 4. Method : forEach()
// Kegunaan  : Memanggil fungsi untuk setiap element dalam array.
// Contoh :
const students = ["Andre", "Aditya", "Yanwar"];
students.forEach(myFunction);
// Output : 0: Andre
//          1: Aditya
//          2: Yanwar

// 5. Method : from()
// Kegunaan  : Mengembalikan array dari objek apapun dengan tambahan properti length/jarak.
// Contoh :
let text = "EFGHIJKL"
const myArr = Array.from(text);
// Output : E,F,G,H,I,J,K,L

// 6. Method : includes()
// Kegunaan  : Untuk menyeleksi apakah nilai array yang kita cari benar/salah
// Contoh :
const days = ["Sunday", "Monday", "Tuesday", "Wednesday"];
days.includes("Monday");
// Output : true

// 7. Method : indexOf()
// Kegunaan  : untuk menentukan posisi index dari nilai yang telah ditentukan
// Contoh :
const days = ["Sunday", "Monday", "Tuesday", "Wednesday"];
let index = days.indexOf("Monday");
//Output : 1

// 8. Method : join()
// Kegunaan  : menambahkan array yang telah ditentukan kedalam string
// Contoh :
const days = ["Sunday", "Monday", "Tuesday", "Wednesday"];
let text = days.join(" and ");
// Output : Sunday and Monday and Tuesday and Wednesday

// 9. Method : lastIndexOf()
// Kegunaan  : mencari posisi index terakhir yang ada pada value
// Contoh :
const students = ["Andre", "Aditya", "Yanwar", "Aditya", "Andre", "Yanwar"];
let index = students.lastIndexOf("Andre");
// Output : 4

// 10. Method : pop()
// Kegunaan   : Untuk menghapus data terakhir pada sebuah array
// Contoh :
const days = ["Sunday", "Monday", "Tuesday", "Wednesday"];
days.pop();
// Output : Sunday,Monday,Tuesday

// 11. Method : charAt()
// Kegunaan   : Memperlihatkan posisi karakter pada index tertentu dalam sebuah string
// Contoh :
let text = "ANDRE ADITYA";
let letter = text.charAt(3);
// Output : R

// 12. Method : endsWith()
// Kegunaan   : Menampilkan nilai "true" jika string daiakhiri dengan string yang telah ditentukan
// Contoh :
let text = "Andre Aditya Yanwar";
let result = text.endsWith("Yanwar");
// Output : true

// 13. Method : repeat()
// Kegunaan   : menambahkan string dengan sejumlah salinan string
// Contoh :
let text = "Semangat Bootcamp !! ";
let result = text.repeat(2);
// Output : Semangat Bootcamp !! Semangat Bootcamp !!

// 14. Method : replace()
// Kegunaan   : Mengganti string yang ada dengan string baru
// Contoh :
let text = "Saya Andre";
let result = text.replace("Andre", "Aditya");
// Output : Saya Aditya

// 15. Method : search()
// Kegunaan   : memperlihatkan string di index keberapa dari kecocokan pertamanya
// Contoh :
let text = "Andre sedang melaksanakan Bootcamp";
let position = text.search("melaksanakan");
// Output : 13

// 16. Method : split()
// Kegunaan   : Membagi string menjadi array substring
// Contoh :
let text = "Saya sedang melaksanakan Bootcamp";
const myArray = text.split(" ")
// Output : Saya,sedang,melaksanakan,Bootcamp

// 17. Method : toLowerCase()
// Kegunaan   : Merubah string menjadi huruf kecil
// Contoh :
let text = "Ya BeGiNi LaH AkU aPa aDanYa";
let result = text.toLowerCase();
// Output : ya begini lah aku apa adanya

// 18. Method : toUpperCase()
// Kegunaan   : Merubah string menjadi huruf besar
// Contoh :
let text = "aKu aDaLaH AkU";
let result = text.toUpperCase();
// Output : AKU ADALAH AKU

// 19. Method : getDate()
// Kegunaan   : menampilkan hari dalam sebulan (1 hingga 31) dari sebuah tanggal
// Contoh :
const d = new Date("October 5, 2022 01:15:00");
let day = d.getDate();
// Output : 5

// 20. Method : getDay()
// Kegunaan   : Menampilkan hari dalam seminggu (0 hingga 6) dari suatu tanggal
//              Minggu = 0, Senin = 1, ... (dan seterusnya)
// Contoh :
const d = new Date("October 5, 2022 01:15:00");
let day = d.getDay();
// Output : 3