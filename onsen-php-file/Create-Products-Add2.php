<?php



include 'db/db.php';

$obj = json_decode($_POST["mydata"]);

//var_dump($obj);

//echo $obj->{'newname'};

$name = $obj->{'name'};

$packaging_id = $obj->{'packaging_id'};

$critical_level = $obj->{'critical_level'};







    if ($dbconn->connect_error) {

        die("Connection failed: " . $dbconn->connect_error);

    }

    $sql = "INSERT INTO  products(name, packaging_id, critical_level) 

            VALUES('$name', '$packaging_id', '$critical_level')";

            

    if ($dbconn->query($sql) === TRUE) {
              echo "New Product Added";
              include 'Create-Product-PusherUpdate.php';
    } else {

             echo "Error: " . $sql . " " . $dbconn->error;

    }



 $dbconn->close();

?>