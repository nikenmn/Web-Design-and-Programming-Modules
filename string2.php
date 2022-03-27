<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <?php
            $numberedString = "123456788901234567890";
            $fivePos = strpos($numberedString, "5");
            echo "Posisi angka 5 di dalam string adalah $fivePos";
            $fivePos2 = strpos($numberedString, "5", $fivePos+1);
            echo "<br> Posisi angka 5 yang kedua di alam string adalah $fivePos2";
            /* tambahan percobaan
            $fivePos3 = strpos($numberedString, "0", $fivePos+2);
            echo "<br> Posisi angka 0 yang kedua di alam string adalah $fivePos3"; */
            ?>
    </body>
</html>