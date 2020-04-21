<?php
include 'db/db.php';  
$query = mysqli_query($dbconn, 

"SELECT 
products.id as 'id', 
products.name as 'name', 
IFNULL(CONCAT(products.name,' (',IF( products.value < 1, products.value * units.value, products.value * 1 ),' ',units_sub.name ,')'), products.name)  as 'display_name',
products_packaging.name as 'packaging',
PROD_IN.IN as 'IN',
PROD_OUT.OUT as 'OUT',
-- (PROD_IN.IN - IFNULL(PROD_OUT.OUT, 0) ) as 'Diff.'
(IFNULL(PROD_IN.IN, 0) - IFNULL(PROD_OUT.OUT, 0) ) as 'remaining_balance'
FROM `products` 
LEFT JOIN units_sub ON units_sub.id = products.units_sub_id 
LEFT JOIN units ON units.id = units_sub.units_id 
LEFT JOIN rawmaterial ON rawmaterial.id = products.rawmaterial_id
LEFT JOIN products_packaging ON products_packaging.id = products.packaging_id
LEFT JOIN 
( 
SELECT 
products_in_list.products_id,
SUM(products_in_list.quantity) as `IN`
FROM `products_in_list`  
INNER JOIN products_in ON products_in.id = products_in_list.products_in_id
GROUP BY products_in_list.products_id
)
as PROD_IN ON PROD_IN.products_id = products.id

LEFT JOIN 
(
SELECT 
deliverylist.products_id,
SUM(deliverylist.quantity) as `OUT`
FROM `deliverylist`  
INNER JOIN delivery ON delivery.id = deliverylist.delivery_id
GROUP BY deliverylist.products_id
 ) 
 as PROD_OUT ON PROD_OUT.products_id = products.id
"

);
while ($row = mysqli_fetch_assoc($query)) {
	$data[] = $row;
}		


echo json_encode($data);

 ?>