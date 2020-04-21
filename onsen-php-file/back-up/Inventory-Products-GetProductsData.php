<?php
include 'db/db.php';  
$query = mysqli_query($dbconn, 

       /* "SELECT 
        products.id as 'id',
        products.name as 'name',
        products.value as value,
        rawmaterial.name as 'rawmaterial',
        products.rawmaterial_id as 'rawmaterial_id'
        FROM `products`
        INNER JOIN rawmaterial ON rawmaterial.id = products.rawmaterial_id" */
"
SELECT 
products.id as 'id', 
products.name as 'name', 
CONCAT(products.name,' (',IF( products.value < 1, products.value * units.value, products.value * 1 ),' ',units_sub.name ,')')  as 'display_name',
products.value as 'value', 
IF( products.value < 1, products.value * units.value, products.value * 1 ) as 'unit_value', 
units_sub.name as 'unit', 
rawmaterial.name as 'rawmaterial', 
units_sub.id as 'units_sub_id', 
rawmaterial.id as 'rawmaterial_id', 
units.id as 'units_id', 
units.name as 'units_name' 
FROM `products` 
INNER JOIN units_sub ON units_sub.id = products.units_sub_id 
INNER JOIN units ON units.id = units_sub.units_id 
INNER JOIN rawmaterial ON rawmaterial.id = products.rawmaterial_id
"
        

);


while ($row = mysqli_fetch_assoc($query)) {
	$data[] = $row;
}		


echo json_encode($data);

 ?>