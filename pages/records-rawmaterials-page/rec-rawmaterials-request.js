

function requestRawMaterials_InRecords() {
    $.ajax({
        url: zenDB_url+"onsen-php-file/Records-Inv-RM-IN.php",
        success: function (data) {

            try {
                var result = $.parseJSON(data);
                data_obj.rawmaterials_in= result;
                requestRawMaterials_OutRecords();
            } catch (error) {
                requestRawMaterials_OutRecords();
            }

           
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log('error');
        }
    });
}

function requestRawMaterials_OutRecords() {
    $.ajax({
        url: zenDB_url+"onsen-php-file/Records-Inv-RM-OUT.php",
        success: function (data) {
            try {
                var result = $.parseJSON(data);
                data_obj.rawmaterials_out = result;
                RM_in_datatable();
                RM_out_datatable();
            } catch (error) {
                console.log('catch = > '+error);
                RM_in_datatable();
                RM_out_datatable();
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log('error');
        }
    });
}



function UpdateInRaw() {
    var quantity = document.getElementById('txtNewQuantity').value
    var date = $('#txtCreated').val();
    var obj = { 
    id: data_obj.rawmaterials_in_selected.id, 
    quantity: quantity,
    date: date };
    var myJSON = JSON.stringify(obj);
    $.ajax({
      url: zenDB_url+'onsen-php-file/Records-Inv-RM-IN-Update.php',
      data: { myData: myJSON },
      type: 'POST',
      success: function (response) {
      }
    });
  }




function deleteInRaw() {
    $.ajax({
      url: zenDB_url+'onsen-php-file/Records-Inv-RM-IN-Delete.php',
      data: { id: data_obj.rawmaterials_in_selected.id },
      type: 'POST',
      success: function (response) {
        console.log(response);
      }
    });
  }


  
function UpdateOutRaw() {
    var quantity = document.getElementById('txtNewQuantity2').value
    var date = $('#txtCreated2').val();
    var obj = { 
    id: data_obj.rawmaterials_out_selected.id, 
    quantity: quantity,
    date: date };
    var myJSON = JSON.stringify(obj);
    console.log({myJSON});
    $.ajax({
      url: zenDB_url+'onsen-php-file/Records-Inv-RM-OUT-Update.php',
      data: { myData: myJSON },
      type: 'POST',
      success: function (response) {
      }
    });
  }




function deleteOutRaw() {
    $.ajax({
      url: zenDB_url+'onsen-php-file/Records-Inv-RM-OUT-Delete.php',
      data: { id: data_obj.rawmaterials_out_selected.id },
      type: 'POST',
      success: function (response) {
        console.log(response);
      }
    });
  }


  
  