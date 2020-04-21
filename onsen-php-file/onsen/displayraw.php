<?php
    include 'db.php';
    if(isset($_POST['catid'])){
        $catid = $_POST['catid'];
        //var_dump($catid);
    $sql = "SELECT rawmaterial.id, rawmaterial.name, units2.name as 'unit' FROM rawmaterial INNER JOIN units2 ON rawmaterial.unit = units2.id WHERE rawcategory_id = $catid";
    $query = mysqli_query($dbconn,$sql);
        while ($row = mysqli_fetch_assoc($query)) {
	    $data[] = $row;
    }		
             if (empty($data)) {
                // $myObj->msg = "empty";
               //echo json_encode($myObj);
               echo "empty";
              }else{
                echo json_encode($data);    
              } 
    }
?>