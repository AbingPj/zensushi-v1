$(document).ready(function () {
    if (sessionStorage.getItem('zen_login') == 'true' && sessionStorage.getItem('zen_username') != null && sessionStorage.getItem('zen_userid') != null) {
        requestNotificationUnseenLength();

        console.log("All right");
        var username = sessionStorage.getItem("zen_username");
        console.log(username);
        $('#usernameAtNavabar').html(username);
        //requestQuantityUnitData()
        requestRawMaterialsData();
        requestCategoriesData();
        //requestUnitSubData();
        restrictions();
        
        // if(sessionStorage.getItem('zenCreateRM_RMData') == null ){
        //     requestQuantityUnitData()
        //     requestRawMaterialsData();
        //     requestCategoriesData();
        //     requestUnitSubData();
        // }else{
        //     if(sessionStorage.getItem('zenCreateRM_IsUpdate') == 'true'){
        //         loadupdate(2000);
        //         sessionStorage.setItem("zenCreateRM_IsUpdate",  "false");
        //     }else{
        //         loadupdate(0);
                
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
        //             var sission = sessionStorage.getItem('RawMaterialUpdateTime');
        //             var sessiontime = Date.parse(sission);
        //             var object =UpdateDataObj.RawMaterialUpdateTime
        //             var objecttime = Date.parse(object);
                 
        //             if (sessiontime >= objecttime) {
        //                 console.log({sission},{object})
        //                 console.log('equal');
        //             } else {
        //                 console.log({sission},{object})
        //                 console.log('Not equal');

        //                 sessionStorage.setItem('RawMaterialUpdateTime',UpdateDataObj.RawMaterialUpdateTime);
        //                 $('#myloader').addClass("running");
        //                 requestRawMaterialsData2() 
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












function loadupdate(load){
    setTimeout(() => {
        var data = sessionStorage.getItem('zenCreateRM_RMData');
        var result = $.parseJSON(data);
        mydata.rawMaterials = result;
        RawMatarialdatatable();
        
        

        var data = sessionStorage.getItem('zenCreateRM_CategoryData')
        var result = $.parseJSON(data);
        mydata.categories = result;
        displayCategoryAtSelection();

        


        var data = sessionStorage.getItem('zenCreateRM_QuantityData')
        var result = $.parseJSON(data);
        mydata.unitsquantity = result;
        displayQuantityUnit();
        displayQuantityUnit_AtUpdateModal();
        //displayUnits_2();


        var data = sessionStorage.getItem('zenCreateRM_UnitSubData')
        var result = $.parseJSON(data);
        mydata.units_sub = result;

        $('#myloader').removeClass("running");
       
    }, load);
}