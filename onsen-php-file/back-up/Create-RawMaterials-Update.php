<?php
include 'db/db.php';
$obj = json_decode($_POST["myData"]);

$id = $obj->{'id'};
$catid = $obj->{'catid'};
$rmname = $obj->{'rmname'};
$units = $obj->{'unit'};
$units_sub = $obj->{'unitsub'};

if ($dbconn->connect_error) {
    die("Connection failed: " . $dbconn->connect_error);
}
$sql = "UPDATE rawmaterial 
        SET rawcategory_id = '$catid', name = '$rmname',
            units_id='$units', units_sub_id='$units_sub'
            WHERE id = '$id'";
if ($dbconn->query($sql) === TRUE) {
    
             $sql2 = "SELECT rawmaterial.id as 'id', rawmaterial.rawcategory_id as 'cat_id', 
                        rawmaterial.name as 'name', units_sub.name as 'unit', 
                        rawcategory.name as 'cat_name',
                        rawmaterial.units_id as 'units_id', 
                        rawmaterial.units_sub_id as 'units_sub_id', 
                        IFNULL(rawmaterialbalance.quantity, 0) as 'balance'
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
                $pusher->trigger('update-create-rawmaterials-channel','sent',$data2);
                $pusher->trigger('update-inventory-rawmaterials-channel','sent',$data2);
                
              
          
          
} else {
         echo "Error: " . $sql . " " . $dbconn->error;
}
 $dbconn->close();

?>