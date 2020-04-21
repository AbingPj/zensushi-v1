<?php
include 'db/db.php';
$obj = json_decode($_POST["mydata"]);
//var_dump($obj);
//echo $obj->{'newname'};
    $id = $obj->{'id'};
    date_default_timezone_set('Asia/Manila');
    $date = date("Y-m-d G:i:s");
    $sql = "INSERT INTO accounts_log_out(account_id, created) VALUES('$id', '$date')";
    $dbconn->query($sql);
    echo json_encode("zenLOG_OUT");
    include 'Accounts-Log-UpdatePusher.php';
 $dbconn->close();
?>