function CreateProducts_DataTable() {
    var table = $('#tableCreateProducts').DataTable(
        {
            //retrieve: true,
            rowReorder: {
                selector: 'td:nth-child(2)'
            },
            responsive: true,
            data: mydataObj.products,
            columns: [
                {
                    data: null,
                    className: "center",
                    defaultContent:
                        "<input type='checkbox' class='select-item checkbox' name='select-item' >"
                },
                {
                    data: null,
                    className: "left",
                    defaultContent:
                    "<button class='btn btn-warning btn-sm btn-update'><span class='oi oi-pencil'></span></button>"  +
                    "<button class='btn btn-danger btn-sm btn-delete'  ><span class='oi oi-circle-x'></span></button>"
                   
                 },
                { data: "id" },
                { data: "display_name" },
                { data: "packaging" },
                { data: "rawmaterial" },
                { data: "critical_level" }
               
            ],
        }
    );

    $('#tableCreateProducts tbody').on('click', 'tr td', function () {
        var data = table.row($(this).closest('tr')).data();
        if (data != undefined) {
            mydataObj.Selected_Delete_Product = data;
             $("#DeleteNameLabel").html( mydataObj.Selected_Delete_Product.name);
            mydataObj.Selected_Update_Product = data;
            $("#txtUpdateProductName").val(mydataObj.Selected_Update_Product.name);
            $("#txtUpdateProductName2").val(mydataObj.Selected_Update_Product.name);
            $("#txtProdUpdateCrit").val(mydataObj.Selected_Update_Product.critical_level);
            $("#txtProdUpdateCrit2").val(mydataObj.Selected_Update_Product.critical_level);
            $("#RMSelectionAtUpdateProduct").val(mydataObj.Selected_Update_Product.rawmaterial_id).change();
            $("#txtValueOfProduct_AtUpdateProduct").val(mydataObj.Selected_Update_Product.unit_value);
            $("#SubUnitSelection_AtUpdateProdutcs").val(mydataObj.Selected_Update_Product.units_sub_id).change(); 
            $("#PackagingSelection_AtUpdateProducts").val(mydataObj.Selected_Update_Product.packaging_id).change();
            $("#PackagingSelection2_AtUpdateProducts").val(mydataObj.Selected_Update_Product.packaging_id).change();
        }
    });

    $('#tableCreateProducts tbody').on('click', 'button.btn-delete', function () {
        var data = table.row($(this).parents('tr')).data();
        $('#DeleteProdModal').modal();
    });

    $('#tableCreateProducts tbody').on('click', 'button.btn-update', function () {
        var data = table.row($(this).parents('tr')).data();
        console.log(data);
        if(data.rawmaterial_id == null){
            $('#UpdateProdModal2').modal();
        }else{
            $('#UpdateProdModal').modal();
        }
       
        //alert(data.id);
    });


    $('#btnDeleteProd_Multiple_Selected').click(function () {
     
        mydataObj.checkedProd.name = [];
        mydataObj.checkedProd.id = [];
       

        $("input.select-item:checked:checked").each(function (index, item) {
            var data = table.row($(this).parents('tr')).data();
            mydataObj.checkedProd.id .push(data.id);
            mydataObj.checkedProd.name.push(data.name);
        });

        $("#DeleteNameLabel_Multiple li").remove();
        var Parent = document.getElementById('DeleteNameLabel_Multiple');
        mydataObj.checkedProd.name.forEach(function (element) {
            var child = document.createElement('li');
            child.innerHTML = element;
            Parent.appendChild(child);
        });
        if (mydataObj.checkedProd.id.length > 0) {
            $("#DeleteProdModal_Multiple").modal();
        }
    });

}


function Table_CreateProducts_ClearDraw() {
    var table = $('#tableCreateProducts').DataTable();
    table.clear().rows.add(mydataObj.products).draw();
}