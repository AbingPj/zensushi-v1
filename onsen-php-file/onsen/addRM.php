<?php

include 'db.php';
$obj = json_decode($_POST["myData"]);
//var_dump($obj);
//echo $obj->{'newname'};
$catid = $obj->{'catid'};
$rmname = $obj->{'rmname'};
$unit = $obj->{'unit'};

$var = trim($rmname);
if(isset($var) === true && $var === '') {
    // It's empty
    echo "Textbox is empty";
}else{
    if ($dbconn->connect_error) {
        die("Connection failed: " . $dbconn->connect_error);
    }
    $sql = "INSERT INTO  rawmaterial(rawcategory_id, name, unit) VALUES('$catid','$rmname','$unit')";
    if ($dbconn->query($sql) === TRUE) {
              echo "New Raw Material Added:<br> Raw Material Name: $rmname";
    } else {
             echo "Error: " . $sql . " " . $dbconn->error;
    }
}
 $dbconn->close();
?>