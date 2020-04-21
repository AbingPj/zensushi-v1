<?php
    include 'db/db.php';
    if(isset($_POST['id'])) {
    $id = $_POST['id'];
    if ($dbconn->connect_error) {
               die("Connection failed: " . $dbconn->connect_error);
     }
    $sql = "DELETE FROM rawmaterialbalance WHERE rawmaterial_id ='$id'";
    
    if ($dbconn->query($sql) === TRUE) {
        echo "Reset RawMaterials";
        include 'Inventory-RawMaterials-UpdatePusher.php';

    } else {
        echo "Error: ". $dbconn->error;
    }
        $dbconn->close();
    }
?>