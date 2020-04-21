<?php
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
        $data['unseen'] = $result->num_rows;

        $searchnamequery = " SELECT account_name FROM accounts WHERE id = $account_id";
        $searchnameresult = $dbconn->query($searchnamequery);
        if ($searchnameresult->num_rows > 0) {
            while($row = $searchnameresult->fetch_assoc()) {
                echo "name: " . $row["account_name"];
                $searchname = $row["account_name"];
            }
        }
        $data['last_id'] = $last_id;
        $data['notifyby'] = $searchname;
        include 'Pusher-Api/config.php';
        $pusher->trigger('notify_stockin_raw_channel','sent',$data);
        include 'Notifications-UpdatePusher.php';
?>