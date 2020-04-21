function Notify_inv_object() {
    this.order_list,
    this.account_name,
    this.created_at,
    this.branch
};
const data_obj = new Notify_inv_object();



$(document).ready(function () {
    if (sessionStorage.getItem('zen_login') == 'true'
        && sessionStorage.getItem('zen_username') != null
        && sessionStorage.getItem('zen_userid') != null) {
        var username = sessionStorage.getItem("zen_username");
        $('#usernameAtNavabar').html(username);
        getData();
        restrictions();
    }
    else {
        sessionStorage.clear();
        sessionStorage.clear();
        window.location = "../../index.html";
    }
});



function restrictions(panel){
    if (sessionStorage.getItem('zen_accounts_type_id') == 1) {
         //document.getElementById(panel).style.display = "block";
      } else if (sessionStorage.getItem('zen_accounts_type_id') == 2) {
        window.location = "../../index.html";
      } else if (sessionStorage.getItem('zen_accounts_type_id') == 3) {
        //window.location = "../../pages/deliver-page/deliver-products.html";
        window.location = "../../index.html";
      };
};



function getData() {
    //var order_id=<?php echo $_GET['orderId']; ?>;
    var order_id = sessionStorage.getItem('orderId');
    // console.log(order_id);
    $.ajax({
        url: zenDB_url + 'onsen-php-file/Order-Products-view.php',
        data: { order_id: order_id },
        method: 'post',
        success: function (response) {
            
            var result = $.parseJSON(response);
            console.log(result);
            console.log(result[0]);
            console.log(result[1][0].branch);
            console.log(result[1][0].created_at);
            console.log(result[1][0].account_name);
            data_obj.account_name = result[1][0].account_name;
            data_obj.created_at = result[1][0].created_at;
            data_obj.branch = result[1][0].branch;
             data_obj.order_list = result[0];
             OrdersTable();
             requestNotificationUnseenLength();
             $('#branch').html(result[1][0].branch);
             $('#accountname').html(result[1][0].account_name);
             $('#divcreated_at').html(result[1][0].created_at);

          
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });

}

// function display() {
//     $.each(data_obj.order_list, function (i, value) {
//         var htmlStrings1 = '<li class="list-group-item d-flex justify-content-between align-items-center">'
//         var htmlStrings2 = value.display_name + '<span class="badge badge-success">'
//         var htmlStrings3 = value.quantity + ' ' + value.packaging +'</span></li>'
//         $("#order_list").append(htmlStrings1 + htmlStrings2 + htmlStrings3);
//     });
// }

function OrdersTable() {
    var table = $('#example').DataTable(
    {
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'pdfHtml5',
                alignment: "center",
                pageSize: 'A4',
                title: 'Zen Sushi Request Product',
                messageTop: '\n\nDate: \t\t'+data_obj.created_at+'\n\nBranch:\t '+ data_obj.branch,
                messageBottom: '\n\n Recieved By: _________________________\t\t\tApproved By:  _________________________',
                download: 'open',
                exportOptions: {
                    columns: [0,1,2,3]
                },
                customize: function (doc) {
                    doc.styles.tableHeader.alignment = 'left';
                    doc.content[1].alignment = "left";
                    doc.content[2].table.widths = ['10%', '10%', '20%', '60%'];
                    doc.content[2].table.heights = [15];
                    doc.content[3].alignment = "left";
                    doc.pageMargins = [50, 50, 50, 30];
                    //   doc.content[1].table.widths = 
                    //       Array(doc.content[1].table.body[0].length + 1).join('*').split('');
                }

              }
        ],
        responsive: true,
        paging: false,
        ordering: false,
        searching: false,
        info: false,
        data: data_obj.order_list,
        columns: [
            { data: "id" },
            { data: "quantity" },
            { data: "packaging" },
            { data: "display_name" }
         
        ]
    }
);
}