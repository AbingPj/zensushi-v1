<?php

include 'db/db.php';

$obj = json_decode($_POST["myData"]);
$rawid = $obj->{'rawid'};
$qty = $obj->{'qty'};
$userid = $obj->{'userid'};
$account_id = $userid;

// $sql = "INSERT INTO rawmaterialbalance (`rawmaterial_id`, `quantity`) VALUES ('$rawid','$qty')
// ON DUPLICATE KEY UPDATE quantity=quantity+VALUES(quantity)";

date_default_timezone_set('Asia/Manila');
$date = date("Y-m-d G:i:s");
echo $date;


$sql = "INSERT INTO `rawmaterialin` 
( `rawmaterial_id`, `quantity`, `created_at`, `updated_at`, created_by)
VALUES ('$rawid', '$qty', '$date', NULL, '$userid')";


if ($dbconn->query($sql) === TRUE) {
    $last_id = $dbconn->insert_id;
    include 'Notify_StockIn_Raw_channel.php';
    include 'Inventory-RawMaterials-UpdatePusher.php';
    include 'Records-Inv-RM-IN-Pusher-Update.php';
} else {
         echo "Error: " . $sql . " " . $dbconn->error;
}

$dbconn->close();

?>