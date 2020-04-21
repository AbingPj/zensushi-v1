<?php

include 'db/db.php';

$obj = json_decode($_POST["myData"]);

$from = $obj->{'from'};

$to = $obj->{'to'};

// $sql = 
// "SELECT 
// products.id as 'id', 
// products.name as 'name', 
// IFNULL(CONCAT(products.name,' (',IF( products.value < 1, products.value * units.value, products.value * 1 ),' ',units_sub.name ,')'), products.name)  as 'display_name',
// products_packaging.name as 'packaging',
// PROD_IN.IN as 'IN',
// PROD_OUT.OUT as 'OUT',
// (PROD_IN.IN - IFNULL(PROD_OUT.OUT, 0) ) as 'Diff.'

// FROM `products` 
// LEFT JOIN units_sub ON units_sub.id = products.units_sub_id 
// LEFT JOIN units ON units.id = units_sub.units_id 
// LEFT JOIN rawmaterial ON rawmaterial.id = products.rawmaterial_id
// LEFT JOIN products_packaging ON products_packaging.id = products.packaging_id
// LEFT JOIN 
// ( 
// SELECT 
// products_in_list.products_id,
// SUM(products_in_list.quantity) as `IN`
// FROM `products_in_list`  
// INNER JOIN products_in ON products_in.id = products_in_list.products_in_id
// WHERE products_in.created_at 
// BETWEEN '$from' AND '$to' + INTERVAL 1 DAY 
// GROUP BY products_in_list.products_id
// )
// as PROD_IN ON PROD_IN.products_id = products.id

// LEFT JOIN 
// (
// SELECT 
// deliverylist.products_id,
// SUM(deliverylist.quantity) as `OUT`
// FROM `deliverylist`  
// INNER JOIN delivery ON delivery.id = deliverylist.delivery_id
// WHERE delivery.created_at 
// BETWEEN '$from' AND '$to' + INTERVAL 1 DAY 
// GROUP BY deliverylist.products_id
//  ) 
//  as PROD_OUT ON PROD_OUT.products_id = products.id
// ";

$sql="SELECT 
products.id as 'id', 
products.name as 'name', 
IFNULL(CONCAT(products.name,' (',IF( products.value < 1, products.value * units.value, products.value * 1 ),' ',units_sub.name ,')'), products.name)  as 'display_name',
products_packaging.name as 'packaging',
PROD_IN.IN as 'IN',
PROD_OUT.OUT as 'OUT',
(PROD_IN.IN - IFNULL(PROD_OUT.OUT, 0) ) as 'balance1.',

PROD_IN2.IN as 'IN2', 
PROD_OUT2.OUT as 'OUT2',

(IFNULL(IFNULL(PROD_IN2.IN, 0) - IFNULL

(PROD_OUT2.OUT, 0),0) ) as 'balance2.',

( IFNULL(IFNULL(PROD_IN.IN, 0) - IFNULL
(PROD_OUT.OUT, 0),0) + IFNULL(IFNULL(PROD_IN2.IN, 

0) - IFNULL(PROD_OUT2.OUT, 0),0) ) as 'remaining_balance'


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
WHERE products_in.created_at 
BETWEEN '$from' AND '$to' + INTERVAL 1 DAY 
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
WHERE delivery.created_at 
BETWEEN '$from' AND '$to' + INTERVAL 1 DAY 
GROUP BY deliverylist.products_id
 ) 
 as PROD_OUT ON PROD_OUT.products_id = products.id
 
  LEFT JOIN(
 SELECT products_in_list.products_id,SUM(products_in_list.quantity) as `IN`
FROM `products_in_list`
 INNER JOIN products_in ON products_in.id = products_in_list.products_in_id
 WHERE products_in.created_at < '$from'
 GROUP BY products_in_list.products_id
 )as PROD_IN2 ON PROD_IN2.products_id = products.id
 
LEFT JOIN(
 SELECT deliverylist.products_id, SUM(deliverylist.quantity) as `OUT`
FROM `deliverylist`
 INNER JOIN delivery ON delivery.id = deliverylist.delivery_id
WHERE delivery.created_at < '$from'
GROUP BY deliverylist.products_id
 )as PROD_OUT2 ON PROD_OUT2.products_id = products.id";


 $result = $dbconn->query($sql);

                 if ($result->num_rows > 0) {

                     while($row = $result->fetch_assoc()) {

             	          $arr[] = $row;

                     }

                       echo json_encode($arr);

                 }

 $dbconn->close();



?>