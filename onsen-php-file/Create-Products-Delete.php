<?php

    include 'db/db.php';

    if(isset($_POST['id'])) {

    $id = $_POST['id'];

    if ($dbconn->connect_error) {

               die("Connection failed: " . $dbconn->connect_error);

     }

    $sql = "DELETE FROM products WHERE id ='$id'";

    

    if ($dbconn->query($sql) === TRUE) {
        echo "Deleted Products";
        include 'Create-Product-PusherUpdate.php';
    } else {
        echo "Error: ". $dbconn->error;
    }

        $dbconn->close();

    }



?>