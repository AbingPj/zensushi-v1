<?php
include 'db.php';
$obj = json_decode($_POST["myData"]);
//var_dump($obj);
//echo $obj->{'newname'};
$rawid = $obj->{'rawid'};
$name = $obj->{'name'};
$val = $obj->{'val'};
$pack = $obj->{'pack'};

if ($dbconn->connect_error) {
    die("Connection failed: " . $dbconn->connect_error);
}
$sql = "INSERT INTO `product2`( `name`, `val`, `pack`, `rawmaterial_id`)
 VALUES ('$name','$val', '$pack','$rawid')";
if ($dbconn->query($sql) === TRUE) {
          echo "New Product added,<br>name: $name";
} else {
         echo "Error: " . $sql . " " . $dbconn->error;
}
 $dbconn->close();
?>