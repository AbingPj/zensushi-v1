<?php
include 'db/db.php';
$obj = json_decode($_POST["myData"]);
//var_dump($obj);
//echo $obj->{'newname'};
$remarkstype = $obj->{'remarkstype'};
$id = $obj->{'id'};



if ($dbconn->connect_error) {
    die("Connection failed: " . $dbconn->connect_error);
}

if ($remarkstype == "1") {
    $sql = "UPDATE accounts SET seen = '2' WHERE id = '$id'";
    //echo $sql;
} elseif ($remarkstype == "2") {
    $sql = "UPDATE orders SET seen = '2' WHERE id = '$id'";
    //echo $sql;
} elseif ($remarkstype == "3") {
    $sql = "UPDATE products_in SET seen = '2' WHERE id = '$id'";
    //echo $sql;
} elseif ($remarkstype == "4") {
    $sql = "UPDATE delivery SET seen = '2' WHERE id = '$id'";
    //echo $sql;
} elseif ($remarkstype == "5") {
    $sql = "UPDATE rawmaterialin SET seen = '2' WHERE id = '$id'";
    //echo $sql;
} elseif ($remarkstype == "6") {
    $sql = "UPDATE rawmaterialout SET seen = '2' WHERE id = '$id'";
    //echo $sql;
}


if ($dbconn->query($sql) === true) {
    echo "successful_remove";
} else {
    echo "Error: " . $sql . " " . $dbconn->error;
}
$dbconn->close();
