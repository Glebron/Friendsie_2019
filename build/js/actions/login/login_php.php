<?php
require '../conn.php';

$cookie_name = "login";
$returnObject = new \stdClass();
$returnObject->login = "";
$returnObject->lvl = 30;
$returnObject->error = false;
$returnObject->errorMessage="0";

if (isset($_REQUEST["cookie"])){
    if (isset($_COOKIE[$cookie_name]) and !$_COOKIE[$cookie_name]=="" ){
    $returnObject->login = $_COOKIE[$cookie_name];
    $returnObject->errorMessage="cookie";
    $myJSON = json_encode($returnObject);
    echo $myJSON;
    die;
    }
    else {
        $returnObject->error = true;
        $returnObject->errorMessage="cookie not set";
        $myJSON = json_encode($returnObject);
        echo $myJSON;
    die;
    }
}



$login = $_REQUEST["login"];
$login = strip_tags($login);
$login = stripslashes($login);
$login = mysqli_real_escape_string($conn, $login);

$psw = $_REQUEST["psw"];
$psw = strip_tags($psw);
$psw = stripslashes($psw);
$psw = mysqli_real_escape_string($conn, $psw);
$hash = password_hash($psw, PASSWORD_DEFAULT);

if ($login=="logOff" and $psw==""){
    setcookie($cookie_name, $cookie_value, time() - (600), "/");
    header('Location: index.html'); 
    die;
}


    $sql = "SELECT id, login, psw FROM users WHERE login = '$login' ";
    $result = $conn->query($sql);
    
    if (mysqli_num_rows($result) > 0) {
        $row=mysqli_fetch_array($result,MYSQLI_ASSOC);    
        if (password_verify($psw, $row['psw'])){
            $cookie_value = $login;
            setcookie($cookie_name, $cookie_value, time() + (600), "/");
            $returnObject->login = $login;
            $myJSON = json_encode($returnObject);
            echo $myJSON;
        }         
        else {
            $returnObject->error = true;
            $returnObject->errorMessage="Acces denied";
            $myJSON = json_encode($returnObject);
            echo $myJSON;
 
        } 
    }
    else {
        $returnObject->error = true;
        $returnObject->login = $login;
        $returnObject->lvl= $psw;
        $returnObject->errorMessage="no user";
        $myJSON = json_encode($returnObject);
        echo $myJSON;
    }




$conn->close();

?>


