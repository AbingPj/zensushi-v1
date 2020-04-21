$(document).ready(function () {
    $('#myloader').addClass("running");
    setTimeout(() => {
        if (sessionStorage.getItem('zen_login') == 'true' && sessionStorage.getItem('zen_username') != null && sessionStorage.getItem('zen_userid') != null) {
            var username = sessionStorage.getItem("zen_username");
            $('#usernameAtNavabar').html(username);
            requestNotificationUnseenLength();
            $('#myloader').removeClass("running");
            //previlage("homepage");
            restrictions("homepage");
            // document.getElementById('homepage').style.display = "block";
            // document.getElementById('homepage').style.display = "block";
            requestRawMaterialinCritical();
            requestProductinCritical();
        }
        else {
            sessionStorage.clear();
            sessionStorage.clear();
            window.location = "../../index.html";
        }
    }, 2000);
});

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


$('#rm').on('click',()=>{
    if (sessionStorage.getItem('zen_accounts_type_id') == 1) {
        window.location = "../../pages/create-rawmaterial-page/create-rawmaterial.html";
    }
    
})

$('#rm_inv').on('click',()=>{
    window.location = "../../pages/inventory-rawmaterials-page/inv-rawmaterials.html";
})


$('#rm_reports').on('click',()=>{
    window.location = "../../pages/reports-rawmaterials-page/rp-rawmaterials.html";
})

$('#prod').on('click',()=>{
    if (sessionStorage.getItem('zen_accounts_type_id') == 1) {
        window.location = "../../pages/create-products-page/create-product.html";
    }
   
})

$('#prod_inv').on('click',()=>{
    window.location = "../../pages/inventory-products-page/inv-products.html";
})


$('#prod_reports').on('click',()=>{
    window.location = "../../pages/reports-products-page/rp-products.html";
})