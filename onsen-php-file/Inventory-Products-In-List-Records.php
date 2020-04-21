<?php
include 'db/db.php';  
$query = mysqli_query($dbconn, 
"SELECT
products_in_list.id,
products_in_list.products_in_id,
products_in_list.products_id,
products.name,
products_in_list.quantity,
products_packaging.name as unit,
-- CONCAT(products.name,' (',IF( products.value < 1, products.value * units.value, products.value * 1 ),' ',units_sub.name ,')')  as 'display_name'
IFNULL(CONCAT(products.name,' (',IF( products.value < 1, products.value * units.value, products.value * 1 ),' ',units_sub.name ,')'), products.name)  as 'display_name'
FROM products_in_list
LEFT JOIN products ON products.id = products_in_list.products_id
LEFT JOIN units_sub ON units_sub.id = products.units_sub_id 
LEFT JOIN units ON units.id = units_sub.units_id 
LEFT JOIN products_packaging ON products_packaging.id = products.packaging_id
"
);

while ($row = mysqli_fetch_assoc($query)) {
	$data[] = $row;
}		

echo json_encode($data);

 ?>