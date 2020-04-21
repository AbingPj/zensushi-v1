<?php
 
    include 'db/db.php';
    if(isset($_GET['rawid'])) {
        $rawid = $_GET['rawid'];
        $sql = 
        "SELECT 
        rawmaterialout.id, 
        rawmaterialout.rawmaterial_id,
        rawmaterialout.quantity,
        rawmaterialout.created_at,
        rawmaterialout.updated_at, 
        rawmaterialout.created_by, 
        rawmaterialout.produce,
        units_sub.name as 'unit'
        FROM rawmaterialout
        INNER JOIN rawmaterial ON rawmaterial.id = rawmaterialout.rawmaterial_id
        INNER JOIN units_sub ON units_sub.id = rawmaterial.units_sub_id
        WHERE rawmaterialout.id=(
        SELECT max(id) 
        FROM rawmaterialout 
        WHERE rawmaterial_id =  $rawid
        )
        ";

            $result_update = $dbconn->query($sql);
            if ($result_update->num_rows > 0) {
                while($row_update = $result_update->fetch_assoc()) {
                      $arr[] = $row_update;
                }
            }
            echo json_encode($arr);
    }
?>
