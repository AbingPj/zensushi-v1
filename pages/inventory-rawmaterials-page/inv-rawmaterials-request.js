

function requestRawMaterialsData() {
    $.ajax({
        url: zenDB_url + "onsen-php-file/Inventory-RawMaterials-Display.php",
        success: function (data) {
            try {
                var result = $.parseJSON(data);
                data_obj.rawmaterials = result;
                //display();
                sessionStorage.setItem("zenInvRm", data);
                MYdatatable();
                $('#myloader').removeClass("running");
            } catch (error) {
                console.log(error)
                $('#myloader').removeClass("running");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log('error');
        }
    });
}


function toStockIn_RM() {
    $('#btnStockInLoad').addClass("running");
    var rawid = data_obj.selected_rm.id;
    var qty = document.getElementById('txtIN').value;
    var userid = sessionStorage.getItem('zen_userid');
    var obj = { "rawid": rawid, "qty": qty, "userid": userid };
    console.log(obj);
    var myJSON = JSON.stringify(obj);
    $.ajax({
        url: zenDB_url + 'onsen-php-file/Inventory-RawMaterials-Stock_IN.php',
        data: { myData: myJSON },
        type: 'POST',
        success: function (data) {
            $('#btnStockInLoad').removeClass("running");
            Modalclear();
        }, error: function (XMLHttpRequest, textStatus, errorThrown) {
            notify_faild("Connection Faild");
            $('#btnStockInLoad').removeClass("running");
        }
    });
}

function toStockIn_RM_with_date() {
    $('#btnStockInLoad').addClass("running");
    var rawid = data_obj.selected_rm.id;
    var qty = document.getElementById('txtIN').value;
    var userid = sessionStorage.getItem('zen_userid');
    var date = $('#indate').val();
    var obj = { "rawid": rawid, "qty": qty, "userid": userid, "date":date };
 
    console.log(obj);
    var myJSON = JSON.stringify(obj);
    $.ajax({
        url: zenDB_url + 'onsen-php-file/Inventory-RawMaterials-Stock_IN2.php',
        data: { myData: myJSON },
        type: 'POST',
        success: function (data) {
            $('#btnStockInLoad').removeClass("running");
            Modalclear();
        }, error: function (XMLHttpRequest, textStatus, errorThrown) {
            notify_faild("Connection Faild");
            $('#btnStockInLoad').removeClass("running");
        }
    });
}




function toStockOut_RM() {
    $('#btnStockOutLoad').addClass("running");
    
    if (data_obj.selected_rm.balance == 'NULL'){
        console.log('balance must not NULL.')
        alert("balance must not NULL.");
        $('#btnStockOutLoad').removeClass("running");
    }else if (data_obj.selected_rm.balance == undefined) {
        console.log('balance must not undefined.')
        alert("balance must not undefined.");
        $('#btnStockOutLoad').removeClass("running");
    }else if (data_obj.selected_rm.balance == 0) {
        console.log('balance must not zero.')
        alert("balance must not zero.");
        $('#btnStockOutLoad').removeClass("running");
    }else{
        var balance = parseFloat(data_obj.selected_rm.balance);
        var rawid = data_obj.selected_rm.id;
        var qty = parseFloat(document.getElementById('txtOut').value);
        var userid = sessionStorage.getItem('zen_userid');
        var obj = { "rawid": rawid, "qty": qty, "userid": userid };
        var myJSON = JSON.stringify(obj);

        if (qty <= balance && balance != 0) {
            $.ajax({
                url: zenDB_url + 'onsen-php-file/Inventory-RawMaterials-Stock_OUT.php',

                data: { myData: myJSON },
                type: 'POST',
                success: function (data) {
                    $('#btnStockOutLoad').removeClass("running");
                    Modalclear();
                }, error: function (XMLHttpRequest, textStatus, errorThrown) {
                    //notify_faild("Connection Faild");
                    alert("Connection Faild");
                    $('#btnStockOutLoad').removeClass("running");
                }
            });

        } else if (qty > balance) {
            $('#btnStockOutLoad').removeClass("running");
            alert("value must less than or equal the balance.")
            //notify_faild("value must less than or equal the balance.");
            console.log('value must less than or equal the balance.')
        }

    }
   
};



function    requestToGetRMLastOut() {
    var rawid = data_obj.selected_rm.id;
    console.log(rawid);
    $.ajax({
        url: zenDB_url + "onsen-php-file/Inventory-Products-Get-RM-Last-Out.php?rawid="+rawid,
        type: "get",
        success: function (data) {
            try {
                result = $.parseJSON(data);
                data_obj.RM_last_out_value = result;
                if(data_obj.RM_last_out_value[0].produce == 0 ){
                    alert('You must to produce the last stock-out of raw material before you can stock-out again.'
                    +' \nGo to menu tab and click "Inventory" then "Production". Choose this raw-material and produce.')
                    $('#btnStockOutLoad').removeClass("running");
                    Modalclear();
                    // $("#LatestOutLabel").html( data_obj.RM_last_out_value[0].quantity +" "+ data_obj.RM_last_out_value[0].unit);
                    // $('#myloader').removeClass("running");
                }else{
                    
                    if($('#outcheck').is(":checked")){
        
                        if($("#outdate").val() == "") {
                            alert("no date and time selected");
                        }else{
                            toStockOut_RM_with_date();
                        }
                    }
                    else if($('#outcheck').is(":not(:checked)")){
                        toStockOut_RM();
                        //toStockOut_RM();
                    }

                    
                    // data_obj.RM_last_out_value = [];
                    // $('#btnAddtoCart').prop("disabled", true);
                    // $("#LatestOutLabel").html("Input Raw Material Stack Out Before Produce.");
                    // $('#myloader').removeClass("running");
                }
            } catch (error) {
                //toStockOut_RM();
                if($('#outcheck').is(":checked")){
        
                    if($("#outdate").val() == "") {
                        alert("no date selected");
                    }else{
                        toStockOut_RM_with_date();
                        $('#outcheck').attr('checked', false);
                    }
                }
                else if($('#outcheck').is(":not(:checked)")){
                    toStockOut_RM();
                    //toStockOut_RM();
                }
                $('#btnStockOutLoad').removeClass("running");
                Modalclear();
                console.log(error)
            }
        }
    });
}


function toStockOut_RM_with_date() {
    $('#btnStockOutLoad').addClass("running");
    
    if (data_obj.selected_rm.balance == 'NULL'){
        console.log('balance must not NULL.')
        alert("balance must not NULL.");
        $('#btnStockOutLoad').removeClass("running");
    }else if (data_obj.selected_rm.balance == undefined) {
        console.log('balance must not undefined.')
        alert("balance must not undefined.");
        $('#btnStockOutLoad').removeClass("running");
    }else if (data_obj.selected_rm.balance == 0) {
        console.log('balance must not zero.')
        alert("balance must not zero.");
        $('#btnStockOutLoad').removeClass("running");
    }else{
        var balance = parseFloat(data_obj.selected_rm.balance);
        var rawid = data_obj.selected_rm.id;
        var qty = parseFloat(document.getElementById('txtOut').value);
        var userid = sessionStorage.getItem('zen_userid');
        var date = $('#outdate').val();
        var obj = { "rawid": rawid, "qty": qty, "userid": userid, "date":date };
        var myJSON = JSON.stringify(obj);

        if (qty <= balance && balance != 0) {
            $.ajax({
                url: zenDB_url + 'onsen-php-file/Inventory-RawMaterials-Stock_OUT2.php',

                data: { myData: myJSON },
                type: 'POST',
                success: function (data) {
                    $('#btnStockOutLoad').removeClass("running");
                    Modalclear();
                }, error: function (XMLHttpRequest, textStatus, errorThrown) {
                    //notify_faild("Connection Faild");
                    alert("Connection Faild");
                    $('#btnStockOutLoad').removeClass("running");
                }
            });

        } else if (qty > balance) {
            $('#btnStockOutLoad').removeClass("running");
            alert("value must less than or equal the balance.")
            //notify_faild("value must less than or equal the balance.");
            console.log('value must less than or equal the balance.')
        }

    }
   
};


function resetRM() {
    $.ajax({
        url: zenDB_url + 'onsen-php-file/Inventory-RawMaterials-Reset.php',
        type: 'post',
        data: { id: data_obj.selected_rm.id },
        success: function (response) {
            console.log(response);
        }
    });
}