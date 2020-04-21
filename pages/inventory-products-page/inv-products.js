$("#incheck").click(function () {
    $("#indate").attr("disabled", !this.checked);
    $("#indate").val('', !this.checked);
});

$("#incheck2").click(function () {
    $("#indate2").attr("disabled", !this.checked);
    $("#indate2").val('', !this.checked);
});


$('#btnAddtoCart').on("click", () => {
    console.log("btnAddtoCart");
    var prod_id = $("#ProductsSelections option:selected").val();
    var quantity = $("#txtQuantity").val();
    data_obj.add_to_cart(prod_id, quantity);
    data_obj.get_totalQty();
    data_obj.get_totalWeight();
    $("#totalQ").html(data_obj.totalQty);
    //$("#totalW").html(data_obj.totalWeight + " " + data_obj.total_units_name);
    $("#totalW").html(parseFloat(data_obj.totalWeight).toFixed(2) + " " + data_obj.total_units_name);
    //$('#alltotal').html(data_obj.final_totalWeight);
    TableCartClearDraw();
    // $('#txtScrap').val("");
    // $('#txtBones').val("");
    var scrap = $('#txtScrap').val();
    var bones = $('#txtBones').val();
    if (scrap == '') {
        scrap = 0;
    }
    if (bones == '') {
        bones = 0;
    }
    data_obj.get_final_totalWeight(scrap, bones);
    $('#alltotal').html(data_obj.final_totalWeight + " " + data_obj.total_units_name);

});







$('#btnAddtoCart2').on("click", () => {
    if ($("#txtQuantity_ProdNoRaw").val().trim() == '') {
    } else {
        var quantity = $("#txtQuantity_ProdNoRaw").val();
        data_obj.add_to_cart2(quantity);
        data_obj.get_totalQty_ofCart2();
        CartTable2_ClearDraw();
        $("#txtQuantity_ProdNoRaw").val("");
        $("#totalQ2").html(data_obj.totalQty2);
    };
});


$('#btnUpdateQuantity').on("click", () => {
    var newquantity = $('#txtNewQuantity').val();
    data_obj.cart_item_update_quantity(newquantity);
    data_obj.get_totalQty();
    data_obj.get_totalWeight();
    $("#totalQ").html(data_obj.totalQty);
    //$("#totalW").html(data_obj.totalWeight + " " + data_obj.total_units_name);
    $("#totalW").html(parseFloat(data_obj.totalWeight).toFixed(2) + " " + data_obj.total_units_name);
    TableCartClearDraw();
    var scrap = $('#txtScrap').val();
    var bones = $('#txtBones').val();
    if (scrap == '') {
        scrap = 0;
    }
    if (bones == '') {
        bones = 0;
    }
    data_obj.get_final_totalWeight(scrap, bones);
    $('#alltotal').html(data_obj.final_totalWeight + " " + data_obj.total_units_name);


});



$('#btnUpdateQuantity2').on("click", () => {
    var newquantity = $('#txtNewQuantity2').val();
    data_obj.cart2_item_update_quantity(newquantity);
    data_obj.get_totalQty_ofCart2();
    CartTable2_ClearDraw();
    $("#txtNewQuantity2").val("");
    $("#totalQ2").html(data_obj.totalQty2);
});



$('#txtScrap').on("keyup", () => {
    var scrap = $('#txtScrap').val();
    var bones = $('#txtBones').val();
    if (scrap == '') {
        scrap = 0;
    }
    if (bones == '') {
        bones = 0;
    }
    data_obj.get_final_totalWeight(scrap, bones);
    $('#alltotal').html(data_obj.final_totalWeight + " " + data_obj.total_units_name);
});



$('#txtBones').on("keyup", () => {
    var scrap = $('#txtScrap').val();
    var bones = $('#txtBones').val();
    if (scrap == '') {
        scrap = 0;
    }
    if (bones == '') {
        bones = 0;
    }
    data_obj.get_final_totalWeight(scrap, bones);
    $('#alltotal').html(data_obj.final_totalWeight + " " + data_obj.total_units_name);

});



$('#btnSave').on('click', () => {
    if (data_obj.cart == 0) {
    } else {
        // console.log("ft: " + data_obj.final_totalWeight)
        // console.log("ft: " + data_obj.data_obj.RM_last_out_value[0].quantity)
        if (data_obj.final_totalWeight > data_obj.RM_last_out_value[0].quantity) {
            alert("You must not exceed the total value in "
            + data_obj.RM_last_out_value[0].quantity +" "+ data_obj.RM_last_out_value[0].unit
            +". \n\n Total value produced: "+data_obj.final_totalWeight+" "+ data_obj.RM_last_out_value[0].unit
            +".\n Selected Raw Material:  "+data_obj.selected_rm.name
            +".\n Latest Out: "+ data_obj.RM_last_out_value[0].quantity +" "+ data_obj.RM_last_out_value[0].unit)
        } else {

          
            if ($('#incheck').is(":checked")) {
                if ($("#indate").val() == "") {
                    alert("no date and time selected");
                } else {
                    save_with_date();
                }
            }
            else if ($('#incheck').is(":not(:checked)")) {
               
                save();
            }
        }

    }
});









$('#btnSave2').on('click', () => {

    if (data_obj.cart2 == 0) {
    } else {
        if ($('#incheck2').is(":checked")) {
            if ($("#indate2").val() == "") {
                alert("no date and time selected");
            } else {
               // alert('ok with  date')
                save_with_date2();
            }
        }
        else if ($('#incheck2').is(":not(:checked)")) {
            //alert('ok with out date')
            save2();
        }
        
    }

});









function remove1itemincart() {

    data_obj.get_totalQty();

    data_obj.get_totalWeight();

    $("#totalQ").html(data_obj.totalQty);

    //$("#totalW").html(data_obj.totalWeight + " " + data_obj.total_units_name);
    $("#totalW").html(parseFloat(data_obj.totalWeight).toFixed(2) + " " + data_obj.total_units_name);

    TableCartClearDraw();

    var scrap = $('#txtScrap').val();
    var bones = $('#txtBones').val();
    if (scrap == '') {
        scrap = 0;
    }
    if (bones == '') {
        bones = 0;
    }
    data_obj.get_final_totalWeight(scrap, bones);
    $('#alltotal').html(data_obj.final_totalWeight + " " + data_obj.total_units_name);


}









function displayProducts() {

    clearProducts();

    var Parent = document.getElementById('ProductsSelections');

    $.each(data_obj.selected_products, function (i, value) {

        var child = document.createElement('option');

        child.setAttribute('value', value.id);

        child.innerHTML = value.display_name;

        Parent.appendChild(child);

    });

}



function clearProducts() {

    $("#ProductsSelections option").remove();

}







function choose() {

    $('#btnAddtoCart').prop("disabled", false);

    data_obj.cart = [];

    data_obj.totalQty = 0;

    data_obj.totalWeight = 0;

    $("#totalQ").html(data_obj.totalQty);

    $("#totalW").html(data_obj.totalWeight);

    $("#RMlabel").html(data_obj.selected_rm.name);

    data_obj.raw_get_selected(data_obj.selected_rm.id);

    displayProducts();

    TableCartClearDraw();

}



function clear() {
    clearProducts();
    data_obj.cart = [];
    data_obj.totalQty = 0;
    data_obj.totalWeight = 0;
    data_obj.RM_last_out_value = null;
    data_obj.final_totalWeight = 0;
    $("#totalQ").html("");
    $("#totalW").html("");
    $('#btnAddtoCart').prop("disabled", false);
    $("#RMlabel").html("");
    $("#LatestOutLabel").html("");
    $("#txtQuantity").val("");
    $('#alltotal').html("");
    clearProducts();
    TableCartClearDraw();
}




function clear2() {
    data_obj.cart2 = [];
    data_obj.totalQty2 = 0;
    $("#totalQ2").html("");
    CartTable2_ClearDraw();
}






