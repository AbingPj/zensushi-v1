function requestRawMaterialsData() {
    $.ajax({
        url: zenDB_url+"onsen-php-file/Reports-RawMaterials-Display.php",
        success: function (data) {
            try {
                var result = $.parseJSON(data);
                data_obj.rawmaterials_reports = result;
                MYdatatable();
                //$('#myloader').removeClass("running");
            } catch (error) {
                console.log(error)
                $('#btnSubmit2').attr( "disabled", "disabled" );
       
            }   
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $('#myloader').removeClass("running");
            notify_faild("Connection Faild");
            console.log('error');
        }
    });
}




function datepicker() {
    $('#myloader').addClass("running");
    var from = $('#from_date').val();
    var to = $('#to_date').val();
    sessionStorage.setItem("zenFrom",from);
    sessionStorage.setItem("zenTo",to);
    
    var ok = $('#datetimepicker1').val();
    console.log({ok});

    var obj = { "from": from, "to": to };
    console.log(obj);
    var myJSON = JSON.stringify(obj);
   
    $.ajax({
        url: zenDB_url+'onsen-php-file/Reports-RawMaterials-DateTimePicker.php',
        data: { myData: myJSON },
        type: 'POST',
        success: function (data) {
            $('#myloader').removeClass("running");
            var result = $.parseJSON(data);
            data_obj.rawmaterials_reports = result;
            TableClearDraw();
         
           
        }, error: function (XMLHttpRequest, textStatus, errorThrown) {
            $('#myloader').removeClass("running");
            notify_faild("Connection Faild");
        }
    });
}