<?php
require '../conn.php';


$recipient = $_REQUEST["recipient"];
$recipient = strip_tags($recipient);
$recipient = stripslashes($recipient);
$recipient = mysqli_real_escape_string($conn, $recipient);

$sql = "SELECT id, msg, recipient, frome FROM msg WHERE recipient = '$recipient' ";
    $result = $conn->query($sql);

    if (mysqli_num_rows($result) > 0) {
        $rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
        $myJSON = json_encode($rows);
        echo $myJSON;
        
        //foreach ($rows as $row) { echo $row['msg']." from ".$row['frome'].'<br>';        }
    }
    else
    echo "No messages";


$conn->close();
?>

