<?php
include 'db/db.php';  
$query = mysqli_query($dbconn, 
"SELECT accounts.id,
        accounts.username, 
        accounts.password, 
        accounts.account_name, 
        accounts.accounts_type_id,
        accounts_type.name as 'account_type',
        accounts.created_at as 'date' 
        FROM `accounts`
            INNER JOIN `accounts_type` 
                ON accounts_type.id = accounts.accounts_type_id"
);
while ($row = mysqli_fetch_assoc($query)) {
	$data[] = $row;
}		
echo json_encode($data);
 ?>