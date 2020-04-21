


UpdateRMchannel.bind('sent', function (data) {
    try {

        var result = $.parseJSON(data);
        data_obj.rawmaterials = result;
        TableClearDraw();
        sessionStorage.setItem("ZenInvProd_IsUpdate","false");
    } catch (error) {
        console.log("catch: " + error);
    }
});



update_create_products_channel.bind('sent', function (data) {
    try {
        var result = $.parseJSON(data);
        data_obj.products = result;
        data_obj.get_products_no_raw();
        sessionStorage.setItem("ZenInvProd_IsUpdate","false");  
    } catch (error) {
        console.log("catch: " + error);
    }
});



update_INV_Prod_channel.bind('sent', function (data) {
    try {
       
        var result = $.parseJSON(data);
        data_obj.products = result;
        Table_Products_ClearDraw();
        sessionStorage.setItem("ZenInvProd_IsUpdate","false");  
    } catch (error) {
        console.log("catch: " + error);
    }
});