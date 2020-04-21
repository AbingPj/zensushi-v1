<?php

include 'db/db.php';
if (isset($_POST['id'])) {
    $id = $_POST['id'];
    if ($dbconn->connect_error) {
        die("Connection failed: " . $dbconn->connect_error);
    }
    $sql = "DELETE FROM accounts WHERE id ='$id'";
    if ($dbconn->query($sql) === true) {
        echo "Account Permanent Deleted";
        include 'Accounts-UpdatePusher.php';
    } else {
        echo "Cannot delete or update a parent row: a foreign key constraint fails";
        //echo "Error: " . $dbconn->error;
    }

    $dbconn->close();

}
