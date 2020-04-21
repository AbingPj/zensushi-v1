<?php
  $scrap = null;
  $account_id = null;
  $raw_id = null;
    include 'db/db.php';
    if(isset($_POST['Ordered_products'])) {
        $Ordered_products = $_POST['Ordered_products'];
        $account_id = $_POST['account_id'];
        $branch = $_POST['branch'];
        $obj = json_decode($Ordered_products);
        // echo json_encode($obj);
        // echo $account_id;
        
          date_default_timezone_set('Asia/Manila');
        $date = date("Y-m-d G:i:s");

        $sql = "INSERT INTO `orders`( `account_id`, `created_at`, `branch`)
        VALUES ( $account_id , '$date', '$branch')";
        
if ($dbconn->query($sql) === TRUE) {
    $last_id = $dbconn->insert_id;

    $StringValues = [];
    foreach($obj as $row){
        array_push( $StringValues, "('".$last_id."','". $row->id . "', '" . $row->quantity ."')");
     }
     $StringValues = implode(",",$StringValues);

     $sql2 = "INSERT INTO `orderslist`(`orders_id`, `products_id`, `quantity`) VALUES ". $StringValues;
     $dbconn->query($sql2);


     $sql4 =  "SELECT
     account_name
     FROM accounts WHERE id = $account_id";
     $result4 = $dbconn->query($sql4);
     $row4 = $result4->fetch_assoc();
     $notifyby = $row4['account_name'];

   
    $sql3 =  "SELECT
    '1' as remarkstype,
   id,
   seen
   FROM accounts WHERE seen = 0
   
   UNION
   
   SELECT
    '2' as remarkstype,
   id,
   seen
   FROM orders WHERE seen = 0 ";
    $result = $dbconn->query($sql3);
    

    $data['last_id'] = $last_id;
    $data['unseen'] = $result->num_rows;
    $data['notifyby'] =  $notifyby;
  

    include 'Pusher-Api/config.php';
    $pusher->trigger('notify-channel','sent',$data);

    include 'Notifications-UpdatePusher.php';
}
       
    
    }
?>
