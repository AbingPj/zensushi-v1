<?php
  include 'config.php';

  $message = $_REQUEST['text'];
  $user = $_REQUEST['user'];

  $data['message'] = $message;
  $data['user'] = $user;
  $pusher->trigger('message','sent',$data);
?>