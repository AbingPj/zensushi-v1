function requestProductsData() {
    $.ajax({
        url: zenDB_url+"onsen-php-file/Reports-Products-Display.php",
        success: function (data) {
            var result = $.parseJSON(data);
            data_obj.products_report = result;
            MYdatatable();
            $('#myloader').removeClass("running");
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
    var ok = $('#datetimepicker1').val();
    console.log({ok});
    var obj = { "from": from, "to": to };
    console.log(obj);
    var myJSON = JSON.stringify(obj);
   
    $.ajax({
        url: zenDB_url+'onsen-php-file/Reports-Products-DateTimePicker.php',
        data: { myData: myJSON },
        type: 'POST',
        success: function (data) {
            $('#myloader').removeClass("running");
            var result = $.parseJSON(data);
            data_obj.products_report = result;
            TableClearDraw();
         
           
        }, error: function (XMLHttpRequest, textStatus, errorThrown) {
            $('#myloader').removeClass("running");
            notify_faild("Connection Faild");
        }
    });
}