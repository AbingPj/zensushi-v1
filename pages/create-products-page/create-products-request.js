requestProducts = () => {
    var result;
    $.ajax({

        url: zenDB_url + 'onsen-php-file/Create-Products-Display-All.php',
        success: (data) => {
            try {
                result = $.parseJSON(data);
                mydataObj.products = result;
                sessionStorage.setItem("zenCreateProd_ProdData", data);
                CreateProducts_DataTable();
                $('#myloader').removeClass("running");
            } catch (error) {
                console.log(error)
                CreateProducts_DataTable();
                $('#myloader').removeClass("running");
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $('#myloader').removeClass("running");
            notify_faild("Connection Faild");
        }
    });
}

function requestCategories() {
    var result;
    $.ajax({
        url: zenDB_url + 'onsen-php-file/selectionfetch.php',
        success: function (data) {
            try {

                result = $.parseJSON(data);
                mydataObj.categories = result;
                sessionStorage.setItem("zenCreateProd_CatData", data);
                setTimeout(() => {
                    displayCatSelection();
                }, 1000);

            } catch (error) {
                console.log(error)
            }

        }
    });
};


function requestRawMaterialsData() {
    $.ajax({
        url: zenDB_url + "onsen-php-file/Create-RawMaterials-Display.php",
        success: function (data) {


            try {
                var result = $.parseJSON(data);
                mydataObj.rawmaterials = result;
                sessionStorage.setItem("zenCreateProd_RMData", data);
                displayRawSelection_AtUpdateModal();
            } catch (error) {

                console.log(error);

            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log('error');
        }
    });
}

function requestUnitData() {
    $.ajax({
        url: zenDB_url + "onsen-php-file/Create-RawMaterials-Units-Selection.php",
        success: function (data) {
            try {
                result = $.parseJSON(data);
                mydataObj.units = result;
                sessionStorage.setItem("zenCreateProd_UnitsData", data);
            } catch (error) {
                console.log(error);
            }


        }
    });
}

function requestUnitSubData() {
    $.ajax({
        url: zenDB_url + "onsen-php-file/Create-RawMaterials-UnitsSub-Selection.php",
        success: function (data) {
            try {
            result = $.parseJSON(data);
            mydataObj.units_sub = result;
            sessionStorage.setItem("zenCreateProd_SubUnitsData", data);      
            } catch (error) {
                console.log(error)
            }
        }
    });
}


function requestPackagingData() {
    console.log("PACKAGE");
    $.ajax({
        url: zenDB_url + "onsen-php-file/Create-Products-Request-PackagingData.php",
        success: function (data) {
            try {
                result = $.parseJSON(data);
                mydataObj.packaging = result;
                sessionStorage.setItem("zenCreateProd_PackagingData", data);
                displayPackagingSelection()
            } catch (error) {
                console.log(error)
            }
          
        }
    });
}

function addProd() {
    var critical_level = $("#txtProdCrit").val();
    $('#btnSaveProd').addClass("running");
    $('#btnSaveProd').attr("disabled", "disabled");
    var rawmaterial_id = $("#RawmaterialsSelection option:selected").val();
    var units_sub_id = $("#UnitSubSelection option:selected").val();
    var packaging_id = $("#PackagingSelection option:selected").val();
    var value = $("#txtValueOfProduct").val();
    var name = $("#txtProductName").val();
   
    mydataObj.set_selected_prod_save(name, rawmaterial_id, units_sub_id, value, packaging_id, critical_level);
    //console.table(mydataObj.selected_prod_save);
    var mydata1 = JSON.stringify(mydataObj.selected_prod_save);
    //console.table(mydata1);
    clearProductsForm();
    $.ajax({
        url: zenDB_url + "onsen-php-file/Create-Products-Add.php",
        data: { mydata: mydata1 },
        method: "post",
        success: function (response) {
            console.log('$%c' + response, 'color:red;');
            $('#btnSaveProd').removeClass("running");
            $('#btnSaveProd').removeAttr("disabled");
        }
    });
}


function addProd2() {
    $('#btnSaveProd2').addClass("running");
    $('#btnSaveProd2').attr("disabled", "disabled");
   
    var critical_level = $("#txtProdCrit2").val();
    var name = $("#txtProductName2").val();
    var packaging_id = $("#PackagingSelection2 option:selected").val();

    var obj = { "name": name, "packaging_id": packaging_id, "critical_level": critical_level};
    var myJSON = JSON.stringify(obj);

    clearProductsForm();
    $.ajax({
        url: zenDB_url + "onsen-php-file/Create-Products-Add2.php",
        data: { mydata: myJSON },
        method: "post",
        success: function (response) {
            console.log('$%c' + response, 'color:red;');
            $('#btnSaveProd2').removeClass("running");
            $('#btnSaveProd2').removeAttr("disabled");
        }
    });
}


function deleteProd() {
    $.ajax({
        url: zenDB_url + 'onsen-php-file/Create-Products-Delete.php',
        type: 'post',
        data: { id: mydataObj.Selected_Delete_Product.id },
        success: function (response) {
            console.log(response);
            FailNotify(response);
        }
    });
}


deleteMultipleProd = () => {
    $.ajax({
        url: zenDB_url + 'onsen-php-file/Create-Products-Delete-Multiple.php',
        type: 'post',
        data: { myrow: mydataObj.checkedProd.id },
        success: function (response) {
            console.log(response);
            FailNotify(response);
        }
    });
}

function updateProd() {
    console.log('$%c color:red;' + 'maro')
    var id = mydataObj.Selected_Update_Product.id;
    var rawmaterial_id = $("#RMSelectionAtUpdateProduct option:selected").val();
    var units_sub_id = $("#SubUnitSelection_AtUpdateProdutcs option:selected").val();
    var packaging_id = $("#PackagingSelection_AtUpdateProducts option:selected").val();
    var value = $("#txtValueOfProduct_AtUpdateProduct").val();
    var name = $("#txtUpdateProductName").val();
    var critical_level = $("#txtProdUpdateCrit").val();
    mydataObj.set_save_update_product(id, name, rawmaterial_id, units_sub_id, value, packaging_id, critical_level);
    var mydata1 = JSON.stringify(mydataObj.save_update_product);

    

    clearProductsForm();
    $.ajax({
        url: zenDB_url + "onsen-php-file/Create-Products-Update.php",
        data: { mydata: mydata1 },
        method: "post",
        success: function (response) {
            console.log('$%c' + response, 'color:red;');
        }
    });
}


function updateProd2() {
    console.log('$%c color:red;' + 'maro')
    var id = mydataObj.Selected_Update_Product.id;
    var packaging_id = $("#PackagingSelection2_AtUpdateProducts option:selected").val();
    var name = $("#txtUpdateProductName2").val();
    var critical_level = $("#txtProdUpdateCrit2").val();
    var obj = { "id":id, "name": name, "packaging_id": packaging_id, "critical_level": critical_level};
    var myJSON = JSON.stringify(obj);
    clearProductsForm();
    $.ajax({
        url: zenDB_url + "onsen-php-file/Create-Products-Update2.php",
        data: { mydata: myJSON },
        method: "post",
        success: function (response) {
            console.log('$%c' + response, 'color:red;');
        }
    });
}










