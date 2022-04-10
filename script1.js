// UTS Niken Maharani Permata
// MI1F-2131710006

//slideshow
var timeOut = 2000;
        var slideIndex = 0;
        var autoOn = true;
        autoSlides();

        function autoSlides() {
            timeOut = timeOut - 20;
            if (autoOn == true && timeOut < 0) {
                showSlides();
            }
            setTimeout(autoSlides, 20);
        }

        function prevSlide() {
            timeOut = 2000;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slideIndex--;

            if (slideIndex > slides.length) {
                slideIndex = 1
            }
            if (slideIndex == 0) {
                slideIndex = 3
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }

        function showSlides() {
            timeOut = 2000;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slideIndex++;

            if (slideIndex > slides.length) {
                slideIndex = 1
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }

// Menyeleksi beberapa inputan textfield
const nama = document.getElementById("nama");
const menu = document.getElementById("menu");
const status = document.getElementById("status");
const jumlah = document.getElementById("jumlah");
const subtotal = document.getElementById("subtotal");
const diskon = document.getElementById("diskon");
const total = document.getElementById("total");
const cetakPesanan = document.querySelector(".output");

// Menyeleksi bagian tombol dan menjalnkan apabila tombol pesan di klik
const tombolPesan = document.getElementById("pesan");
tombolPesan.addEventListener("click", function (e) {
  e.preventDefault();

  // Pengecekan jika inputan-nya kosong atau tidak diisi
  if (nama.value == "" || menu.value == "" || status.value == "" || jumlah.value == "") {
    alert("Inputan nilai harus diisi terlebih dahulu!");
  } else {
    // Mengecek jika inputan nama nya sudah tidak kosong
    if (nama.value != "") {
      document.getElementById("namaOutput").innerText = nama.value;
    }

    
    // Mengecek inputan menu sesuai 3 Pilihan: Mie Setan, Mie Iblis dan Mie Angel
    if (menu.value == "Mie Setan") {
      document.getElementById("menuOutput").innerText = menu.value;
    } else if (menu.value == "Mie Iblis") {
      document.getElementById("menuOutput").innerText = menu.value;
    } else if (menu.value == "Mie Angel") {
      document.getElementById("menuOutput").innerText = dmenu.value;
    } else {
      alert("Pilihan menu hanya Mie Setan, Mie Iblis dan Mie Angel");
    }

    // Mengecek inputan status sesuai 2 pilihan: Member dan Non Member

    let harga = 0;
    let hargaPerMenu = document.getElementById("hargaMenu");

    // Mengecek antara status dan menu
    if (menu.value == "Mie Setan" && status.value == "Member") {
      harga = 12000;
      hargaPerMenu.innerText = harga + " (Dua Belas Ribu)";
    } else if (menu.value == "Mie Setan" && status.value == "Non Member") {
      harga = 12000;
      hargaPerMenu.innerText = harga + " (Dua Belas Ribu)";
    } else if (menu.value == "Mie Iblis" && status.value == "Member") {
      harga = 12000;
      hargaPerMenu.innerText = harga + " (Dua Belas Ribu)";
    } else if (menu.value == "Mie Iblis" && status.value == "Non Member") {
      harga = 12000;
      hargaPerMenu.innerText = harga + " (Dua Belas Ribu)";
    } else if (menu.value == "Mie Angel" && status.value == "Member") {
      harga = 12000;
      hargaPerMenu.innerText = harga + " (Dua Belas Ribu)";
    } else if (menu.value == "Mie Angel" && status.value == "Non Member") {
      harga = 12000;
      hargaPerMenu.innerText = harga + " (Dua Belas Ribu)";
    }

    // Mengecek inputan jumlah / menu jika lebih dari 5 maka akan dikasih diskon, jika dibawah 5 tidak dapat diskon
    // Ubah dulu yang tipe data nya string menjadi number
    const convertToNumber = Number(jumlah.value);
    subtotal.value = harga * convertToNumber;
    document.getElementById("subtotalOutput").innerText = harga * convertToNumber;

    let discount = 0;
    if (status.value=="Member") {
      if(convertToNumber==1){
        discount = 0.05;
      } else if(convertToNumber>1 && convertToNumber<4){
        discount = 0.07;
      } else if(convertToNumber> 3){
        discount = 0.1;
      }
    } else {
      if(convertToNumber>0 && convertToNumber<4){
        discount = 0.01;
      } else if (convertToNumber>3 && convertToNumber<6){
        discount = 0.05;
      } else if (convertToNumber>5){
        discount = 0.05;
      }
    }

    document.getElementById("jumlahOutput").innerText = convertToNumber;
    diskon.value = subtotal.value*discount;
    document.getElementById("diskonOutput").innerText = diskon.value;

    let totalPaid = subtotal.value - diskon.value;
    total.value = totalPaid;
    document.getElementById("totalOutput").innerText = totalPaid;

    if (nama.value != "" || menu.value != "" || status.value != "" || jumlah.value != "") {
      // Mengecek jika user memasukkan nilai 0 pada inputan jumlah tiket
      if (jumlah.value == 0) {
        alert("Jumlah menu tidak boleh 0");
        cetakPesanan.classList.remove("tampil");
      } else {
        cetakPesanan.classList.add("tampil");
      }
    }
  }
});

// Menyeleksi bagian tombol dan menjalankan apabila tombol hapus di klik
const hapus = document.getElementById("hapus");
hapus.addEventListener("click", function () {
  // Menghapus bagian output pada html
  if (nama.value == "" && menu.value == "" && status.value == "" && jumlah.value == "") {
    alert("Data masih kosong, apa yang mau dihapus?");
  } else if (nama.value != "" || menu.value != "" || status.value != "" || jumlah.value != "") {
    nama.value = "";
    menu.value = "";
    status.value = "";
    jumlah.value = "";
    subtotal.value = "";
    diskon.value = "";
    total.value = "";
    cetakPesanan.classList.remove("tampil");
  }
});