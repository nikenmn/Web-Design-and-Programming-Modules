<?php
    include "myconnection.php";

    $id = $_POST["myid"];
    $name = $_POST["myname"];
    $address = $_POST["myaddress"];
    $photo = $_POST["myFoto"];

    $target_path= "fotoProfil/" . basename($_FILES['myFoto']['name']);

    if(move_uploaded_file($_FILES['myFoto']['tmp_name'],$target_path)){
        echo "The file ". $target_path . "has been uploaded";
    }else{
        echo "Terjadi kesalahan dalam mengunggah foto, Silahkan mencoba kembali";
    }

    $query = "UPDATE student SET name='$name', address='$address', photo ='$target_path' WHERE id=$id";

    if(mysqli_query($connect, $query)){
        header('Location:homeCRUD.php');
    } else {
        echo "Gagal mengubah data <br>". mysqli_error($connect);
    }

    mysqli_close($connect);
?>
