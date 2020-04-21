function RawMatarialdatatable() {

    var table = $('#rawtable').DataTable(
        {
            rowReorder: {
                selector: 'td:nth-child(2)'
            },
            responsive: true,
            data: mydata.rawMaterials,
            columns: [
                {
                    data: null,
                    className: "center",
                    defaultContent:
                        "<input type='checkbox' class='select-item checkbox' name='select-item' >"
                },
                { data: "id" },
                { data: "name" },
                { data: "unit" },
                { data: "cat_name" },
                { data: "critical_level" },
                {
                    data: null,
                    className: "left",
                    defaultContent:
                        "<button class='btn btn-warning btn-update btn-sm'  name='btn-update'><span class='oi oi-pencil'></span>UPDATE</button>"
                        +
                        "<button class='btn btn-danger btn-delete btn-sm' name='btn-delete'><span class='oi oi-circle-x'>DELETE</button>"
                }
            ],
            columnDefs: [{
                targets: [0],
                orderable: false
            }],
        }
    );

    $('#rawtable tbody').on('click', 'tr td', function () {
        var data = table.row($(this).closest('tr')).data();
        if (data != undefined) {
            mydata.RM_DeleteSelected_id = data.id;
            mydata.RM_UpdateSelected = data;
            $("#DeleteNameLabel").html(data.name);
            $("#txtRawMaterialUpdateName").val(data.name);
            $("#txtRawUpdateCrit").val(data.critical_level);
            $("#CategorySelectionAtCreateRawmaterial_AtUpdateModal").val(data.cat_id).change();
            $("#QuantityUnitSelection_AtUpdateModal").val(data.units_id).change();
            displayUnitSub_AtUpdateModal();
            $("#UnitSubSelection_AtUpdateModal").val(data.units_sub_id).change();
        }
    });

    $('#rawtable tbody').on('click', 'button.btn-delete', function () {
        var data = table.row($(this).parents('tr')).data();
        $('#DeleteRawMaterialModal').modal();
    });

    $('#rawtable tbody').on('click', 'button.btn-update', function () {
        var data = table.row($(this).parents('tr')).data();
        console.log(data);
        $('#UpdateRawModal').modal();
        //alert(data.id);
    });

    $(".dataTables_filter input").on('keyup', function () {
        document.getElementById("InputSelectAll").checked = false;
        $("input.select-item:checked:checked").each(function (index, item) {
            item.checked = false;
        });
    });

    $('#rawtable tbody').on('click', 'input', function (item) {
        // item.checked = !item.checked;
        item.checked = !checked;
    });



    $('#btnSelected').click(function () {
        mydata.checkedRM.name = [];
        mydata.checkedRM.id = [];

        $("input.select-item:checked:checked").each(function (index, item) {
            var data = table.row($(this).parents('tr')).data();
            mydata.checkedRM.id.push(data.id);
            mydata.checkedRM.name.push(data.name);
        });

        $("#DeleteNameLabel_Multiple li").remove();
        var Parent = document.getElementById('DeleteNameLabel_Multiple');
        mydata.checkedRM.name.forEach(function (element) {
            var child = document.createElement('li');
            child.innerHTML = element;
            Parent.appendChild(child);
        });
        if (mydata.checkedRM.name.length > 0) {
            $("#DeleteRawMaterialModal_Multiple").modal();
        }
    });

    $('#select-all').click(function () {
        var all = $("input.select-all")[0];
        all.checked = !all.checked
        var checked = all.checked;
        $("input.select-item").each(function (index, item) {
            item.checked = checked;
        });
    });

    $("input.select-all").click(function () {
        var checked = this.checked;
        $("input.select-item").each(function (index, item) {
            item.checked = checked;
        });
    });

    // $(".dataTables_filter input").on( 'keyup', function () {
    //     document.getElementById("InputSelectAll").checked = false;
    //     $("input.select-item:checked:checked").each(function (index, item) {
    //         item.checked = false;
    //         $(this).parents('tr').toggleClass('selected');
    //     });
    // } );




    // $('#rawtable tbody').on( 'click', 'input', function () {
    //     $(this).parents('tr').toggleClass('selected');
    // });

    // $('#btnSelected').click( function () {
    //     mydata.checkedRM.name = [] ;
    //     mydata.checkedRM.id = [];
    //     for (var i = 0; i < table.rows('.selected').data().length; i++) {
    //         mydata.checkedRM.id.push((table.rows('.selected').data()[i].id));
    //     }
    //     for (var i = 0; i < table.rows('.selected').data().length; i++) {
    //         mydata.checkedRM.name.push((table.rows('.selected').data()[i].name));
    //     }
    //     $("#DeleteNameLabel_Multiple li").remove();
    //     var Parent = document.getElementById('DeleteNameLabel_Multiple');
    //     mydata.checkedRM.name.forEach(function (element) {
    //             var child = document.createElement('li');
    //             child.innerHTML = element;
    //             Parent.appendChild(child);
    //     });
    //     if(mydata.checkedRM.name.length > 0 ){
    //         $("#DeleteRawMaterialModal_Multiple").modal();
    //     }
    // });

    // $('#select-all').click( function () {
    //     var all = $("input.select-all")[0];
    //     table.rows().deselect();
    //     all.checked = !all.checked
    //     var checked = all.checked;
    //     $("input.select-item").each(function (index, item) {
    //         item.checked = checked;
    //     });
    //     $("input.select-item:checked:checked").each(function (index, item) {
    //         $(this).parents('tr').toggleClass('selected');
    //     });
    // });

    // $("input.select-all").click(function () {
    //     var checked = this.checked;
    //     table.rows().deselect();
    //     $("input.select-item").each(function (index, item) {
    //         item.checked = checked;
    //     });

    //     $("input.select-item:checked:checked").each(function (index, item) {
    //         var data = table.row($(this).parents('tr')).data();
    //         $(this).parents('tr').toggleClass('selected');
    //         console.log( data);
    //     });
    // });
}






function Table_RawMaterials_ClearDraw() {
    var table = $('#rawtable').DataTable();
    table.clear().rows.add(mydata.rawMaterials).draw();
}







