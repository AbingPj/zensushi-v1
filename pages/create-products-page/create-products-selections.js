
function displayCatSelection() {
    var Parent = document.getElementById('CategorySelection');
    var Parent2 = document.getElementById('CategorySelectionAtUpdateProduct');
    
    var child2 = document.createElement('option');
    child2.innerHTML = 'ALL';
    Parent.appendChild(child2);

    child2 = document.createElement('option');
    child2.innerHTML = 'ALL';
    Parent2.appendChild(child2);
    

    $.each(mydataObj.categories, function (i, value) {
        var child = document.createElement('option');
        child.setAttribute('value', value.id)
        child.innerHTML = value.name;
        Parent.appendChild(child);

        child = document.createElement('option');
        child.setAttribute('value', value.id)
        child.innerHTML = value.name;
        Parent2.appendChild(child);
    });
    displayCatSelectionChange();
}


function displayCatSelectionChange() {
    clearRMSelection();
    var id = $("#CategorySelection option:selected").val();
    //console.log('ID: '+id);
    mydataObj.get_selected_category_id(id);
    displayRawSelection();
}

function displayRawSelection() {
    var Parent = document.getElementById('RawmaterialsSelection');
    $.each(mydataObj.selected_rawmaterials, function (i, value) {
        var child = document.createElement('option');
        child.setAttribute('value', value.id);
        child.innerHTML = value.name;
        Parent.appendChild(child);
    });
    displayRawSelectionChange();
}


function displayRawSelectionChange() {
    var id = $("#RawmaterialsSelection option:selected").val();
    console.log(id);
    mydataObj.get_selected_unit_label(id);
    var label = document.getElementById('LabelUnitsAtCreateProducts');
    label.innerHTML = mydataObj.get_selected_unit_label_name();
    mydataObj.set_selected_units_sub();
    //console.log("GETTED" + mydataObj.selected_units_sub);
    clearUnitSubcombo();
    displayUnitsSubSelection();
}

function displayUnitsSubSelection() {
    var Parent = document.getElementById('UnitSubSelection');
    $.each(mydataObj.selected_units_sub, function (i, value) {
        var child = document.createElement('option');
        child.setAttribute('value', value.id);
        child.innerHTML = value.name;
        Parent.appendChild(child);
    });
}







function displayCatSelectionChange_AtUpdateModal() {
    clearRMcombo_AtUpdateModal();
    var id = $("#CategorySelectionAtUpdateProduct option:selected").val();
    mydataObj.get_selected_category_id2(id);
    displayRawSelection_AtUpdateModal2();
}

function displayRawSelection_AtUpdateModal() {
    var Parent = document.getElementById('RMSelectionAtUpdateProduct');
    $.each(mydataObj.rawmaterials, function (i, value) {
        var child = document.createElement('option');
        child.setAttribute('value', value.id);
        child.innerHTML = value.name;
        Parent.appendChild(child);
    });
}

function displayRawSelection_AtUpdateModal2() {
    var Parent = document.getElementById('RMSelectionAtUpdateProduct');
    $.each(mydataObj.selected_rawmaterials2, function (i, value) {
        var child = document.createElement('option');
        child.setAttribute('value', value.id);
        child.innerHTML = value.name;
        Parent.appendChild(child);
    });

}

function displayRawSelectionChange_AtUpdateModal() {
    var id = $("#RMSelectionAtUpdateProduct option:selected").val();
    mydataObj.get_selected_unit_label2(id);
    var label = document.getElementById('labelUnits_AtAtProducts');
    label.innerHTML = mydataObj.get_selected_unit_label_name2();
    mydataObj.set_selected_units_sub2();
   
    clearUnitSubcombo_AtUpdateModal();
    displayUnitsSubSelection_AtUpdateModal();
}

function displayUnitsSubSelection_AtUpdateModal() {
    var Parent = document.getElementById('SubUnitSelection_AtUpdateProdutcs');
    $.each(mydataObj.selected_units_sub2, function (i, value) {
        var child = document.createElement('option');
        child.setAttribute('value', value.id);
        child.innerHTML = value.name;
        Parent.appendChild(child);
    });
}





function displayPackagingSelection() {
    var Parent = document.getElementById('PackagingSelection');
    var Parent2 = document.getElementById('PackagingSelection_AtUpdateProducts');
    var Parent3 = document.getElementById('PackagingSelection2');
    var Parent4 = document.getElementById('PackagingSelection2_AtUpdateProducts');
    $.each(mydataObj.packaging, function (i, value) {
        var child = document.createElement('option');
        child.setAttribute('value', value.id);
        child.innerHTML = value.name;
        Parent.appendChild(child);
        var child2 = document.createElement('option');
        child2.setAttribute('value', value.id);
        child2.innerHTML = value.name;
        Parent2.appendChild(child2);
        var child3 = document.createElement('option');
        child3.setAttribute('value', value.id);
        child3.innerHTML = value.name;
        Parent3.appendChild(child3);
        var child4 = document.createElement('option');
        child4.setAttribute('value', value.id);
        child4.innerHTML = value.name;
        Parent4.appendChild(child4);
    });

     
}



