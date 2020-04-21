<?php
 
    include 'db/db.php';
    if(isset($_POST['products'])) {
        $products = $_POST['products'];
        $account_id = $_POST['account_id'];
        $dateWithTimeZone = $_POST['date'];

        $obj = json_decode($products);

        date_default_timezone_set('Asia/Manila');
        $time = strtotime($dateWithTimeZone);
        $dateInLocal = date("Y-m-d H:i:s", $time);
      
        //echo sizeof($obj);
       // $ids2 = implode(",",$ids);
    
        $sql = "INSERT INTO `products_in`(`created_at`, `created_by`)
         VALUES ( '$dateInLocal' , $account_id)";

        if ($dbconn->query($sql) === TRUE) {
            $last_id = $dbconn->insert_id;
                
            $StringValues = [];
            $StringValues2 = [];
            foreach($obj as $row){
                array_push( $StringValues, "('".$last_id."','". $row->id . "', '" . $row->quantity ."')");
                array_push( $StringValues2, "('".$row->id."', '" . $row->quantity ."')");
             }
             
             $StringValues = implode(",",$StringValues);
             $StringValues2 = implode(",",$StringValues2);

             $sql2 = "INSERT INTO `products_in_list`(`products_in_id`, `products_id`, `quantity`) VALUES ". $StringValues;
             $dbconn->query($sql2);

             $sql4 = "UPDATE tbl_UpdateData SET CategoryUpdateTime = '$date' WHERE id = 0";
             $dbconn->query($sql4); 
            
             include 'Notify_Add_Product_channel.php';
             include 'Inventory-Products-UpdatePusher.php';
             //include 'Notifications-UpdatePusher.php';
             
             //Notify_Add_Product_channel

        } else {
            echo "Error: " . $sql . "<br>" . $dbconn->error;
        }


       
        
        $dbconn->close();
    }
?>
