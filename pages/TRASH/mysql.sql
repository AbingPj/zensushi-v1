SELECT rawmaterial.name, rawmaterialbalance.quantity, RM_IN.IN, RM_OUT.OUT FROM `rawmaterial` 
LEFT JOIN rawmaterialbalance ON rawmaterialbalance.rawmaterial_id = rawmaterial.id

LEFT JOIN 
(

SELECT rawmaterial_id, SUM(quantity) as 'IN' FROM `rawmaterialin`
WHERE  created_at >= STR_TO_DATE('11/13/2018', '%m/%d/%Y')
AND created_at < STR_TO_DATE('11/14/2018', '%m/%d/%Y') + INTERVAL 1 DAY
GROUP BY rawmaterial_id
)
as RM_IN ON RM_IN.rawmaterial_id = rawmaterialbalance.rawmaterial_id

LEFT JOIN 
(
SELECT rawmaterial_id, SUM(quantity) as 'OUT' FROM `rawmaterialout`
WHERE  created_at >= STR_TO_DATE('11/13/2018', '%m/%d/%Y')
AND created_at < STR_TO_DATE('11/14/2018', '%m/%d/%Y') + INTERVAL 1 DAY
GROUP BY rawmaterial_id
)
as RM_OUT ON RM_OUT.rawmaterial_id = rawmaterialbalance.rawmaterial_id
 
 

-- --



SELECT rawmaterial_id, SUM(quantity) as 'IN' FROM `rawmaterialin`
WHERE  created_at >= STR_TO_DATE('11/13/2018', '%m/%d/%Y')
AND created_at < STR_TO_DATE('11/14/2018', '%m/%d/%Y') + INTERVAL 1 DAY
GROUP BY rawmaterial_id

-- //
SELECT *
FROM   rawmaterialin
WHERE  created_at >= STR_TO_DATE('01/11/2010', '%m/%d/%Y')
AND created_at < STR_TO_DATE('01/12/2019', '%m/%d/%Y') + INTERVAL 1 DAY





-- /////

SELECT 
rawmaterial.name,
rawmaterialbalance.quantity as 'balance', 
(RM_IN.IN - IFNULL(RM_OUT.OUT, 0) ) as 'QUTIENT', 
RM_IN.IN, RM_OUT.OUT
FROM `rawmaterial` 
LEFT JOIN rawmaterialbalance ON rawmaterialbalance.rawmaterial_id = rawmaterial.id

LEFT JOIN 
( SELECT rawmaterial_id, SUM(quantity) as 'IN' 
 FROM `rawmaterialin` 
 WHERE created_at >= STR_TO_DATE('11/13/2018', '%m/%d/%Y')
 AND created_at < STR_TO_DATE('11/15/2018', '%m/%d/%Y') + INTERVAL 1 DAY
 GROUP BY rawmaterial_id )
 as RM_IN ON RM_IN.rawmaterial_id = rawmaterialbalance.rawmaterial_id

LEFT JOIN 
(SELECT rawmaterial_id, SUM(quantity) as 'OUT'
 FROM `rawmaterialout`
 WHERE created_at >= STR_TO_DATE('11/13/2018', '%m/%d/%Y')
 AND created_at < STR_TO_DATE('11/15/2018', '%m/%d/%Y') + INTERVAL 1 DAY
 GROUP BY rawmaterial_id ) 
 as RM_OUT ON RM_OUT.rawmaterial_id = rawmaterialbalance.rawmaterial_id


 ---



 <?php
include 'db/db.php';
$obj = json_decode($_POST["myData"]);
$from = $obj->{'rawid'};
$to = $obj->{'qty'};
$sql = "


SELECT 
rawmaterial.name,
rawmaterialbalance.quantity as 'balance', 
(RM_IN.IN - IFNULL(RM_OUT.OUT, 0) ) as 'QUTIENT', 
RM_IN.IN, RM_OUT.OUT
FROM `rawmaterial` 
LEFT JOIN rawmaterialbalance ON rawmaterialbalance.rawmaterial_id = rawmaterial.id

LEFT JOIN 
( SELECT rawmaterial_id, SUM(quantity) as 'IN' 
 FROM `rawmaterialin` 
 WHERE created_at >= STR_TO_DATE('$from', '%m/%d/%Y')
 AND created_at < STR_TO_DATE('$to' , '%m/%d/%Y') + INTERVAL 1 DAY
 GROUP BY rawmaterial_id )
 as RM_IN ON RM_IN.rawmaterial_id = rawmaterialbalance.rawmaterial_id

LEFT JOIN 
(SELECT rawmaterial_id, SUM(quantity) as 'OUT'
 FROM `rawmaterialout`
 WHERE created_at >= STR_TO_DATE('$from', '%m/%d/%Y')
 AND created_at < STR_TO_DATE('$to', '%m/%d/%Y') + INTERVAL 1 DAY
 GROUP BY rawmaterial_id ) 
 as RM_OUT ON RM_OUT.rawmaterial_id = rawmaterialbalance.rawmaterial_id

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