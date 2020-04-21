<?php
include 'db/db.php';
$obj = json_decode($_POST["mydata"]);
//var_dump($obj);
//echo $obj->{'newname'};
$id =  $obj->{'id'};
$name = $obj->{'name'};
$raw_id = $obj->{'raw_id'};
$units_sub = $obj->{'units_sub_id'};
$value = $obj->{'value'};


if ($dbconn->connect_error) {
    die("Connection failed: " . $dbconn->connect_error);
}


$sql = "UPDATE products 
        SET name = '$name', 
            rawmaterial_id = '$raw_id',
            units_sub_id='$units_sub',
            value='$value'
            WHERE id = '$id'";
if ($dbconn->query($sql) === TRUE) {
            
            
             $sql2 =  "SELECT products.id as 'id',
                                 products.name as 'name', 
                                (products.value * units.value) as 'value', 
                                 IF( products.value < 1, products.value * units.value, products.value * 1 ) as 'value',
                                 units_sub.name as 'unit', 
                                 rawmaterial.name as 'rawmaterial',  
                                 units_sub.id as 'units_sub_id', 
                                 rawmaterial.id as 'rawmaterial_id',
                                 units.id as 'units_id'                          
                                 FROM `products`
                                 INNER JOIN units_sub ON units_sub.id = products.units_sub_id
                                 INNER JOIN units ON units.id = units_sub.units_id
                                 INNER JOIN rawmaterial ON rawmaterial.id = products.rawmaterial_id";
                                 
                $result2 = $dbconn->query($sql2);
                
                 if ($result2->num_rows > 0) {
                     while($row2 = $result2->fetch_assoc()) {
             	          $arr2[] = $row2;
                     }
                 }
                include 'Pusher-Api/config.php';
                $data2 = json_encode($arr2);
                $pusher->trigger('update-create-products-channel','sent',$data2);
        
        
        
    
    
} else {
         echo "Error: " . $sql . " " . $dbconn->error;
}
 $dbconn->close();