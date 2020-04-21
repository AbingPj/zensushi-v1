
function RM_inv_object() {
    this.rawmaterials,
        this.balance
}

const data_obj = new RM_inv_object();


function requestRawMaterialsData() {
    $.ajax({
        url: "https://zensushi-inv.000webhostapp.com/onsen-php-file/Create-RawMaterials-Display.php",
        success: function (data) {
            var result = $.parseJSON(data);
            console.log(result);
            data_obj.rawmaterials = result;
            //display();
            todatatable();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log('error');
        }
    });
}


$(document).ready(function () {

    requestRawMaterialsData();

})


function display() {
    var tr;
    try {

        $.each(data_obj.rawmaterials, (i, value) => {
            tr = $('<tr/>');
            tr.attr('value', i);
            tr.attr('data-toggle', 'modal');
            tr.attr('data-target', '#RawModal');
            tr.append("<td >" + value.id + "</td>");
            tr.append("<td >" + value.name + "</td>");
            tr.append("<td >" + value.balance + "</td>");
            tr.append("<td >" + value.unit + "</td>");
            tr.append("<td >" + value.cat_name + "</td>");
            $('#tbody_rm').append(tr);
        });


    } catch (error) {
        console.log('catch: ' + error);
    }
}

function todatatable() {

    var table = $('#example').DataTable(
        {
            rowReorder: {
                selector: 'td:nth-child(2)'
            },
            responsive: true,

            "data": data_obj.rawmaterials,
            "columns": [
                { "data": "id" },
                { "data": "name" },
                { "data": "balance" },
                { "data": "unit" },
                { "data": "cat_name" },

            ],


        }
    );

    $('#example tbody').on('click', 'tr td:eq(1)', function () {
        $("#RawModal").modal()
    });


}



// {
                //     "data": null,
                //     "render": function (data, type, row) {
                //         return "<button class='btn btn-warning btn-sm' value='" + row.id +
                //             "'data-toggle='modal' data-target='#RawModal'><span class='oi oi-pencil'></span>IN</button>"
                //     }
                // },

                // {
                //     "data": "name",
                //     "render": function (data, type, row) {
                //         return ' (' + row.id + ')' + data;
                //     }
                // },