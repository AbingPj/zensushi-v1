<?php
include 'db/db.php';
$obj = json_decode($_POST["myData"]);
$rawid = $obj->{'rawid'};
$qty = $obj->{'qty'};
$sql = "UPDATE rawmaterialbalance 
SET quantity = quantity - $qty
WHERE rawmaterial_id = $rawid";
if ($dbconn->query($sql) === TRUE) {
    
             $sql2 = "SELECT rawmaterial.id as 'id', rawmaterial.rawcategory_id as 'cat_id', 
                        rawmaterial.name as 'name', units_sub.name as 'unit', 
                        rawcategory.name as 'cat_name',
                        rawmaterial.units_id as 'units_id', 
                        rawmaterial.units_sub_id as 'units_sub_id', 
                        IFNULL(rawmaterialbalance.quantity, 'NULL') as 'balance'
                        FROM `rawmaterial` 
                        INNER JOIN rawcategory ON rawmaterial.rawcategory_id = rawcategory.id
                        INNER JOIN units ON rawmaterial.units_id = units.id
                        INNER JOIN units_sub ON rawmaterial.units_sub_id = units_sub.id
                        LEFT JOIN rawmaterialbalance ON rawmaterialbalance.rawmaterial_id = rawmaterial.id
                        ORDER BY rawmaterial.id DESC";
                $result2 = $dbconn->query($sql2);
                 if ($result2->num_rows > 0) {
                     while($row2 = $result2->fetch_assoc()) {
             	          $arr2[] = $row2;
                     }
                 }
                include 'Pusher-Api/config.php';
                $data2 = json_encode($arr2);
                $pusher->trigger('update-inventory-rawmaterials-channel','sent',$data2);
                
                    $sql3 = "INSERT INTO `rawmaterialout` (`id`, `rawmaterial_id`, `quantity`, `created_at`, `updated_at`)VALUES (NULL, '$rawid', '$qty', CURRENT_TIMESTAMP, NULL)";
                 $dbconn->query($sql3);
                
              
          
          
} else {
         echo "Error: " . $sql . " " . $dbconn->error;
}
$dbconn->close();
?>