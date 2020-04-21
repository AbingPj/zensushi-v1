<?php

include 'db/db.php';
$obj = json_decode($_POST["myData"]);
//var_dump($obj);
//echo $obj->{'newname'};
$catid = $obj->{'catid'};
$rmname = $obj->{'rmname'};
$unit = $obj->{'unit'};
$subunit = $obj->{'unitsub'};
$critical_level = $obj->{'critical_level'};



$var = trim($rmname);
if(isset($var) === true && $var === '') {
    // It's empty
    echo "Textbox is empty";
}else{
    if ($dbconn->connect_error) {
        die("Connection failed: " . $dbconn->connect_error);
    }
    $sql = "INSERT INTO  rawmaterial(rawcategory_id, name, units_id, units_sub_id, critical_level) VALUES('$catid','$rmname','$unit','$subunit',$critical_level )";
    if ($dbconn->query($sql) === TRUE) {
              echo "New Raw Material Added:<br> Raw Material Name: $rmname";
              include 'Create-RawMaterials-UpdatePusher.php';
    } else {
             echo "Error: " . $sql . " " . $dbconn->error;
    }
}
 $dbconn->close();
?>