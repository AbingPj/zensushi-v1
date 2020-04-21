<?php  
    include 'db.php';
    if(isset($_POST['cat_id'])) {
        $cat_id = $_POST['cat_id'];
    $sql = "SELECT id,name FROM rawcategory WHERE id='$cat_id'";
    $query = mysqli_query($dbconn,$sql);
        while ($row = mysqli_fetch_assoc($query)) {
	    $data[] = $row;
    }		
        echo json_encode($data);
    }
 ?>