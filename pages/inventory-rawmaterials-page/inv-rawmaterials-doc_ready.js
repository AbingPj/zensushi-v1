$(document).ready(function () {
    if (sessionStorage.getItem('zen_login') == 'true' && sessionStorage.getItem('zen_username') != null && sessionStorage.getItem('zen_userid') != null) {
        requestNotificationUnseenLength();
        var username = sessionStorage.getItem("zen_username");
        requestRawMaterialsData();
        restrictions('invrawpage');
         $('#usernameAtNavabar').html(username);
        // if(sessionStorage.getItem('zenInvRm') == null ){
        //     requestRawMaterialsData();
        // }else{
        //     if(sessionStorage.getItem('zenInvRm_IsUpdate') == 'true'){
        //         setTimeout(() => {
                    
        //             var data = sessionStorage.getItem('zenInvRm');
        //             var result = $.parseJSON(data);
        //             data_obj.rawmaterials = result;
        //             $('#myloader').removeClass("running");
        //             sessionStorage.setItem("zenInvRm_IsUpdate",  "false");
        //             MYdatatable();
        //         }, 3000);
        //     }else{
        //         var data = sessionStorage.getItem('zenInvRm');
        //         var result = $.parseJSON(data);
        //         data_obj.rawmaterials = result;
        //         $('#myloader').removeClass("running");
        //         MYdatatable();
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