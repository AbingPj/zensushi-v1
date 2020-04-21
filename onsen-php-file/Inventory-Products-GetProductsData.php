<?php
include 'db/db.php';  
$query = mysqli_query($dbconn, 

      

"SELECT 
products.id as 'id', 
products.name as 'name', 
products.critical_level,
IFNULL(CONCAT(products.name,' (',IF( products.value < 1, products.value * units.value, products.value * 1 ),' ',units_sub.name ,')'), products.name)  as 'display_name',
products.value as 'value', 
IF( products.value < 1, products.value * units.value, products.value * 1 ) as 'unit_value', 
units_sub.name as 'unit', 
rawmaterial.name as 'rawmaterial', 
units_sub.id as 'units_sub_id', 
rawmaterial.id as 'rawmaterial_id', 
units.id as 'units_id', 
units.name as 'units_name',
products_packaging.name as 'packaging',
products_packaging.id as 'packaging_id',
PROD_IN.IN as 'IN',
PROD_OUT.OUT as 'OUT',
(PROD_IN.IN - IFNULL(PROD_OUT.OUT,0)) as 'balance'
FROM `products` 
LEFT JOIN units_sub ON units_sub.id = products.units_sub_id 
LEFT JOIN units ON units.id = units_sub.units_id 
LEFT JOIN rawmaterial ON rawmaterial.id = products.rawmaterial_id
LEFT JOIN products_packaging ON products_packaging.id = products.packaging_id
LEFT JOIN 
( SELECT products_id,SUM(quantity) as `IN`
FROM `products_in_list`  GROUP BY products_id )
as PROD_IN ON PROD_IN.products_id = products.id
LEFT JOIN 
(SELECT products_id,SUM(quantity) as `OUT`
FROM `deliverylist`  GROUP BY products_id )
as PROD_OUT ON PROD_OUT.products_id = products.id
" 

);


while ($row = mysqli_fetch_assoc($query)) {
	$data[] = $row;
}		


echo json_encode($data);

 ?>