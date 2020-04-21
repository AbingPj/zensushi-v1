<?php
    include 'db.php';
    if(isset($_POST['unit_id'])){
        $unit_id = $_POST['unit_id'];
        //var_dump($catid);
    $sql = "SELECT * FROM units_sub WHERE units_id = '$unit_id'";
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