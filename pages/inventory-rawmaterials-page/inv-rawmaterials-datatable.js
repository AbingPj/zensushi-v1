function MYdatatable() {
    var table = $('#example').DataTable(
        {

            dom: 'lBfrtip',
            buttons: [
                {
                    extend: 'pdf',
                    alignment: "center",
                    pageSize: 'A4',
                    title: 'Zen Sushi Raw Materials Inventory',
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







            // dom: 'Bfrtip',
            // buttons: [
            //     {
            //         extend: 'pdfHtml5',
            //         messageTop: 'PDF created by PDFMake with Buttons for DataTables.'
            //     }
            // ],

            rowReorder: {
                selector: 'td:nth-child(2)'
            },
            responsive: true,
            data: data_obj.rawmaterials,
            columns: [
                { data: "id" },
                { data: "name" },
                {
                    data: "balance",
                    render: function (data, type, row) {
                        return parseFloat(data).toFixed(2);
                    }
                },
                { data: "unit" },
                { data: "cat_name" },
               // { data: "critical_level" },
                {

                    data: null,

                    className: "center",

                    defaultContent:

                        '<button type="button" class="btn btn-outline-success btn-sm btn-select"  data-toggle="collapse" data-target="#collapseExample"  ><span class="oi oi-flash"></span>Select</button>'

                },

                // {
                //     data: null,
                //     className: "center",
                //     defaultContent:
                //         '<button  data-toggle="modal" data-target="#RemoveRawModal_atInventory" type="button" class="btn btn-outline-danger btn-sm" ><span class="oi oi-circle-x"></span>Reset</button>'
                // }
            ],
            // columnDefs: [
            //  {
            //         targets: [5],
            //         visible: false,
            //         searchable: false
            // }]
            
            
             //rowCallback: function(row, data){
           // if(data["id"] == 8){ //I'm assuming you're using object JSON/ajax, if not,
                                 //you'll have to find where in the data[] object the id is
                //$(row).addClass("redBackgroundClass");
                //Or alternatively:
                //$(row).css("background-color","red"); if you don't want to make a css class
        //}
            
            
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


    $('#example tbody').on('click', 'tr td', function () {
        var data = table.row($(this).closest('tr')).data();
        if (data != undefined) {
            data_obj.selected_rm = data;
        }
        var column_index = $(this).closest("td").index();
        if (column_index > 0 && column_index < 5) {
            $("#RmNameLabel").html(data.name);
            //$("#balanceLabel").html(data.balance);
            $("#balanceLabel").html(parseFloat(data.balance).toFixed(2));
            $("#unitLabel").html(" (" + data.unit + ")");
            $("#unitLabel2").html(data.unit);
            $("#unitLabel3").html(data.unit);
            $("#RawModal").modal();
        } else {
            $("#RemoveNameLabel").html(data_obj.selected_rm.name);
        }
    });

    $('#example tbody').on('click', 'button.btn-select', function () {
        var current_row = $(this).parents('tr');//Get the current row
        if (current_row.hasClass('child')) {//Check if the current row is a child row
            current_row = current_row.prev();//If it is, then point to the row before it (its 'parent')
        }
        var data = table.row(current_row).data();//At this point, current_row refers to a valid row in the table, whether is a child row (collapsed by the DataTable's responsiveness) or a 'normal' row
        data_obj.selected_rm = data;
        $("#RmNameLabel").html(data.name);
        //$("#balanceLabel").html(data.balance);
        
        $("#balanceLabel").html(parseFloat(data.balance).toFixed(2));
        $("#unitLabel").html(" (" + data.unit + ")");
        $("#unitLabel2").html(data.unit);
        $("#unitLabel3").html(data.unit);
        $("#RawModal").modal();
       
       
    });




}


function TableClearDraw() {
    var table = $('#example').DataTable();
    table.clear().rows.add(data_obj.rawmaterials).draw()
    //table.ajax.reload();
}