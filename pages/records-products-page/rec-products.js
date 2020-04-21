

$('#btnClose').on('click', () => {
    console.log('Close');
    $('#productlist').collapse('hide');
})


$('#btnClose2').on('click', () => {
    console.log('Close');
    $('#deliverylist').collapse('hide');
})



$('#btnInUpdateModal').on('click', () => {
    UpdateProductInList()
});
$('#btnInDeleteModal').on('click', () => {
    deleteProductInList() 
});




$('#btnOutUpdateModal').on('click', () => {
    UpdateDeliveryList();
});
$('#btnOutDeleteModal').on('click', () => {
    deleteDeliveryList();
});

$('#btnUpdateProductIn').on('click', () => {
    UpdateProductsIn();
});

$('#btnUpdateProductIn2').on('click', () => {
    UpdateProductsIn2();
});


$('#btnDeleteProductIn').on('click', () => {
    DeleteProductsIn();
});