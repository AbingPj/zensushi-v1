
function Up_dataObj() {
  this.data;
  this.CategoryUpdateTime;
  this.RawMaterialUpdateTime;
  this.ProductUpdateTime;
  this.InvRawMaterialTime;
  this.InvProductTime;
}
const UpdateDataObj = new Up_dataObj();

function requestDataUpdateTime() {
  $.ajax({
    url: zenDB_url + 'onsen-php-file/Get-UpdateData.php',
    success: function (data) {
      var result = $.parseJSON(data);
      UpdateDataObj.data = result;
      $.each(result, (i, value) => {
        UpdateDataObj.CategoryUpdateTime = value.CategoryUpdateTime;
        UpdateDataObj.RawMaterialUpdateTime = value.RawMaterialUpdateTime;
        UpdateDataObj.ProductUpdateTime = value.ProductUpdateTime;
        UpdateDataObj.InvRawMaterialTime = value.InvRawMaterialTime;
        UpdateDataObj.InvProductTime = value.InvProductTime;
      });
      CreateUpdateTimeSeasionStorage();
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      // console.log(errorThrown);
      // notify_faild("Connection Faild");
      // sessionStorage.clear();
      // sessionStorage.clear();
      // window.location = "../../index.html";
    }
  });
}

CreateUpdateTimeSeasionStorage = () => {
  sessionStorage.setItem('CategoryUpdateTime', UpdateDataObj.CategoryUpdateTime)
  sessionStorage.setItem('RawMaterialUpdateTime', UpdateDataObj.RawMaterialUpdateTime)
  sessionStorage.setItem('ProductUpdateTime', UpdateDataObj.ProductUpdateTime)
  sessionStorage.setItem('InvRawMaterialTime', UpdateDataObj.InvRawMaterialTime)
  sessionStorage.setItem('InvProductTime', UpdateDataObj.InvProductTime)
};


function requestNotificationUnseenLength() {
  $.ajax({
    url: zenDB_url + 'onsen-php-file/Notification-Unseen-Length.php',
    success: function (data) {
      sessionStorage.setItem('zen_unseen', data);
      var unseen = sessionStorage.getItem('zen_unseen');
      if (unseen <= 0) {
        $('#notification_badge').html('');
      } else {
        $('#notification_badge').html(unseen);
      }

    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
    }
  });
}







function previlage(panel) {
  if (sessionStorage.getItem('zen_accounts_type_id') == 1) {
    document.getElementById(panel).style.display = "block";
  } else if (sessionStorage.getItem('zen_accounts_type_id') == 2) {
    $('#Registry_navItem').remove();
    $('#Notification_navItem').remove();
    document.getElementById(panel).style.display = "block";
    // Notification_navItem
  } else if (sessionStorage.getItem('zen_accounts_type_id') == 3) {
    $('#Registry_navItem').remove();
    $('#RawMaterials_navItem').remove();
    $('#Products_navItem').remove();
    $('#Notification_navItem').remove();

    // $('#Registry_navItem').hide();
    // $('#RawMaterials_navItem').hide();
    // $('#Products_navItem').hide();
    // $('#Notification_navItem').hide();

    document.getElementById(panel).style.display = "block";
  };
}

