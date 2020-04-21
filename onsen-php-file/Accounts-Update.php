<?php

include 'db/db.php';

$obj = json_decode($_POST["myData"]);
$id = $obj->{'id'};
$newusername = $obj->{'username'};
$newpassword = $obj->{'password'};
$newaccount_name = $obj->{'account_name'};
$newaccounts_type_id = $obj->{'accounts_type_id'};

if ($dbconn->connect_error) {

    die("Connection failed: " . $dbconn->connect_error);

}

$sql = "UPDATE `accounts`
SET 
`username`= '$newusername',
`password`='$newpassword',
`accounts_type_id`='$newaccounts_type_id',
`account_name`='$newaccount_name'
WHERE id = $id";

if ($dbconn->query($sql) === true) {
    echo "Succesfuly Updated";
    include 'Accounts-UpdatePusher.php';
} else {
    echo "Error: ". $dbconn->error;
}

$dbconn->close();
