

function requestProductsIn() {
    $.ajax({
        url: zenDB_url + "onsen-php-file/Inventory-Products-In-Records.php",
        success: function (data) {

             try {
            var result = $.parseJSON(data);
            data_obj.products_in = result;
            Products_in_datatable();
             } catch (error) {
               console.log('catch = > '+error);
                data_obj.products_in = [];
                 Products_in_datatable();
             }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log('error');
        }
    });
}

function requestProductsInList() {
    $.ajax({
        url: zenDB_url + "onsen-php-file/Inventory-Products-In-List-Records.php",
        success: function (data) {
            try {
                var result = $.parseJSON(data);
                data_obj.products_inlist = result;
            } catch (error) {
                console.log('catch = > ' + error);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log('error');
        }
    });
}


function requestDelivery() {
    $.ajax({
        url: zenDB_url + "onsen-php-file/Inventory-Products-Delivery-Records.php",
        success: function (data) {

            try {
            var result = $.parseJSON(data);
            data_obj.products_delivery = result;
            Products_out_datatable();

            } catch (error) {
                 data_obj.products_delivery = [];
                    Products_out_datatable();
                 console.log('catch = > '+error);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log('error');
        }
    });
}



function requestDeliveryList() {
    $.ajax({
        url: zenDB_url + "onsen-php-file/Inventory-Products-DeliveryList-Records.php",
        success: function (data) {
            try {
                var result = $.parseJSON(data);
                data_obj.products_deliverylist = result;
                displayProdRecFromNotification();
            } catch (error) {
                console.log('catch = > ' + error);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log('error');
        }
    });
}



function UpdateProductInList() {
    var quantity = document.getElementById('txtNewQuantity').value
    var obj = {
        id: data_obj.selected_product_inlist_for_update_delete.id,
        spi: data_obj.selected_products_in,
        quantity: quantity
    };
    var myJSON = JSON.stringify(obj);
    console.log({ myJSON });
    $.ajax({
        url: zenDB_url + 'onsen-php-file/Inventory-Products-In-List-Records-Update.php',
        data: { myData: myJSON },
        type: 'POST',
        success: function (response) {
        }
    });
}



function deleteProductInList() {
    var obj = {
        id: data_obj.selected_product_inlist_for_update_delete.id,
        spi: data_obj.selected_products_in
    };
    var myJSON = JSON.stringify(obj);
   
    $.ajax({
        url: zenDB_url + 'onsen-php-file/Inventory-Products-In-List-Records-Delete.php',
        data: { myData: myJSON },
        type: 'POST',
        success: function (response) {
            console.log(response);
        }
    });
}


function UpdateDeliveryList() {
    var quantity = document.getElementById('txtNewQuantity2').value
    var obj = {
        id: data_obj.selected_product_deliverylist_for_update_delete.id,
        quantity: quantity,
        spi: data_obj.selected_products_delivery
    };
    var myJSON = JSON.stringify(obj);

    $.ajax({
        url: zenDB_url + 'onsen-php-file/Inventory-Products-DeliveryList-Records-Update.php',
        data: { myData: myJSON },
        type: 'POST',
        success: function (response) {
        }
    });
}



function deleteDeliveryList() {
    var obj = {
        id: data_obj.selected_product_deliverylist_for_update_delete.id,
        spi: data_obj.selected_products_delivery
    };
    var myJSON = JSON.stringify(obj);

    $.ajax({
        url: zenDB_url + 'onsen-php-file/Inventory-Products-DeliveryList-Records-Delete.php',
        data: { myData: myJSON },
        type: 'POST',
        success: function (response) {
            console.log(response);
        }
    });
}



function UpdateProductsIn() {
    
    var date = document.getElementById('txtCreated').value
    var scrap = document.getElementById('txtScrapt').value
    var bones = document.getElementById('txtBones').value
    
    if($("#txtScrapt").val().trim() == ''){
        scrapt=0.0;
    }

    if($("#txtBones").val().trim() == ''){
        bones=0.0;
    }




    var obj = {
        id:product_in_id,
        date: date,
        scrap: scrap,
        bones: bones
    };
    console.log(obj);
    var myJSON = JSON.stringify(obj);
    console.log(myJSON);

    $.ajax({
        url: zenDB_url + 'onsen-php-file/Inventory-Products-In-Records-Update.php',
        data: { myData: myJSON },
        type: 'POST',
        success: function (response) {
            location.reload();
        }
    });
}

function UpdateProductsIn2() {
    var date = document.getElementById('txtCreated2').value
    var scrap = document.getElementById('txtScrapt2').value
    var bones = document.getElementById('txtBones2').value
    var obj = {
        id:product_in_id,
        date: date,
        scrap: scrap,
        bones: bones
    };
    console.log(obj);
    var myJSON = JSON.stringify(obj);
    console.log(myJSON);

    $.ajax({
        url: zenDB_url + 'onsen-php-file/Inventory-Products-In-Records-Update2.php',
        data: { myData: myJSON },
        type: 'POST',
        success: function (response) {
            location.reload();
        }
    });
}



function DeleteProductsIn() {
    var obj = {
        id:product_in_id,
        id2:product_in_id

    };
    var myJSON = JSON.stringify(obj);

    $.ajax({
        url: zenDB_url + 'onsen-php-file/Inventory-Products-In-Records-Delete.php',
        data: { myData: myJSON },
        type: 'POST',
        success: function (response) {
            console.log(response);
            location.reload();
        }
    });
}
