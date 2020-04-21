<?php

include 'db/db.php';
$obj = json_decode($_POST["mydata"]);
//var_dump($obj);
//echo $obj->{'newname'};
$username = $obj->{'username'};
$password = $obj->{'password'};
    $sql = "SELECT id,username,accounts_type_id FROM accounts WHERE username='$username'and password='$password'";
    $query = mysqli_query($dbconn,$sql);
    while ($row = mysqli_fetch_assoc($query)) {
        $data[] = $row;
        $data2[] = $row;
    }
    
   
    
    $data3 = array_shift($data2);
    date_default_timezone_set('Asia/Manila');
    $date = date("Y-m-d G:i:s");
    $id = $data3['id'];
    $sql2 = "INSERT INTO accounts_log_in(account_id, created) VALUES('$id', '$date')";
    $dbconn->query($sql2);

    echo json_encode($data);

    include 'Accounts-Log-UpdatePusher.php';
    
  
    
 $dbconn->close();
?>