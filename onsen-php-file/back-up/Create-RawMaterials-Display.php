<?php
include 'db/db.php';  
$query = mysqli_query($dbconn, 

"SELECT rawmaterial.id as 'id', rawmaterial.rawcategory_id as 'cat_id', 
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
ORDER BY rawmaterial.id DESC"

);
while ($row = mysqli_fetch_assoc($query)) {
	$data[] = $row;
}		


echo json_encode($data);

 ?>