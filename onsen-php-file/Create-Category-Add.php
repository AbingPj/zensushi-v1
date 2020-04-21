<?php

    include 'db/db.php';

    if(isset($_POST['categories'])) {

    $cat = $_POST['categories'];

    $sql = "INSERT INTO rawcategory (name) VALUES('$cat')";
    $dbconn->query($sql);

        echo "New Category Added,<br> Category Name: $cat";

        
    

    $sql2 = "SELECT id,name FROM rawcategory ORDER BY id DESC";

    $result = $dbconn->query($sql2);

    if ($result->num_rows > 0) {
         while($row = $result->fetch_assoc()) {
             	$arr[] = $row;
         }
    }

    

    



  include 'Pusher-Api/config.php';

  $data = json_encode($arr);
  $pusher->trigger('update-create-category-channel','sent',$data);
    $sql3 = "UPDATE tbl_UpdateData SET CategoryUpdateTime = CURRENT_TIMESTAMP WHERE id = 0";
    $dbconn->query($sql3); 



$dbconn->close();
}

