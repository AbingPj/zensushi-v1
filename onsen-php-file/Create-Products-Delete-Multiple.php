    <?php
include 'db/db.php';
if (isset($_POST['myrow'])) {
    $ids = $_POST['myrow'];
    //echo var_dump($ids);
    //$ids2 = implode(",",$ids);
    //echo var_dump($ids2);
    if ($dbconn->connect_error) {
        die("Connection failed: " . $dbconn->connect_error);
    }

    $sql = "DELETE FROM products WHERE id IN(" . implode(',', $ids) . ")";

    if ($dbconn->query($sql) === true) {
        include 'Create-Product-PusherUpdate.php';
    } else {
        echo "Error: " . $dbconn->error;
    }
    $dbconn->close();
}
?>
