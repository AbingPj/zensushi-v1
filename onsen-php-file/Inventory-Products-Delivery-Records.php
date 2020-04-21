<?php
include 'db/db.php';  
$query = mysqli_query($dbconn, 
"SELECT 
delivery.id,
delivery.created_at,
accounts.account_name
FROM delivery
LEFT JOIN accounts ON accounts.id = delivery.account_id
"
);

while ($row = mysqli_fetch_assoc($query)) {
	$data[] = $row;
}		

echo json_encode($data);
 ?>