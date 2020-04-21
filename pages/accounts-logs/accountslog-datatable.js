function AccountsLog_DataTable() {
    var table = $('#AccountsLogTable').DataTable(
        {
            //retrieve: true,
            rowReorder: {
                selector: 'td:nth-child(2)'
            },
            responsive: true,
            order: [[1, "desc"]],
            data: data_obj.AccountsLog,
            columns: [
                { data: "log" },
                { data: "created" },
                { data: "username" },
                { data: "account_name" },
            ]
        }
    );
}


function AccountsLog_DataTable_ClearDraw() {
    var table = $('#AccountsLogTable').DataTable();
    table.clear().rows.add(data_obj.AccountsLog).draw();
}