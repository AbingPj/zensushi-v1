<?php
    include 'db.php';
    if(isset($_POST['id'])) {
    $id = $_POST['id'];
    if ($dbconn->connect_error) {
               die("Connection failed: " . $dbconn->connect_error);
     }
    $sql = "DELETE FROM units2 WHERE id ='$id'";
    if ($dbconn->query($sql) === TRUE) {
        echo "Deleted Rawmaterial";
    } else {
        echo "Error: " . $sql . " " . $dbconn->error;
    }
        $dbconn->close();
    }

?>