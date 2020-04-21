<?php

include 'db/db.php';

$obj = json_decode($_POST["mydata"]);

//var_dump($obj);

//echo $obj->{'newname'};

$id = $obj->{'id'};

$name = $obj->{'name'};

$raw_id = $obj->{'raw_id'};

$units_sub = $obj->{'units_sub_id'};

$value = $obj->{'value'};

$packaging_id = $obj->{'packaging_id'};

$critical_level = $obj->{'critical_level'};

if ($dbconn->connect_error) {

    die("Connection failed: " . $dbconn->connect_error);

}

$sql = "UPDATE products

        SET name = '$name',

            rawmaterial_id = '$raw_id',

            units_sub_id='$units_sub',

            value='$value',

            packaging_id = '$packaging_id',

            critical_level = '$critical_level'

            WHERE id = '$id'";

if ($dbconn->query($sql) === true) {
    include 'Create-Product-PusherUpdate.php';
} else {

    echo "Error: " . $sql . " " . $dbconn->error;

}

$dbconn->close();
