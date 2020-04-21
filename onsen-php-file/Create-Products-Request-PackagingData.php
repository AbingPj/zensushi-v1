<?php
include 'db/db.php';  
$query = mysqli_query($dbconn, 'SELECT * FROM products_packaging');
while ($row = mysqli_fetch_assoc($query)) {
	$data[] = $row;
}		
echo json_encode($data);
 ?>