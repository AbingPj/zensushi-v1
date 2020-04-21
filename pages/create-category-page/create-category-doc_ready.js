$(document).ready(function () {
    if (sessionStorage.getItem('zen_login') == 'true' && sessionStorage.getItem('zen_username') != null && sessionStorage.getItem('zen_userid') != null) {
        requestNotificationUnseenLength();

        console.log("All right");
        var username = sessionStorage.getItem("zen_username");
        console.log(username);
        $('#usernameAtNavabar').html(username);
        requestCategories();
        restrictions();
        // if (sessionStorage.getItem('zenCreateCat') == null) {
        //     requestCategories();
        // } else {
        //     if (sessionStorage.getItem('zenCreateCat_IsUpdate') == 'true') {
        //         setTimeout(() => {
        //             var data = sessionStorage.getItem('zenCreateCat');
        //             var result = $.parseJSON(data);
        //             myObj.Categories = result;
        //             Categories_DataTable();
        //             $('#myloader').removeClass("running");
        //             sessionStorage.setItem("zenCreateCat_IsUpdate", "false");
        //         }, 3000);
        //     } else {

        //         console.log('update = false')
        //         var data = sessionStorage.getItem('zenCreateCat');
        //         var result = $.parseJSON(data);
        //         myObj.Categories = result;
        //         Categories_DataTable();
        //         $('#myloader').removeClass("running");



        //         $.ajax({
        //             url: 'https://zensushi-inv.000webhostapp.com/onsen-php-file/Get-UpdateData.php',
        //             success: function (data) {
        //                 var result = $.parseJSON(data);
        //                 UpdateDataObj.data = result;
        //                 $.each(result, (i, value) => {
        //                     UpdateDataObj.CategoryUpdateTime = value.CategoryUpdateTime;
        //                     UpdateDataObj.RawMaterialUpdateTime = value.RawMaterialUpdateTime;
        //                     UpdateDataObj.ProductUpdateTime = value.ProductUpdateTime;
        //                     UpdateDataObj.InvRawMaterialTime = value.InvRawMaterialTime;
        //                     UpdateDataObj.InvProductTime = value.InvProductTime;
        //                 });
        //                 updateAlldata();
        //             }
        //         });



        //         updateAlldata = () => {
        //             console.log('try to updating');
        //             var sission = sessionStorage.getItem('CategoryUpdateTime');
        //             var sessiontime = Date.parse(sission);
        //             var object = UpdateDataObj.CategoryUpdateTime
        //             var objecttime = Date.parse(object);

        //             if (sessiontime >= objecttime) {
        //                 console.log({ sission }, { object })
        //                 console.log('equal');
        //             } else {
        //                 console.log({ sission }, { object })
        //                 console.log('Not equal');
        //                 sessionStorage.setItem('CategoryUpdateTime', UpdateDataObj.CategoryUpdateTime);
        //                 $('#myloader').addClass("running");
        //                 requestCategories2();
        //             }
        //         };

        //     }
        // }




    }
    else {
        sessionStorage.clear();
        sessionStorage.clear();
        window.location = "../../index.html";
    }
});

function restrictions(panel){
    if (sessionStorage.getItem('zen_accounts_type_id') == 1) {
         //document.getElementById(panel).style.display = "block";
      } else if (sessionStorage.getItem('zen_accounts_type_id') == 2) {
        window.location = "../../index.html";
      } else if (sessionStorage.getItem('zen_accounts_type_id') == 3) {
        window.location = "../../index.html";
      };
};


