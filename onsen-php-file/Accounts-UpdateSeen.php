
<?php

include 'db/db.php';
if(isset($_POST['account_id'])) {
    $account_id = $_POST['account_id'];
    $sql= "UPDATE accounts SET seen = 1 WHERE id = $account_id";
    $dbconn->query($sql); 
}




