<?php
    include 'db.php';
    if(isset($_POST['myrow'])) {
    $ids = $_POST['myrow'];
     echo var_dump($ids);
    $ids2 = implode(",",$ids);
    echo var_dump($ids2);
     if ($dbconn->connect_error) {
               die("Connection failed: " . $dbconn->connect_error);
     }
     
     
      $sql = "DELETE FROM rawcategory WHERE id IN(".implode(',',$ids).")";
      
     
      
      
    if ($dbconn->query($sql) === TRUE) {
        echo "Deleted Category";
    } else {
        echo "Error: ". $dbconn->error;
    }
        $dbconn->close();
    

//     try{
//         if ($dbconn->query($sql) === TRUE) {
//             echo "Deleted Category";
//         } 
//     }
//     catch(Exception $e){
//         echo 'Message: '. $e->getMessage();
//     }
//     $dbconn->close();
// }
    }
    
    

?>