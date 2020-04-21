function CriticalRawMatarial_datatable() {

    var table = $('#critical_rm_table').DataTable(
        {
            rowReorder: {
                selector: 'td:nth-child(2)'
            },
            responsive: true,
            data: data_obj.rawmaterials_critical,
            columns: [
                { data: "id" },
                { data: "name" },
                { data: "balance" },
                { data: "critical_level" },
            ],
            columnDefs: [{
                targets: [0],
                orderable: false
            }],
        }
    );
}

function CriticalRawMatarial_datatable_ClearDraw() {
    var table = $('#critical_rm_table').DataTable();
    table.clear().rows.add( data_obj.rawmaterials_critical).draw();
}



function CriticalProducts_datatable() {

    var table = $('#critical_prod_table').DataTable(
        {
            rowReorder: {
                selector: 'td:nth-child(2)'
            },
            responsive: true,
            data: data_obj.products_critical,
            columns: [
                { data: "id" },
                { data: "name" },
                { data: "balance" },
                { data: "critical_level" },
            ],
            columnDefs: [{
                targets: [0],
                orderable: false
            }],
        }
    );
}

function CriticalProducts_datatable_ClearDraw() {
    var table = $('#critical_prod_table').DataTable();
    table.clear().rows.add( data_obj.products_critical).draw();
}






