$(document).ready(function () {
    $('#myloader').addClass("running");
    if (sessionStorage.getItem('zen_login') == 'true' && sessionStorage.getItem('zen_username') != null && sessionStorage.getItem('zen_userid') != null) {
        requestNotificationUnseenLength();
        var username = sessionStorage.getItem("zen_username");
        $('#usernameAtNavabar').html(username);
        //previlage("orderpage");
        restrictions("orderpage");
        requestProducts();
        ListDataTable();
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
        window.location = "../../index.html";
      } else if (sessionStorage.getItem('zen_accounts_type_id') == 3) {
        $('#Library_navItem').remove();
        $('#Inventory_navItem').remove();
        $('#Deliver_navItem').remove();
        $('#Request_navItem').remove();
        $('#Reports_navItem').remove();
        $('#Records_navItem').remove();
        $('#Notification_navItem').remove();
        document.getElementById(panel).style.display = "block";
      };
};



