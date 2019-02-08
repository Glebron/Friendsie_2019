<?php
require '../conn.php';

$msg = $_REQUEST["msg"];
$msg = strip_tags($msg);
$msg = stripslashes($msg);
$msg = mysqli_real_escape_string($conn, $msg);

$recipient = $_REQUEST["recipient"];
$recipient = strip_tags($recipient);
$recipient = stripslashes($recipient);
$recipient = mysqli_real_escape_string($conn, $recipient);

$frome = $_REQUEST["frome"];
$frome= strip_tags($frome);
$frome = stripslashes($frome);
$frome = mysqli_real_escape_string($conn, $frome);

$type = $_REQUEST["type"];
$type= strip_tags($type);
$type = stripslashes($type);
$type = mysqli_real_escape_string($conn, $type);



    $sql = "INSERT INTO msg (msg, recipient, frome, type) VALUES ('$msg','$recipient', '$frome' , '$type')";
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }



$conn->close();
?>


