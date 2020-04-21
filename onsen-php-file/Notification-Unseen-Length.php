
<?php
include 'db/db.php';  

$sql =  "SELECT
'1' as remarkstype,
id,
seen
FROM accounts WHERE seen = 0

UNION
SELECT
'2' as remarkstype,
id,
seen
FROM orders WHERE seen = 0

UNION
SELECT
'3' as remarkstype,
id,
seen
FROM products_in WHERE seen = 0


UNION
SELECT
'4' as remarkstype,
id,
seen
FROM delivery WHERE seen = 0

UNION
SELECT
'5' as remarkstype,
id,
seen
FROM rawmaterialin WHERE seen = 0


UNION
SELECT
'6' as remarkstype,
id,
seen
FROM rawmaterialout WHERE seen = 0";
$result = $dbconn->query($sql);
echo json_encode($result->num_rows);



$finalquery = "SELECT
'1' as remarkstype,
id,
seen
FROM accounts WHERE seen = 0

UNION
SELECT
'2' as remarkstype,
id,
seen
FROM orders WHERE seen = 0

UNION
SELECT
'3' as remarkstype,
id,
seen
FROM products_in WHERE seen = 0


UNION
SELECT
'4' as remarkstype,
id,
seen
FROM delivery WHERE seen = 0

UNION
SELECT
'5' as remarkstype,
id,
seen
FROM rawmaterialin WHERE seen = 0


UNION
SELECT
'6' as remarkstype,
id,
seen
FROM rawmaterialin WHERE seen = 0";
 //  if ($result->num_rows > 0) {
 //      while($row = $result->fetch_assoc()) {
//           $data[] = $row['seen'];
 //      }
 //  }
 ?>

 