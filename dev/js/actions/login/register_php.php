<?php
require '../conn.php';




$login = $_REQUEST["login"];
$login = strip_tags($login);
$login = stripslashes($login);
$login = mysqli_real_escape_string($conn, $login);

$psw = $_REQUEST["psw"];
$psw = strip_tags($psw);
$psw = stripslashes($psw);
$psw = mysqli_real_escape_string($conn, $psw);
$hash = password_hash($psw, PASSWORD_DEFAULT);



    $sql = "INSERT INTO users (login, psw) VALUES ('$login', '$hash')";
    $result = $conn->query($sql);
    
$conn->close();

?>


