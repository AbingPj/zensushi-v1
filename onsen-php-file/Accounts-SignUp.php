<?php

include 'db/db.php';
$obj = json_decode($_POST["mydata"]);
$newusername = $obj->{'username'};
$newpassword = $obj->{'password'};
$newaccount_name = $obj->{'account_name'};
date_default_timezone_set('Asia/Manila');
$date = date("Y-m-d G:i:s");
    
    $sql = "INSERT INTO 
    `accounts`(`username`, `password`, `accounts_type_id`, `account_name`, `created_at`)
     VALUES ('$newusername','$newpassword','4', '$newaccount_name','$date')";

    if ($dbconn->query($sql) === TRUE) {
        $last_id = $dbconn->insert_id;
        echo "Sign Up Succesfully. Please wait the confirmation of the admin";

        $sql3 = "SELECT
        '1' as remarkstype,
        id,
        seen
        FROM accounts WHERE seen = 0
        
        UNION
        SELECT
        '2' as remarkstype,
        id,
        seen
        FROM orders WHERE seen = 0
        
        UNION
        SELECT
        '3' as remarkstype,
        id,
        seen
        FROM products_in WHERE seen = 0
        
        
        UNION
        SELECT
        '4' as remarkstype,
        id,
        seen
        FROM delivery WHERE seen = 0
        
        UNION
        SELECT
        '5' as remarkstype,
        id,
        seen
        FROM rawmaterialin WHERE seen = 0
        
        
        UNION
        SELECT
        '6' as remarkstype,
        id,
        seen
        FROM rawmaterialout WHERE seen = 0";
        
        $result = $dbconn->query($sql3);
        $data['last_id'] = $last_id;
        $data['unseen'] = $result->num_rows;
        $data['notifyby'] =  $newaccount_name;
        include 'Pusher-Api/config.php';
        $pusher->trigger('signup-notify-channel','sent',$data);
        include 'Notifications-UpdatePusher.php';






    } else {
             echo "Error: " . $dbconn->error;
    }

   

 $dbconn->close();
    

?>