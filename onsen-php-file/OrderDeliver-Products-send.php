<?php
  $scrap = null;
  $account_id = null;
  $raw_id = null;
    include 'db/db.php';
    if(isset($_POST['delivered_products'])) {
        $delivered_products = $_POST['delivered_products'];
        $account_id = $_POST['account_id'];
        $branch = $_POST['branch'];

        $obj = json_decode($delivered_products);
        echo json_encode($obj);
        echo $account_id;
         date_default_timezone_set('Asia/Manila');
        $date = date("Y-m-d G:i:s");

        $sql = "INSERT INTO `delivery`( `account_id`, `created_at`, `branch`)
        VALUES ( $account_id , '$date', '$branch')";
        
if ($dbconn->query($sql) === TRUE) {
    $last_id = $dbconn->insert_id;
    $StringValues = [];
    $StringValues2 = [];
    foreach($obj as $row){
        array_push( $StringValues, "('".$last_id."','". $row->id . "', '" . $row->quantity ."')");
        //array_push( $StringValues2, "$row->id");
        $StringValues3[] = $row->id;
     }
     $StringValues = implode(",",$StringValues);
     $sql2 = "INSERT INTO `deliverylist`(`delivery_id`, `products_id`, `quantity`) VALUES ". $StringValues;
     $dbconn->query($sql2);

     

     include 'Notify_Deliver_Product_channel.php';
     include 'Inventory-Products-UpdatePusher.php';
     

    $criticalprodsql = "SELECT * FROM PROD_BALANCE_view  WHERE balance <= critical_level and `id` IN (".implode(',',$StringValues3).")";
    ECHO $criticalprodsql;
    $criticalprodresult = $dbconn->query($criticalprodsql);
    $criticalprodarr = [];
    if ($criticalprodresult->num_rows > 0) {
          while($row = $criticalprodresult->fetch_assoc()) {
                 $criticalprodarr[] = $row;
                 $criticalproddata = json_encode($criticalprodarr);
                 $pusher->trigger('notify_critical_prod_channel','sent',$criticalproddata);
                 $criticalprodarr = [];
          }
        //$criticalproddata = json_encode($criticalprodarr);
        //$pusher->trigger('notify_critical_prod_channel','sent',$criticalproddata);
    }




    // $sql3 = "SELECT id,seen FROM orders WHERE seen = 0 ";
    // $result = $dbconn->query($sql3);
    // $data['last_id'] = $last_id;
    // $data['unseen'] = $result->num_rows;
    // include 'Pusher-Api/config.php';
    // $pusher->trigger('notify-channel','sent',$data);
}
       
    
    }
?>
