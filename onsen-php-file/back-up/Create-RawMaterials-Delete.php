<?php
    include 'db/db.php';
    if(isset($_POST['id'])) {
    $id = $_POST['id'];
    if ($dbconn->connect_error) {
               die("Connection failed: " . $dbconn->connect_error);
     }
    $sql = "DELETE FROM rawmaterial WHERE id ='$id'";
    
    if ($dbconn->query($sql) === TRUE) {
        echo "Deleted Category";
        
        
               $sql2 = "SELECT rawmaterial.id as 'id', rawmaterial.rawcategory_id as 'cat_id', 
                        rawmaterial.name as 'name', units_sub.name as 'unit', 
                        rawcategory.name as 'cat_name',
                        rawmaterial.units_id as 'units_id', 
                        rawmaterial.units_sub_id as 'units_sub_id', 
                        IFNULL(rawmaterialbalance.quantity, 0) as 'balance'
                        FROM `rawmaterial` 
                        INNER JOIN rawcategory ON rawmaterial.rawcategory_id = rawcategory.id
                        INNER JOIN units ON rawmaterial.units_id = units.id
                        INNER JOIN units_sub ON rawmaterial.units_sub_id = units_sub.id
                        LEFT JOIN rawmaterialbalance ON rawmaterialbalance.rawmaterial_id = rawmaterial.id
                        ORDER BY rawmaterial.id DESC";
                $result2 = $dbconn->query($sql2);
                 if ($result2->num_rows > 0) {
                     while($row2 = $result2->fetch_assoc()) {
             	          $arr2[] = $row2;
                     }
                 }
                include 'Pusher-Api/config.php';
                $data2 = json_encode($arr2);
                $pusher->trigger('update-create-rawmaterials-channel','sent',$data2);
                  $pusher->trigger('update-inventory-rawmaterials-channel','sent',$data2);
                
        
    } else {
        echo "Error: ". $dbconn->error;
    }
        $dbconn->close();
    }

?>