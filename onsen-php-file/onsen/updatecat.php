<?php

include 'db.php';
$obj = json_decode($_POST["myData"]);
//var_dump($obj);
//echo $obj->{'newname'};
$id = $obj->{'id'};
$newname = $obj->{'newname'};
if ($dbconn->connect_error) {
    die("Connection failed: " . $dbconn->connect_error);
}
$sql = "UPDATE rawcategory SET name = '$newname' WHERE id = '$id'";
if ($dbconn->query($sql) === TRUE) {
          echo "New Category Name Updated:<br> category name: $newname";
} else {
         echo "Error: " . $sql . " " . $dbconn->error;
}
 $dbconn->close();

?>

