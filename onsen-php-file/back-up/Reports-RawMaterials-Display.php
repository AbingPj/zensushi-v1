<?php
include 'db/db.php';  
$query = mysqli_query($dbconn, 

"


SELECT 
rawmaterial.id,
rawmaterial.name,
rawmaterialbalance.quantity as 'balance', 
(RM_IN.IN - IFNULL(RM_OUT.OUT, 0) ) as 'QUTIENT', 
RM_IN.IN, RM_OUT.OUT
FROM `rawmaterial` 
LEFT JOIN rawmaterialbalance ON rawmaterialbalance.rawmaterial_id = rawmaterial.id

LEFT JOIN 
( SELECT rawmaterial_id, SUM(quantity) as 'IN' 
 FROM `rawmaterialin` 
 GROUP BY rawmaterial_id )
 as RM_IN ON RM_IN.rawmaterial_id = rawmaterialbalance.rawmaterial_id

LEFT JOIN 
(SELECT rawmaterial_id, SUM(quantity) as 'OUT'
 FROM `rawmaterialout`
 GROUP BY rawmaterial_id ) 
 as RM_OUT ON RM_OUT.rawmaterial_id = rawmaterialbalance.rawmaterial_id


"

);
while ($row = mysqli_fetch_assoc($query)) {
	$data[] = $row;
}		


echo json_encode($data);

 ?>