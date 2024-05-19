<?php

session_start();
ob_start();


if(($_POST["user"]=="g231210090@sakarya.edu.tr") && ($_POST["pass"]=="g231210090"))
{

    $_SESSION["user"] = "g231210090@sakarya.edu.tr";
    $_SESSION["pass"] ="g231210090";
    $_SESSION["login"] = "true";



    echo '<h1>Hoşgeldiniz "g231210090". Giriş başarılı bir şekilde gerçekleşti. Anasayfaya yönlendiriliyorsunuz. Lütfen bekleyin...</h1><br>';
    header("Refresh:4; url=./responsive.html");

}
else
{


    echo "<h1>Kullanıcı adı veya şifre yanlış. Login sayfasına yönlendiriliyorsunuz. Lütfen tekrar deneyiniz...</h1>";

    header("Refresh: 4; url= ./giris.html");
}


    ob_end_flush();
?>