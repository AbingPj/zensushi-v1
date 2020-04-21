<?php
include 'db/db.php';  
//$conn = mysqli_connect('localhost', 'root', '', 'zensushi');
$query = mysqli_query($dbconn, 'SELECT id,name FROM rawcategory ORDER BY id DESC');
while ($row = mysqli_fetch_assoc($query)) {
	$data[] = $row;
}		
echo json_encode($data);
 ?>