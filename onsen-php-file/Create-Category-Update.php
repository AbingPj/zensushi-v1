<?php
include 'db/db.php';
$obj = json_decode($_POST["myData"]);
//var_dump($obj);
//echo $obj->{'newname'};
$id = $obj->{'id'};
$newname = $obj->{'newname'};
if ($dbconn->connect_error) {
    die("Connection failed: " . $dbconn->connect_error);
}
$sql = "UPDATE rawcategory SET name = '$newname' WHERE id = '$id'";
if ($dbconn->query($sql) === true) {
    echo "New Category Name Updated:<br> category name: $newname";
    $sql2 = "SELECT id,name FROM rawcategory ORDER BY id DESC";
    $result2 = $dbconn->query($sql2);
    if ($result2->num_rows > 0) {
        while ($row2 = $result2->fetch_assoc()) {
            $arr2[] = $row2;
        }
    }
    include 'Pusher-Api/config.php';
    $data2 = json_encode($arr2);
    $pusher->trigger('update-create-category-channel', 'sent', $data2);
    $sql3 = "UPDATE tbl_UpdateData SET CategoryUpdateTime = CURRENT_TIMESTAMP WHERE id = 0";
    $dbconn->query($sql3);
} else {
    echo "Error: " . $sql . " " . $dbconn->error;
}
$dbconn->close();
