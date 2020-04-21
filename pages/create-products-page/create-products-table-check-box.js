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
    
    //column checkbox select all or cancel
    $("input.select-all").click(function () {
        var checked = this.checked;
        $("input.select-item").each(function (index, item) {
            item.checked = checked;
        });
    });
});