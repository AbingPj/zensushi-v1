function requesthidenotify(){
    card.style.display = "none";
    $('#btnYesRemove').attr("disabled", "disabled");
    $.ajax({
        url: zenDB_url + 'onsen-php-file/NotificationRemove.php',
        data: { myData: myJSON },
        type: 'POST',
        success: function (response) {
            myJSON = null;
            $('#RemoveNotifModal').modal('hide');
            $('#btnYesRemove').removeAttr("disabled"); 
        }
    });
}


{/* <div class="card bg-secondary">
<div class="card-body">
    <div class="d-flex w-100 justify-content-between">
        <h4 class="mb-1">
            <!--  -->
            Admin</h4> 
            <!--  -->
            <small>
                <a class="btn" href="">remove</a>
            </small>
    </div>
   <!--  -->
    <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">Sm Ecoland</h5>
    </div>
    
    <div class="d-flex w-100 justify-content-between">
            <p class="mb-1">Deliver Products</p>
        </div>
        <br>
        <!--  -->
        <div class="d-flex w-100 justify-content-between">
            <p class="mb-1"><a class="btn btn-primary btn-md  text-light">view</a></p>
                <small>2019-03-02 20:16:18</small>
            </div>
</div></div><br> */}
