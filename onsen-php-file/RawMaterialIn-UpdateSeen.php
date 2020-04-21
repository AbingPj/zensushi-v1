
<?php

include 'db/db.php';
if(isset($_POST['rec_id'])) {
    $rec_id = $_POST['rec_id'];
    $sql= "UPDATE rawmaterialin SET seen = 1 WHERE id = $rec_id";
    $dbconn->query($sql); 
}




