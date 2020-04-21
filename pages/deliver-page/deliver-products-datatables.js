
function ProductsDataTable() {
    var table = $('#products_table').DataTable(
        {
            responsive: true,
            data: data_obj.products,
            columns: [

                { data: "id" },
                { data: "display_name" },
                // {
                //     data: "display_name",
                //     "render": function (data, type, row) {
                //         return '' + row.id + ' | '+data;
                //     }
                // },
                {
                    data: "balance",
                    "render": function (data, type, row) {
                        return data + ' (' + row.packaging + ')';
                    }
                },
                {
                    data: null,
                    className: "center",
                    defaultContent:
                        '<button type="button" class="btn btn-outline-success btn-sm btn-select"  data-toggle="collapse" data-target="#collapseExample"  ><span class="oi oi-flash"></span>Select</button>'
                },
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

    
    $('#products_table tbody').on('click', 'button.btn-select', function () {
        var current_row = $(this).parents('tr');//Get the current row
        if (current_row.hasClass('child')) {//Check if the current row is a child row
            current_row = current_row.prev();//If it is, then point to the row before it (its 'parent')
        }
        var data = table.row(current_row).data();//At this point, current_row refers to a valid row in the table, whether is a child row (collapsed by the DataTable's responsiveness) or a 'normal' row
        data_obj.product_selected_id = data.id;
        $('#ModalTitle').html(data.id+' | '+data.display_name);
        $('#SelectProdModal').modal();
    });
}


function Table_Products_ClearDraw() {
    var table = $('#products_table').DataTable();
    table.clear().rows.add(data_obj.products).draw();
}




function ListDataTable() {
    var table = $('#list_table').DataTable(
        {

            responsive: true,
            paging: false,
            ordering: false,
            searching: false,
            info: false,
            data: data_obj.list,
            columns: [
                {   
                    data: null,
                    className: "left",
                    defaultContent:
                    "<button class='btn btn-warning btn-sm btn-update' style='border-radius: 50%;' ><span class='oi oi-pencil'></span></button>"  +
                    "<button class='btn btn-danger btn-sm btn-delete'  style='border-radius: 50%;' ><span class='oi oi-circle-x'></span></button>"
                 },
                //  {
                //     data: "display_name",
                //     "render": function (data, type, row) {
                //         return '' + row.id + ' | '+data;
                //     }
                // },
                { data: "id" },
                { data: "display_name" },
                { data: "quantity" },
            ],
                
        }
    );
    $('#list_table tbody').on('click', 'button.btn-update', function () {
        var current_row = $(this).parents('tr');//Get the current row
        if (current_row.hasClass('child')) {//Check if the current row is a child row
            current_row = current_row.prev();//If it is, then point to the row before it (its 'parent')
        }
        var data = table.row(current_row).data();//At this point, current_row refers to a valid row in the table, whether is a child row (collapsed by the DataTable's responsiveness) or a 'normal' row
        data_obj.selectedproduct_atlist = data;
        $('#txtNewQuantity').val(data.quantity);
        $('#UpdateListModal').modal();
    });

   
    $('#list_table tbody').on('click', 'button.btn-delete', function () {
        var current_row = $(this).parents('tr');//Get the current row
        if (current_row.hasClass('child')) {//Check if the current row is a child row
            current_row = current_row.prev();//If it is, then point to the row before it (its 'parent')
        }
        var data = table.row(current_row).data();//At this point, current_row refers to a valid row in the table, whether is a child row (collapsed by the DataTable's responsiveness) or a 'normal' row
        data_obj.selectedproduct_atlist = data;
        data_obj.delete_one_row_in_list();
        Table_List_ClearDraw();
    });

}



function Table_List_ClearDraw() {
    var table = $('#list_table').DataTable();
    table.clear().rows.add(data_obj.list).draw();
}
