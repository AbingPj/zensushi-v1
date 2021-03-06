
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

<body >
    <div class="panel">
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
                              </a>
                    </li>
                </ul>


                <ul class="nav navbar-nav">
                    <li class="nav-item" id="Notification_navItem">
                        <a class="nav-link" href="../../pages/notification-page/notification.html">Notifications <span
                                class="oi oi-bell">
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
        <div class="container myMinimumContent myOpacity2">

            <div class="container" style="margin-top:5%;
                margin-bottom:100px;">
                <div class="row">
                    <div class="col-sm-12 col-md-8 col-lg-8 mx-auto">
                        <br>
                        <div class="card">
                            <div class="card-header" id="account_name">
                                <h4 id='accountname'>Account_name</h4>
                                <h5 id='branch'>Branch</h5>
                            </div>
                            <div class="card-body">
                                <br>
                                <h5 class="card-title text-center">Request Product</h5> <br>
                        <table id="example" class="table table-hover display nowrap" style="background-color: cornsilk;width:100%; ">
                             <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Quantity</th>
                                        <th>Unit</th>
                                        <th>Product</th>
                                        <!-- <th>Edit/Delete</th> -->
                                    </tr>
                                </thead>
                                <tbody id="tbody_rm">
                                </tbody>
                                </table>
                                
                                
                                <!-- <ul class="list-group list-group-flush" id='order_list'>
                                </ul> -->

                                <br>
                                <!-- <center><a href="#" class="btn btn-primary">Confirm</a></center> -->
                            </div>
                            <div class="card-footer text-muted text-center">
                               <div id="divcreated_at"></div>
                            </div>
                        </div>
                        <br>

                    </div>

                </div>
            </div>







        </div>


        <!-- footer -->
        <div class="jumbotron text-center" style="margin-bottom:0">
            <p>Copyright. All Rights Reserved</p>
        </div>
        <script src="../../js/jquery-3.3.1.min.js"></script>
        <script src="https://js.pusher.com/4.3/pusher.min.js"></script>
        <script src="../../js/zen.js"></script>
        <script src="../../js/zenUpdate.js"></script>
        <script src="../../js/bootstrap.min.js"></script>
        <script src="../../js/bootstrap_notify_3/dist/bootstrap-notify.min.js"></script>
        <script type="text/javascript" src="../../DataTables/datatables.min.js"></script>
        <script type="text/javascript" src="request_list.js"></script>
</body>
</html>
<script>
     var order_id=<?php echo $_GET['orderId']; ?>;
    sessionStorage.setItem('orderId', order_id );
</script>
