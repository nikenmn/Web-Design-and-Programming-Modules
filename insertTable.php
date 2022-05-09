<?php
    $hostname = "localhost";
    $username = "root";
    $password = "";
    $database = "web_db";

    $connect = mysqli_connect($hostname, $username, $password, $database);

    if($connect){
        echo "Koneksi ke MySql berhasil <br>";
    } else {
        echo "Koneksi ke MySql gagal". mysqli_connect_error();
    }

    $query = "INSERT INTO student(name, address) VALUES ('Niken', 'Probolinggo'),
                                                        ('Ardi', 'Surabaya'),
                                                        ('Rivaldito', 'Kraksaan')";
    if(mysqli_query($connect, $query)){
        echo "Data baru berhasil dibuat";
    } else {
        echo "Data baru gagal dibuat <br>". mysqli_error($connect);
    }
    mysqli_close($connect);
?>
