
Records_Inv_RM_IN_Pusher_Update_Channel.bind('sent', function (data) {
    try {
        var result = $.parseJSON(data);
        data_obj.rawmaterials_in = result;
        Table_RM_IN_ClearDraw();
    } catch (error) {
        console.log("catch: " + error);
    }
});


Records_Inv_RM_OUT_Pusher_Update_Channel.bind('sent', function (data) {
    try {
        var result = $.parseJSON(data);
        data_obj.rawmaterials_out = result;
        Table_RM_OUT_ClearDraw();
    } catch (error) {
        console.log("catch: " + error);
    }
});
