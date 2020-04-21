<?php
include 'db/db.php';
$obj = json_decode($_POST["myData"]);
$id = $obj->{'id'};
$dateWithTimeZone = $obj->{'date'};
$scrap = $obj->{'scrap'};
$bones = $obj->{'bones'};

        date_default_timezone_set('Asia/Manila');
        $time = strtotime($dateWithTimeZone);
        $dateInLocal = date("Y-m-d H:i:s", $time);

if ($dbconn->connect_error) {
    die("Connection failed: " . $dbconn->connect_error);
}


$sql = "UPDATE products_in 
        SET created_at = '$dateInLocal' 
        WHERE id = '$id'";

if ($dbconn->query($sql) === TRUE) {

} else {
         echo "Error: " . $sql . " " . $dbconn->error;
}
 $dbconn->close();

?>