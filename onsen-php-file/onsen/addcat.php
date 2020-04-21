<?php
    include '../db/db.php';
    if(isset($_POST['categories'])) {
    $cat = $_POST['categories'];
    $sql = "INSERT INTO rawcategory (name) VALUES('$cat')";
    $dbconn->query($sql);
    echo "New Category Added,<br> Category Name: $cat";
    $dbconn->close();
}




/*
  include 'db.php';
    if(isset($_POST['categories'])) {
    $cat = $_POST['categories'];
    $var = trim($cat);
    if(isset($var) === true && $var === '') {
        // It's empty
        echo "Textbox is empty";
    }
    else {
          // It's not empty
           //$conn = new mysqli('localhost', 'root', '', 'zensushi');
           // Check connection
           if ($dbconn->connect_error) {
               die("Connection failed: " . $dbconn->connect_error);
           }
           $sql = "INSERT INTO rawcategory (name)
                     VALUES('$cat')";
           if ($dbconn->query($sql) === TRUE) {
                     echo "New Category Added:<br> category name: $cat";
           } else {
                    echo "Error: " . $sql . " " . $dbconn->error;
           }
                     $dbconn->close();
           }
} */





?>









