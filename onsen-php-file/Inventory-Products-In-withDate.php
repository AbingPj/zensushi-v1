<?php
  $scrap = null;
  $account_id = null;
  $raw_id = null;
    include 'db/db.php';
    if(isset($_POST['products'])) {
        $products = $_POST['products'];
        $scrap = $_POST['scrap'];
        $bones = $_POST['bones'];
        $account_id = $_POST['account_id'];
        $raw_id = $_POST['raw_id'];
        $rawout_id = $_POST['rawout_id'];
        $dateWithTimeZone = $_POST['date'];
  
        $obj = json_decode($products);

        date_default_timezone_set('Asia/Manila');
        $time = strtotime($dateWithTimeZone);
        $dateInLocal = date("Y-m-d H:i:s", $time);
        

        
    
      
      
        
        //echo sizeof($obj);
       // $ids2 = implode(",",$ids);
    
        $sql = "INSERT INTO `products_in`( `rawmaterial_id`,`rawmaterialout_id`, `scrap`, `bones`, `created_at`, `created_by`)
         VALUES ($raw_id,  $rawout_id, $scrap, $bones, '$dateInLocal' , $account_id)";

         echo $sql;

        if ($dbconn->query($sql) === TRUE) {
            $last_id = $dbconn->insert_id;
                
            $StringValues = [];
            // $StringValues2 = [];
            foreach($obj as $row){
                array_push( $StringValues, "('".$last_id."','". $row->id . "', '" . $row->quantity ."')");
                // array_push( $StringValues2, "('".$row->id."', '" . $row->quantity ."')");
             }
             
             $StringValues = implode(",",$StringValues);
            //  $StringValues2 = implode(",",$StringValues2);

             $sql2 = "INSERT INTO `products_in_list`(`products_in_id`, `products_id`, `quantity`) VALUES ". $StringValues;
             $dbconn->query($sql2);

            //  $sql3 = "INSERT INTO products_balance (`products_id`, `quantity`) VALUES ". $StringValues2 ." ON DUPLICATE KEY UPDATE `quantity` = `quantity` + VALUES (`quantity`) ";
            //  $dbconn->query($sql3);

            $sql3 = "UPDATE rawmaterialout SET produce = 1 WHERE id = $rawout_id";
            $dbconn->query($sql3); 

             $sql4 = "UPDATE tbl_UpdateData SET CategoryUpdateTime = '$date' WHERE id = 0";
             $dbconn->query($sql4); 


             include 'Notify_Add_Product_channel.php';
             include 'Inventory-Products-UpdatePusher.php';
             //include 'Notifications-UpdatePusher.php';
             
            



        } else {
            echo "Error: " . $sql . "<br>" . $dbconn->error;
        }


       
        
        $dbconn->close();
    }
?>
