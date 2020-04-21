
//  sessionStorage.setItem("zenCreateProd_ProdData",data);
//  sessionStorage.setItem("zenCreateProd_CatData",data);
//  sessionStorage.setItem("zenCreateProd_RMData",data);
//  sessionStorage.setItem("zenCreateProd_UnitsData",data);
//  sessionStorage.setItem("zenCreateProd_SubUnitsData",data);


$(document).ready(() => {
    if (sessionStorage.getItem('zen_login') == 'true' && sessionStorage.getItem('zen_username') != null && sessionStorage.getItem('zen_userid') != null) {
        requestNotificationUnseenLength();
        console.log("All right");
        var username = sessionStorage.getItem("zen_username");
        console.log(username);
        $('#usernameAtNavabar').html(username);
        requestProducts();
        requestUnitSubData();
        requestUnitData();
        requestRawMaterialsData();
        requestCategories();
        requestPackagingData();
        restrictions();



        // if (sessionStorage.getItem('zenCreateProd_ProdData') == null) {
        //     console.log("null");
        //     setTimeout(() => {
        //         requestProducts();
        //         requestUnitSubData();
        //         requestUnitData();
        //         requestRawMaterialsData();
        //         requestCategories();
        //         requestPackagingData();
        //     }, 1000);
        // } else {
        //     if (sessionStorage.getItem('zenCreateProd_IsUpdate') == 'true') {
        //         console.log("not null - true");
        //         setTimeout(() => {
        //             LoadData(1000)
        //             sessionStorage.setItem("zenCreateProd_IsUpdate", "false");
        //         }, 500);
        //     } else {
        //         console.log("not null - false");
        //         LoadData(0);
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
        //                 });
        //                 updateAlldata();
        //             }
        //         });
        //         updateAlldata = () => {
        //             console.log('try to updating');
        //             var sission = sessionStorage.getItem('ProductUpdateTime');
        //             var sessiontime = Date.parse(sission);
        //             var object =UpdateDataObj.ProductUpdateTime
        //             var objecttime = Date.parse(object);

        //             if (sessiontime >= objecttime) {
        //                 console.log({sission},{object})
        //                 console.log('equal');
        //             } else {
        //                 console.log({sission},{object})
        //                 console.log('Not equal');
        //                 sessionStorage.setItem('ProductUpdateTime',UpdateDataObj.ProductUpdateTime);


        //                 $('#myloader').addClass("running");

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












function LoadData(time) {
    setTimeout(() => {
        var data = sessionStorage.getItem('zenCreateProd_ProdData');
        var result = $.parseJSON(data);
        mydataObj.products = result;
        CreateProducts_DataTable();

        var data = sessionStorage.getItem("zenCreateProd_SubUnitsData");
        var result = $.parseJSON(data);
        mydataObj.units_sub = result;

        var data = sessionStorage.getItem("zenCreateProd_UnitsData");
        var result = $.parseJSON(data);
        mydataObj.units = result;

        var data = sessionStorage.getItem("zenCreateProd_RMData");
        var result = $.parseJSON(data);
        mydataObj.rawmaterials = result;
        displayRawSelection_AtUpdateModal();

        var data = sessionStorage.getItem('zenCreateProd_PackagingData');
        var result = $.parseJSON(data);
        mydataObj.packaging = result;
        displayPackagingSelection();


        var data = sessionStorage.getItem('zenCreateProd_CatData');
        var result = $.parseJSON(data);
        mydataObj.categories = result;



        setTimeout(() => {
            displayCatSelection();
        }, 1000);
        $('#myloader').removeClass("running");


    }, time);


}