<?php
    include 'db/db.php';
    if(isset($_POST['id'])) {
    $id = $_POST['id'];
    if ($dbconn->connect_error) {
               die("Connection failed: " . $dbconn->connect_error);
     }
    $sql = "DELETE FROM rawcategory WHERE id ='$id'";
    
    if ($dbconn->query($sql) === TRUE) {
        echo "Deleted Category";
        
        
                $sql2 = "SELECT id,name FROM rawcategory ORDER BY id DESC";
                $result2 = $dbconn->query($sql2);
                 if ($result2->num_rows > 0) {
                     while($row2 = $result2->fetch_assoc()) {
             	          $arr2[] = $row2;
                     }
                 }
                include 'Pusher-Api/config.php';
                $data2 = json_encode($arr2);
                $pusher->trigger('update-create-category-channel','sent',$data2);
                
        
    } else {
        echo "Error: ". $dbconn->error;
    }
        $dbconn->close();
    }

?>