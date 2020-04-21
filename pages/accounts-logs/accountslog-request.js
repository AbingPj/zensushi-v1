function requestAccountsLog() {
    $.ajax({
      url: zenDB_url+"onsen-php-file/Accounts-Log-Display.php",
      success: function (data) {
        try {
          var result = $.parseJSON(data);
          data_obj.AccountsLog = result;
          AccountsLog_DataTable();
          $('#myloader').removeClass("running");
        
        } catch (error) {
            console.log(error);
            AccountsLog_DataTable();
          $('#myloader').removeClass("running");
        }
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log(errorThrown);
        $('#myloader').removeClass("running");
        alert("Connection Faild");
      }
    });
  }








  





  