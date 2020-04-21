



Inventory_Products_In_List_Records_Update_Pusher_Channel.bind('sent', function (data) {
    try {
       
        var result = $.parseJSON(data.data);
        data_obj.products_inlist = result;
        var result2 = $.parseJSON(data.spi);
        data_obj.selected_products_in = result2;
        data_obj.prod_in_get_selected();
        Products_inlist_table_ClearDraw();
        

       
    } catch (error) {
        console.log("catch: " + error);
    }
});

Inventory_Products_DeliveryList_Records_Update_Pusher.bind('sent', function (data) {
    try {
       
        var result = $.parseJSON(data.data);
        data_obj.products_deliverylist = result;
        
        var result2 = $.parseJSON(data.spi);
        data_obj.selected_products_delivery = result2;
        data_obj.delivery_get_selected();
        Deliverylist_table_ClearDraw();
        

       
    } catch (error) {
        console.log("catch: " + error);
    }
});


