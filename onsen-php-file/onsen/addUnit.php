<?php
    include 'db.php';
    if(isset($_POST['unit'])) {
    $unit = $_POST['unit'];
    $sql = "INSERT INTO units2 (name) VALUES('$unit')";
    $dbconn->query($sql);
    echo "New Category Added,<br> Category Name: $unit";
    $dbconn->close();
}
