<?php

include 'db/db.php';

$obj = json_decode($_POST["myData"]);

$from = $obj->{'from'};

$to = $obj->{'to'};

$sql = 
"SELECT 
rawmaterial.id,
rawmaterial.name,
RM_IN.IN, 
RM_OUT.OUT,
( IFNULL(RM_IN.IN, 0) - IFNULL(RM_OUT.OUT, 0) 

) as 'balance1',
RM_IN2.IN as 'IN2', 
RM_OUT2.OUT as 'OUT2',
( IFNULL(IFNULL(RM_IN2.IN, 0) - IFNULL

(RM_OUT2.OUT, 0),0) ) as 'balance2.',
( IFNULL(IFNULL(RM_IN.IN, 0) - IFNULL

(RM_OUT.OUT, 0),0) + IFNULL(IFNULL(RM_IN2.IN, 

0) - IFNULL(RM_OUT2.OUT, 0),0) ) as 'remaining_balance',
SUBSTRING(units_sub.name, 1, 4) AS 'unit'

FROM `rawmaterial`

LEFT JOIN 
( SELECT rawmaterial_id, SUM(quantity) as 'IN' 
 FROM `rawmaterialin` 
 WHERE created_at
 BETWEEN '$from' AND '$to' + 

INTERVAL 1 DAY 
 GROUP BY rawmaterial_id )
 as RM_IN ON RM_IN.rawmaterial_id = 
rawmaterial.id

LEFT JOIN 
(SELECT rawmaterial_id, SUM(quantity) as 'OUT'
 FROM `rawmaterialout`
 WHERE created_at 
 BETWEEN '$from' AND '$to' + 
INTERVAL 1 DAY 
 GROUP BY rawmaterial_id ) 
 as RM_OUT ON RM_OUT.rawmaterial_id = 
rawmaterial.id
 
 
 LEFT JOIN(
 SELECT rawmaterial_id, SUM(quantity) as 'IN' 
 FROM `rawmaterialin` 
 WHERE created_at < '$from'
 GROUP BY rawmaterial_id
 )as RM_IN2 ON RM_IN2.rawmaterial_id = 
rawmaterial.id
 
 LEFT JOIN(
 SELECT rawmaterial_id, SUM(quantity) as 'OUT' 
 FROM `rawmaterialout` 
 WHERE created_at < '$from'
 GROUP BY rawmaterial_id
 )as RM_OUT2 ON RM_OUT2.rawmaterial_id = 
rawmaterial.id

 INNER JOIN units_sub ON units_sub.id = rawmaterial.units_sub_id
";



 $result = $dbconn->query($sql);

                 if ($result->num_rows > 0) {

                     while($row = $result->fetch_assoc()) {

             	          $arr[] = $row;

                     }

                       echo json_encode($arr);

                 }

 $dbconn->close();



?>