<?php
   include 'db.php';
   if(isset($_POST['rawid'])) {
       $rawid = $_POST['rawid'];
	   
   //echo "OYEEEEE" + $cat;
    $sql   = "SELECT product2.id as id,
	product2.name as name,
	product2.val as val,
	packing.name as unit,
	product2.rawmaterial_id as rawid
	FROM `product2`
	INNER JOIN packing ON pack = packing.id 
	WHERE product2.rawmaterial_id = '$rawid'";
       
   
   $query = mysqli_query($dbconn,$sql);
       while ($row = mysqli_fetch_assoc($query)) {
       $data[] = $row;
   }		
       echo json_encode($data);
   }
?>