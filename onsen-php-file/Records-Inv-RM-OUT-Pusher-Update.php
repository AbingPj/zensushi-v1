<?php

$pushersql ="SELECT 
rawmaterialout.id as 'id',
rawmaterial.id  as 'rawid', 
rawmaterial.name as 'rawmaterial',
rawmaterialout.quantity as 'quantity',
rawmaterialout.created_at,
accounts.account_name as 'created_by',
units_sub.name as 'unit_name'
FROM `rawmaterialout` 
INNER JOIN rawmaterial ON rawmaterial.id = rawmaterialout.rawmaterial_id
INNER JOIN accounts ON accounts.id = rawmaterialout.created_by
INNER JOIN units_sub ON units_sub.id = rawmaterial.units_sub_id";

        
        $pusherresult = $dbconn->query($pushersql);
        if ($pusherresult->num_rows > 0) {
            while ($pusherrow = $pusherresult->fetch_assoc()) {
                $pusherarr[] = $pusherrow;
            }
        }
        include 'Pusher-Api/config.php';
        
       
        $pusherdata2= json_encode($pusherarr);
        $pusher->trigger('Records-Inv-RM-OUT-Pusher-Update-Channel', 'sent', $pusherdata2);
