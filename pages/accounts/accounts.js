


$('#btnUpdateAccount').on("click", () => {
  updateAccount();
});


$('#btnDeleteAccount').on("click", () => {
  deleteAccount();
});



$('#btnSaveCategory').on("click", () => {
  $('#btnSaveCategory').attr( "disabled", "disabled" );
   saveCat();
});



function displayAccountTypeSelection() {
  var Parent = document.getElementById('selectionUpdateAccounType');
  $.each(data_obj.AccountsType, function (i, value) {
      var child = document.createElement('option');
      child.setAttribute('value', value.id);
      child.innerHTML = value.name;
      Parent.appendChild(child);
  });
  todisplayAccountFromNotification();
}

function todisplayAccountFromNotification(){
  var id = sessionStorage.getItem('view_account_id');
  if (id=="null"){
  }else if(id!="null"){
    displayAccountFromNotification(id);
  }
 
}



function displayAccountFromNotification(id){
  console.log({id});
  var data = data_obj.Accounts.find(data=>data.id==id)
  data_obj.SelectedAccount = data;
  console.log({data});
  $("#txtUpdateAccountName").val(data.account_name);
  $("#txtUpdateUsername").val(data.username);
  $("#txtUpdatePassword").val(data.password);
  $("#selectionUpdateAccounType").val(data.accounts_type_id).change();
  // $("#selectionUpdateAccounType").val(data.password);
  $("#UpdateAccountModal").modal();

  $.ajax({
    url: zenDB_url+'onsen-php-file/Accounts-UpdateSeen.php',
    data: { account_id: id },
    type: 'POST',
    success: function (response) {
      requestNotificationUnseenLength();
    }
  });


}


