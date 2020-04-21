<?php

    include 'db/db.php';
    if(isset($_POST['order_id'])) {
        $order_id = $_POST['order_id'];

        $sql = "SELECT 
           orderslist.id,
           orderslist.orders_id,
           orderslist.products_id,
           orderslist.quantity,
        --    CONCAT(products.name,' (',IF( products.value < 1, products.value * units.value, products.value * 1 ),' ',units_sub.name ,')')  as 'display_name', 
            IFNULL(CONCAT(products.name,' (',IF( products.value < 1, products.value * units.value, products.value * 1 ),' ',units_sub.name ,')'), products.name)  as 'display_name',
           products_packaging.name as 'packaging'
           FROM orderslist 
           LEFT JOIN products ON products.id = orderslist.products_id
           LEFT JOIN units_sub ON units_sub.id = products.units_sub_id 
           LEFT JOIN units ON units.id = units_sub.units_id 
           INNER JOIN products_packaging ON products_packaging.id = products.packaging_id
           WHERE orderslist.orders_id =  $order_id ";


        $result = $dbconn->query($sql);
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                  $data[] = $row;
            }



            $sql2 = "SELECT 
            orders.created_at,
            orders.account_id,
            orders.branch,
            accounts.account_name
            FROM orders
            INNER JOIN accounts ON accounts.id = orders.account_id
            WHERE orders.id = $order_id";
           
            // $sql2 = "SELECT `created_at`, `branch` FROM `orders` WHERE id =  $order_id";
            $result2 = $dbconn->query($sql2);
            while($row2 = $result2->fetch_assoc()) {
                      $data2[] = $row2;
            }
             $data3 = array($data, $data2);
             echo json_encode($data3);

            $sql3 = "UPDATE orders SET seen = 1 WHERE id = $order_id";
            $dbconn->query($sql3); 
        
        }
      
    
    }
?>
