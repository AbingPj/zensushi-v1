$('#btnAddtoList').on('click', () => {

    if ($('#txtQuantity').val().trim() == '') {
    } else {
        data_obj.product_selected_id = $('#txtProdId').val();
        data_obj.product_selected_quantity = $('#txtQuantity').val();
        data_obj.add_to_list();
        Table_List_ClearDraw();
        $('#txtProdId').val("");
        $('#txtQuantity').val("");
        data_obj.product_selected_id = "";
        data_obj.product_selected_quantity = "";

    }
});


$('#btnAddtoList2').on('click', () => {
    if ($('#txtQuantity2').val().trim() == '') {
    } else {
        data_obj.product_selected_quantity = $('#txtQuantity2').val();
        data_obj.add_to_list();
        Table_List_ClearDraw();
        $('#txtQuantity2').val("");
        data_obj.product_selected_id = "";
        data_obj.product_selected_quantity = "";

    }
});

$('#btnUpdateQuantity').on('click', () => {

    if ($('#txtNewQuantity').val().trim() == '') {
    } else {

        data_obj.list_item_update_quantity($('#txtNewQuantity').val());
        Table_List_ClearDraw();
        $('#CurrentQuantity').val("");
        $('#txtNewQuantity').val("");
        data_obj.selectedproduct_atlist="";       
    }
});



$('#btnSendList').on('click',()=>{
    

    
    if(data_obj.list.length <= 0){

    }else{
        
    if ($("#txtBranch").val().trim() == '') {
            alert("Please enter the outlet(branch) name.")
            //$('#btnSaveRm').removeClass("running");
            //$('#btnSaveRm').removeAttr( "disabled");
    } 
    else {
        SendOrderRequest();
    }
        
    }
   
})