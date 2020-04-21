$(document).ready(function () {
    if (sessionStorage.getItem('zen_login') == 'true' && sessionStorage.getItem('zen_username') != null && sessionStorage.getItem('zen_userid') != null) {
        requestNotificationUnseenLength();
        var username = sessionStorage.getItem("zen_username");
        console.log(username);
        $('#usernameAtNavabar').html(username);
        restrictions('recproducts');
        requestProductsIn();
        requestProductsInList();
        requestDelivery();
        requestDeliveryList();
        Products_inlist_table();
        Deliverylist_table();


      

     

} else {
    sessionStorage.clear();
        sessionStorage.clear();
        window.location = "../../index.html";
    }
});


function restrictions(panel) {
    if (sessionStorage.getItem('zen_accounts_type_id') == 1) {
        document.getElementById(panel).style.display = "block";
        data_obj.button_permession = true;
    } else if (sessionStorage.getItem('zen_accounts_type_id') == 2) {
        $('#Library_navItem').remove();
        $('#Request_navItem').remove();
        $('#Notification_navItem').remove();
        document.getElementById(panel).style.display = "block";
        data_obj.button_permession = false;
    } else if (sessionStorage.getItem('zen_accounts_type_id') == 3) {
        window.location = "../../index.html";
    };
};



function displayProdRecFromNotification() {
    var remarkstype = sessionStorage.getItem('remarkstype');
    if (remarkstype == null) {
    } else if (remarkstype == '3') {
        //$('.nav-tabs a[href="#home"]').tab('show')
        setTimeout(() => {
            var data = data_obj.products_in.find(prod => prod.id == rec_id);
            console.log(data);
            data_obj.selected_products_in = data;
            data_obj.prod_in_get_selected();
            Products_inlist_table_ClearDraw();
            $('#productlist').collapse('show');

            $.ajax({
                url: zenDB_url+'onsen-php-file/ProductsIn-UpdateSeen.php',
                data: { rec_id: rec_id },
                type: 'POST',
                success: function (response) {
                  requestNotificationUnseenLength();
                }
            });





        }, 1000);
    } else if (remarkstype == '4') {
        //$('.nav-tabs a[href="#menu1"]').tab('show')
        setTimeout(() => {
            var data = data_obj.products_delivery.find(prod => prod.id == rec_id);
            data_obj.selected_products_delivery = data;
            data_obj.delivery_get_selected();
            Deliverylist_table_ClearDraw();
            $('#deliverylist').collapse('show');

            $.ajax({
                url: zenDB_url+'onsen-php-file/ProductsOut-UpdateSeen.php',
                data: { rec_id: rec_id },
                type: 'POST',
                success: function (response) {
                  requestNotificationUnseenLength();
                }
            });


        }, 1000);
    }
}
