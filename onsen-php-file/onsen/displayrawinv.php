<?php
include 'db.php';  
$query = mysqli_query($dbconn, 

"SELECT rawmaterial.id as 'id', rawmaterial.rawcategory_id as 'cat_id', 
rawmaterial.name as 'name', units2.name as 'unit', 
rawcategory.name as 'cat_name', 
IFNULL(rawmaterialbalance.quantity, 0) as 'balance'
FROM `rawmaterial` 
INNER JOIN rawcategory ON rawmaterial.rawcategory_id = rawcategory.id
INNER JOIN units2 ON rawmaterial.unit = units2.id
LEFT JOIN rawmaterialbalance ON rawmaterialbalance.rawmaterial_id = rawmaterial.id"

);
while ($row = mysqli_fetch_assoc($query)) {
	$data[] = $row;
}		


echo json_encode($data);

 ?>