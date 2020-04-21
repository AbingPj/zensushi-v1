

requestProducts = () => {

    var result;

    $.ajax({

        url: zenDB_url + 'onsen-php-file/Inventory-Products-GetProductsData.php',

        success: (data) => {

            try {

                result = $.parseJSON(data);

                data_obj.products = result;

                data_obj.get_products_no_raw();

                sessionStorage.setItem("ZenInvProd_ProdData", data)

                setTimeout(() => {

                    $('.panel-body.ld-over').removeClass("running");

                    ProductsTable();

                    MYdatatable();

                    CartTable();

                    choose_products_no_raw_table();

                    CartTable2();

                }, 1000);



              



            } catch (error) {

                $('.panel-body.ld-over').removeClass("running");
                alert("You did not create a product in library-> products. Please create first.")

                console.log(error)

            }



        }

    });

}





function requestRawMaterialsData() {

    $.ajax({

        url: zenDB_url + "onsen-php-file/Create-RawMaterials-Display.php",

        success: function (data) {

            try {

                var result = $.parseJSON(data);

                data_obj.rawmaterials = result;

                sessionStorage.setItem("ZenInvProd_RMData", data)

                requestProducts();

            } catch (error) {

                $('.panel-body.ld-over').removeClass("running");

                console.log(error)

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

                data_obj.units = result;

                sessionStorage.setItem("ZenInvProd_UnitsData", data)

            } catch (error) {

                console.log(error)

            }

        }

    });

}



function requestToGetRMLastOut(rawid) {
    $('#myloader').addClass("running");
    $.ajax({
        url: zenDB_url + "onsen-php-file/Inventory-Products-Get-RM-Last-Out.php?rawid="+rawid,
        type: "get",
        success: function (data) {
            try {
                result = $.parseJSON(data);
                data_obj.RM_last_out_value = result;
                if(data_obj.RM_last_out_value[0].produce == 0 ){
                    $("#LatestOutLabel").html( data_obj.RM_last_out_value[0].quantity +" "+ data_obj.RM_last_out_value[0].unit);
                    $('#myloader').removeClass("running");
                }else{
                    data_obj.RM_last_out_value = [];
                    $('#btnAddtoCart').prop("disabled", true);
                    $("#LatestOutLabel").html("Input Raw Material Stack Out Before Produce.");
                    $('#myloader').removeClass("running");
                }
            } catch (error) {
                $('#myloader').removeClass("running");
                console.log(error)
            }
        }
    });
}















function save() {
    var scrap = $('#txtScrap').val();
    if (scrap == "") {
        scrap = "NULL";
    }
    var bones = $('#txtBones').val();
    if (bones == "") {
        bones = "NULL";
    }
    var products = JSON.stringify(data_obj.cart);
    var account_id = sessionStorage.getItem('zen_userid');
    var raw_id = data_obj.selected_rm.id;
    var rawout_id = data_obj.RM_last_out_value[0].id;
    console.log({ scrap }, { products }, { account_id });

    $('#txtScrap').val("");
    $('#txtBones').val("");

    //var mydata1 = JSON.stringify(data_obj.cart);
    //console.table(mydata1);
    //clearProductsForm();

    $('#btnSave').addClass("running");
    $('#btnSave').attr( "disabled", "disabled" );

    $.ajax({
        url: zenDB_url + "onsen-php-file/Inventory-Products-In.php",
        data: {
            products: products,
            scrap: scrap,
            bones: bones,
            account_id: account_id,

            raw_id: raw_id,

            rawout_id: rawout_id

        },

        method: "post",

        success: function (response) {
            console.log('$%c' + response, 'color:red;');
            clear();
            setTimeout(() => {
                $('#btnSave').removeClass("running");
                $('#btnSave').removeAttr( "disabled");
            }, 1000);
          
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            setTimeout(() => {
                $('#btnSave').removeClass("running");
                $('#btnSave').removeAttr( "disabled");
            }, 1000);
            alert('fail connection');
        }

    });

}


function save_with_date() {
    var scrap = $('#txtScrap').val();
    if (scrap == "") {
        scrap = "NULL";
    }
    var bones = $('#txtBones').val();
    if (bones == "") {
        bones = "NULL";
    }
    var products = JSON.stringify(data_obj.cart);
    var account_id = sessionStorage.getItem('zen_userid');
    var raw_id = data_obj.selected_rm.id;
    var rawout_id = data_obj.RM_last_out_value[0].id;
    var date = $('#indate').val();
    
    console.log({ scrap }, { products }, { account_id });

    $('#txtScrap').val("");
    $('#txtBones').val("");

    //var mydata1 = JSON.stringify(data_obj.cart);
    //console.table(mydata1);
    //clearProductsForm();

    $('#btnSave').addClass("running");
    $('#btnSave').attr( "disabled", "disabled" );

    $.ajax({
        url: zenDB_url + "onsen-php-file/Inventory-Products-In-withDate.php",
        data: {
            products: products,
            scrap: scrap,
            bones: bones,
            account_id: account_id,
            raw_id: raw_id,
            rawout_id: rawout_id,
            date: date
        },

        method: "post",

        success: function (response) {
            console.log('$%c' + response, 'color:red;');
            clear();
            setTimeout(() => {
                $('#btnSave').removeClass("running");
                $('#btnSave').removeAttr( "disabled");
            }, 1000);
          
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            setTimeout(() => {
                $('#btnSave').removeClass("running");
                $('#btnSave').removeAttr( "disabled");
            }, 1000);
            alert('fail connection');
        }

    });

}






function save2() {
    var products = JSON.stringify(data_obj.cart2);
    var account_id = sessionStorage.getItem('zen_userid');
    $('#btnSave2').addClass("running");
    $('#btnSave2').attr( "disabled", "disabled" );
    $.ajax({

        url: zenDB_url + "onsen-php-file/Inventory-Products-In2.php",
        data: {
            products: products,
            account_id: account_id,
        },

        method: "post",

        success: function (response) {
            console.log('$%c' + response, 'color:red;');
            clear2();
            $('#btnSave2').removeClass("running");
            $('#btnSave2').removeAttr( "disabled");
        }, 
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            setTimeout(() => {
                $('#btnSave2').removeClass("running");
                $('#btnSave2').removeAttr( "disabled");
            }, 1000);
            alert('fail connection');
        }

    });

}


function save_with_date2() {
    var products = JSON.stringify(data_obj.cart2);
    var account_id = sessionStorage.getItem('zen_userid');
    var date = $('#indate2').val();
    $('#btnSave2').addClass("running");
    $('#btnSave2').attr( "disabled", "disabled" );
    $.ajax({

        url: zenDB_url + "onsen-php-file/Inventory-Products-In-withDate2.php",
        data: {
            products: products,
            account_id: account_id,
            date: date
        },

        method: "post",

        success: function (response) {
            console.log('$%c' + response, 'color:red;');
            clear2();
            $('#btnSave2').removeClass("running");
            $('#btnSave2').removeAttr( "disabled");
        }, 
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            setTimeout(() => {
                $('#btnSave2').removeClass("running");
                $('#btnSave2').removeAttr( "disabled");
            }, 1000);
            alert('fail connection');
        }

    });

}



