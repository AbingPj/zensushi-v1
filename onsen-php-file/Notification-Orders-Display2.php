<?php
include 'db/db.php';  

$start = $_GET['start'];

$query = mysqli_query($dbconn, 
// "SELECT 
// orders.id,
// orders.seen,
// orders.created_at,
// orders.account_id,
// accounts.account_name,
// orders.branch
// FROM orders
// INNER JOIN accounts ON accounts.id = orders.account_id
// ORDER BY orders.created_at DESC
// LIMIT $start,5
// "
"(SELECT id, account_name, 
'' as branch, 
created_at, 
seen, 
'New Account'  as remarks,
'1' as remarkstype
FROM accounts WHERE id <> 1 and seen <> 2)

UNION
(SELECT orders.id, 
accounts.account_name, 
orders.branch,
orders.created_at, 
orders.seen, 
'Request Products'   as remarks,
'2' as remarkstype
FROM orders
INNER JOIN accounts ON accounts.id = orders.account_id 
 WHERE orders.seen <> 2
)

UNION
(SELECT products_in.id, 
accounts.account_name, 
'' as branch,
products_in.created_at, 
products_in.seen, 
'Add Products'   as remarks,
'3' as remarkstype
FROM products_in
INNER JOIN accounts ON accounts.id = products_in.created_by
  WHERE products_in.seen <> 2
)

UNION
(SELECT delivery.id, 
accounts.account_name, 
delivery.branch,
delivery.created_at, 
delivery.seen, 
'Deliver Products'   as remarks,
'4' as remarkstype
FROM delivery
INNER JOIN accounts ON accounts.id = delivery.account_id
 WHERE delivery.seen <> 2
)

UNION
(SELECT rawmaterialin.id, 
accounts.account_name, 
'' as branch,
rawmaterialin.created_at, 
rawmaterialin.seen, 
'Stock-IN Raw Material'   as remarks,
'5' as remarkstype
FROM rawmaterialin
INNER JOIN accounts ON accounts.id = rawmaterialin.created_by
 WHERE rawmaterialin.seen <> 2
)


UNION
(SELECT rawmaterialout.id, 
accounts.account_name, 
'' as branch,
rawmaterialout.created_at, 
rawmaterialout.seen, 
'Stock-out Raw-Material'   as remarks,
'6' as remarkstype
FROM rawmaterialout 
INNER JOIN accounts ON accounts.id = rawmaterialout.created_by
 WHERE rawmaterialout.seen <> 2
)




ORDER BY seen ASC, created_at DESC
LIMIT $start,10"

);

while ($row = mysqli_fetch_assoc($query)) {
	$data[] = $row;
}
echo json_encode($data);




$backup = "(SELECT id, account_name, 
'' as branch, 
created_at, 
seen, 
'New Account'  as remarks,
'1' as remarkstype
FROM accounts WHERE id <> 1)

UNION
(SELECT orders.id, 
accounts.account_name, 
orders.branch,
orders.created_at, 
orders.seen, 
'Request Products'   as remarks,
'2' as remarkstype
FROM orders
INNER JOIN accounts ON accounts.id = orders.account_id)

UNION
(SELECT products_in.id, 
accounts.account_name, 
'' as branch,
products_in.created_at, 
products_in.seen, 
'Add Products'   as remarks,
'3' as remarkstype
FROM products_in
INNER JOIN accounts ON accounts.id = products_in.created_by)

UNION
(SELECT delivery.id, 
accounts.account_name, 
delivery.branch,
delivery.created_at, 
delivery.seen, 
'Deliver Products'   as remarks,
'4' as remarkstype
FROM delivery
INNER JOIN accounts ON accounts.id = delivery.account_id)

UNION
(SELECT rawmaterialin.id, 
accounts.account_name, 
'' as branch,
rawmaterialin.created_at, 
rawmaterialin.seen, 
'Stock-IN Raw Material'   as remarks,
'5' as remarkstype
FROM rawmaterialin
INNER JOIN accounts ON accounts.id = rawmaterialin.created_by)


UNION
(SELECT rawmaterialout.id, 
accounts.account_name, 
'' as branch,
rawmaterialout.created_at, 
rawmaterialout.seen, 
'Stock-out Raw-Material'   as remarks,
'6' as remarkstype
FROM rawmaterialout
INNER JOIN accounts ON accounts.id = rawmaterialout.created_by)




ORDER BY seen ASC, created_at DESC
LIMIT $start,10"
 ?>


