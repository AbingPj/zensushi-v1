<?php
include 'db.php';
$obj = json_decode($_POST["myData"]);
$rawid = $obj->{'rawid'};
$qty = $obj->{'qty'};
$sql = "UPDATE rawmaterialbalance 
SET quantity = quantity - $qty
WHERE rawmaterial_id = $rawid";
$dbconn->query($sql);
$dbconn->close();
?>