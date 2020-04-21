


update_create_products_channel.bind('sent', function (data) {
    try {
        result = $.parseJSON(data);
        mydataObj.products = result;
        Table_CreateProducts_ClearDraw();
        //$('#CategorySelection').prop('selectedIndex',0)
        //$('#RawmaterialsSelection').prop('selectedIndex',0)
        //$("#RawmaterialUnit2 option").remove();
        //$('#txtRawMaterial').val("");
        sessionStorage.setItem("zenCreateRM_IsUpdate", "false");

    } catch (error) {
        console.log("catch: " + error);
        mydataObj.products = [];
        Table_CreateProducts_ClearDraw();
    }

});



update_create_category_channel.bind('sent', function (data) {
    try {

        var result = $.parseJSON(data);
        mydataObj.categories = result;
        $("#CategorySelection option").remove();
        $("#CategorySelectionAtUpdateProduct option").remove();
        setTimeout(() => {
            displayCatSelection();
            sessionStorage.setItem("zenCreateRM_IsUpdate", "false");
        }, 1000);


    } catch (error) {
        console.log("catch: " + error);
    }
});



UpdateRMchannel.bind('sent', function (data) {
    try {
        $("#RawmaterialsSelection option").remove();
        $("#RMSelectionAtUpdateProduct option").remove();
     
        var result = $.parseJSON(data);
        mydataObj.rawmaterials = result;

        $('#CategorySelection').prop('selectedIndex',0)
        mydataObj.get_selected_category_id("ALL");

        setTimeout(() => {
            var Parent = document.getElementById('RawmaterialsSelection');
            $.each(mydataObj.selected_rawmaterials, function (i, value) {
                var child = document.createElement('option');
                child.setAttribute('value', value.id);
                child.innerHTML = value.name;
                Parent.appendChild(child);
            });


            displayRawSelectionChange();
            displayRawSelection_AtUpdateModal();
            sessionStorage.setItem("zenCreateRM_IsUpdate", "false");
        }, 1000);



    } catch (error) {
        console.log("catch: " + error);
    }
});