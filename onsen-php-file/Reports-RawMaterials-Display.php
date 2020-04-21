<?php

include 'db/db.php';  

$query = mysqli_query($dbconn, 



"SELECT 
rawmaterial.id,
rawmaterial.name,
RM_IN.IN, 
RM_OUT.OUT,
(RM_IN.IN - IFNULL(RM_OUT.OUT, 0) ) as 'remaining_balance',
SUBSTRING(units_sub.name, 1, 4) AS 'unit'
FROM `rawmaterial` 

LEFT JOIN 
( SELECT rawmaterial_id, SUM(quantity) as 'IN' 
 FROM `rawmaterialin` 
 GROUP BY rawmaterial_id )
 as RM_IN ON RM_IN.rawmaterial_id = rawmaterial.id


LEFT JOIN 
(SELECT rawmaterial_id, SUM(quantity) as 'OUT'
 FROM `rawmaterialout`
 GROUP BY rawmaterial_id ) 
 as RM_OUT ON RM_OUT.rawmaterial_id = rawmaterial.id
 
 INNER JOIN units_sub ON units_sub.id = rawmaterial.units_sub_id

"



);

while ($row = mysqli_fetch_assoc($query)) {

	$data[] = $row;

}		





echo json_encode($data);



 ?>