$('#btnLogin').on("click", () => {
    login();
});

$('#btnSignUp').on("click", () => {
    signUp();
});



// $(document).keypress(function (e) {
//     if (e.which == 13) {
//         login();
//     }
// });


function MyObject() {
    this.user = [],
        this.message,
        this.user2 = ""
}
const myobjdata = new MyObject();


login = () => {
    $('#btnLogin').addClass("running");
    $('#btnLogin').attr("disabled", true);
    var username = $('#username').val();
    var password = $('#password').val();

    setTimeout(() => {
        var obj = { "username": username, "password": password };
        var myJSON = JSON.stringify(obj);
        $.ajax({
            // url: "https://zensushi-inv.000webhostapp.com/onsen-php-file/Log-in-Page-Login.php",
            url: "onsen-php-file/Log-in-Page-Login.php",
            type: "post",
            data: { mydata: myJSON },
            success: (data) => {


                            try {
                                var result = $.parseJSON(data);
                                myobjdata.user = result;
                                $.each(myobjdata.user, function (i, value) {
                                    if (value.accounts_type_id == 4) {
                                        setTimeout(() => {
                                            alert("Your account is not yet activated by the admin")
                                            $('#username').val("");
                                            $('#password').val("");
                                            $('#btnLogin').removeClass("running");
                                            $('#btnLogin').attr("disabled", false);
                                        }, 2000);
                                    } else {
                                        toSaveLocalStorage();
                                    }
                            });

                } catch (error) {

                    setTimeout(() => {
                        $('#username').val("");
                        $('#password').val("");
                        $('#btnLogin').removeClass("running");
                        $('#btnLogin').attr("disabled", false);
                        alert(" Username or Password is Invalid. ");

                    }, 3000);
                }






            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $('#username').val("");
                $('#password').val("");
                $('#btnLogin').removeClass("running");
                $('#btnLogin').attr("disabled", false);
                notify_faild();
            }
        });
        obj = null;
        password = null;
    }, 3000);
}



signUp = () => {
    $('#btnSignUp').addClass("running");
    $('#btnSignUp').attr("disabled", true);
    if ($('#newFullName').val().trim() == '' ||
        $('#newUsername').val().trim() == '' ||
        $('#newPass').val().trim() == '') {
    } else {
        var newaccount_name = $('#newFullName').val();
        var newUsername = $('#newUsername').val();
        var newPass = $('#newPass').val();
        var obj = { username: newUsername, password: newPass, account_name: newaccount_name };
        var myJSON = JSON.stringify(obj);
        setTimeout(() => {
            $.ajax({
                // url: "https://zensushi-inv.000webhostapp.com/onsen-php-file/Log-in-Page-Login.php",
                url: "onsen-php-file/Accounts-SignUp.php",
                type: "post",
                data: { mydata: myJSON },
                success: (data) => {
                    setTimeout(() => {
                        alert(data);
                        $('#newFullName').val("");
                        $('#newUsername').val("");
                        $('#newPass').val("");
                        $('#btnSignUp').removeClass("running");
                        $('#btnSignUp').attr("disabled", false);
                    }, 2000);
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {

                    setTimeout(() => {
                        alert("Connection Faild");
                        $('#newFullName').val("");
                        $('#newUsername').val("");
                        $('#newPass').val("");
                        $('#btnSignUp').removeClass("running");
                        $('#btnSignUp').attr("disabled", false);
                    }, 2000);

                }
            });
        }, 3000);
    }
}












toSaveLocalStorage = () => {
    sessionStorage.setItem("zen_userid", myobjdata.user[0].id);
    sessionStorage.setItem("zen_username", myobjdata.user[0].username);
    sessionStorage.setItem("zen_accounts_type_id", myobjdata.user[0].accounts_type_id);
    sessionStorage.setItem("zen_login", true);

    if (sessionStorage.getItem("zen_accounts_type_id") == 1) {
        window.location = "pages/home-page/home.html";
    } else if (sessionStorage.getItem("zen_accounts_type_id") == 2) {
        window.location = "pages/home-page/home.html";
        // window.location = "pages/inventory-products-page/inv-products.html";
    } else if (sessionStorage.getItem("zen_accounts_type_id") == 3) {
        window.location = "pages/order-products-page/order-products.html";
    } else if (sessionStorage.getItem("zen_accounts_type_id") == 4) {
        window.location = "index.html";
    }
}




$(document).ready(function () {
    if (sessionStorage.getItem('zen_login') == 'true' && sessionStorage.getItem('zen_username') != null && sessionStorage.getItem('zen_userid') != null) {
        console.log("All right");
        var username = sessionStorage.getItem("username");
        console.log(username);
        //$('#usernameAtNavabar').html(username);


        if (sessionStorage.getItem("zen_accounts_type_id") == 1) {
            window.location = "pages/home-page/home.html";
        } else if (sessionStorage.getItem("zen_accounts_type_id") == 2) {
            window.location = "pages/home-page/home.html";
            // window.location = "pages/inventory-products-page/inv-products.html";
        } else if (sessionStorage.getItem("zen_accounts_type_id") == 3) {
            window.location = "pages/order-products-page/order-products.html";
        } else {
            window.location = "index.html";
        }



    }
});



function welcomeNotify() {
    $.notify({
        // options
        icon: 'img/zenicon2.png',
        title: 'Bootstrap notify',
        message: 'Turning standard Bootstrap alerts into "notify" like notifications',
        url: '',
        target: '_self'
    }, {
            // settings
            element: 'body',
            position: null,
            type: "info",
            allow_dismiss: true,
            newest_on_top: false,
            showProgressbar: true,
            placement: {
                from: "top",
                align: "right"
            },
            offset: 5,
            spacing: 10,
            z_index: 1031,
            delay: 5000,
            timer: 1000,
            url_target: '_self',
            mouse_over: null,
            animate: {
                enter: 'animated rollIn',
                exit: 'animated rollOut'
            },
            onShow: null,
            onShown: null,
            onClose: null,
            onClosed: null,
            icon_type: 'image',
            template:
                '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
                '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                '<span data-notify="icon"></span> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%; "></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
}


function notify_faild() {
    $.notify({
        // options
        icon: 'img/zenicon2.png',
        title: 'Faild Connection',
    }, {
            // settings
            element: 'body',
            type: "danger",
            allow_dismiss: false,
            newest_on_top: false,
            showProgressbar: true,
            placement: {
                from: "top",
                align: "center"
            },
            offset: {
                y: 100
            },
            spacing: 10,
            z_index: 1031,
            delay: 5000,
            timer: 1000,
            mouse_over: null,
            animate: {
                enter: 'animated bounceIn',
                exit: 'animated bounceOut'
            },
            icon_type: 'image',
            template:
                '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
                '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                '<span data-notify="icon"></span> ' +
                '<span data-notify="title">{1}</span> ' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%; color: red; "></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
}


