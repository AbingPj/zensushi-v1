

  $(function () {
    //button select all or cancel
    $("#select-all").click(function () {
      var all = $("input.select-all")[0];
      all.checked = !all.checked
      var checked = all.checked;
      $("input.select-item").each(function (index, item) {
        item.checked = checked;
      });
    });

    //button get selected info
    $("#selected").click(function () {
      var items = [];
      var myrowname = [];
      var col = [];
      $("input.select-item:checked:checked").each(function (index, item) {
        items[index] = item.value;
        myrow[index] = item.value;
      });
      if (items.length < 1) {
        //alert("no selected items!!!");
        myrowname = [];
        console.log('no selected items!!!');
        $("#DeleteNameLabel2").html("");
      } else {
        $("#DeleteNameLabel2").html("");
        myrowname = [];
        items.forEach(function(element) {
          col =  cat_obj.categories.find( raw => raw.id == element );
          myrowname.push(col.name);
        });
        var values = myrowname.join(', ');
        console.log(values);
        $("#DeleteNameLabel2").html(values);
        myrowname = [];
      }
    });
    //column checkbox select all or cancel
    $("input.select-all").click(function () {
      var checked = this.checked;
      $("input.select-item").each(function (index, item) {
        item.checked = checked;
      });
    });

    //check selected items
    $("input.select-item").click(function () {
      var checked = this.checked;
      console.log(checked);
      checkSelected();

    });

    //check is all selected
    function checkSelected() {
      var all = $("input.select-all")[0];
      var total = $("input.select-item").length;
      var len = $("input.select-item:checked:checked").length;
      console.log("total:" + total);
      console.log("len:" + len);
      all.checked = len === total;
    }

  });


$('#btnDeleteMultipleCat').on("click", () => {
  deleteMultipleCat();
});

$('#btnSaveCategory').on("click", () => {
  $('#btnSaveCategory').attr( "disabled", "disabled" );
   saveCat();
});


