
   update_accounts_channel.bind('sent', function (data) {
    try {
      var result = $.parseJSON(data);
      data_obj.Accounts = result;
      Accounts_DataTable_ClearDraw();
    } catch (error) {
        console.log(error);
        data_obj.Accounts = [];
        Accounts_DataTable_ClearDraw();
    }
  });


  