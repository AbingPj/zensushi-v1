
requestProducts = () => {
    var result;
    $.ajax({
        url: zenDB_url+'onsen-php-file/Inventory-Products-GetProductsData.php',
        success: (data) => {
            try{
                  result = $.parseJSON(data);
                  data_obj.products = result;
                  ProductsDataTable();
                   
            }catch(error){
                data_obj.products = [];
                  ProductsDataTable();
            }
          
        }
    });
}



function SendOrderRequest() {
    // var scrap = $('#txtScrap').val();
    // if(scrap == ""){
    //     scrap = "NULL"; 
    // }
    // var products = JSON.stringify(data_obj.cart);
    //
    // var raw_id  = data_obj.selected_rm.id;
    // console.log({scrap}, {products},{account_id});
    // $('#txtScrap').val("");
    $('#btnSendList').addClass("running");
    $('#btnSendList').attr( "disabled", "disabled" );

    var delivered_products = JSON.stringify(data_obj.list);
    var branch = $('#txtBranch').val();
    var account_id =  sessionStorage.getItem('zen_userid');
    
    if(branch == ""){
             branch = "NULL"; 
     }
    $.ajax({
        url: zenDB_url+"onsen-php-file/OrderDeliver-Products-send.php",
        data: { delivered_products: delivered_products,
            account_id: account_id,
            branch: branch
        },
        method: "post",
        success: function (response) {
            setTimeout(() => {
                $('#btnSendList').removeClass("running");
                $('#btnSendList').removeAttr( "disabled");
                data_obj.list = [];
                Table_List_ClearDraw();
                $('#txtBranch').val("");
                
            }, 1000);
            console.log('$%c' + response, 'color:red;');
        }, 
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            setTimeout(() => {
                $('#btnSendList').removeClass("running");
                $('#btnSendList').removeAttr( "disabled");
            }, 1000);
            alert('fail connection');
        }
    });
    



}