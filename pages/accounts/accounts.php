<!DOCTYPE html>
<html lang="en">
<head>
  <title>Zen Sushi - Accounts</title>
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
<div class="panel" id="accountspage" style="display:none">
  <div class="jumbotron customjumbotron">
  </div>
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

  <div class="container myMinimumContent">


    <div class="row">

      <div class="col-sm-12 mx-auto myOpacity2">
        <br>
        <h2>Accounts</h2>
        <br>
        <br>
        <a class="btn btn-primary" id="btnToRMRecords" href="../../pages/accounts-logs/accountslogs.html">Accounts Log</a>
        <h5>Accounts:</h5>
        <div class="panel-body ld-over" id="myloader">
          <div class="ld ld-ball ld-broadcast"></div>
          <div class="myMinimumContent2">
            <table id="AccountsTable" class="table table-hover" style="background-color: cornsilk; width:100%;">
              <thead>
                <tr>
                  <th style="width: 15%">Account ID</th>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Account Name</th>
                  <th>Account Type</th>
                  <th>Created</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody id="tbody_category">
              </tbody>
            </table>
          </div>
        </div>
        <!-- <button id="select-all" class="btn btn-default">SelectAll/Cancel</button>
        <button id="btnSelected" class="btn btn-danger">Delete Checked -->
        </button>

      </div>
      <!-- col-sm-8 close -->
    </div>
  </div>

  <div class="jumbotron text-center" style="margin-bottom:0">

    <p>Copyright. All Rights Reserved</p>

  </div>



  <!-- Update Modal -->

  <div class="modal fade" id="UpdateAccountModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Update Account</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <!-- Modal body -->
        <div class="modal-body">
          <label for="txtUpdateAccountName">AccountName</label>
          <input type="text" class="form-control" id="txtUpdateAccountName">
          <label for="txtUpdateUsername">Username</label>
          <input type="text" class="form-control" id="txtUpdateUsername" disabled> 
          <label for="txtUpdatePassword">Password</label>
          <input type="text" class="form-control" id="txtUpdatePassword"> 
          <label>Account Type:</label>
          <select class="custom-select" id="selectionUpdateAccounType">
          </select>
          <br>
        
        </div>
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-warning" data-dismiss="modal" id="btnUpdateAccount">Update</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        </div>
      </div>
    </div>
  </div>



  <!-- Delete Modal -->

  <div class="modal fade" id="DeleteAccountModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Delete Account</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <!-- Modal body -->
        <div class="modal-body">
          <h5>Are you sure you want to delete this account:
            <br>
            <b id="DeleteNameLabel"></b> ?</h5>
          <br>
          <button type="button" class="btn btn-danger" id="btnDeleteAccount" data-dismiss="modal">YES</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">NO</button>
        </div>
        <!-- Modal footer -->
        <div class="modal-footer">
        </div>
      </div>
    </div>
  </div>

  <script src="../../js/jquery-3.3.1.min.js"></script>
  <script src="https://js.pusher.com/4.3/pusher.min.js"></script>
  <script src="../../js/zen.js"></script>
  <script src="../../js/zenUpdate.js"></script>
  <script src="../../js/bootstrap.min.js"></script>
  <script src="../../js/bootstrap_notify_3/dist/bootstrap-notify.min.js"></script>
  <script type="text/javascript" src="../../DataTables/datatables.min.js"></script>
  <script src="accounts-datatable.js"></script>
  <script src="accounts-objects.js"></script>
  <script src="accounts-pusher.js"></script>
  <script src="accounts-request.js"></script>
  <script src="accounts.js"></script>
  <script src="accounts-doc_ready.js"></script>

</div>
</body>



</html>


<script>
   var view_account_id = null;
    <?php   if(isset($_GET['view_account_id'])){ ?>
        view_account_id=<?php echo $_GET['view_account_id'];}?>;
    if (view_account_id == null){
      sessionStorage.setItem('view_account_id', null );
    }else{
      sessionStorage.setItem('view_account_id', view_account_id );
    }
</script>