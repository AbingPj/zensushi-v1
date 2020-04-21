<?php
include 'db.php';  
$query = mysqli_query($dbconn, 'SELECT * FROM rawmaterial');
while ($row = mysqli_fetch_assoc($query)) {
	$data[] = $row;
}		
echo json_encode($data);
 ?>