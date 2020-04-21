<?php

include 'db/db.php';

$query = mysqli_query($dbconn,

    // "SELECT products.id as 'id',
    // products.name as 'name',
    // IF( products.value < 1, products.value * units.value, products.value * 1 ) as 'value',
    // units_sub.name as 'unit',
    // rawmaterial.name as 'rawmaterial',
    // units_sub.id as 'units_sub_id',
    // rawmaterial.id as 'rawmaterial_id',
    // units.id as 'units_id'
    // FROM `products`
    // INNER JOIN units_sub ON units_sub.id = products.units_sub_id
    // INNER JOIN units ON units.id = units_sub.units_id
    // INNER JOIN rawmaterial ON rawmaterial.id = products.rawmaterial_id"

    "SELECT
products.id as 'id',
products.name as 'name',
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
products.critical_level
FROM `products`
LEFT JOIN units_sub ON units_sub.id = products.units_sub_id
LEFT JOIN units ON units.id = units_sub.units_id
LEFT JOIN rawmaterial ON rawmaterial.id = products.rawmaterial_id
LEFT JOIN products_packaging ON products_packaging.id = products.packaging_id
"

);

while ($row = mysqli_fetch_assoc($query)) {

    $data[] = $row;

}

echo json_encode($data);
