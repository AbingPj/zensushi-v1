
update_INV_Prod_channel.bind('sent', function (data) {
    try {
       
        var result = $.parseJSON(data);
        data_obj.products = result;
        Table_Products_ClearDraw();
        
       
    } catch (error) {
        console.log("catch: " + error);
    }
});
// update_INV_Prod_channel