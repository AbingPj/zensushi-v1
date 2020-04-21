<?php
include 'db/db.php';
$obj = json_decode($_POST["myData"]);
$rawid = $obj->{'rawid'};
$qty = $obj->{'qty'};
$userid = $obj->{'userid'};
$dateWithTimeZone = $obj->{'date'};
$account_id = $userid;

date_default_timezone_set('Asia/Manila');
$time = strtotime($dateWithTimeZone);
$dateInLocal = date("Y-m-d H:i:s", $time);
echo $dateInLocal;


$sql = "INSERT INTO `rawmaterialout`
     (`rawmaterial_id`, `quantity`, `created_at`, `updated_at`, created_by)
     VALUES ('$rawid', '$qty', '$dateInLocal', NULL, '$userid')";
                 
if ($dbconn->query($sql) === TRUE) {
    $last_id = $dbconn->insert_id;
    include 'Notify_StockOut_Raw_channel.php';  
    include 'Inventory-RawMaterials-UpdatePusher.php';  
    include 'Records-Inv-RM-OUT-Pusher-Update.php';

    $criticalsql = "SELECT * FROM RM_BALANCE_view WHERE balance <= critical_level and id='$rawid'";
    $criticalresult = $dbconn->query($criticalsql);
    if ($criticalresult->num_rows > 0) {
          while($row = $criticalresult->fetch_assoc()) {
             	$criticalarr[] = $row;
          }
        $criticaldata = json_encode($criticalarr);
        $pusher->trigger('notify_critical_channel','sent',$criticaldata);
    }


} else {
         echo "Error: " . $sql . " " . $dbconn->error;
}
$dbconn->close();
?>