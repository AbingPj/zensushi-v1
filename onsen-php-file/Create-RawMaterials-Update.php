<?php
include 'db/db.php';
$obj = json_decode($_POST["myData"]);

$id = $obj->{'id'};
$catid = $obj->{'catid'};
$rmname = $obj->{'rmname'};
$units = $obj->{'unit'};
$units_sub = $obj->{'unitsub'};
$critical_level = $obj->{'critical_level'};

if ($dbconn->connect_error) {
    die("Connection failed: " . $dbconn->connect_error);
}
$sql = "UPDATE rawmaterial 
        SET rawcategory_id = '$catid', name = '$rmname',
            units_id='$units', units_sub_id='$units_sub', critical_level='$critical_level'
            WHERE id = '$id'";
if ($dbconn->query($sql) === TRUE) {
    include 'Create-RawMaterials-UpdatePusher.php';
} else {
         echo "Error: " . $sql . " " . $dbconn->error;
}
 $dbconn->close();

?>