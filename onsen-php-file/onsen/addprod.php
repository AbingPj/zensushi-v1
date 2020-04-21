

<?php
include 'db.php';
$obj = json_decode($_POST["myData"]);
//var_dump($obj);
//echo $obj->{'newname'};
$prodname = $obj->{'prodname'};
$weight = $obj->{'weight'};
$wvalue = $obj->{'wvalue'};
$unit = $obj->{'unit'};
$rawid = $obj->{'rawid'};
if ($dbconn->connect_error) {
    die("Connection failed: " . $dbconn->connect_error);
}
$sql = "INSERT INTO `product`( `name`, `rawmaterial_id`, `weight`, `unit`, `packing`)
 VALUES ('$prodname','$rawid','$wvalue','$weight','$unit')";;
if ($dbconn->query($sql) === TRUE) {
          echo "New Product added,<br>name: $prodname";
} else {
         echo "Error: " . $sql . " " . $dbconn->error;
}
 $dbconn->close();

?>