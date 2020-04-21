
function MYdatatable() {
    var table = $('#example').DataTable(
        {
            lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
            //retrieve: true,
            rowReorder: {
                selector: 'td:nth-child(2)'
            },
            responsive: true,
            data: data_obj.rawmaterials,
            columns: [
                { data: "id" },
                { data: "name" },
                { data: "cat_name" },
                {
                    data: null,
                    className: "center",
                    defaultContent:
                        '<button type="button" class="btn btn-outline-success btn-sm"  data-toggle="collapse" data-target="#collapseExample"  ><span class="oi oi-flash"></span>Choose</button>'
                }
            ],
            columnDefs: [
                {
                    targets: [0],
                    visible: false,
                    searchable: true
                },
                {
                    targets: [2],
                    visible: false,
                    searchable: true
                }
            ]
        }
    );


    $('#example tbody').on('click', 'tr td', function () {
        var data = table.row($(this).closest('tr')).data();
        console.log(data);
        var column_index = $(this).closest("td").index();
        data_obj.selected_rm = data;
        if (column_index > 0) {
            choose();
            $('#collapseExample').collapse('toggle');
        }

    });
}


function TableClearDraw() {
    var table = $('#example').DataTable();
    table.clear().rows.add(data_obj.rawmaterials).draw()
    //table.ajax.reload();
}



function CartTable() {
    var table = $('#carttable').DataTable(
        {

            //retrieve: true,
            // rowReorder: {
            //     selector: 'td:nth-child(2)'
            // },

            //   dom: 'lBfrtip',
            // buttons: [
            // 'copy',
            // 'csv', 
            //'excel', 
            //'pdf',
            // 'print'
            //  ],
            responsive: true,
            paging: false,
            ordering: false,
            searching: false,
            info: false,
            data: data_obj.cart,
            columns: [
                {
                    data: null,
                    className: "left",
                    defaultContent:
                        "<button class='btn btn-warning btn-sm btn-update' style='border-radius: 50%;' ><span class='oi oi-pencil'></span></button>" +
                        "<button class='btn btn-danger btn-sm btn-delete'  style='border-radius: 50%;' ><span class='oi oi-circle-x'></span></button>"
                },
                { data: "display_name" },
                { data: "quantity" },
                 {
                    data: "subtotal",
                    render: function (data, type, row) {
                        return parseFloat(data).toFixed(2) + " " + data_obj.total_units_name;
                    }
                },
                /*{
                    data: "subtotal",
                    render: function (data, type, row) {
                       return data + " " + data_obj.total_units_name;
                   }
                },*/


            ],
        }
    );



    $('#carttable tbody').on('click', 'tr td', function () {
        var data = table.row($(this).closest('tr')).data();
        if (data != undefined) {
            data_obj.selectedproduct_atcart = data;
            //$("#CurrentCategoryName").val(data.name);
            //$("#DeleteNameLabel").html(data.name);
        }
    });

    $('#carttable tbody').on('click', 'button.btn-delete', function () {
        var data = table.row($(this).closest('tr')).data();
        data_obj.selectedproduct_atcart = data;
        data_obj.delete_one_row_in_cart();
        remove1itemincart();
    });

    $('#carttable tbody').on('click', 'button.btn-update', function () {
        var data = table.row($(this).closest('tr')).data();
        data_obj.selectedproduct_atcart = data;
        $('#txtNewQuantity').val(data.quantity);
        $('#CurrentProdName').html(data.display_name);
        $('#UpdateCart').modal();
    });
}



function TableCartClearDraw() {
    var table = $('#carttable').DataTable();
    table.clear().rows.add(data_obj.cart).draw();
}



function ProductsTable() {
    console.log("SULOD")
    var table = $('#products_table').DataTable(
        {
            
            
            
            dom: 'lBfrtip',
            buttons: [
                {
                    extend: 'pdf',
                    alignment: "center",
                    pageSize: 'A4',
                    title: 'Zen Sushi Products Inventory',
                    //messageBottom: '\n\n Recieved By: __________________\t\tApproved By: __________________',
                    messageBottom: '\n\nPrepaired By:  \t' + sessionStorage.getItem('zen_username'),
                    download: 'open',
                    exportOptions: {
                        columns: [0, 1, 2, 3, 4]
                    },

                    customize: function (doc) {
                        doc.styles.tableHeader.alignment = 'left';
                        doc.content[1].table.widths = ['5%', '40%', '15%', '20%', '20%'];
                        doc.pageMargins = [50, 50, 50, 30];
                        //   doc.content[1].table.widths = 
                        //       Array(doc.content[1].table.body[0].length + 1).join('*').split('');
                    }
                }
            ],
            ///////
            responsive: true,
            data: data_obj.products,
            columns: [
                { data: "id" },
                { data: "display_name" },
                // {data: "balance",
                //         "render": function (data, type, row) {
                //             return data + ' (' + row.packaging + ')';
                //          }
                // },
                { data: "balance" },
                { data: "packaging" },
                { data: "rawmaterial" }
            ],
        
            rowCallback: function(row, data){
           var bal = parseFloat(data["balance"]);
           var crit = parseFloat(data["critical_level"]);
            if(bal == 0){ //I'm assuming you're using object JSON/ajax, if not,
                                 //you'll have to find where in the data[] object the id is
                $(row).addClass("bg-danger");
            }else if(bal <= crit){
                  $(row).addClass("bg-warning");
            }
            }
            
            
        }
    );

}


function Table_Products_ClearDraw() {
    var table = $('#products_table').DataTable();
    table.clear().rows.add(data_obj.products).draw();
}







function choose_products_no_raw_table() {
    var table = $('#choose_product_no_raw_table').DataTable(
        {
            lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
            //retrieve: true,
            rowReorder: {
                selector: 'td:nth-child(2)'
            },
            responsive: true,
            data: data_obj.products_no_raw,
            columns: [
                { data: "display_name" },
                {
                    data: null,
                    className: "center",
                    defaultContent:
                        '<button type="button" class="btn btn-outline-success btn-sm btn-add"  data-toggle="collapse" data-target="#collapseExample"  ><span class="oi oi-flash"></span>Select</button>'
                }
            ],
        }
    );

    $('#choose_product_no_raw_table tbody').on('click', 'button.btn-add', function () {
        var current_row = $(this).parents('tr');//Get the current row
        if (current_row.hasClass('child')) {//Check if the current row is a child row
            current_row = current_row.prev();//If it is, then point to the row before it (its 'parent')
        }
        var data = table.row(current_row).data();//At this point, current_row refers to a valid row in the table, whether is a child row (collapsed by the DataTable's responsiveness) or a 'normal' row
        data_obj.selectedproduct_atcart2 = data;
        $('#ProdName_ProdNoRaw').html(data.name);
        $('#AddModal').modal();
    });


}


function choose_products_no_raw_table_ClearDraw() {
    var table = $('#choose_product_no_raw_table').DataTable();
    table.clear().rows.add(data_obj.products_no_raw).draw();
}





function CartTable2() {
    var table = $('#carttable2').DataTable(
        {

            //retrieve: true,
            // rowReorder: {
            //     selector: 'td:nth-child(2)'
            // },

            //   dom: 'lBfrtip',
            // buttons: [
            // 'copy',
            // 'csv', 
            //'excel', 
            //'pdf',
            // 'print'
            //  ],

            responsive: true,
            paging: false,
            ordering: false,
            searching: false,
            info: false,
            data: data_obj.cart2,
            columns: [
                {
                    data: null,
                    className: "left",
                    defaultContent:
                        "<button class='btn btn-warning btn-sm btn-update' style='border-radius: 50%;' ><span class='oi oi-pencil'></span></button>" +
                        "<button class='btn btn-danger btn-sm btn-delete'  style='border-radius: 50%;' ><span class='oi oi-circle-x'></span></button>"
                },
                { data: "display_name" },
                { data: "quantity" },
            ],
        }
    );
    $('#carttable2 tbody').on('click', 'button.btn-update', function () {
        var current_row = $(this).parents('tr');//Get the current row
        if (current_row.hasClass('child')) {//Check if the current row is a child row
            current_row = current_row.prev();//If it is, then point to the row before it (its 'parent')
        }
        var data = table.row(current_row).data();//At this point, current_row refers to a valid row in the table, whether is a child row (collapsed by the DataTable's responsiveness) or a 'normal' row
        data_obj.selectedproduct_atcart2 = data;
        console.log({data});

        $('#ProdName_ProdNoRaw_Update').html(data.name);
        $('#txtNewQuantity2').val(data.quantity);
        $('#UpdateCart2').modal();
    });

    $('#carttable2 tbody').on('click', 'button.btn-delete', function () {
        var current_row = $(this).parents('tr');//Get the current row
        if (current_row.hasClass('child')) {//Check if the current row is a child row
            current_row = current_row.prev();//If it is, then point to the row before it (its 'parent')
        }
        var data = table.row(current_row).data();//At this point, current_row refers to a valid row in the table, whether is a child row (collapsed by the DataTable's responsiveness) or a 'normal' row
        data_obj.selectedproduct_atcart2 = data;
        data_obj.delete_one_row_in_cart2();
        CartTable2_ClearDraw();
        data_obj.get_totalQty_ofCart2();
        $("#totalQ2").html(data_obj.totalQty2);
    });
}

function CartTable2_ClearDraw() {
    var table = $('#carttable2').DataTable();
    table.clear().rows.add(data_obj.cart2).draw();
}