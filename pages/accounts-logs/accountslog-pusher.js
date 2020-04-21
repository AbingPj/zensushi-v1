
   update_accounts_log_channel.bind('sent', function (data) {
    
      //    var result = $.parseJSON(data);
      // console.log(result);
      // data_obj.AccountsLog = result;
      // AccountsLog_DataTable_ClearDraw()

    try {
      var result = $.parseJSON(data);
      data_obj.AccountsLog = result;
      AccountsLog_DataTable_ClearDraw();
    } catch (error) {
        data_obj.AccountsLog = [];
        AccountsLog_DataTable_ClearDraw();
    }
  });


  