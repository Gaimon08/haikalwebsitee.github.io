function validate() {
  // Dapatkan nilai username dan password yang dimasukkan oleh pengguna
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Tentukan username dan password yang benar
  var correctUsername = "haikal";
  var correctPassword = "0812";
  // Periksa apakah username dan password yang dimasukkan oleh pengguna sesuai dengan yang benar
  if (username == correctUsername && password == correctPassword) {
    // Jika benar, arahkan ke halaman index.html
    window.location.href = "index.html";
  } else {
    // Jika salah, tampilkan pesan kesalahan
    alert("Username atau password salah. Silakan coba lagi.");
  }
}

function ketikTeks(teks, elemen) {
    var teksArr = teks.split('');
    var loopTeks = setInterval(function() {
      if (teksArr.length > 0) {
        elemen.innerHTML += teksArr.shift();
      } else {
        clearInterval(loopTeks);
      }
    }, 100);
  }

  // Buat looping animasi
  var loopAnimasi = setInterval(function() {
    // Bersihkan teks
    document.getElementById("teks").innerHTML = "HAIKAL";

    // Panggil fungsi ketikTeks dengan teks yang diinginkan dan elemen yang akan digunakan
    ketikTeks("WEBSITE", document.getElementById("teks"));
  }, 3000); // Loop setiap 1 detik




  let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}