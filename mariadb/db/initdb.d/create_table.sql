DROP DATABASE IF EXISTS seiwhale;

CREATE DATABASE seiwhale;
USE seiwhale;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(200) NOT NULL,
  `password` char(60) NOT NULL,
  `name` varchar(100) NOT NULL,
  `cdate` datetime NOT NULL DEFAULT current_timestamp() COMMENT 'created date',
  `udate` datetime NOT NULL DEFAULT current_timestamp() COMMENT 'updated at',
  `ddate` datetime DEFAULT NULL COMMENT 'deleted at',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_UN` (`email`),
  KEY `users_id_IDX` (`id`) USING BTREE,
  KEY `users_email_IDX` (`email`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

