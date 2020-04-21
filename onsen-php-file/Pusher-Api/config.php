<?php
  require __DIR__ . '/vendor/autoload.php';

  $options = array(
    'cluster' => 'ap1',
    'useTLS' => true
  );
  $pusher = new Pusher\Pusher(
    'da7a7c063cc49b6f74d2',
    '6bf752887ccdf38e1113',
    '607343',
    $options
  );
?>