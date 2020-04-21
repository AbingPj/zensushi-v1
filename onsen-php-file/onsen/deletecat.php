<?php
    include 'db.php';
    if(isset($_POST['id'])) {
    $id = $_POST['id'];
    if ($dbconn->connect_error) {
               die("Connection failed: " . $dbconn->connect_error);
     }
    $sql = "DELETE FROM rawcategory WHERE id ='$id'";
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



    if ($dbconn->query($sql) === TRUE) {
        echo "Deleted Category";
    } else {
        echo "Error: ". $dbconn->error;
    }
        $dbconn->close();
    }

?>