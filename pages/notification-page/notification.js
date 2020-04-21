function Notify_inv_object() {
    this.orders
};
const data_obj = new Notify_inv_object();
var start = 0;
var working = false;

$(document).ready(function () {
    if (sessionStorage.getItem('zen_login') == 'true' && sessionStorage.getItem('zen_username') != null && sessionStorage.getItem('zen_userid') != null) {
        var username = sessionStorage.getItem("zen_username");
        $('#usernameAtNavabar').html(username);
        restrictions();
        requestNotificationUnseenLength();
        request_Orders();
    }
    else {
        sessionStorage.clear();
        sessionStorage.clear();
        window.location = "../../index.html";
    }
});





function request_Orders() {
    $('#myloader').addClass("running");
    $.ajax({
        //url: zenDB_url + "onsen-php-file/Notification-Orders-Display2.php?start=" + start,
        url: zenDB_url2 + "onsen-php-file/Notification-Orders-Display2.php?start=" + start,
        type: "GET",
        //processData: false,
        contentType: "application/json",
        data: '',
        success: function (data) {
            console.log(data);
            var result = $.parseJSON(data);
            data_obj.orders = result;
            display();
            $('#myloader').removeClass("running");
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $('#myloader').removeClass("running");
        }
    });
}

Notifications_UpdatePusher.bind('sent', function (data) {
    try {
        $("#orders").html("");
        var result = $.parseJSON(data);
        start = 0;
        data_obj.orders = result;
        display();
    } catch (error) {
        console.log("catch: " + error);
    }
});



function display() {
    $.each(data_obj.orders, function (i, value) {
        var htmlStrings1 = "";
        var htmlStrings5 = "";
        var htmlStrings6 = "";
        var htmlStrings7 = "";
        if (value.seen == 0) {
            htmlStrings1 = ' <div class="card bg-light" id="card_' + value.remarkstype + '_' + value.id + '"> <div class="card-body"> <div class="d-flex w-100 justify-content-between"> <h4 class="mb-1">';
        } else {
            htmlStrings1 = ' <div class="card bg-secondary" id="card_' + value.remarkstype + '_' + value.id + '"> <div class="card-body"> <div class="d-flex w-100 justify-content-between"> <h4 class="mb-1">';
        }
        var htmlStrings2 = value.account_name + '</h4>';

        var htmlStrings3 = '<small><a class="btn btn-outline-danger btn-sm" style=" border: 0 none;"  id="' + value.remarkstype + ',' + value.id + '"   onclick="viewmodal(this.id)" s >remove</a></small> </div>';


        var htmlStrings4 = '<div class="d-flex w-100 justify-content-between"><h5 class="mb-1">' + value.branch + '</h5></div>';
        var htmlStrings5 = '<div class="d-flex w-100 justify-content-between"><p class="mb-1">' + value.remarks + '</p></div> <br>';
        htmlStrings7 = '<small>' + value.created_at + '</small></div> </div></div><br>'


        if (value.remarkstype == 2) {

            var htmlStrings6 = '<div class="d-flex w-100 justify-content-between"><p class="mb-1"><a class="btn btn-primary btn-md  text-light" href="../../pages/notification-view-request-page/request_list.php?orderId=' + value.id + '"> view</a><p>'


        } else if (value.remarkstype == 1) {


            var htmlStrings6 = '<div class="d-flex w-100 justify-content-between"><p class="mb-1"><a class="btn btn-primary btn-md  text-light" href="../../pages/accounts/accounts.php?view_account_id=' + value.id + '"> view</a><p>'


        } else if (value.remarkstype == 3) {

            var htmlStrings6 = '<div class="d-flex w-100 justify-content-between"><p class="mb-1"> <a class="btn btn-primary btn-md  text-light" href="../../pages/records-products-page/rec-products.php?remarkstype=3&rec_id=' + value.id + '"> view</a><p>'


        } else if (value.remarkstype == 4) {

            var htmlStrings6 = '<div class="d-flex w-100 justify-content-between"><p class="mb-1"> <a class="btn btn-primary btn-md  text-light" href="../../pages/records-products-page/rec-products.php?remarkstype=4&rec_id=' + value.id + '"> view</a><p>'


        } else if (value.remarkstype == 5) {




            var htmlStrings6 = '<div class="d-flex w-100 justify-content-between"><p class="mb-1"> <a class="btn btn-primary btn-md  text-light" href="../../pages/records-rawmaterials-page/rec-rawmaterials.php?remarkstype=5&rec_id=' + value.id + '"> view</a><p>'
        } else if (value.remarkstype == 6) {

            var htmlStrings6 = '<div class="d-flex w-100 justify-content-between"><p class="mb-1"> <a class="btn btn-primary btn-md  text-light" href="../../pages/records-rawmaterials-page/rec-rawmaterials.php?remarkstype=6&rec_id=' + value.id + '"> view</a><p>'

        }

        // var htmlStrings5 = '<small><button class="btn btn-primary btn-sm btn-viewProd" value="' + value.id + '" id="' + value.id + '"> view</button></small> </div>   </div> <br>';
        $("#orders").append(htmlStrings1 + htmlStrings2 + htmlStrings3 + htmlStrings4 + htmlStrings5 + htmlStrings6 + htmlStrings7);
    });
    start += 10;
    if (start >= 10) {
        setTimeout(function () {
            working = false;
        }, 3000)
    }
}


$(window).scroll(function () {
    if ($(this).scrollTop() + 1 >= $('body').height() - $(window).height()) {
        if (working == false) {
            working = true;
            request_Orders();
        }
    }
})



$(document).on('click', 'button.btn-viewProd', function () {
    var orderId = $(this).attr('id'); // $(this) refers to button that was clicked
    //sessionStorage.setItem('orderId', id);
    window.open('../../pages/notification-view-request-page/request_list.php?orderId=' + orderId, '_blank');
    //window.location = '../../pages/notification-page/request_list.php?orderId=' + orderId;
})


function restrictions(panel) {
    if (sessionStorage.getItem('zen_accounts_type_id') == 1) {
        //document.getElementById(panel).style.display = "block";
    } else if (sessionStorage.getItem('zen_accounts_type_id') == 2) {
        window.location = "../../index.html";
    } else if (sessionStorage.getItem('zen_accounts_type_id') == 3) {
        //window.location = "../../pages/deliver-page/deliver-products.html";
        window.location = "../../index.html";
    };
};

var myJSON;
var card;

function viewmodal(value) {
    var words = value.split(',');
    var remarkstype = words[0];
    var id = words[1];
    console.log(">: " + remarkstype);
    console.log(">: " + id);
    var str = "card_" + remarkstype + "_" + id
    card = document.getElementById(str);
    var obj = { "remarkstype": remarkstype, "id": id };
    myJSON = JSON.stringify(obj);
    $('#RemoveNotifModal').modal('show');
}

// function requesthidenotify(){
    
//         $.ajax({
//             url: zenDB_url + 'onsen-php-file/NotificationRemove.php',
//             data: { myData: myJSON },
//             type: 'POST',
//             success: function (response) {
//                 myJSON = null;
//                 $('#RemoveNotifModal').modal('hide');
//             }
//         });
// }