<?php
include 'db/db.php';  
$query = mysqli_query($dbconn, 
"SELECT 'Log-In' as log, accounts.id, accounts.username, accounts.account_name, accounts_log_in.created  
FROM accounts_log_in 
INNER JOIN accounts ON accounts.id = accounts_log_in.account_id

UNION

SELECT 'Log-Out' as log, accounts.id, accounts.username, accounts.account_name, accounts_log_out.created  
FROM accounts_log_out 
INNER JOIN accounts ON accounts.id = accounts_log_out.account_id

ORDER BY created DESC
LIMIT 1000"
);
while ($row = mysqli_fetch_assoc($query)) {
	$data[] = $row;
}		
echo json_encode($data);
 ?>