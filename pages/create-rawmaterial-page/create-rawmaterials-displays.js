function displayCategoryAtSelection() {
    var parent = document.getElementById('CategorySelectionAtCreateRawmaterial');
    var child = document.createElement('option');
    child.setAttribute('value', '0');
    child.setAttribute('selected', '');
    child.innerHTML = "Choose...";
    parent.appendChild(child);

    var parent2 = document.getElementById('CategorySelectionAtCreateRawmaterial_AtUpdateModal');
    var child2 = document.createElement('option');
    child2.setAttribute('value', '0');
    child2.setAttribute('selected', '');
    child2.innerHTML = "Choose...";
    parent2.appendChild(child2);

    $.each(mydata.categories, function (i, value) {
        var child = document.createElement('option');
        child.setAttribute('value', value.id);
        child.innerHTML = value.name;
        parent.appendChild(child);

        var child2 = document.createElement('option');
        child2.setAttribute('value', value.id);
        child2.innerHTML = value.name;
        parent2.appendChild(child2);
    });

}


function displayQuantityUnit() {
    var Parent = document.getElementById('QuantityUnitSelection');
    try {
        $.each(mydata.unitsquantity, function (i, value) {
            var child = document.createElement('option');
            child.setAttribute('value', value.id);
            child.innerHTML = value.name;
            Parent.appendChild(child);
        });
    } catch (error) {
        console.log('catch');
    }
}


function displayQuantityUnit_AtUpdateModal() {
    //clearQuantityUnitSelection_AtUpdateModal();
    var Parent = document.getElementById('QuantityUnitSelection_AtUpdateModal');
    try {
        $.each(mydata.unitsquantity, function (i, value) {
            var child = document.createElement('option');
            child.setAttribute('value', value.id);
            child.innerHTML = value.name;
            Parent.appendChild(child);
        });
       
    } catch (error) {
        console.log('catch');
    }
}





// function displayUnitSub() {
//     clearUnitSubSelection();
//     mydata.units_id_selected = $("#QuantityUnitSelection option:selected").val();
//     mydata.units_sub_selected = mydata.units_sub.filter(function (u) {
//         return u.units_id == mydata.units_id_selected;
//     });
//     try {
//         var Parent = document.getElementById('UnitSubSelection');
//         $.each(mydata.units_sub_selected, function (i, value) {
//             var child = document.createElement('option');
//             child.setAttribute('value', value.id);
//             child.innerHTML = value.name;
//             Parent.appendChild(child);
//         });
//     } catch (error) {
//         console.log('catch');
//     }
// }

// function displayUnitSub_AtUpdateModal() {
//     clearUnitSubSelection_AtUpdateModal();
  
//     mydata.units_id_selected = $("#QuantityUnitSelection_AtUpdateModal option:selected").val();
//     mydata.units_sub_selected = mydata.units_sub.filter(function (u) {
//         return u.units_id == mydata.units_id_selected;
//     });
//     try {
//         var Parent = document.getElementById('UnitSubSelection_AtUpdateModal');
//         $.each(mydata.units_sub_selected, function (i, value) {
//             var child = document.createElement('option');
//             child.setAttribute('value', value.id);
//             child.innerHTML = value.name;
//             Parent.appendChild(child);
//         });
//     } catch (error) {
//         console.log('catch');
//     }
// }
