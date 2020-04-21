<?php
    include 'db/db.php';  

    $sql = "SELECT 
    rawmaterialout.id as 'id',
    rawmaterial.id  as 'rawid', 
    rawmaterial.name as 'rawmaterial',
    rawmaterialout.quantity as 'quantity',
    rawmaterialout.created_at,
    accounts.account_name as 'created_by',
    units_sub.name as 'unit_name'
    FROM `rawmaterialout` 
    INNER JOIN rawmaterial ON rawmaterial.id = rawmaterialout.rawmaterial_id
    INNER JOIN accounts ON accounts.id = rawmaterialout.created_by
    INNER JOIN units_sub ON units_sub.id = rawmaterial.units_sub_id";

    $result = $dbconn->query($sql);
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
              $data[] = $row;
        }
        echo json_encode($data);
    }
?>