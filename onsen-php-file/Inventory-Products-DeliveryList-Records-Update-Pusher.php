<?php

$pushersql = "SELECT
deliverylist.id,
deliverylist.delivery_id,
deliverylist.products_id,
products.name,
deliverylist.quantity,
products_packaging.name as unit,
-- CONCAT(products.name,' (',IF( products.value < 1, products.value * units.value, products.value * 1 ),' ',units_sub.name ,')')  as 'display_name'
IFNULL(CONCAT(products.name,' (',IF( products.value < 1, products.value * units.value, products.value * 1 ),' ',units_sub.name ,')'), products.name)  as 'display_name'
FROM deliverylist
LEFT JOIN products ON products.id = deliverylist.products_id
LEFT JOIN units_sub ON units_sub.id = products.units_sub_id 
LEFT JOIN units ON units.id = units_sub.units_id 
LEFT JOIN products_packaging ON products_packaging.id = products.packaging_id
";

        $pusherresult = $dbconn->query($pushersql);
        if ($pusherresult->num_rows > 0) {
            while ($pusherrow = $pusherresult->fetch_assoc()) {
                $pusherarr[] = $pusherrow;
            }
        }
        include 'Pusher-Api/config.php';
        $pusherdata2= json_encode($pusherarr);
       
        $pusherdata3['data']=$pusherdata2;
        $pusherdata3['spi']=json_encode($spi);
        $pusher->trigger('Inventory-Products-DeliveryList-Records-Update-Pusher', 'sent', $pusherdata3);
