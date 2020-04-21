
function requestCategoriesData() {
    $.ajax({
        url: zenDB_url+"onsen-php-file/selectionfetch.php",
        success: function (data) {
        
            try {
                var result = $.parseJSON(data);
                mydata.categories = result;
                sessionStorage.setItem('zenCreateRM_CategoryData',data)
                displayCategoryAtSelection();  
            } catch (error) {
                console.log(data);
            }
        }
    });
}

// function requestQuantityUnitData() {
//     $.ajax({
//         url: zenDB_url+"onsen-php-file/Create-RawMaterials-Units-Selection.php",
//         success: function (data) {
//             var result = $.parseJSON(data);
//             mydata.unitsquantity = result;
//             sessionStorage.setItem('zenCreateRM_QuantityData',data)
//             displayQuantityUnit();
//             displayQuantityUnit_AtUpdateModal();
//             //displayUnits_2();
//         }
//     });
// }

// function requestUnitSubData() {
//     $.ajax({
//         url: zenDB_url+"onsen-php-file/Create-RawMaterials-UnitsSub-Selection.php",
//         success: function (data) {
//             var result = $.parseJSON(data);
//             sessionStorage.setItem('zenCreateRM_UnitSubData',data)
//             mydata.units_sub = result;
//         }
//     });
// }


function requestRawMaterialsData() {
    $.ajax({
        url: zenDB_url+"onsen-php-file/Create-RawMaterials-Display.php",
        success: function (data) {
          
            try {
                var result = $.parseJSON(data);
                mydata.rawMaterials = result;
                //displayRawMaterials();
                sessionStorage.setItem('zenCreateRM_RMData',data)
                $('#myloader').removeClass("running");
                RawMatarialdatatable();
                
            } catch (error) {
                $('#myloader').removeClass("running");
                RawMatarialdatatable();
            }
       
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {

            $('#myloader').removeClass("running");
            notify_faild("Connection Faild");
        }
    });
}



function addRM_request() {
    var critical_level = document.getElementById('txtRawCrit').value;
    
    
    
    // var unit_sub = $("#UnitSubSelection option:selected").val();
    // var unit_sub;
    // if (unit == 1){
    //     unit_sub = 2;
    // }else if(unit == 2){
    //     unit_sub = 4;
    // }
    
    var catid = $("#CategorySelectionAtCreateRawmaterial option:selected").val();

    var rmname = document.getElementById('txtRawMaterial').value;
    

    var obj = { "catid": catid, "rmname": rmname, "unit": 1,
     "unitsub": 2, "critical_level":critical_level };
    var myJSON = JSON.stringify(obj);
    console.table(obj);

    $.ajax({
        url: zenDB_url+'onsen-php-file/Create-RawMaterials-Add.php',
        data: { myData: myJSON },
        type: 'POST',
        success: function (msg) {
            $('#btnSaveRm').removeClass("running");
            $('#btnSaveRm').removeAttr( "disabled");
            console.log(msg);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {

            $('#btnSaveRm').removeClass("running");
            $('#btnSaveRm').removeAttr( "disabled");
            alert("Connection Faild")
            //notify_faild("Connection Faild");
        }
    });
}




function updateRM() {
    var id = mydata.RM_UpdateSelected.id;
    var critical_level = document.getElementById('txtRawUpdateCrit').value;
    var rmname = document.getElementById('txtRawMaterialUpdateName').value
    var catid = $("#CategorySelectionAtCreateRawmaterial_AtUpdateModal option:selected").val();
    //var unit = $("#QuantityUnitSelection_AtUpdateModal option:selected").val();
    // var unit_sub = $("#UnitSubSelection_AtUpdateModal option:selected").val();

    // var unit_sub;
    // if (unit == 1){
    //     unit_sub = 2;
    // }else if(unit == 2){
    //     unit_sub = 4;
    // }



    var obj = { 
    "id": id,
    "catid": catid,
    "rmname": rmname,
    "unit": 1,
    "unitsub": 2,
    "critical_level": critical_level };
    console.log(obj);
    var myJSON = JSON.stringify(obj);
    $.ajax({
      url: zenDB_url+'onsen-php-file/Create-RawMaterials-Update.php',
      data: { myData: myJSON },
      type: 'POST',
      success: function (response) {
      }
    });
  }

  function deleteRM() {
    $.ajax({
      url: zenDB_url+'onsen-php-file/Create-RawMaterials-Delete.php',
      data: { id: mydata.RM_DeleteSelected_id},
      type: 'POST',
      success: function (response) {
        console.log(response);
      
      }
    });
  }


  function deleteMultipleRM(){
      console.log("OK: " + mydata.checkedRM.id);
      $.ajax({
        url: zenDB_url+'onsen-php-file/Create-RawMaterials-Delete-Multiple.php',
        type: 'post',
        data: { myrow: mydata.checkedRM.id},
        success: function (response) {
          console.log(response);
          FailNotify(response);
        }
      });
    }


    function requestRawMaterialsData2() {
        $.ajax({
            url: zenDB_url+"onsen-php-file/Create-RawMaterials-Display.php",
            success: function (data) {
                var result = $.parseJSON(data);
                mydata.rawMaterials = result;
                //displayRawMaterials();
                sessionStorage.setItem('zenCreateRM_RMData',data)
                $('#myloader').removeClass("running");
                Table_RawMaterials_ClearDraw();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
    
                $('#myloader').removeClass("running");
                notify_faild("Connection Faild");
            }
        });
    }


