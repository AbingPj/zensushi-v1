

$("#incheck").click(function () {
    $("#indate").attr("disabled", !this.checked);
    $("#indate").val('', !this.checked);
});

$("#outcheck").click(function () {
    $("#outdate").attr("disabled", !this.checked);
    $("#outdate").val('', !this.checked);
});

$('#btnStockIN').on("click", () => {
    if ($("#txtIN").val().trim() == '') {
        alert("Please input quantity.")
      }
      else {
        if ($('#incheck').is(":checked")) {

            if ($("#indate").val() == "") {
                alert("no date and time selected");
            } else {
                //var date = $('#indate').val();
                //console.log(date);
                toStockIn_RM_with_date();
            }
        }
        else if ($('#incheck').is(":not(:checked)")) {
            toStockIn_RM();
        }
      }
});

$('#btnStockOut').on("click", () => {
    
    if ($("#txtOut").val().trim() == '') {
        alert("Please input quantity.")
      }
      else {
        requestToGetRMLastOut();
      }
});


$('#btnResetRm').on("click", () => {
    console.log(data_obj.selected_rm.id);
    resetRM()
});


Modalclear = () => {
    $("#RmNameLabel").html("");
    $("#balanceLabel").html("");
    $("#unitLabel").html("");
    $("#unitLabel2").html("");
    $("#unitLabel3").html("");
    $("#txtOut").val("");
    $("#txtIN").val("");
    $('#stockOutform').collapse('hide');
    $('#stockInform').collapse('hide');
    $("#RawModal").modal('hide');
    $('#incheck').prop('checked', false);
    $("#indate").val('');
    $('#outcheck').prop('checked', false);
    $("#outdate").val('');
     $('#btnStockIn1').removeClass( "btn-light" ).addClass( "btn-success");
     $('#btnStockOut1').removeClass( "btn-light" ).addClass( "btn-danger" );
}

$('#btnStockIn1').on("click", ()=>{ 
    
    if ( $('#btnStockIn1').hasClass("btn-success")){
         $('#btnStockIn1').removeClass( "btn-success" ).addClass( "btn-light" );
    }else{
        $('#btnStockIn1').removeClass( "btn-light" ).addClass( "btn-success" );
    }
       
    
     //$('#btnStockOut1').removeClass( "btn-light" ).addClass( "btn-danger" );
       //$('#btnStockOut1').prop("disabled", false);
    //('#btnStockIn1').removeClass( "btn-success" ).addClass( "btn-light" );
     //$('#btnStockIn1').prop("disabled", true);
});

$('#btnStockOut1').on("click", ()=>{
     if ( $('#btnStockOut1').hasClass("btn-danger")){
         $('#btnStockOut1').removeClass( "btn-danger" ).addClass( "btn-light" );
    }else{
        $('#btnStockOut1').removeClass( "btn-light" ).addClass( "btn-danger" );
    }
});




$('#removeRM').on("click", () => {
    console.log("REMOVE");
    $("#RemoveRawModal_atInventory").modal();
});

