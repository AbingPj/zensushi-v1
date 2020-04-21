<?php
include 'db.php';  
if(isset($_POST['gvar_raw_id'])){
$gvar_raw_id = $_POST['gvar_raw_id'];
	//var_dump($catid);
$sql = "SELECT * FROM product WHERE rawmaterial_id = $gvar_raw_id";
$query = mysqli_query($dbconn,$sql);
	while ($row = mysqli_fetch_assoc($query)) {
	$data[] = $row;
}		
		if (empty($data)) {
		   echo "empty";
		  }else{
			echo json_encode($data);    
		  } 
}
 ?>