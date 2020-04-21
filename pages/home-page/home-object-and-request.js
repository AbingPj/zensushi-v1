function HOME_object() {
    this.rawmaterials_critical,
    this.products_critical
}
const data_obj = new HOME_object();

function requestRawMaterialinCritical() {
    var result;
    $.ajax({
        url: zenDB_url + 'onsen-php-file/Critical-RawMaterial-Select.php',
        success: (data) => {
            try {
                result = $.parseJSON(data);
                data_obj.rawmaterials_critical = result;
                setTimeout(() => {
                    CriticalRawMatarial_datatable()
                }, 1000);
            } catch (error) {
                console.log(error)
            }
        }
    });
}

function requestProductinCritical() {
    var result;
    $.ajax({
        url: zenDB_url + 'onsen-php-file/Critical-Products-Select.php',
        success: (data) => {
            try {
                result = $.parseJSON(data);
                data_obj.products_critical = result;
                setTimeout(() => {
                    CriticalProducts_datatable();
                }, 1000);
            } catch (error) {
                console.log(error)
            }
        }
    });
}