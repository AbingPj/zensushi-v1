function Accounts_DataTable() {
    var table = $('#AccountsTable').DataTable(
        {
            //retrieve: true,
            rowReorder: {
                selector: 'td:nth-child(2)'
            },
            responsive: true,
            data: data_obj.Accounts,
            columns: [
                { data: "id" },
                { data: "username" },
                { data: "password" },
                { data: "account_name" },
                { data: "account_type" },
                { data: "date" },
                {
                    data: null,
                    className: "left",
                    defaultContent:
                        "<button class='btn btn-warning btn-sm btn-update' style='border-radius: 50%;' ><span class='oi oi-pencil'></span></button>" +
                        "<button class='btn btn-danger btn-sm btn-delete'  style='border-radius: 50%;' ><span class='oi oi-circle-x'></span></button>"
                }
            ],
        }
    );

    $('#AccountsTable tbody').on('click', 'button.btn-update', function () {
        var current_row = $(this).parents('tr');//Get the current row
        if (current_row.hasClass('child')) {//Check if the current row is a child row
            current_row = current_row.prev();//If it is, then point to the row before it (its 'parent')
        }
        var data = table.row(current_row).data();//At this point, current_row refers to a valid row in the table, whether is a child row (collapsed by the DataTable's responsiveness) or a 'normal' row
        data_obj.SelectedAccount = data;
        $("#txtUpdateAccountName").val(data.account_name);
        $("#txtUpdateUsername").val(data.username);
        $("#txtUpdatePassword").val(data.password);
        $("#selectionUpdateAccounType").val(data.accounts_type_id).change();
        // $("#selectionUpdateAccounType").val(data.password);
        $("#UpdateAccountModal").modal();
    });

    $('#AccountsTable tbody').on('click', 'button.btn-delete', function () {
        var current_row = $(this).parents('tr');//Get the current row
        if (current_row.hasClass('child')) {//Check if the current row is a child row
            current_row = current_row.prev();//If it is, then point to the row before it (its 'parent')
        }
        var data = table.row(current_row).data();//At this point, current_row refers to a valid row in the table, whether is a child row (collapsed by the DataTable's responsiveness) or a 'normal' row
        data_obj.SelectedAccount = data;
        $("#DeleteNameLabel").html(data.account_name);
        $("#DeleteAccountModal").modal();
    });



}


function Accounts_DataTable_ClearDraw() {
    var table = $('#AccountsTable').DataTable();
    table.clear().rows.add(data_obj.Accounts).draw();
}