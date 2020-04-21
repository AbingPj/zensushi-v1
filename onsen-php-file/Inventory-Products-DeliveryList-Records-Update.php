<?php
include 'db/db.php';
$obj = json_decode($_POST["myData"]);
$id = $obj->{'id'};
$quantity = $obj->{'quantity'};
$spi = $obj->{'spi'};

if ($dbconn->connect_error) {
    die("Connection failed: " . $dbconn->connect_error);
}

$sql = "UPDATE deliverylist 
        SET quantity = '$quantity'
        WHERE id = '$id'";

if ($dbconn->query($sql) === TRUE) {
    include 'Inventory-Products-DeliveryList-Records-Update-Pusher.php';
} else {
         echo "Error: " . $sql . " " . $dbconn->error;
}
 $dbconn->close();

?>