<!DOCTYPE html>
<html lang="en">

<head>
    <title>Zen Sushi - RawMaterial Inventory</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="../../img/zenicon.png">
    <link rel="stylesheet" href="../../css/bootstrap.min.css">
    <link rel="stylesheet" href="../../css/style.css">
    <link rel="stylesheet" href="../../css/open-iconic-master/font/css/open-iconic-bootstrap.css">
    <link rel="stylesheet" type="text/css" href="../../css/loading.css" />
    <link rel="stylesheet" type="text/css" href="../../css/loading-btn.css" />
    <link rel="stylesheet" type="text/css" href="../../css/animation.css" />
    <link rel="stylesheet" type="text/css" href="../../DataTables/datatables.min.css" />
</head>

<body>
        <div class="panel" id="recproducts" style="display:none">


        <!-- header -->
        <div class="jumbotron customjumbotron">
        </div>

        <!-- navbar -->
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <img src="../../img/zenicon3.png" class="rounded float-left">
            <a class="navbar-brand active" href="../../pages/home-page/home.html">Zen Sushi</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav mr-auto">
                        <li class="nav-item dropdown" id="Library_navItem">
                                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                    Library
                                </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="../../pages/create-category-page/create-category.html">Categories</a>
                                    <a class="dropdown-item" href="../../pages/create-rawmaterial-page/create-rawmaterial.html">Raw</a>
                                    <a class="dropdown-item" href="../../pages/create-products-page/create-product.html">Products</a>
                                    <a class="dropdown-item" href="../../pages/accounts/accounts.php">Accounts</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown" id="Inventory_navItem">
          <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
            Inventory
          </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="../../pages/inventory-rawmaterials-page/inv-rawmaterials.html">Raw Invetory</a>
            <a class="dropdown-item" href="../../pages/inventory-products-page/inv-products.html">Production</a>
          </div>
        </li>
        <li class="nav-item dropdown" id="Records_navItem">
          <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
            Records
          </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="../../pages/records-rawmaterials-page/rec-rawmaterials.php">Raw records</a>
            <a class="dropdown-item" href="../../pages/records-products-page/rec-products.php">Product records</a>
          </div>
        </li>
                            <li class="nav-item dropdown" id="Reports_navItem">
                                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                    Reports
                                </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="../../pages/reports-rawmaterials-page/rp-rawmaterials.html">Raw</a>
                                    <a class="dropdown-item" href="../../pages/reports-products-page/rp-products.html">Products</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown" id="Request_navItem">
                                <a class="nav-link" href="../../pages/order-products-page/order-products.html" id="navbardrop">
                                    Request/Order
                                </a>
                            </li>
                            <li class="nav-item dropdown" id="Deliver_navItem">
                                    <a class="nav-link" href="../../pages/deliver-page/deliver-products.html" id="navbardrop">
                                        Deliver
                                </a>
                            </li>
                </ul>


                <ul class="nav navbar-nav">
                    <li class="nav-item" id="Notification_navItem">
                        <a class="nav-link" href="../../pages/notification-page/notification.html">Notifications
                            <span class="oi oi-bell">
                                <big><span class="badge badge-danger" id="notification_badge"></span></big>
                            </span>
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            <b id="usernameAtNavabar"> .</b>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item"  id="LogOut">Log Out</a>
                        </div>
                    </li>
                </ul>

            </div>
        </nav>


        <!--body-->
        <div class="container myMinimumContent">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12  mx-auto  myOpacity5">
                    <h2 style="margin: 10px 20px 15px 20px">Products Inventory Records </h2>
                </div>
            </div>
            <div class="row">


                <div class="col-sm-12 col-md-12 col-lg-12 mx-auto myOpacity2">
                    <!-- <ul class="nav nav-tabs border border-info border-bottom-0"> -->
                    
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#home">Produce</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#menu1">Delivery</a>
                        </li>
                    </ul>

                    <!-- Tab panes -->
                    <div class="tab-content myOpacity6">
                    <!-- <div class="myOpacity8"> &nbsp; </div> -->

                        <div id="home" class="container tab-pane active">
                        <br>
                            <h4 id="anc" class="">Produce</h4>
                            <div class="collapse" id="productlist">
                            <div class="text-right">
                                    <button class="btn btn-success btn-sm" id="btnClose">Close</button>
                            </div>
                                    <table id="product_inlist_table" class="table table-hover display nowrap" style="background-color: cornsilk; width:100%;">
                                        <thead>
                                            <tr>
                                                <th>options</th>
                                                <th>Product</th>
                                                <th>Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody id="tbody_products">
                                        </tbody>
                                        <!-- <tfoot style="background-color:#fcf4c2">
                                                        <tr>
                                                            <th>Total </th>
                                                            <th></th>
                                                            <th id="totalQ"></th>
                                                            <th id="totalW"></th>
                                                        </tr>
                                        </tfoot> -->
                                    </table>
                                </div>
                            <hr class="my-4 ">
                                <table id="Products_in_table" class="table table-hover display nowrap table-sm" style="background-color: cornsilk;width:100%; ">
                                    <thead>
                                        <tr>
                                            <th>option</th>
                                            <th>id</th>
                                            <th>Date</th>
                                            <th>Produce By</th>
                                            <th>RM</th>
                                            <th>OUT</th>
                                            <th>Scrapt</th>
                                            <th>Bones</th>
                                            <th>Total</th>
                                            <th>Diff.</th>
                                            <th>Products</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbody_rm">
                                    </tbody>
                                </table>
                            </p>
                            
                            
                        </div>


                        <div id="menu1" class="container tab-pane fade">
                            <br>
                            <h4 id="anc2">Products Delivery</h4>
                            <div class="collapse" id="deliverylist">
                            <div class="text-right">
                                <button class="btn btn-success btn-sm" id="btnClose2">Close</button>
                            </div>
                                <table id="deliverylist_table" class="table table-hover display nowrap" style="background-color: cornsilk; width:100%;">
                                    <thead>
                                        <tr>
                                            <th>options</th>
                                            <th>Product</th>
                                            <th>Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbody_products">
                                    </tbody>
                                    <!-- <tfoot style="background-color:#fcf4c2">
                                                    <tr>
                                                        <th>Total </th>
                                                        <th></th>
                                                        <th id="totalQ"></th>
                                                        <th id="totalW"></th>
                                                    </tr>
                                                </tfoot> -->
                                </table>
                            </div>
                            <hr class="my-4 ">
                                <table id="Products_out_table" class="table table-hover display nowrap" style="background-color: cornsilk;width:100%; ">
                                    <thead>
                                        <tr>
                                            <th>id</th>
                                            <th>Date</th>
                                            <th>Deliver By</th>
                                            <th>    </th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbody_rm">
                                    </tbody>
                                </table>
                            </p>

                           


                        </div>

                    </div>




                </div>
                <br>
                <div class="col-sm-12 col-md-12 col-lg-12  mx-auto  myOpacity6">
                    <hr class="my-4">
                </div>
            </div>

        </div>

        <!-- footer -->
        <div class="jumbotron text-center" style="margin-bottom:0">
            <p>Copyright. All Rights Reserved</p>
        </div>


        
  <!-- Update Modal -->
  <div class="modal fade" id="InUpdateModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Update</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <!-- Modal body -->
        <div class="modal-body">

                <H5 id="lblProductName"></H5>
                <label id="lblCreated"></label><br>
                <label for="NewCategoryName">Quantity:</label>
                <input type="text" class="form-control" id="txtNewQuantity">
                <label ><b id="lblUnit"><b></label>

        </div>
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-warning" data-dismiss="modal" id="btnInUpdateModal">Update</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        </div>
      </div>
    </div>
  </div>



  <!-- Delete Modal -->
  <div class="modal fade" id="InDeleteModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Delete</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <!-- Modal body -->
        <div class="modal-body">
          <h5>Are you sure you want to delete this record:
            <br>
            <b id="DeleteNameLabel"></b> ?</h5>
          <br>
          <button type="button" class="btn btn-danger" id="btnInDeleteModal" data-dismiss="modal">YES</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">NO</button>
        </div>
        <!-- Modal footer -->
        <div class="modal-footer">
        </div>
      </div>
    </div>
  </div>


    
  <!-- Update Modal -->
  <div class="modal fade" id="OutUpdateModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Update Category</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <!-- Modal body -->
        <div class="modal-body">
                <H5 id="lblProductName2"></H5>
                <label id="lblCreated2"></label><br>
                <label for="NewCategoryName2">Quantity:</label>
                <input type="text" class="form-control" id="txtNewQuantity2">
                <label ><b id="lblUnit2"><b></label>
        </div>
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-warning" data-dismiss="modal" id="btnOutUpdateModal">Update</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        </div>
      </div>
    </div>
  </div>



  <!-- Delete Modal -->
  <div class="modal fade" id="OutDeleteModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Delete Category</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <!-- Modal body -->
        <div class="modal-body">
          <h5>Are you sure you want to delete this category:
            <br>
            <b id="DeleteNameLabel"></b> ?</h5>
          <br>
          <button type="button" class="btn btn-danger" id="btnOutDeleteModal" data-dismiss="modal">YES</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">NO</button>
        </div>
        <!-- Modal footer -->
        <div class="modal-footer">
        </div>
      </div>
    </div>
  </div>



  <!-- Update Modal -->
  <div class="modal fade" id="UpdateProductsInModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Update Category</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <!-- Modal body -->
        <div class="modal-body">
                <label for="txtCreated">Date:</label>
                <input type="datetime-local" id="txtCreated" class="form-control" min="2015-01-01" max="2035-12-31">
                <label for="NewCategoryName2">Scarpt:</label>
                <input type="number" class="form-control" id="txtScrapt">
                <label for="NewCategoryName2">Bones:</label>
                <input type="number" class="form-control" id="txtBones">
        </div>
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-warning" data-dismiss="modal" id="btnUpdateProductIn">Update</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        </div>
      </div>
    </div>
  </div>


  <!-- Update Modal -->
  <div class="modal fade" id="UpdateProductsInModal2">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Update Category</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <!-- Modal body -->
        <div class="modal-body">
                <label for="txtCreated">Date:</label>
                <input type="datetime-local" id="txtCreated2" class="form-control" min="2015-01-01" max="2035-12-31">
                <label for="NewCategoryName2">Scarpt:</label>
                <input type="number" class="form-control" id="txtScrapt2">
                <label for="NewCategoryName2">Bones:</label>
                <input type="number" class="form-control" id="txtBones2">
        </div>
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-warning" data-dismiss="modal" id="btnUpdateProductIn2">Update</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        </div>
      </div>
    </div>
  </div>



  <!-- Delete Modal -->
  <div class="modal fade" id="DeleteProductsInModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Delete</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <!-- Modal body -->
        <div class="modal-body">
          <h5>Are you sure you want to delete this:
            <br>
            <b id="DeleteNameLabel"></b> ?</h5>
          <br>
          <button type="button" class="btn btn-danger" id="btnDeleteProductIn" data-dismiss="modal">YES</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">NO</button>
        </div>
        <!-- Modal footer -->
        <div class="modal-footer">
        </div>
      </div>
    </div>
  </div>






    </div>
    <script src="../../js/jquery-3.3.1.min.js"></script>
    <script src="https://js.pusher.com/4.3/pusher.min.js"></script>
    <script src="../../js/zen.js"></script>
    <script src="../../js/zenUpdate.js"></script>
    <!-- <script src="../../js/myjs.js"></script> -->


    <script src="../../js/bootstrap.min.js"></script>
    <script src="../../js/bootstrap_notify_3/dist/bootstrap-notify.min.js"></script>
    <script type="text/javascript" src="../../DataTables/datatables.min.js"></script>
    <script src="rec-products-object.js"></script>
    <script src="rec-products-datatable.js"></script>
    <script src="rec-products-request.js"></script>
    <script src="rec-products-pusher.js"></script>
    <script src="rec-products.js"></script>
    <script src="rec-products-doc_ready.js"></script>
   









</body>


</html>


<script>

     
    var remarkstype = null;
    var rec_id = null;

    <?php   if(isset($_GET['remarkstype'])) { ?>
        remarkstype=<?php echo $_GET['remarkstype'];?>;
        rec_id=<?php echo $_GET['rec_id'];}?>;
    if (remarkstype == null){
        sessionStorage.setItem('remarkstype', null );
    }else if(remarkstype == '3'){
        sessionStorage.setItem('remarkstype', '3' );
        $('.nav-tabs a[href="#home"]').tab('show')  
    }else if(remarkstype == '4'){
        sessionStorage.setItem('remarkstype', '4' );
         $('.nav-tabs a[href="#menu1"]').tab('show')
       
    }
    
</script>

