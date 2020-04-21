<?php
    include 'db/db.php';
 
    $obj = json_decode($_POST["myData"]);
    $id = $obj->{'id'};
    $spi = $obj->{'spi'};

    if ($dbconn->connect_error) {
               die("Connection failed: " . $dbconn->connect_error);
     }
    $sql = "DELETE FROM products_in_list WHERE id ='$id'";
    if ($dbconn->query($sql) === TRUE) {
        include 'Inventory-Products-In-List-Records-Update-Pusher.php';
    } else {
        //echo "Error: ". $dbconn->error;
        echo "Cannot delete or update a parent row: a foreign key constraint fails";
    }
        $dbconn->close();
   

?>