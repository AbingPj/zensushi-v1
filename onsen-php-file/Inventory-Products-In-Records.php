<?php
include 'db/db.php';  
$query = mysqli_query($dbconn, 

"SELECT 
products_in.id,
rawmaterial.id as 'rawid',
rawmaterialout.id as 'rmstockout_id',
rawmaterial.name as 'rmname',
rawmaterialout.quantity as 'out',
products_in.scrap,
products_in.bones,
products_in.created_at,
accounts.account_name,
SUM(products.value * products_in_list.quantity) as 'total',
SUM(products.value * products_in_list.quantity) + IFNULL(products_in.scrap,0) + IFNULL(products_in.bones,0) as 'finaltotal',
ROUND( (rawmaterialout.quantity - (SUM(products.value * products_in_list.quantity)+ IFNULL(products_in.scrap,0)+IFNULL(products_in.bones,0))),2)   as 'difference',
SUBSTRING(units_sub.name, 1, 4) AS 'unit'
FROM products_in
LEFT JOIN products_in_list ON products_in_list.products_in_id = products_in.id
LEFT JOIN products ON products.id = products_in_list.products_id
LEFT JOIN rawmaterial ON rawmaterial.id = products_in.rawmaterial_id
LEFT JOIN units_sub ON units_sub.id = rawmaterial.units_sub_id
LEFT JOIN accounts ON accounts.id = products_in.created_by
LEFT JOIN rawmaterialout ON rawmaterialout.id = products_in.rawmaterialout_id
GROUP BY products_in.id
"


);

while ($row = mysqli_fetch_assoc($query)) {
	$data[] = $row;
}		

echo json_encode($data);
 ?>