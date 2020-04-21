<?php
include 'db/db.php';
$obj = json_decode($_POST["myData"]);
$rawid = $obj->{'rawid'};
$qty = $obj->{'qty'};
$sql = "INSERT INTO rawmaterialbalance (`rawmaterial_id`, `quantity`) VALUES ('$rawid','$qty')
ON DUPLICATE KEY UPDATE quantity=quantity+VALUES(quantity)";
$dbconn->query($sql);
$dbconn->close();
?>