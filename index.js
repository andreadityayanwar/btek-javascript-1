// 20 Method yang ada di JavaScript

// 1. Method : fill ()
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

//11. Method : charAt()