$(document).ready(function () {
    if (sessionStorage.getItem('zen_login') == 'true' && sessionStorage.getItem('zen_username') != null && sessionStorage.getItem('zen_userid') != null) {
         var username = sessionStorage.getItem("zen_username");
        $('#usernameAtNavabar').html(username);
        requestNotificationUnseenLength();
        requestAccounts();
        restrictions('accountspage');
        
        // if(sessionStorage.getItem('view_account_id')!=null){
        //     sessionStorage.getItem('view_account_id')
        //     $("#UpdateAccountModal").modal();
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
         document.getElementById(panel).style.display = "block";
      } else if (sessionStorage.getItem('zen_accounts_type_id') == 2) {
        window.location = "../../index.html";
      } else if (sessionStorage.getItem('zen_accounts_type_id') == 3) {
        window.location = "../../index.html";
      };
};


