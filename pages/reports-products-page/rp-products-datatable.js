function MYdatatable() {
    var table = $('#example').DataTable(
        {

            dom: 'lBfrtip',
            buttons: [
                {
                    extend: 'pdfHtml5',
                    alignment: "center",
                    pageSize: 'A4',
                    title: 'Zen Sushi - Products Inventory Report',
                    messageTop: ".",
                    messageBottom: '\n\nPrepaired By:  \t' + sessionStorage.getItem('zen_username'),
                    download: 'open',
                    exportOptions: {
                        columns: [0, 1, 2, 3, 4, 5],
                    },
                    customize: function (doc) {
                        doc.styles.tableHeader.alignment = 'left';
                        doc.content[1].text = '\n FROM: \t'+  sessionStorage.getItem("zenFrom")
                                               +'\t\t\t\t TO: \t'+sessionStorage.getItem("zenTo");
                        doc.content[1].alignment = "center";
                        doc.content[2].table.widths = ['5%', '30%', '10%', '15%','15%','25%'];
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
            data: data_obj.products_report,
            columns: [
                { data: "id" },
                { data: "display_name" },
                { data: "packaging" },
                { data: "IN" },
                { data: "OUT" },
                 { data: "remaining_balance" },
            ],
         

        }
    );

}


function TableClearDraw() {
    var table = $('#example').DataTable();
    table.clear().rows.add(data_obj.products_report).draw()
}