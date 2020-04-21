<?php  
    include 'db.php';
    if(isset($_POST['raw_id'])) {
        $raw_id = $_POST['raw_id'];
    $sql = "SELECT rawmaterial.id as id, rawcategory_id as cat_id, rawmaterial.name as name, rawcategory.name as cat_name FROM rawmaterial INNER JOIN rawcategory ON  rawmaterial.rawcategory_id = rawcategory.id WHERE rawmaterial.id=$raw_id ";
    $query = mysqli_query($dbconn,$sql);
        while ($row = mysqli_fetch_assoc($query)) {
	    $data[] = $row;
    }		
        echo json_encode($data);
    }
 ?>