<?php
include 'db.php';  
	//$dbconn=mysqli_connect("localhost","id6620734_adminzensushi","1234567890","id6620734_zensushi");

$query = mysqli_query($dbconn, 'SELECT id,name FROM packing');
while ($row = mysqli_fetch_assoc($query)) {
	$data[] = $row;
}		
echo json_encode($data);
 ?>