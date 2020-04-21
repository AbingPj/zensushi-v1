



update_create_category_channel.bind('sent', function (data) {
    try {
        setTimeout(() => {
            result = $.parseJSON(data);
            mydata.categories = result;
            $("#CategorySelectionAtCreateRawmaterial option").remove();
            $("#CategorySelectionAtCreateRawmaterial_AtUpdateModal option").remove();
            displayCategoryAtSelection();
            sessionStorage.setItem("zenCreateRM_IsUpdate",  "false");
        }, 1000);
       
    } catch (error) {
        console.log("catch: " + error);
    }
});



//update-create-products-channel
UpdateRMchannel.bind('sent', function (data) {
    try {
        console.log('pusherresult'+data);
        result = $.parseJSON(data);
        mydata.rawMaterials = result;
        Table_RawMaterials_ClearDraw();
        $('#txtRawMaterial').val("");
        $('#CategorySelectionAtCreateRawmaterial').prop('selectedIndex',0)
        //$('#QuantityUnitSelection').prop('selectedIndex',0)
        //$("#UnitSubSelection option").remove();
        sessionStorage.setItem("zenCreateRM_IsUpdate",  "false");
    } catch (error) {
        mydata.rawMaterials = [];
        Table_RawMaterials_ClearDraw();
        console.log("catch: " + error);
    }
});




