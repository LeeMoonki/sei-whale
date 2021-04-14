DROP DATABASE IF EXISTS seiwhale;

CREATE DATABASE seiwhale;
USE seiwhale;

-- CREATE TABLE user (
-- 	id INT auto_increment NOT NULL,
-- 	email VARCHAR(200) NOT NULL,
-- 	password char(60) NOT NULL,
-- 	cdate DATETIME DEFAULT NOW() NULL COMMENT 'created date',
-- 	udate DATETIME DEFAULT NOW() NOT NULL COMMENT 'updated at',
-- 	ddate DATETIME NULL COMMENT 'deleted at',
-- 	CONSTRAINT user_PK PRIMARY KEY (id),
-- 	CONSTRAINT user_email_UN UNIQUE KEY (email)
-- )
-- ENGINE=InnoDB
-- DEFAULT CHARSET=utf8mb4
-- COLLATE=utf8mb4_general_ci;
-- CREATE INDEX user_id_IDX USING BTREE ON user (id);
-- CREATE INDEX user_email_IDX USING BTREE ON user (email);

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(200) NOT NULL,
  `password` char(60) NOT NULL,
  `name` varchar(100) NOT NULL,
  `cdate` datetime NOT NULL DEFAULT current_timestamp() COMMENT 'created date',
  `udate` datetime NOT NULL DEFAULT current_timestamp() COMMENT 'updated at',
  `ddate` datetime DEFAULT NULL COMMENT 'deleted at',
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_email_UN` (`email`),
  KEY `user_id_IDX` (`id`) USING BTREE,
  KEY `user_email_IDX` (`email`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

