function RM_in_datatable() {
    var table = $('#Ramaterial_IN_table').DataTable(
        {
            
            
            dom: 'lBfrtip',
            buttons: [
                {
                    extend: 'pdfHtml5',
                    alignment: "center",
                    pageSize: 'A4',
                    title: 'Zen Sushi Raw Materials Records (Stock-In)',
                    messageTop: ".",
                    messageBottom: '\n\nPrepaired By:  \t' + sessionStorage.getItem('zen_username'),
                    download: 'open',
                    exportOptions: {
                        columns: [1, 2, 3, 4, 5],
                    },
                    customize: function (doc) {
                        doc.styles.tableHeader.alignment = 'left';
                        // doc.content[1].text = '\n FROM: '+  sessionStorage.getItem("zenFrom")
                        //                        +'\t\t\t\t TO: '+sessionStorage.getItem("zenTo");
                        doc.content[1].alignment = "center";
                        doc.content[2].table.widths = ['20%', '20%', '20%', '20%','20%'];
                        doc.content[2].table.heights = [20];
                        doc.pageMargins = [50, 50, 50, 30];
                        //   doc.content[1].table.widths = 
                        //       Array(doc.content[1].table.body[0].length + 1).join('*').split('');
                    }
                }
            ],


            rowReorder: {
                selector: 'td:nth-child(2)'
            },
            order: [[ 4, "desc" ]],
            responsive: true,
            data: data_obj.rawmaterials_in,
            columns: [
                {   
                    data: null,
                    className: "left",
                    defaultContent:
                    "<button class='btn btn-warning btn-sm btn-update' style='border-radius: 50%;' ><span class='oi oi-pencil'></span></button>"  +
                    "<button class='btn btn-danger btn-sm btn-delete'  style='border-radius: 50%;' ><span class='oi oi-circle-x'></span></button>"
                 },
                {data: "id"},
                { data: "rawmaterial" },
                { data: "quantity" },
                { data: "unit_name" },
                { data: "created_at" },
                { data: "created_by" },
             
            ],
            columnDefs: [
                {
                       targets: [0],
                       visible: data_obj.button_permession,
                       searchable: false
               }]
        }
    );
    $('#Ramaterial_IN_table tbody').on('click', 'button.btn-update', function () {
        var current_row = $(this).parents('tr');//Get the current row
        if (current_row.hasClass('child')) {//Check if the current row is a child row
            current_row = current_row.prev();//If it is, then point to the row before it (its 'parent')
        }
        var data = table.row(current_row).data();//At this point, current_row refers to a valid row in the table, whether is a child row (collapsed by the DataTable's responsiveness) or a 'normal' row
        data_obj.rawmaterials_in_selected = data;
        $('#lblProductName').html(data.rawmaterial);

        var date = new Date(data.created_at)
        var date2 = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toJSON();
        var newdate = date2.slice(0, 16);
        $('#txtCreated').val(newdate);

        $('#lblUnit').html(data.unit_name);
        $('#txtNewQuantity').val(data.quantity);
        $('#InUpdateModal').modal();
    });

    $('#Ramaterial_IN_table tbody').on('click', 'button.btn-delete', function () {
        var current_row = $(this).parents('tr');//Get the current row
        if (current_row.hasClass('child')) {//Check if the current row is a child row
            current_row = current_row.prev();//If it is, then point to the row before it (its 'parent')
        }
        var data = table.row(current_row).data();//At this point, current_row refers to a valid row in the table, whether is a child row (collapsed by the DataTable's responsiveness) or a 'normal' row
        data_obj.rawmaterials_in_selected = data;
        $('#InDeleteModal').modal();
    });

}


function Table_RM_IN_ClearDraw() {
    var table = $('#Ramaterial_IN_table').DataTable();
    table.clear().rows.add(data_obj.rawmaterials_in).draw()
    //table.ajax.reload();
}

function RM_out_datatable() {
    var table = $('#Ramaterial_OUT_table').DataTable(
        {

            dom: 'lBfrtip',
            buttons: [
                {
                    extend: 'pdfHtml5',
                    alignment: "center",
                    pageSize: 'A4',
                    title: 'Zen Sushi Raw Materials Records (Stock-Out)',
                    messageTop: ".",
                    messageBottom: '\n\nPrepaired By:  \t' + sessionStorage.getItem('zen_username'),
                    download: 'open',
                    exportOptions: {
                        columns: [1, 2, 3, 4, 5],
                    },

                    customize: function (doc) {
                        doc.styles.tableHeader.alignment = 'left';
                        // doc.content[1].text = '\n FROM: '+  sessionStorage.getItem("zenFrom")
                        //                        +'\t\t\t\t TO: '+sessionStorage.getItem("zenTo");
                        doc.content[1].alignment = "center";
                        doc.content[2].table.widths = ['20%', '20%', '20%', '20%','20%'];
                        doc.content[2].table.heights = [20];
                        doc.pageMargins = [50, 50, 50, 30];
                        //   doc.content[1].table.widths = 
                        //       Array(doc.content[1].table.body[0].length + 1).join('*').split('');
                    }
                }
            ],


            /////
            rowReorder: {
                selector: 'td:nth-child(2)'
            },
            order: [[ 4, "desc" ]],
            responsive: true,
            data: data_obj.rawmaterials_out,
            columns: [
                {   
                    data: null,
                    className: "left",
                    defaultContent:
                    "<button class='btn btn-warning btn-sm btn-update' style='border-radius: 50%;' ><span class='oi oi-pencil'></span></button>"  +
                    "<button class='btn btn-danger btn-sm btn-delete'  style='border-radius: 50%;' ><span class='oi oi-circle-x'></span></button>"
                 },
                 {data: "id"},
                { data: "rawmaterial" },
                { data: "quantity" },
                { data: "unit_name" },
                { data: "created_at" },
                { data: "created_by" },
            ],
            columnDefs: [
                {
                       targets: [0],
                       visible: data_obj.button_permession,
                       searchable: false
               }]
        }
    );
    $('#Ramaterial_OUT_table tbody').on('click', 'button.btn-update', function () {
        var current_row = $(this).parents('tr');//Get the current row
        if (current_row.hasClass('child')) {//Check if the current row is a child row
            current_row = current_row.prev();//If it is, then point to the row before it (its 'parent')
        }
        var data = table.row(current_row).data();//At this point, current_row refers to a valid row in the table, whether is a child row (collapsed by the DataTable's responsiveness) or a 'normal' row
        data_obj.rawmaterials_out_selected = data;
        $('#lblProductName2').html(data.rawmaterial);

        var date = new Date(data.created_at)
        var date2 = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toJSON();
        var newdate = date2.slice(0, 16);
        $('#txtCreated2').val(newdate);

        //$('#lblCreated2').html(data.created_at);

        $('#lblUnit2').html(data.unit_name);
        $('#txtNewQuantity2').val(data.quantity);
        $('#OutUpdateModal').modal();
    });

    $('#Ramaterial_OUT_table tbody').on('click', 'button.btn-delete', function () {
        var current_row = $(this).parents('tr');//Get the current row
        if (current_row.hasClass('child')) {//Check if the current row is a child row
            current_row = current_row.prev();//If it is, then point to the row before it (its 'parent')
        }
        var data = table.row(current_row).data();//At this point, current_row refers to a valid row in the table, whether is a child row (collapsed by the DataTable's responsiveness) or a 'normal' row
        data_obj.rawmaterials_out_selected = data;
        $('#OutDeleteModal').modal();
    });
    
}


function Table_RM_OUT_ClearDraw() {
    var table = $('#Ramaterial_OUT_table').DataTable();
    table.clear().rows.add(data_obj.rawmaterials_out).draw()
    //table.ajax.reload();
}