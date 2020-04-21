function Products_in_datatable() {
    var table = $('#Products_in_table').DataTable(
        {
            
            dom: 'lBfrtip',
            buttons: [
                {
                    extend: 'pdfHtml5',
                    alignment: "center",
                    pageSize: 'A4',
                    title: 'Zen Sushi Production Records',
                    messageTop: ".",
                    messageBottom: '\n\nPrepaired By:  \t' + sessionStorage.getItem('zen_username'),
                    download: 'open',
                    exportOptions: {
                        columns: [1, 2, 3, 4, 5, 6, 7, 8,9],
                    }
                }
            ],

            /////
            responsive: true,
            order: [[1, "desc"]],
            data: data_obj.products_in,
            columns: [
                 {
                    data: null,
                    className: "left",
                    defaultContent:
                        "<button class='btn btn-warning btn-sm btn-update' style='border-radius: 50%;' ><span class='oi oi-pencil'></span></button>" +
                        "<button class='btn btn-danger btn-sm btn-delete'  style='border-radius: 50%;' ><span class='oi oi-circle-x'></span></button>"
                },
                { data: "id" },
                { data: "created_at" },
                { data: "account_name" },
                { data: "rmname" },
                {
                    data: "out",
                    render: function (data, type, row) {
                        if(data == null){
                            return "";
                        }else{
                            return "<b>"+ data + "</b> (" + row.unit +")";
                        }
                    }
                },
                {
                    data: "scrap",
                    render: function (data, type, row) {
                        if(data == null){
                            return "";
                        }else{
                            return "<b>"+ data + "</b> (" + row.unit +")";
                        }
                    }
                },
                {
                    data: "bones",
                    render: function (data, type, row) {
                        if(data == null){
                            return "";
                        }else{
                            return "<b>"+ data + "</b> (" + row.unit +")";
                        }
                    }
                },
                {
                    data: "finaltotal",
                    render: function (data, type, row) {
                        if(data == null){
                            return "";
                        }else{
                            return "<b>"+ data + "</b> (" + row.unit +")";
                        }
                    }
                },
                {
                    data: "difference",
                    render: function (data, type, row) {
                        if(data == null){
                            return "";
                        }else{
                            return "<b>"+ data + "</b> (" + row.unit +")";
                        }
                       
                    }
                },
                {
                    data: null,
                    className: "center",
                    defaultContent:
                        '<a href="rec-products.php#anc" class="btn btn-outline-success btn-sm btn-choose"><span class="oi oi-flash"></span>Products</a>'
                },
            ],
        }
    );





    $('#Products_in_table tbody').on('click', 'a.btn-choose', function () {
        var current_row = $(this).parents('tr');//Get the current row
        if (current_row.hasClass('child')) {//Check if the current row is a child row
            current_row = current_row.prev();//If it is, then point to the row before it (its 'parent')
        }
        var data = table.row(current_row).data();//At this point, current_row refers to a valid row in the table, whether is a child row (collapsed by the DataTable's responsiveness) or a 'normal' row
        data_obj.selected_products_in = data;
        data_obj.prod_in_get_selected();
        Products_inlist_table_ClearDraw();
        $('#productlist').collapse('show');
    });

    $('#Products_in_table tbody').on('click', 'button.btn-update', function () {
        var current_row = $(this).parents('tr');
        if (current_row.hasClass('child')) {
            current_row = current_row.prev();
        }
        var data = table.row(current_row).data();
        console.log(data);
        product_in_id = data.id;

        var date = new Date(data.created_at)
        var date2 = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toJSON();
        var newdate = date2.slice(0, 16);
        if (data.rmstockout_id == null){
            $('#txtCreated2').val(newdate);
            $("#txtScrapt2").attr('disabled','disabled');
            $("#txtBones2").attr('disabled','disabled');
            $('#UpdateProductsInModal2').modal();

        }else{
            $('#txtCreated').val(newdate);
            $("#txtScrapt").removeAttr('disabled');
            $("#txtBones").removeAttr('disabled');
            $('#txtScrapt').val(data.scrap);
            $('#txtBones').val(data.bones);
            $('#UpdateProductsInModal').modal();
        }
    });

    $('#Products_in_table tbody').on('click', 'button.btn-delete', function () {
        var current_row = $(this).parents('tr');
        if (current_row.hasClass('child')) {
            current_row = current_row.prev();
        }
        var data = table.row(current_row).data();
        product_in_id = data.id;
        $('#DeleteProductsInModal').modal();
    });

}

function Products_in_table_ClearDraw() {
    var table = $('#Products_in_table').DataTable();
    table.clear().rows.add(data_obj.products_in).draw()
}





function Products_inlist_table() {
    var table = $('#product_inlist_table').DataTable(
        {

            dom: 'lBfrtip',
            buttons: [
                {
                    extend: 'pdfHtml5',
                    alignment: "center",
                    pageSize: 'A4',
                    title: 'Zen Sushi Products Records (Produce)',
                    messageTop: ".",
                    messageBottom: '\n\nPrepaired By:  \t' + sessionStorage.getItem('zen_username'),
                    download: 'open',
                    exportOptions: {
                        columns: [1, 2],
                    },
                    customize: function (doc) {
                        doc.styles.tableHeader.alignment = 'left';
                        doc.content[1].alignment = "center";
                        doc.content[2].table.widths = ['50%', '50%'];
                        doc.content[2].table.heights = [20];
                        doc.pageMargins = [50, 50, 50, 30];
                        //   doc.content[1].table.widths = 
                        //       Array(doc.content[1].table.body[0].length + 1).join('*').split('');
                    }
                }
            ],

            ////
            rowReorder: {
                selector: 'td:nth-child(2)'
            },
            responsive: true,
            data: data_obj.selected_products_inlist,
            columns: [
                {
                    data: null,
                    className: "left",
                    defaultContent:
                        "<button class='btn btn-warning btn-sm btn-update' style='border-radius: 50%;' ><span class='oi oi-pencil'></span></button>" +
                        "<button class='btn btn-danger btn-sm btn-delete'  style='border-radius: 50%;' ><span class='oi oi-circle-x'></span></button>"
                },
                { data: "display_name" },
                {
                    data: "quantity",
                    render: function (data, type, row) {
                        if(data == null){
                            return "";
                        }else{
                            return "<b>"+ data + "</b> (" + row.unit +")";
                        }
                    }
                }
            
            ],
            columnDefs: [
                {
                       targets: [0],
                       visible: data_obj.button_permession,
                       searchable: false
               }]
        }
    );
    $('#product_inlist_table tbody').on('click', 'button.btn-update', function () {
        var current_row = $(this).parents('tr');//Get the current row
        if (current_row.hasClass('child')) {//Check if the current row is a child row
            current_row = current_row.prev();//If it is, then point to the row before it (its 'parent')
        }
        var data = table.row(current_row).data();//At this point, current_row refers to a valid row in the table, whether is a child row (collapsed by the DataTable's responsiveness) or a 'normal' row
        data_obj.selected_product_inlist_for_update_delete = data;
        $('#lblProductName').html(data.display_name);
        // $('#lblCreated').html(data.created_at);
        // $('#lblUnit').html(data.unit_name);
        $('#txtNewQuantity').val(data.quantity);
        $('#InUpdateModal').modal();
        $('#InUpdateModal').modal();
    });

    $('#product_inlist_table tbody').on('click', 'button.btn-delete', function () {
        var current_row = $(this).parents('tr');
        if (current_row.hasClass('child')) {
            current_row = current_row.prev();
        }
        var data = table.row(current_row).data();
        data_obj.selected_product_inlist_for_update_delete = data;
        $('#InDeleteModal').modal();
    });
}


function Products_inlist_table_ClearDraw() {
    var table = $('#product_inlist_table').DataTable();
    table.clear().rows.add(data_obj.selected_products_inlist).draw()
    //table.ajax.reload();
}





function Products_out_datatable() {
    var table = $('#Products_out_table').DataTable(
        {   
            dom: 'lBfrtip',
            buttons: [
                {
                    extend: 'pdfHtml5',
                    alignment: "center",
                    pageSize: 'A4',
                    title: 'Zen Sushi Products Date Records Records',
                    messageTop: ".",
                    messageBottom: '\n\nPrepaired By:  \t' + sessionStorage.getItem('zen_username'),
                    download: 'open',
                    exportOptions: {
                        columns: [0, 1, 2],
                    },
                    customize: function (doc) {
                        doc.styles.tableHeader.alignment = 'left';
                        doc.content[1].alignment = "center";
                        doc.content[2].table.widths = ['10%', '40%','50%'];
                        doc.content[2].table.heights = [20];
                        doc.pageMargins = [50, 50, 50, 30];
                        //   doc.content[1].table.widths = 
                        //       Array(doc.content[1].table.body[0].length + 1).join('*').split('');
                    }
                }
            ],


            /////
            responsive: true,
            order: [[1, "desc"]],
            data: data_obj.products_delivery,
            columns: [
                { data: "id" },
                { data: "created_at" },
                { data: "account_name" },
                {
                    data: null,
                    className: "center",
                    defaultContent:
                        '<a href="rec-products.php#anc2" class="btn btn-outline-success btn-sm btn-choose"><span class="oi oi-flash"></span>Products</a>'
                },
            ],
        }
    );


    $('#Products_out_table tbody').on('click', 'a.btn-choose', function () {
        var current_row = $(this).parents('tr');//Get the current row
        if (current_row.hasClass('child')) {//Check if the current row is a child row
            current_row = current_row.prev();//If it is, then point to the row before it (its 'parent')
        }
        var data = table.row(current_row).data();//At this point, current_row refers to a valid row in the table, whether is a child row (collapsed by the DataTable's responsiveness) or a 'normal' row
        data_obj.selected_products_delivery = data;
        data_obj.delivery_get_selected();
        Deliverylist_table_ClearDraw();
        $('#deliverylist').collapse('show');
    });

}

function Products_out_table_ClearDraw() {
    var table = $('#Products_out_table').DataTable();
    table.clear().rows.add(data_obj.products_delivery).draw()
}





function Deliverylist_table() {
    var table = $('#deliverylist_table').DataTable(
        {

            dom: 'lBfrtip',
            buttons: [
                {
                    extend: 'pdfHtml5',
                    alignment: "center",
                    pageSize: 'A4',
                    title: 'Zen Sushi Products Delivery Records',
                    messageTop: ".",
                    messageBottom: '\n\nPrepaired By:  \t' + sessionStorage.getItem('zen_username'),
                    download: 'open',
                    exportOptions: {
                        columns: [1, 2],
                    },
                    customize: function (doc) {
                        doc.styles.tableHeader.alignment = 'left';
                        doc.content[1].alignment = "center";
                        doc.content[2].table.widths = ['50%', '50%'];
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

            responsive: true,
            data: data_obj.selected_products_deliverylist,
            columns: [
                {
                    data: null,
                    className: "left",
                    defaultContent:
                        "<button class='btn btn-warning btn-sm btn-update' style='border-radius: 50%;' ><span class='oi oi-pencil'></span></button>" +
                        "<button class='btn btn-danger btn-sm btn-delete'  style='border-radius: 50%;' ><span class='oi oi-circle-x'></span></button>"
                },
                { data: "display_name" },
                {
                    data: "quantity",
                    render: function (data, type, row) {
                        if(data == null){
                            return "";
                        }else{
                            return "<b>"+ data + "</b> (" + row.unit +")";
                        }
                    }
                }
             
            ],
            columnDefs: [
                {
                       targets: [0],
                       visible: data_obj.button_permession,
                       searchable: false
               }]
        }
    );
    $('#deliverylist_table tbody').on('click', 'button.btn-update', function () {
        var current_row = $(this).parents('tr');//Get the current row
        if (current_row.hasClass('child')) {//Check if the current row is a child row
            current_row = current_row.prev();//If it is, then point to the row before it (its 'parent')
        }
        var data = table.row(current_row).data();//At this point, current_row refers to a valid row in the table, whether is a child row (collapsed by the DataTable's responsiveness) or a 'normal' row
        data_obj.selected_product_deliverylist_for_update_delete = data
        
        $('#lblProductName2').html(data.display_name);
        // $('#lblCreated').html(data.created_at);
        // $('#lblUnit').html(data.unit_name);
        $('#txtNewQuantity2').val(data.quantity);
        $('#OutUpdateModal').modal();
    });

    $('#deliverylist_table tbody').on('click', 'button.btn-delete', function () {
        var current_row = $(this).parents('tr');
        if (current_row.hasClass('child')) {
            current_row = current_row.prev();
        }
        var data = table.row(current_row).data();
        data_obj.selected_product_deliverylist_for_update_delete = data;
        $('#OutDeleteModal').modal();
    });
}


function Deliverylist_table_ClearDraw() {
    var table = $('#deliverylist_table').DataTable();
    table.clear().rows.add(data_obj.selected_products_deliverylist).draw()
    //table.ajax.reload();
}


