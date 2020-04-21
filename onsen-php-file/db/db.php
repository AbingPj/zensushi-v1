<?php
    $username = "id7413178_zensushi_inv";
    //$username = "id7413178_zensushi";
	$password = "samkit143";
	
	//$username = "root";
	//$password = "";
	
    $database_name = "id7413178_zensushi_inv";
    //$database_name = "id7413178_zensushi";
	$dbconn=mysqli_connect("localhost","$username","$password","$database_name");
	// $dbconn=mysqli_connect("localhost","id6620734_adminzensushi","1234567890","id6620734_zensushi");
	// Check connection
    if($dbconn){
	}
	else{
		echo "ERROR connecting to DB " . mysqli_connect_error();
	}

?>

