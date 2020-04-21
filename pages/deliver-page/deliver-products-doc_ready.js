$(document).ready(function () {
    $('#myloader').addClass("running");
    if (sessionStorage.getItem('zen_login') == 'true' && sessionStorage.getItem('zen_username') != null && sessionStorage.getItem('zen_userid') != null) {
        requestNotificationUnseenLength();
        var username = sessionStorage.getItem("zen_username");
        $('#usernameAtNavabar').html(username);
        requestProducts();
       ListDataTable();
       restrictions('deliverpage');

      $('#txtDate')[0].valueAsNumber = new Date().getTime();
      var now = new Date;
    
    //console.log( now.customFormat( "#DD#/#MM#/#YYYY# #hh#:#mm#:#ss#" ) );
    // var milli = new Date().getTime()
    // var timeWithoutMilli = Math.floor(milli/1000);
    // $('#txtDate')[0].valueAsNumber = Math.floor(new Date().getTime()/1000);
    // //$('#txtDate')[0].valueAsNumber = timeWithoutMilli;
    
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
        window.location = "../../index.html";
      };
};