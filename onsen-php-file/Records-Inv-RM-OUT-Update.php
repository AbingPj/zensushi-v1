<?php
include 'db/db.php';
$obj = json_decode($_POST["myData"]);

$id = $obj->{'id'};
$quantity = $obj->{'quantity'};
$dateWithTimeZone = $obj->{'date'};

date_default_timezone_set('Asia/Manila');
$time = strtotime($dateWithTimeZone);
$dateInLocal = date("Y-m-d H:i:s", $time);
echo $dateInLocal;

if ($dbconn->connect_error) {
    die("Connection failed: " . $dbconn->connect_error);
}

$sql = "UPDATE rawmaterialout 
        SET quantity = '$quantity', created_at = '$dateInLocal'
        WHERE id = '$id'";

if ($dbconn->query($sql) === TRUE) {
    include 'Records-Inv-RM-OUT-Pusher-Update.php';
} else {
         echo "Error: " . $sql . " " . $dbconn->error;
}
 $dbconn->close();

?>