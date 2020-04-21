
update_INV_RM_channel.bind('sent', function (data) {
    //TableClearDraw();
    try {
        var result = $.parseJSON(data);
        data_obj.rawmaterials = result;
        TableClearDraw();
        sessionStorage.setItem("zenInvRm_IsUpdate",  "false");
    } catch (error) {
        console.log("catch: " + error);
    }
});