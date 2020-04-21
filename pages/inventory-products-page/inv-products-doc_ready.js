$(document).ready(function () {
    $('#myloader').addClass("running");
    if (sessionStorage.getItem('zen_login') == 'true' && sessionStorage.getItem('zen_username') != null && sessionStorage.getItem('zen_userid') != null) {
        requestNotificationUnseenLength();
        var username = sessionStorage.getItem("zen_username");
        console.log(username);
        $('#usernameAtNavabar').html(username);
        requestUnitData();
        requestRawMaterialsData();
        restrictions('invproductpage');
        // if (sessionStorage.getItem("ZenInvProd_RMData") == null 
        // || sessionStorage.getItem("ZenInvProd_ProdData") == null 
        // ||  sessionStorage.getItem("ZenInvProd_UnitsData" == null)){

        //     requestUnitData();
        //     requestRawMaterialsData();
        
        // }else{
        //     if (sessionStorage.getItem('ZenInvProd_IsUpdate') == 'true' ){
        //         setTimeout(() => {
        //             var data = sessionStorage.getItem("ZenInvProd_RMData");
        //             var result = $.parseJSON(data);
        //             data_obj.rawmaterials = result;
        
        //             var data = sessionStorage.getItem("ZenInvProd_UnitsData");
        //             var result = $.parseJSON(data);
        //             data_obj.units = result;
                  
        //             setTimeout(() => {
        //                 var data =  sessionStorage.getItem("ZenInvProd_ProdData")
        //                 var result = $.parseJSON(data);
        //                 data_obj.products = result;
                       
        //                 MYdatatable();
        //                 CartTable();
        //                 $('.panel-body.ld-over').removeClass("running");
        //                 sessionStorage.setItem("ZenInvProd_IsUpdate",'false');
        //             }, 1000);
                    
               
        //         }, 100);
        //     }else{
        //         var data = sessionStorage.getItem("ZenInvProd_RMData");
        //         var result = $.parseJSON(data);
        //         data_obj.rawmaterials = result;
    
        //         var data = sessionStorage.getItem("ZenInvProd_UnitsData");
        //         var result = $.parseJSON(data);
        //         data_obj.units = result;
              
        //         setTimeout(() => {
        //             var data =  sessionStorage.getItem("ZenInvProd_ProdData")
        //             var result = $.parseJSON(data);
        //             data_obj.products = result;
                   
        //             MYdatatable();
        //             CartTable();
        //             ProductsTable();
        //             $('.panel-body.ld-over').removeClass("running");
        //             sessionStorage.setItem("ZenInvProd_IsUpdate",'false');
        //         }, 1000);

        //     }
        // }
    }
    else {
        sessionStorage.clear();
        sessionStorage.clear();
        window.location = "../../index.html";
    }
})

function restrictions(panel){
    if (sessionStorage.getItem('zen_accounts_type_id') == 1) {
         document.getElementById(panel).style.display = "block";
      } else if (sessionStorage.getItem('zen_accounts_type_id') == 2) {
        $('#Library_navItem').remove();
        $('#Request_navItem').remove();
        $('#Notification_navItem').remove();
        document.getElementById(panel).style.display = "block";
      } else if (sessionStorage.getItem('zen_accounts_type_id') == 3) {
        //window.location = "../../pages/deliver-page/deliver-products.html";
        window.location = "../../index.html";
      };
};
