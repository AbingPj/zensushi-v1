<?php
include 'db/db.php';
$obj = json_decode($_POST["myData"]);

$id = $obj->{'id'};
$quantity = $obj->{'quantity'};
$spi = $obj->{'spi'};
// echo json_encode($spi);

if ($dbconn->connect_error) {
    die("Connection failed: " . $dbconn->connect_error);
}

$sql = "UPDATE products_in_list 
        SET quantity = '$quantity'
        WHERE id = '$id'";

if ($dbconn->query($sql) === TRUE) {
    include 'Inventory-Products-In-List-Records-Update-Pusher.php';
} else {
         echo "Error: " . $sql . " " . $dbconn->error;
}
 $dbconn->close();

?>