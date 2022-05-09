<?php
    include "myconnection.php";

    $name = $_POST["myname"];
    $address = $_POST["myaddress"];
    $photo = $_POST["myFoto"];
    $target_path = "fotoProfil/";

    $target_path=$target_path . basename(
        $_FILES['myFoto']['name']);

        if(move_uploaded_file($_FILES['myFoto']['tmp_name'],$target_path)){
        }else{
            echo "Terdapat kesalahan dalam mengunggah foto, coba lagi";
        }

    $query = "INSERT INTO student(name, address, photo) VALUE('$name', '$address', '$target_path)";

    if(mysqli_query($connect, $query)){
        echo "Data baru berhasil ditambahkan";
    } else {
        echo "Data baru gagal ditambahkan <br>".mysqli_error($connect);
    }

    mysqli_close($connect);
?>
