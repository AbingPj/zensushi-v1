
// function clearQuantityUnitSelection() {
//     $("#QuantityUnitSelection option").remove();
// }
// function clearQuantityUnitSelection_AtUpdateModal() {
//     $("#QuantityUnitSelection_AtUpdateModal option").remove();
// }


$('#btnSaveRm').on("click", () => {
    $('#btnSaveRm').addClass("running");
    $('#btnSaveRm').attr("disabled", "disabled");
    if ( $("#CategorySelectionAtCreateRawmaterial option:selected").val().trim() == 0
        || $("#txtRawMaterial").val().trim() == '') {
            $('#btnSaveRm').removeClass("running");
            $('#btnSaveRm').removeAttr( "disabled");
    } 
    else {
        addRM_request();
    }
});



// $('#btnSaveRm').on("click", () => {
//     $('#btnSaveRm').addClass("running");
//     $('#btnSaveRm').attr("disabled", "disabled");
//     if ($("#QuantityUnitSelection option:selected").val() == 0
//         // || $("#UnitSubSelection option:selected").val() == undefined
//         || $("#CategorySelectionAtCreateRawmaterial option:selected").val().trim() == 0
//         || $("#txtRawMaterial").val().trim() == '') {
//             $('#btnSaveRm').removeClass("running");
//             $('#btnSaveRm').removeAttr( "disabled");
//     } 
//     else {
//         addRM_request();
//     }
// });



// $('#QuantityUnitSelection').on("change", () => {
//     displayUnitSub();
// });

// $('#QuantityUnitSelection_AtUpdateModal').on("change", () => {
//     displayUnitSub_AtUpdateModal();
// });

// function clearUnitSubSelection() {
//     $("#UnitSubSelection option").remove();
// }

// function clearUnitSubSelection_AtUpdateModal() {
//     $("#UnitSubSelection_AtUpdateModal option").remove();
// }


