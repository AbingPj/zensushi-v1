function requestAccounts() {
    $.ajax({
      url: zenDB_url+"onsen-php-file/Accounts-Display.php",
      success: function (data) {
        try {
          var result = $.parseJSON(data);
          data_obj.Accounts = result;
          Accounts_DataTable();
          requestAccountsType();
          $('#myloader').removeClass("running");
        
        } catch (error) {
            console.log(error);

            Accounts_DataTable();
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

  function requestAccountsType() {
    $.ajax({
      url: zenDB_url+"onsen-php-file/AccountsType-Display.php",
      success: function (data) {
        try {
          var result = $.parseJSON(data);
          data_obj.AccountsType = result;
          displayAccountTypeSelection()
        } catch (error) {
            console.log(error);
        }
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log(errorThrown);
      }
    });
  }







  function updateAccount() {
       var newaccount_name = $('#txtUpdateAccountName').val();
       var newUsername = $('#txtUpdateUsername').val();
       var newPass = $('#txtUpdatePassword').val();
       var accounts_type_id = $('#selectionUpdateAccounType option:selected').val();
       var obj = { 
         id: data_obj.SelectedAccount.id,
         username: newUsername,
         password: newPass,
         account_name: newaccount_name,
         accounts_type_id: accounts_type_id,
         };
    var myJSON = JSON.stringify(obj);
    $.ajax({
      url: zenDB_url+'onsen-php-file/Accounts-Update.php',
      data: { myData: myJSON },
      type: 'POST',
      success: function (response) {
      }
    });
  }

  
  function deleteAccount() {
    $.ajax({
      url: zenDB_url+'onsen-php-file/Accounts-Delete.php',
      data: { id: data_obj.SelectedAccount.id },
      type: 'POST',
      success: function (response) {
        //console.log(response);
      }
    });
  }



  


  // function saveCat() {
  //   $('#btnSaveCategory').addClass("running");
  //   var cat = $("#txtCategoryName").val();
  //   if (cat.trim().length == 0) {
  //     $("#txtCategoryName").val("");
  //   } else {
  //     $.ajax({
  //       type: 'POST',
  //       url: zenDB_url+'onsen-php-file/Create-Category-Add.php',
  //       data: { 'categories': cat },
  //       success: function (response) {
  //         console.log(response);
  //         $('#btnSaveCategory').removeClass("running");
  //         $("#btnSaveCategory").removeAttr("disabled");
  //       }
  //     });
  //   }
  // }



  