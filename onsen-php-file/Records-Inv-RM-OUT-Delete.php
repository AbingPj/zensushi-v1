<?php
    include 'db/db.php';
    if(isset($_POST['id'])) {
    $id = $_POST['id'];
    if ($dbconn->connect_error) {
               die("Connection failed: " . $dbconn->connect_error);
     }
    $sql = "DELETE FROM rawmaterialout WHERE id ='$id'";
    if ($dbconn->query($sql) === TRUE) {
        include 'Records-Inv-RM-OUT-Pusher-Update.php';
    } else {
        //echo "Error: ". $dbconn->error;
        echo "Cannot delete or update a parent row: a foreign key constraint fails";
    }
        $dbconn->close();
    }

?>