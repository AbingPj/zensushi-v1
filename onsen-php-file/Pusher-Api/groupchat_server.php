<?php
if(isset($_POST['msg'])) {
    $msg = $_POST['msg'];
    echo $msg;
  include 'config.php';
  $pusher->trigger('groupchat-channel' ,'sent', $msg);

}


