<?php

$sql2 = 
"SELECT rawmaterial.id as 'id', rawmaterial.rawcategory_id as 'cat_id', 
rawmaterial.name as 'name', units_sub.name as 'unit', 
rawcategory.name as 'cat_name', 
rawmaterial.units_id as 'units_id', 
rawmaterial.units_sub_id as 'units_sub_id',
rawmaterial.critical_level,  
RM_IN.IN,
RM_OUT.OUT,
IFNULL((RM_IN.IN - IFNULL(RM_OUT.OUT,0) ),'NULL') as 'balance'
FROM `rawmaterial`
INNER JOIN rawcategory ON rawmaterial.rawcategory_id = rawcategory.id
INNER JOIN units ON rawmaterial.units_id = units.id
INNER JOIN units_sub ON rawmaterial.units_sub_id = units_sub.id
LEFT JOIN 
( SELECT rawmaterial_id, SUM(quantity) as 'IN' 
 FROM `rawmaterialin` 
 GROUP BY rawmaterial_id)
 as RM_IN ON RM_IN.rawmaterial_id = rawmaterial.id
LEFT JOIN 
(SELECT rawmaterial_id, SUM(quantity) as 'OUT'
 FROM `rawmaterialout`
 GROUP BY rawmaterial_id ) 
 as RM_OUT ON RM_OUT.rawmaterial_id = rawmaterial.id
ORDER BY rawmaterial.id DESC";

    $result2 = $dbconn->query($sql2);
     if ($result2->num_rows > 0) {
         while($row2 = $result2->fetch_assoc()) {
 	          $arr2[] = $row2;
         }
     }
    include 'Pusher-Api/config.php';
    $data2 = json_encode($arr2);
    $pusher->trigger('update-create-rawmaterials-channel','sent',$data2);
    $pusher->trigger('update-inventory-rawmaterials-channel','sent',$data2);