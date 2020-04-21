function Categories_DataTable() {
    var table = $('#Categorytable').DataTable(
        {
            //retrieve: true,
            rowReorder: {
                selector: 'td:nth-child(2)'
            },
            responsive: false,
            data: myObj.Categories,
            columns: [
                {
                    data: null,
                    className: "center",
                    defaultContent:
                        "<input type='checkbox' class='select-item checkbox' name='select-item' >"
                },
                { data: "id" },
                { data: "name" },
                {
                    data: null,
                    className: "left",
                    defaultContent:
                        "<button class='btn btn-warning btn-update btn-sm'  name='btn-update'><span class='oi oi-pencil'></span>UPDATE</button> " 
                        +
                        "<button class='btn btn-danger btn-delete btn-sm' name='btn-delete'><span class='oi oi-circle-x'>DELETE</button>"
                }
            ],
        }
    );

    $('#Categorytable tbody').on('click', 'tr td', function () {
        var data = table.row($(this).closest('tr')).data();
        if (data != undefined) {
            myObj.SelectedCategory = data;
            $("#CurrentCategoryName").val(data.name);
            $("#DeleteNameLabel").html(data.name);
        }
    });

    $('#Categorytable tbody').on('click', 'button.btn-delete', function () {
        var data = table.row($(this).parents('tr')).data();
        $('#DeleteCategoryModal').modal();
    });

    $('#Categorytable tbody').on('click', 'button.btn-update', function () {
        var data = table.row($(this).parents('tr')).data();
        $('#UpdateCatModal').modal();
        //alert(data.id);
    });


    $('#btnSelected').click(function () {
        myObj.checkedCat.name = [];
        myObj.checkedCat.id = [];
        checkedCat_id = [];

        $("input.select-item:checked:checked").each(function (index, item) {
            var data = table.row($(this).parents('tr')).data();
            myObj.checkedCat.id.push(data.id);
            checkedCat_id.push(data.id);
            myObj.checkedCat.name.push(data.name);
        });

        $("#DeleteNameLabel_Multiple li").remove();
        var Parent = document.getElementById('DeleteNameLabel_Multiple');
        myObj.checkedCat.name.forEach(function (element) {
            var child = document.createElement('li');
            child.innerHTML = element;
            Parent.appendChild(child);
        });
        if (myObj.checkedCat.id.length > 0) {
            console.log(myObj.checkedCat.id);
            $("#DeleteCategoryModal2").modal();
        }
    });




}


function Table_Categories_ClearDraw() {
    var table = $('#Categorytable').DataTable();
    table.clear().rows.add(myObj.Categories).draw();
}