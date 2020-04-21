<?php
include 'db/db.php';  
$query = mysqli_query($dbconn, 

"SELECT * FROM RM_BALANCE_view 
WHERE balance <= critical_level and balance <> 'NULL'"

);
while ($row = mysqli_fetch_assoc($query)) {
	$data[] = $row;
}		
echo json_encode($data);

 ?>