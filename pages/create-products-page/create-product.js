

$('#CategorySelection').on("change", () => {
    displayCatSelectionChange();
});

$('#RawmaterialsSelection').on("change", () => {
    displayRawSelectionChange();
});


$('#btnSaveProd').on("click", () => {
    addProd();
});


$('#btnSaveProd2').on("click", () => {
    addProd2();
});




$('#btndeleteProd').on("click", () => {
    deleteProd();
});

$('#btnDeleteProd_Multiple').on("click", () => {
    deleteMultipleProd();
});

function clearRMSelection() {
    $("#RawmaterialsSelection option").remove();
}

function clearUnitSubcombo() {
    $("#UnitSubSelection option").remove();
}

function clearProductsForm() {
    $('#CategorySelection').prop('selectedIndex', 0);
    $('#txtProductName').val("");
    $("#txtValueOfProduct").val("");
    $('#txtProductName2').val("");
    displayCatSelectionChange();
}

function clearRMcombo_AtUpdateModal() {
    $("#RMSelectionAtUpdateProduct option").remove();
}

clearUnitSubcombo_AtUpdateModal= ()=>{
    $("#SubUnitSelection_AtUpdateProdutcs option").remove();
};

$('#RMSelectionAtUpdateProduct').on("change", () => {
    displayRawSelectionChange_AtUpdateModal();
});


$('#btnUpdateProd').on("click", () => {
    console.log('OKEY')
    updateProd();
});



$('#btnUpdateProd2').on("click", () => {
    updateProd2();
});

