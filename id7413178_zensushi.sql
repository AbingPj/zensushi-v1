-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 21, 2020 at 01:52 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `id7413178_zensushi`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `accounts_type_id` int(10) UNSIGNED NOT NULL DEFAULT 4,
  `account_name` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `seen` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `username`, `password`, `accounts_type_id`, `account_name`, `created_at`, `seen`) VALUES
(1, 'Admin', 'Admin', 1, 'Admin', NULL, 2),
(2, 'abingpj', 'gwapo', 2, 'Leopoldo Abing Jr.', '2019-03-03 10:59:48', 1),
(3, 'Hernando Pardz', 'hernan', 4, 'Hern Pardz', '2019-03-03 08:00:20', 1),
(4, 'lloydkristopher', '12345', 3, 'Lloyd Kristopher Lim', '2019-03-03 07:59:51', 1),
(6, 'randell', 'bojo', 2, 'Randell Bojo', '2019-03-03 07:59:41', 1);

-- --------------------------------------------------------

--
-- Table structure for table `accounts_log_in`
--

CREATE TABLE `accounts_log_in` (
  `id` int(10) UNSIGNED NOT NULL,
  `account_id` int(10) UNSIGNED NOT NULL,
  `created` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accounts_log_in`
--

INSERT INTO `accounts_log_in` (`id`, `account_id`, `created`) VALUES
(1, 1, '2019-03-04 03:02:35'),
(2, 2, '2019-03-04 03:02:58'),
(3, 1, '2019-03-04 08:57:05');

-- --------------------------------------------------------

--
-- Table structure for table `accounts_log_out`
--

CREATE TABLE `accounts_log_out` (
  `id` int(10) UNSIGNED NOT NULL,
  `account_id` int(10) UNSIGNED NOT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accounts_log_out`
--

INSERT INTO `accounts_log_out` (`id`, `account_id`, `created`) VALUES
(1, 2, '2019-03-04 03:02:24'),
(2, 2, '2019-03-04 03:03:12');

-- --------------------------------------------------------

--
-- Table structure for table `accounts_type`
--

CREATE TABLE `accounts_type` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `accounts_type`
--

INSERT INTO `accounts_type` (`id`, `name`) VALUES
(1, 'admin'),
(2, 'user (commissary)'),
(3, 'user (outlet)'),
(4, 'deactive');

-- --------------------------------------------------------

--
-- Table structure for table `delivery`
--

CREATE TABLE `delivery` (
  `id` int(10) UNSIGNED NOT NULL,
  `account_id` int(10) UNSIGNED NOT NULL,
  `seen` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `branch` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `deliverylist`
--

CREATE TABLE `deliverylist` (
  `id` int(10) UNSIGNED NOT NULL,
  `delivery_id` int(10) UNSIGNED NOT NULL,
  `products_id` int(10) UNSIGNED NOT NULL,
  `quantity` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(10) UNSIGNED NOT NULL,
  `account_id` int(10) UNSIGNED NOT NULL,
  `seen` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `branch` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orderslist`
--

CREATE TABLE `orderslist` (
  `id` int(10) UNSIGNED NOT NULL,
  `orders_id` int(10) UNSIGNED NOT NULL,
  `products_id` int(10) UNSIGNED NOT NULL,
  `quantity` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) UNSIGNED NOT NULL,
  `rawmaterial_id` int(11) UNSIGNED DEFAULT NULL,
  `units_sub_id` int(11) UNSIGNED DEFAULT NULL,
  `value` double DEFAULT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `packaging_id` int(11) UNSIGNED DEFAULT 1,
  `critical_level` int(11) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products_in`
--

CREATE TABLE `products_in` (
  `id` int(10) UNSIGNED NOT NULL,
  `rawmaterial_id` int(10) UNSIGNED DEFAULT NULL,
  `rawmaterialout_id` int(10) UNSIGNED DEFAULT NULL,
  `scrap` double DEFAULT NULL,
  `bones` double DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_by` int(10) UNSIGNED DEFAULT NULL,
  `seen` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `products_in_list`
--

CREATE TABLE `products_in_list` (
  `id` int(10) UNSIGNED NOT NULL,
  `products_in_id` int(10) UNSIGNED NOT NULL,
  `products_id` int(10) UNSIGNED NOT NULL,
  `quantity` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products_packaging`
--

CREATE TABLE `products_packaging` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products_packaging`
--

INSERT INTO `products_packaging` (`id`, `name`) VALUES
(1, 'Piece'),
(2, 'Pack'),
(3, 'Box'),
(4, 'Tab'),
(5, 'Roll');

-- --------------------------------------------------------

--
-- Stand-in structure for view `PROD_BALANCE_view`
-- (See below for the actual view)
--
CREATE TABLE `PROD_BALANCE_view` (
`id` int(11) unsigned
,`name` varchar(100)
,`display_name` varchar(177)
,`value` double
,`unit_value` double
,`unit` varchar(50)
,`rawmaterial` varchar(255)
,`units_sub_id` int(11) unsigned
,`rawmaterial_id` int(11) unsigned
,`units_id` int(11) unsigned
,`units_name` varchar(255)
,`packaging` varchar(50)
,`packaging_id` int(11) unsigned
,`IN` double
,`OUT` decimal(32,0)
,`balance` double
,`critical_level` int(11) unsigned
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `PROD_IN_view`
-- (See below for the actual view)
--
CREATE TABLE `PROD_IN_view` (
`products_id` int(10) unsigned
,`IN` double
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `PROD_OUT_view`
-- (See below for the actual view)
--
CREATE TABLE `PROD_OUT_view` (
`products_id` int(10) unsigned
,`OUT` decimal(32,0)
);

-- --------------------------------------------------------

--
-- Table structure for table `rawcategory`
--

CREATE TABLE `rawcategory` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `rawcategory`
--

INSERT INTO `rawcategory` (`id`, `name`) VALUES
(1, 'MEAT'),
(2, 'DRY GOODS'),
(3, 'SEAFOODS'),
(4, 'FRESH'),
(5, 'SAUCES'),
(6, 'OTHERS');

-- --------------------------------------------------------

--
-- Table structure for table `rawmaterial`
--

CREATE TABLE `rawmaterial` (
  `id` int(11) UNSIGNED NOT NULL,
  `rawcategory_id` int(11) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `units_id` int(11) UNSIGNED NOT NULL,
  `units_sub_id` int(11) UNSIGNED NOT NULL,
  `critical_level` int(11) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `rawmaterial`
--

INSERT INTO `rawmaterial` (`id`, `rawcategory_id`, `name`, `units_id`, `units_sub_id`, `critical_level`) VALUES
(1, 1, 'Squid', 1, 2, 5);

-- --------------------------------------------------------

--
-- Table structure for table `rawmaterialin`
--

CREATE TABLE `rawmaterialin` (
  `id` int(10) UNSIGNED NOT NULL,
  `rawmaterial_id` int(10) UNSIGNED NOT NULL,
  `quantity` double NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED DEFAULT 1,
  `seen` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `rawmaterialout`
--

CREATE TABLE `rawmaterialout` (
  `id` int(10) UNSIGNED NOT NULL,
  `rawmaterial_id` int(10) UNSIGNED NOT NULL,
  `quantity` double NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED DEFAULT 1,
  `produce` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `seen` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Stand-in structure for view `RM_BALANCE_view`
-- (See below for the actual view)
--
CREATE TABLE `RM_BALANCE_view` (
`id` int(11) unsigned
,`cat_id` int(11) unsigned
,`name` varchar(255)
,`unit` varchar(50)
,`cat_name` varchar(255)
,`units_id` int(11) unsigned
,`units_sub_id` int(11) unsigned
,`IN` double
,`OUT` double
,`balance` varchar(23)
,`critical_level` int(11) unsigned
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `RM_IN_view`
-- (See below for the actual view)
--
CREATE TABLE `RM_IN_view` (
`rawmaterial_id` int(10) unsigned
,`IN` double
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `RM_OUT_view`
-- (See below for the actual view)
--
CREATE TABLE `RM_OUT_view` (
`rawmaterial_id` int(10) unsigned
,`OUT` double
);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_updatedata`
--

CREATE TABLE `tbl_updatedata` (
  `id` int(1) NOT NULL,
  `CategoryUpdateTime` timestamp NULL DEFAULT current_timestamp(),
  `RawMaterialUpdateTime` timestamp NULL DEFAULT current_timestamp(),
  `ProductUpdateTime` timestamp NULL DEFAULT current_timestamp(),
  `InvRawMaterialTime` timestamp NULL DEFAULT current_timestamp(),
  `InvProductTime` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `units`
--

CREATE TABLE `units` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `units`
--

INSERT INTO `units` (`id`, `name`, `value`) VALUES
(1, 'WEIGHT', 1000),
(2, 'VOLUME', 1000),
(3, 'OTHERS', 1);

-- --------------------------------------------------------

--
-- Table structure for table `units_sub`
--

CREATE TABLE `units_sub` (
  `id` int(11) UNSIGNED NOT NULL,
  `units_id` int(11) UNSIGNED NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `value` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `units_sub`
--

INSERT INTO `units_sub` (`id`, `units_id`, `name`, `value`) VALUES
(1, 1, 'Grams', 0.001),
(2, 1, 'Kilogram', 1),
(4, 2, 'Litre', 1),
(5, 2, 'Millilitre', 0.001),
(6, 3, 'Pack', 1),
(7, 3, 'Tablet', 1),
(8, 3, 'Roll', 1),
(9, 3, 'Bar', 1),
(10, 3, 'Piece', 1),
(11, 3, 'Box', 1),
(12, 3, 'Barrel', 1),
(13, 3, 'Tray', 1),
(14, 3, 'Can', 1);

-- --------------------------------------------------------

--
-- Structure for view `PROD_BALANCE_view`
--
DROP TABLE IF EXISTS `PROD_BALANCE_view`;

CREATE ALGORITHM=UNDEFINED DEFINER=`id7413178_zensushi`@`%` SQL SECURITY DEFINER VIEW `PROD_BALANCE_view`  AS  select `products`.`id` AS `id`,`products`.`name` AS `name`,ifnull(concat(`products`.`name`,' (',if(`products`.`value` < 1,`products`.`value` * `units`.`value`,`products`.`value` * 1),' ',`units_sub`.`name`,')'),`products`.`name`) AS `display_name`,`products`.`value` AS `value`,if(`products`.`value` < 1,`products`.`value` * `units`.`value`,`products`.`value` * 1) AS `unit_value`,`units_sub`.`name` AS `unit`,`rawmaterial`.`name` AS `rawmaterial`,`units_sub`.`id` AS `units_sub_id`,`rawmaterial`.`id` AS `rawmaterial_id`,`units`.`id` AS `units_id`,`units`.`name` AS `units_name`,`products_packaging`.`name` AS `packaging`,`products_packaging`.`id` AS `packaging_id`,`PROD_IN_view`.`IN` AS `IN`,`PROD_OUT_view`.`OUT` AS `OUT`,ifnull(ifnull(`PROD_IN_view`.`IN`,0) - ifnull(`PROD_OUT_view`.`OUT`,0),0) AS `balance`,`products`.`critical_level` AS `critical_level` from ((((((`products` left join `units_sub` on(`units_sub`.`id` = `products`.`units_sub_id`)) left join `units` on(`units`.`id` = `units_sub`.`units_id`)) left join `rawmaterial` on(`rawmaterial`.`id` = `products`.`rawmaterial_id`)) left join `products_packaging` on(`products_packaging`.`id` = `products`.`packaging_id`)) left join `PROD_IN_view` on(`PROD_IN_view`.`products_id` = `products`.`id`)) left join `PROD_OUT_view` on(`PROD_OUT_view`.`products_id` = `products`.`id`)) ;

-- --------------------------------------------------------

--
-- Structure for view `PROD_IN_view`
--
DROP TABLE IF EXISTS `PROD_IN_view`;

CREATE ALGORITHM=UNDEFINED DEFINER=`id7413178_zensushi`@`%` SQL SECURITY DEFINER VIEW `PROD_IN_view`  AS  select `products_in_list`.`products_id` AS `products_id`,sum(`products_in_list`.`quantity`) AS `IN` from `products_in_list` group by `products_in_list`.`products_id` ;

-- --------------------------------------------------------

--
-- Structure for view `PROD_OUT_view`
--
DROP TABLE IF EXISTS `PROD_OUT_view`;

CREATE ALGORITHM=UNDEFINED DEFINER=`id7413178_zensushi`@`%` SQL SECURITY DEFINER VIEW `PROD_OUT_view`  AS  select `deliverylist`.`products_id` AS `products_id`,sum(`deliverylist`.`quantity`) AS `OUT` from `deliverylist` group by `deliverylist`.`products_id` ;

-- --------------------------------------------------------

--
-- Structure for view `RM_BALANCE_view`
--
DROP TABLE IF EXISTS `RM_BALANCE_view`;

CREATE ALGORITHM=UNDEFINED DEFINER=`id7413178_zensushi`@`%` SQL SECURITY DEFINER VIEW `RM_BALANCE_view`  AS  select `rawmaterial`.`id` AS `id`,`rawmaterial`.`rawcategory_id` AS `cat_id`,`rawmaterial`.`name` AS `name`,`units_sub`.`name` AS `unit`,`rawcategory`.`name` AS `cat_name`,`rawmaterial`.`units_id` AS `units_id`,`rawmaterial`.`units_sub_id` AS `units_sub_id`,`RM_IN_view`.`IN` AS `IN`,`RM_OUT_view`.`OUT` AS `OUT`,ifnull(`RM_IN_view`.`IN` - ifnull(`RM_OUT_view`.`OUT`,0),'NULL') AS `balance`,`rawmaterial`.`critical_level` AS `critical_level` from (((((`rawmaterial` join `rawcategory` on(`rawmaterial`.`rawcategory_id` = `rawcategory`.`id`)) join `units` on(`rawmaterial`.`units_id` = `units`.`id`)) join `units_sub` on(`rawmaterial`.`units_sub_id` = `units_sub`.`id`)) left join `RM_IN_view` on(`RM_IN_view`.`rawmaterial_id` = `rawmaterial`.`id`)) left join `RM_OUT_view` on(`RM_OUT_view`.`rawmaterial_id` = `rawmaterial`.`id`)) ;

-- --------------------------------------------------------

--
-- Structure for view `RM_IN_view`
--
DROP TABLE IF EXISTS `RM_IN_view`;

CREATE ALGORITHM=UNDEFINED DEFINER=`id7413178_zensushi`@`%` SQL SECURITY DEFINER VIEW `RM_IN_view`  AS  select `rawmaterialin`.`rawmaterial_id` AS `rawmaterial_id`,sum(`rawmaterialin`.`quantity`) AS `IN` from `rawmaterialin` group by `rawmaterialin`.`rawmaterial_id` ;

-- --------------------------------------------------------

--
-- Structure for view `RM_OUT_view`
--
DROP TABLE IF EXISTS `RM_OUT_view`;

CREATE ALGORITHM=UNDEFINED DEFINER=`id7413178_zensushi`@`%` SQL SECURITY DEFINER VIEW `RM_OUT_view`  AS  select `rawmaterialout`.`rawmaterial_id` AS `rawmaterial_id`,sum(`rawmaterialout`.`quantity`) AS `OUT` from `rawmaterialout` group by `rawmaterialout`.`rawmaterial_id` ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD KEY `accounts_type_id` (`accounts_type_id`);

--
-- Indexes for table `accounts_log_in`
--
ALTER TABLE `accounts_log_in`
  ADD PRIMARY KEY (`id`),
  ADD KEY `account_id` (`account_id`);

--
-- Indexes for table `accounts_log_out`
--
ALTER TABLE `accounts_log_out`
  ADD PRIMARY KEY (`id`),
  ADD KEY `account_id` (`account_id`);

--
-- Indexes for table `accounts_type`
--
ALTER TABLE `accounts_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `delivery`
--
ALTER TABLE `delivery`
  ADD PRIMARY KEY (`id`),
  ADD KEY `account_id` (`account_id`);

--
-- Indexes for table `deliverylist`
--
ALTER TABLE `deliverylist`
  ADD PRIMARY KEY (`id`),
  ADD KEY `delivery_id` (`delivery_id`),
  ADD KEY `products_id` (`products_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `account_id` (`account_id`);

--
-- Indexes for table `orderslist`
--
ALTER TABLE `orderslist`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_id` (`orders_id`),
  ADD KEY `products_id` (`products_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rawmaterial_id` (`rawmaterial_id`),
  ADD KEY `units_sub_id` (`units_sub_id`),
  ADD KEY `packaging_id` (`packaging_id`);

--
-- Indexes for table `products_in`
--
ALTER TABLE `products_in`
  ADD PRIMARY KEY (`id`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `rawmaterial` (`rawmaterial_id`),
  ADD KEY `rawmaterialout_id` (`rawmaterialout_id`);

--
-- Indexes for table `products_in_list`
--
ALTER TABLE `products_in_list`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_id` (`products_id`),
  ADD KEY `products_in_id` (`products_in_id`);

--
-- Indexes for table `products_packaging`
--
ALTER TABLE `products_packaging`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rawcategory`
--
ALTER TABLE `rawcategory`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rawmaterial`
--
ALTER TABLE `rawmaterial`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rawmaterial_rawcategory_id_foreign` (`rawcategory_id`),
  ADD KEY `unit` (`units_id`),
  ADD KEY `units_sub_id` (`units_sub_id`);

--
-- Indexes for table `rawmaterialin`
--
ALTER TABLE `rawmaterialin`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rawmaterialin_rawmaterial_id_foreign` (`rawmaterial_id`),
  ADD KEY `created_by` (`created_by`);

--
-- Indexes for table `rawmaterialout`
--
ALTER TABLE `rawmaterialout`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rawmaterialout_rawmaterial_id_foreign` (`rawmaterial_id`),
  ADD KEY `created_by` (`created_by`);

--
-- Indexes for table `tbl_updatedata`
--
ALTER TABLE `tbl_updatedata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `units`
--
ALTER TABLE `units`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `units_sub`
--
ALTER TABLE `units_sub`
  ADD PRIMARY KEY (`id`),
  ADD KEY `units_id` (`units_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `accounts_log_in`
--
ALTER TABLE `accounts_log_in`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `accounts_log_out`
--
ALTER TABLE `accounts_log_out`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `accounts_type`
--
ALTER TABLE `accounts_type`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `delivery`
--
ALTER TABLE `delivery`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `deliverylist`
--
ALTER TABLE `deliverylist`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orderslist`
--
ALTER TABLE `orderslist`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products_in`
--
ALTER TABLE `products_in`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products_in_list`
--
ALTER TABLE `products_in_list`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products_packaging`
--
ALTER TABLE `products_packaging`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `rawcategory`
--
ALTER TABLE `rawcategory`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `rawmaterial`
--
ALTER TABLE `rawmaterial`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `rawmaterialin`
--
ALTER TABLE `rawmaterialin`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rawmaterialout`
--
ALTER TABLE `rawmaterialout`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `units`
--
ALTER TABLE `units`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `units_sub`
--
ALTER TABLE `units_sub`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `accounts`
--
ALTER TABLE `accounts`
  ADD CONSTRAINT `accounts_ibfk_1` FOREIGN KEY (`accounts_type_id`) REFERENCES `accounts_type` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `accounts_log_in`
--
ALTER TABLE `accounts_log_in`
  ADD CONSTRAINT `accounts_log_in_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `accounts_log_out`
--
ALTER TABLE `accounts_log_out`
  ADD CONSTRAINT `accounts_log_out_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `delivery`
--
ALTER TABLE `delivery`
  ADD CONSTRAINT `delivery_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `deliverylist`
--
ALTER TABLE `deliverylist`
  ADD CONSTRAINT `deliverylist_ibfk_1` FOREIGN KEY (`delivery_id`) REFERENCES `delivery` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `deliverylist_ibfk_2` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `orderslist`
--
ALTER TABLE `orderslist`
  ADD CONSTRAINT `orderslist_ibfk_1` FOREIGN KEY (`orders_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orderslist_ibfk_2` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`rawmaterial_id`) REFERENCES `rawmaterial` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`units_sub_id`) REFERENCES `units_sub` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_3` FOREIGN KEY (`packaging_id`) REFERENCES `products_packaging` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `products_in`
--
ALTER TABLE `products_in`
  ADD CONSTRAINT `products_in_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `accounts` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `products_in_ibfk_2` FOREIGN KEY (`rawmaterial_id`) REFERENCES `rawmaterial` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `products_in_ibfk_3` FOREIGN KEY (`rawmaterialout_id`) REFERENCES `rawmaterialout` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `products_in_list`
--
ALTER TABLE `products_in_list`
  ADD CONSTRAINT `products_in_list_ibfk_1` FOREIGN KEY (`products_in_id`) REFERENCES `products_in` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_in_list_ibfk_2` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `rawmaterial`
--
ALTER TABLE `rawmaterial`
  ADD CONSTRAINT `rawmaterial_ibfk_1` FOREIGN KEY (`units_id`) REFERENCES `units` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `rawmaterial_ibfk_2` FOREIGN KEY (`units_sub_id`) REFERENCES `units_sub` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `rawmaterial_rawcategory_id_foreign` FOREIGN KEY (`rawcategory_id`) REFERENCES `rawcategory` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `rawmaterialin`
--
ALTER TABLE `rawmaterialin`
  ADD CONSTRAINT `rawmaterialin_ibfk_1` FOREIGN KEY (`rawmaterial_id`) REFERENCES `rawmaterial` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `rawmaterialin_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `accounts` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `rawmaterialout`
--
ALTER TABLE `rawmaterialout`
  ADD CONSTRAINT `rawmaterialout_ibfk_1` FOREIGN KEY (`rawmaterial_id`) REFERENCES `rawmaterial` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `rawmaterialout_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `accounts` (`id`);

--
-- Constraints for table `units_sub`
--
ALTER TABLE `units_sub`
  ADD CONSTRAINT `units_sub_ibfk_1` FOREIGN KEY (`units_id`) REFERENCES `units` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
