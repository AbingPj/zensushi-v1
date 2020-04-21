<?php
    include 'db/db.php';
 
    $obj = json_decode($_POST["myData"]);
    $id = $obj->{'id'};
    $id2 = $obj->{'id2'};

    if ($dbconn->connect_error) {
               die("Connection failed: " . $dbconn->connect_error);
     }

    $sql = "DELETE FROM products_in WHERE id ='$id'";
    if ($dbconn->query($sql) === TRUE) {
        
    } else {
        //echo "Error: ". $dbconn->error;
        echo "Cannot delete or update a parent row: a foreign key constraint fails";
    }
        $dbconn->close();
   

?>