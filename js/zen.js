


  var zenDB_url =  "https://zensushi-inv.000webhostapp.com/";
  var zenDB_url2 =  "http://zensushi-inv.000webhostapp.com/";
//var zenDB_url = "../../";
//var zenDB_url2 = "../../";


$('#LogOut').on("click", () => {
  logoutrequest()
});

function logoutrequest(){
  var id = sessionStorage.getItem("zen_accounts_type_id");
  var obj = { "id": id};
  var myJSON = JSON.stringify(obj);
  console.log(obj);
  console.log(myJSON);
  $.ajax({
      // url: "https://zensushi-inv.000webhostapp.com/onsen-php-file/Log-in-Page-Login.php",
      url: zenDB_url + "onsen-php-file/Log-out.php",
      type: "post",
      data: { mydata: myJSON },
      dataType: "json",
      success: (data) => {   
        if (data == 'zenLOG_OUT'){
          localStorage.clear();
          sessionStorage.clear();    
          window.location = "../../index.html"; 
        }
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
      }
  });
};






Pusher.logToConsole = false;
var pusher = new Pusher('da7a7c063cc49b6f74d2', {
  cluster: 'ap1',
  forceTLS: true
});

var update_create_category_channel = pusher.subscribe('update-create-category-channel');
var UpdateRMchannel = pusher.subscribe('update-create-rawmaterials-channel');
var update_create_products_channel = pusher.subscribe('update-create-products-channel');
var update_INV_RM_channel = pusher.subscribe('update-inventory-rawmaterials-channel');
var update_INV_Prod_channel = pusher.subscribe('update-inventory-products-channel');

var notify_channel = pusher.subscribe('notify-channel');
var signup_notify_channel = pusher.subscribe('signup-notify-channel');
var notify_add_product_channel = pusher.subscribe('notify-add-product-channel');
var notify_deliver_product_channel = pusher.subscribe('notify_deliver_product_channel');
var notify_stockin_raw_channel = pusher.subscribe('notify_stockin_raw_channel');
var notify_stockout_raw_channel = pusher.subscribe('notify_stockout_raw_channel');
var notify_critical_channel = pusher.subscribe('notify_critical_channel');


var update_accounts_channel = pusher.subscribe('update-accounts-channel');
var Notifications_UpdatePusher = pusher.subscribe('Notifications-UpdatePusher');
var Records_Inv_RM_IN_Pusher_Update_Channel = pusher.subscribe('Records-Inv-RM-IN-Pusher-Update-Channel');
var Records_Inv_RM_OUT_Pusher_Update_Channel = pusher.subscribe('Records-Inv-RM-OUT-Pusher-Update-Channel');
var Inventory_Products_In_List_Records_Update_Pusher_Channel = pusher.subscribe('Inventory-Products-In-List-Records-Update-Pusher-Channel');
var Inventory_Products_DeliveryList_Records_Update_Pusher = pusher.subscribe('Inventory-Products-DeliveryList-Records-Update-Pusher');


var update_accounts_log_channel = pusher.subscribe('update-accounts-log-channel');


// update-inventory-products-channel



//  sessionStorage.setItem("zenCreateProd_ProdData",data);
//  sessionStorage.setItem("zenCreateProd_CatData",data);
//  sessionStorage.setItem("zenCreateProd_RMData",data);
//  sessionStorage.setItem("zenCreateProd_UnitsData",data);
//  sessionStorage.setItem("zenCreateProd_SubUnitsData",data);


update_create_products_channel.bind('sent', function (data) {
  var tr;
  try {
    sessionStorage.setItem('zenCreateProd_ProdData', data)
    sessionStorage.setItem("zenCreateProd_IsUpdate", "true");
    sessionStorage.setItem('ZenInvProd_ProdData', data)
    sessionStorage.setItem("ZenInvProd_IsUpdate", "true");
  } catch (error) {
    console.log("catch: " + error);
  }
});







update_create_category_channel.bind('sent', function (data) {
  try {
    sessionStorage.setItem("zenCreateCat", data);
    sessionStorage.setItem("zenCreateCat_IsUpdate", "true");
    sessionStorage.setItem('zenCreateRM_CategoryData', data)
    sessionStorage.setItem("zenCreateRM_IsUpdate", "true");
    sessionStorage.setItem("zenCreateProd_CatData", data);
    sessionStorage.setItem("zenCreateProd_IsUpdate", "true");
  } catch (error) {
    console.log("catch: " + error);
  }
});

UpdateRMchannel.bind('sent', function (data) {
  try {
    sessionStorage.setItem("zenCreateRM_RMData", data);
    sessionStorage.setItem("zenCreateRM_IsUpdate", "true");
    sessionStorage.setItem("zenCreateProd_RMData", data);
    sessionStorage.setItem("zenCreateProd_IsUpdate", "true");
    sessionStorage.setItem("ZenInvProd_RMData", data);
    sessionStorage.setItem("ZenInvProd_IsUpdate", "true");
  } catch (error) {
    console.log("catch: " + error);
  }
});


update_INV_RM_channel.bind('sent', function (data) {
  try {
    sessionStorage.setItem("zenInvRm", data);
    sessionStorage.setItem("zenInvRm_IsUpdate", "true");
  } catch (error) {
    console.log("catch: " + error);
  }
});


update_INV_Prod_channel.bind('sent', function (data) {
  try {
    sessionStorage.setItem('ZenInvProd_ProdData', data)
    sessionStorage.setItem("ZenInvProd_IsUpdate", "true");
  } catch (error) {
    console.log("catch: " + error);
  }
});


notify_channel.bind('sent', function (data) {
  if (sessionStorage.getItem('zen_accounts_type_id') == 1) {
    var audio = new Audio('../../audio/bell.mp3');
    audio.play();
    sessionStorage.setItem('orderId', data.last_id);
    var name = data.notifyby;
    zen_notify(name);
    sessionStorage.setItem('zen_unseen', data.unseen);
    var unseen = sessionStorage.getItem('zen_unseen');
    if (unseen <= 0) {
      $('#notification_badge').html('');
    } else {
      $('#notification_badge').html(unseen);
    }
  }
});

signup_notify_channel.bind('sent', function (data) {
  if (sessionStorage.getItem('zen_accounts_type_id') == 1) {
    var audio = new Audio('../../audio/bell.mp3');
    audio.play();
    sessionStorage.setItem('view_account_id', data.last_id);
    var name = data.notifyby;
    zen_notify2(name);
    sessionStorage.setItem('zen_unseen', data.unseen);
    var unseen = sessionStorage.getItem('zen_unseen');
    if (unseen <= 0) {
      $('#notification_badge').html('');
    } else {
      $('#notification_badge').html(unseen);
    }
  }
});



function zen_notify2(name) {
  var accID = sessionStorage.getItem('view_account_id');
  $.notify({
    // options
    icon: '../../img/zenicon5.png',
    title: name,
    message: 'New Account',
    url: '../../pages/accounts/accounts.php?view_account_id=' + accID,
    target: '_blank'
  }, {
      // settings
      element: 'body',
      position: null,
      type: "info",
      allow_dismiss: true,
      newest_on_top: true,
      showProgressbar: false,
      placement: {
        from: "top",
        align: "right"
      },
      offset: 5,
      spacing: 10,
      z_index: 1031,
      delay: 0,
      timer: 1000,
      url_target: '_blank',
      mouse_over: null,
      animate: {
        enter: 'animated rollIn',
        exit: 'animated rollOut'
      },
      onShow: null,
      onShown: null,
      onClose: null,
      onClosed: null,
      icon_type: 'image',
      template:
        '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
        '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
        '<span data-notify="icon"></span> ' +
        '<span data-notify="title"><b>{1}</b></span> ' +
        '<br><span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%; "></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
}





function zen_notify(name) {
  var orderId = sessionStorage.getItem('orderId');
  $.notify({
    // options
    icon: '../../img/zenicon5.png',
    title: name,
    message: 'Request Products',
    url: '../../pages/notification-view-request-page/request_list.php?orderId=' + orderId,
    target: '_blank'
  }, {
      // settings
      element: 'body',
      position: null,
      type: "info",
      allow_dismiss: true,
      newest_on_top: true,
      showProgressbar: false,
      placement: {
        from: "top",
        align: "right"
      },
      offset: 5,
      spacing: 10,
      z_index: 1031,
      delay: 0,
      timer: 1000,
      url_target: '_blank',
      mouse_over: null,
      animate: {
        enter: 'animated rollIn',
        exit: 'animated rollOut'
      },
      onShow: null,
      onShown: null,
      onClose: null,
      onClosed: null,
      icon_type: 'image',
      template:
        '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
        '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
        '<span data-notify="icon"></span> ' +
        '<span data-notify="title"><b>{1}</b></span> ' +
        '<br><span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%; "></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
}




function FailNotify(msg) {
  $.notify({
    // options
    icon: '../../img/zenicon2.png',
    title: 'Error',
    message: msg,
  }, {
      // settings
      element: 'body',
      type: "danger",
      allow_dismiss: false,
      newest_on_top: false,
      showProgressbar: true,
      placement: {
        from: "top",
        align: "center"
      },
      offset: {
        y: 100
      },
      spacing: 10,
      z_index: 1031,
      delay: 5000,
      timer: 1000,
      mouse_over: null,
      animate: {
        enter: 'animated bounceIn',
        exit: 'animated bounceOut'
      },
      icon_type: 'image',
      template:
        '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
        '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
        '<span data-notify="icon"></span> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%; "></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
}















notify_add_product_channel.bind('sent', function (data) {
  if (sessionStorage.getItem('zen_accounts_type_id') == 1) {
    var audio = new Audio('../../audio/bell.mp3');
    audio.play();
    sessionStorage.setItem('rec_id', data.last_id);
    var name = data.notifyby;

    addprod_notify(name);
    sessionStorage.setItem('zen_unseen', data.unseen);
    var unseen = sessionStorage.getItem('zen_unseen');
    if (unseen <= 0) {
      $('#notification_badge').html('');
    } else {
      $('#notification_badge').html(unseen);
    }
  }
});

function addprod_notify(name) {
  var rec_id = sessionStorage.getItem('rec_id');
  $.notify({
    // options
    icon: '../../img/zenicon5.png',
    title: name,
    message: 'Add Product',
    url: '../../pages/records-products-page/rec-products.php?remarkstype=3&rec_id=' + rec_id,
    target: '_blank'
  }, {
      // settings
      element: 'body',
      position: null,
      type: "info",
      allow_dismiss: true,
      newest_on_top: true,
      showProgressbar: false,
      placement: {
        from: "top",
        align: "right"
      },
      offset: 5,
      spacing: 10,
      z_index: 1031,
      delay: 0,
      timer: 1000,
      url_target: '_blank',
      mouse_over: null,
      animate: {
        enter: 'animated rollIn',
        exit: 'animated rollOut'
      },
      onShow: null,
      onShown: null,
      onClose: null,
      onClosed: null,
      icon_type: 'image',
      template:
        '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
        '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
        '<span data-notify="icon"></span> ' +
        '<span data-notify="title"><b>{1}</b></span> ' +
        '<br><span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%; "></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
}



notify_deliver_product_channel.bind('sent', function (data) {
  if (sessionStorage.getItem('zen_accounts_type_id') == 1) {
    var audio = new Audio('../../audio/bell.mp3');
    audio.play();
    sessionStorage.setItem('rec_id', data.last_id);
    var name = data.notifyby;

    delprod_notify(name);
    sessionStorage.setItem('zen_unseen', data.unseen);
    var unseen = sessionStorage.getItem('zen_unseen');
    if (unseen <= 0) {
      $('#notification_badge').html('');
    } else {
      $('#notification_badge').html(unseen);
    }
  }
});

function delprod_notify(name) {
  var rec_id = sessionStorage.getItem('rec_id');
  $.notify({
    // options
    icon: '../../img/zenicon5.png',
    title: name,
    message: 'Deliver Products',
    url: '../../pages/records-products-page/rec-products.php?remarkstype=4&rec_id=' + rec_id,
    target: '_blank'
  }, {
      // settings
      element: 'body',
      position: null,
      type: "info",
      allow_dismiss: true,
      newest_on_top: true,
      showProgressbar: false,
      placement: {
        from: "top",
        align: "right"
      },
      offset: 5,
      spacing: 10,
      z_index: 1031,
      delay: 0,
      timer: 1000,
      url_target: '_blank',
      mouse_over: null,
      animate: {
        enter: 'animated rollIn',
        exit: 'animated rollOut'
      },
      onShow: null,
      onShown: null,
      onClose: null,
      onClosed: null,
      icon_type: 'image',
      template:
        '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
        '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
        '<span data-notify="icon"></span> ' +
        '<span data-notify="title"><b>{1}</b></span> ' +
        '<br><span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%; "></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
}



notify_stockin_raw_channel.bind('sent', function (data) {
  if (sessionStorage.getItem('zen_accounts_type_id') == 1) {
    var audio = new Audio('../../audio/bell.mp3');
    audio.play();
    sessionStorage.setItem('rec_id', data.last_id);
    var name = data.notifyby;

    stockinraw_notify(name);
    sessionStorage.setItem('zen_unseen', data.unseen);
    var unseen = sessionStorage.getItem('zen_unseen');
    if (unseen <= 0) {
      $('#notification_badge').html('');
    } else {
      $('#notification_badge').html(unseen);
    }
  }
});

function stockinraw_notify(name) {
  var rec_id = sessionStorage.getItem('rec_id');
  $.notify({
    // options
    icon: '../../img/zenicon5.png',
    title: name,
    message: 'Stock-IN Raw Material',
    url: '../../pages/records-rawmaterials-page/rec-rawmaterials.php?remarkstype=5&rec_id='+rec_id,
    target: '_blank'
  }, {
      // settings
      element: 'body',
      position: null,
      type: "info",
      allow_dismiss: true,
      newest_on_top: true,
      showProgressbar: false,
      placement: {
        from: "top",
        align: "right"
      },
      offset: 5,
      spacing: 10,
      z_index: 1031,
      delay: 0,
      timer: 1000,
      url_target: '_blank',
      mouse_over: null,
      animate: {
        enter: 'animated rollIn',
        exit: 'animated rollOut'
      },
      onShow: null,
      onShown: null,
      onClose: null,
      onClosed: null,
      icon_type: 'image',
      template:
        '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
        '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
        '<span data-notify="icon"></span> ' +
        '<span data-notify="title"><b>{1}</b></span> ' +
        '<br><span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%; "></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
}


notify_stockout_raw_channel.bind('sent', function (data) {
  if (sessionStorage.getItem('zen_accounts_type_id') == 1) {
    var audio = new Audio('../../audio/bell.mp3');
    audio.play();
    sessionStorage.setItem('rec_id', data.last_id);
    var name = data.notifyby;

    stockoutraw_notify(name);
    sessionStorage.setItem('zen_unseen', data.unseen);
    var unseen = sessionStorage.getItem('zen_unseen');
    if (unseen <= 0) {
      $('#notification_badge').html('');
    } else {
      $('#notification_badge').html(unseen);
    }
  }
});

function stockoutraw_notify(name) {
  var rec_id = sessionStorage.getItem('rec_id');
  $.notify({
    // options
    icon: '../../img/zenicon5.png',
    title: name,
    message: 'Stock-Out Raw Material',
    url: '../../pages/records-rawmaterials-page/rec-rawmaterials.php?remarkstype=6&rec_id='+rec_id,
    target: '_blank'
  }, {
      // settings
      element: 'body',
      position: null,
      type: "info",
      allow_dismiss: true,
      newest_on_top: true,
      showProgressbar: false,
      placement: {
        from: "top",
        align: "right"
      },
      offset: 5,
      spacing: 10,
      z_index: 1031,
      delay: 0,
      timer: 1000,
      url_target: '_blank',
      mouse_over: null,
      animate: {
        enter: 'animated rollIn',
        exit: 'animated rollOut'
      },
      onShow: null,
      onShown: null,
      onClose: null,
      onClosed: null,
      icon_type: 'image',
      template:
        '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
        '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
        '<span data-notify="icon"></span> ' +
        '<span data-notify="title"><b>{1}</b></span> ' +
        '<br><span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%; "></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
}





notify_critical_channel.bind('sent', function (data) {
  if (sessionStorage.getItem('zen_accounts_type_id') == 1) {
    var audio = new Audio('../../audio/low2.mp3');
    audio.play();
    var result = $.parseJSON(data);
    rawmaterial = result;
    console.log(rawmaterial);
    console.log(rawmaterial[0].name);
    console.log(rawmaterial[0].balance);
    var critical_rm_name;
    var critical_rm_balance;
    critical_rm_name = rawmaterial[0].name;
    critical_rm_balance = rawmaterial[0].balance;
    sessionStorage.setItem('crit_rm_name', critical_rm_name);
    sessionStorage.setItem('crit_rm_balance', critical_rm_balance);
    citical_notify();

  }
});



function citical_notify() {
var critical_rm_name = sessionStorage.getItem('crit_rm_name');
var critical_rm_balance = sessionStorage.getItem('crit_rm_balance');;
  $.notify({
      // options
      icon: '../../img/zenicon2.png',
      title: 'RM Reach Critical Level',
      message: 'RM:    <b>'+critical_rm_name+'</b><br> Remaning Balance: <b>'+ critical_rm_balance,
  }, {
          // settings
          element: 'body',
          type: "danger",
          allow_dismiss: true,
          newest_on_top: false,
          showProgressbar: true,
          placement: {
              from: "top",
              align: "center"
          },
          offset: {
              y: 35
          },
          spacing: 10,
          z_index: 1031,
          delay: 0,
          timer: 1000,
          mouse_over: null,
          animate: {
              enter: 'animated bounceIn',
              exit: 'animated bounceOut'
          },
          icon_type: 'image',
          template:
              '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
              '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
              '<span data-notify="icon"></span> ' +
              '<span data-notify="title">{1}</span> ' +
              '<br><span data-notify="message">{2}</span>' +
              '<div class="progress" data-notify="progressbar">' +
              '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%; color: red; "></div>' +
              '</div>' +
              '<a href="{3}" target="{4}" data-notify="url"></a>' +
              '</div>'
      });
}


var notify_critical_prod_channel = pusher.subscribe('notify_critical_prod_channel');
notify_critical_prod_channel.bind('sent', function (data) {
  if (sessionStorage.getItem('zen_accounts_type_id') == 1) {
    var audio = new Audio('../../audio/low2.mp3');
    audio.play();
    var result = $.parseJSON(data);
    product = result;
    console.log(product);
    console.log(product[0].name);
    console.log(product[0].balance);
    sessionStorage.setItem('crit_prod_name', product[0].name);
    sessionStorage.setItem('crit_prod_balance', product[0].balance);
    critical_prod_notify();
  }
});



function critical_prod_notify() {
var critical_prod_name = sessionStorage.getItem('crit_prod_name');
var critical_prod_balance = sessionStorage.getItem('crit_prod_balance');;
  $.notify({
      // options
      icon: '../../img/zenicon2.png',
      title: 'Product Reach Critical Level',
      message: 'RM:    <b>'+critical_prod_name+'</b><br> Remaning Balance: <b>'+ critical_prod_balance,
  }, {
          // settings
          element: 'body',
          type: "danger",
          allow_dismiss: true,
          newest_on_top: false,
          showProgressbar: true,
          placement: {
              from: "top",
              align: "center"
          },
          offset: {
              y: 35
          },
          spacing: 10,
          z_index: 1031,
          delay: 0,
          timer: 1000,
          mouse_over: null,
          animate: {
              enter: 'animated bounceIn',
              exit: 'animated bounceOut'
          },
          icon_type: 'image',
          template:
              '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
              '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
              '<span data-notify="icon"></span> ' +
              '<span data-notify="title">{1}</span> ' +
              '<br><span data-notify="message">{2}</span>' +
              '<div class="progress" data-notify="progressbar">' +
              '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%; color: red; "></div>' +
              '</div>' +
              '<a href="{3}" target="{4}" data-notify="url"></a>' +
              '</div>'
      });
}