
   update_create_category_channel.bind('sent', function (data) {
    console.log(data);
    $("#txtCategoryName").val("");
    try {
      var result = $.parseJSON(data);
      myObj.Categories = result;
      Table_Categories_ClearDraw();
      sessionStorage.setItem("zenCreateCat_IsUpdate",  "false");
    } catch (error) {
        console.log(error);
        myObj.Categories = [];
        Table_Categories_ClearDraw();
    }
  });


  