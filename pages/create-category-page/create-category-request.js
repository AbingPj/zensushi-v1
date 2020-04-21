function requestCategories() {
    $.ajax({
      url: zenDB_url+"onsen-php-file/selectionfetch.php",
      success: function (data) {
        try {
          var result = $.parseJSON(data);
          myObj.Categories = result;
          Categories_DataTable();
          $('#myloader').removeClass("running");
          sessionStorage.setItem("zenCreateCat",  data);
        } catch (error) {
            console.log(error);
            Categories_DataTable();
            $('#myloader').removeClass("running");
        }
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log(errorThrown);
        $('#myloader').removeClass("running");
        notify_faild("Connection Faild");
      }
    });
  }


  function saveCat() {
    $('#btnSaveCategory').addClass("running");
    var cat = $("#txtCategoryName").val();
    if (cat.trim().length == 0) {
      $("#txtCategoryName").val("");
    } else {
      $.ajax({
        type: 'POST',
        url: zenDB_url+'onsen-php-file/Create-Category-Add.php',
        data: { 'categories': cat },
        success: function (response) {
          console.log(response);
          $('#btnSaveCategory').removeClass("running");
          $("#btnSaveCategory").removeAttr("disabled");
        }
      });
    }
  }

  function deleteCat() {
    $.ajax({
      url: zenDB_url+'onsen-php-file/Create-Category-Delete.php',
      data: { id: myObj.SelectedCategory.id },
      type: 'POST',
      success: function (response) {
        console.log(response);
      }
    });
  }


  
  function updateCat() {
    var newname = document.getElementById('txtNewCategoryName').value
    var obj = { "id": myObj.SelectedCategory.id, "newname": newname };
    var myJSON = JSON.stringify(obj);
    $.ajax({
      url: zenDB_url+'onsen-php-file/Create-Category-Update.php',
      data: { myData: myJSON },
      type: 'POST',
      success: function (response) {
      }
    });
  }

  function deleteMultipleCat(){
      $.ajax({
        url: zenDB_url+'onsen-php-file/Create-Category-Delete-Multiple.php',
        type: 'post',
        data: { myrow:checkedCat_id },
        success: function (response) {
          console.log(response);
        }
      });
    }


    

    function requestCategories2() {
      $.ajax({
        url: zenDB_url+"onsen-php-file/selectionfetch.php",
        success: function (data) {
          try {

            var result = $.parseJSON(data);
            myObj.Categories = result;
            Table_Categories_ClearDraw();
            sessionStorage.setItem("zenCreateCat",  data);
            $('#myloader').removeClass("running");

          } catch (error) {
              console.log(error);
          }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          console.log(errorThrown);
          
          $('#myloader').removeClass("running");
          notify_faild("Connection Faild");
        }
      });
    }