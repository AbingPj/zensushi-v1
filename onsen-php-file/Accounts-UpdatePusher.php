<?php

$sql2 = "SELECT accounts.id,
accounts.username, 
accounts.password, 
accounts.account_name, 
accounts.accounts_type_id,
accounts_type.name as 'account_type',
accounts.created_at as 'date' 
FROM `accounts`
    INNER JOIN `accounts_type` 
        ON accounts_type.id = accounts.accounts_type_id";
        
        $result2 = $dbconn->query($sql2);
        if ($result2->num_rows > 0) {
            while ($row2 = $result2->fetch_assoc()) {
                $arr2[] = $row2;
            }
        }
        include 'Pusher-Api/config.php';
        $data2 = json_encode($arr2);
        $pusher->trigger('update-accounts-channel', 'sent', $data2);


