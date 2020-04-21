    function MYdatatable() {

   

    var table = $('#example').DataTable(

        {

              dom: 'lBfrtip',
            buttons: [
                {
                    extend: 'pdfHtml5',
                    alignment: "center",
                    pageSize: 'A4',
                    title: 'Zen Sushi Raw Materials',
                    messageTop: ".",
                    messageBottom: '\n\nPrepaired By:  \t' + sessionStorage.getItem('zen_username'),
                    download: 'open',
                    exportOptions: {
                        columns: [0, 1, 2, 3, 4],
                    },
                    customize: function (doc) {
                        doc.styles.tableHeader.alignment = 'left';
                        doc.content[1].text = '\n FROM: '+  sessionStorage.getItem("zenFrom")
                                               +'\t\t\t\t TO: '+sessionStorage.getItem("zenTo");
                        doc.content[1].alignment = "center";
                        doc.content[2].table.widths = ['10%', '30%', '20%', '20%','20%'];
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

            responsive: false,
            data: data_obj.rawmaterials_reports,
            columns: [
                { data: "id" },
                { data: "name" },
                {
                    data: "IN",
                    render: function (data, type, row) {
                        if(data == null){
                            return "";
                        }else{
                            return "<b>"+ data + "</b> (" + row.unit +")";
                        }
                    }
                },
                {
                    data: "OUT",
                    render: function (data, type, row) {
                        if(data == null){
                            return "";
                        }else{
                            return "<b>"+ data + "</b> (" + row.unit +")";
                        }
                    }
                },
                {
                    data: "remaining_balance",
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
                       visible: false,
                       searchable: false
               }]

            





        }

    );


    


    // $(".buttons-pdf").on("click", function() {

       

    // });

}





function TableClearDraw() {

    var table = $('#example').DataTable();

    table.clear().rows.add(data_obj.rawmaterials_reports).draw()

    //table.ajax.reload();

}












 //retrieve: true,



            // dom: 'Bfrtip',

            // buttons: [

            //     {

            //         extend: 'pdfHtml5'

            //     }

            // ],



            // dom: 'Bfrtip',

            // buttons: [

            //     {

            //         extend: 'pdfHtml5',

            //         messageTop: 'PDF created by PDFMake with Buttons for DataTables.',

            //         customize: function (doc) {

            //                     doc.styles.tableHeader.alignment = 'left'; 

            //                     doc.content[2].table.widths = ['10%','40%','25%','25%']; 

            //                     doc.pageMargins = [50,50,50,30 ];

            //                     // doc.content[1].table.widths = 

            //                     // Array(doc.content[1].table.body[0].length + 1).join('*').split('');
            //              }
            //     }

            // ],