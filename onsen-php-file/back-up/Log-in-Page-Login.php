<?php

include 'db/db.php';
$obj = json_decode($_POST["mydata"]);
//var_dump($obj);
//echo $obj->{'newname'};
$username = $obj->{'username'};
$password = $obj->{'password'};

    $sql = "SELECT id,username FROM accounts WHERE username='$username'and password='$password'";
    $query = mysqli_query($dbconn,$sql);
        while ($row = mysqli_fetch_assoc($query)) {
	    $data[] = $row;
    }		
        echo json_encode($data);
    
            

 $dbconn->close();
?>