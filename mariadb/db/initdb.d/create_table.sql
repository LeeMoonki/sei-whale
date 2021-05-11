DROP DATABASE IF EXISTS seiwhale;

CREATE DATABASE seiwhale;
USE seiwhale;

CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `messages` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `cdate` datetime NOT NULL DEFAULT current_timestamp() COMMENT 'created date',
  `udate` datetime DEFAULT current_timestamp() COMMENT 'updated at',
  `ddate` datetime DEFAULT NULL COMMENT 'deleted at',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='추천 카드';

CREATE TABLE `keywords` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `keyword` varchar(50) NOT NULL COMMENT '키워드',
  `cdate` datetime NOT NULL DEFAULT current_timestamp() COMMENT 'create date',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='추천 키워드';

CREATE TABLE `keyword_message_relation` (
  `keyword_id` int(10) unsigned NOT NULL COMMENT '키워드 id',
  `message_id` int(10) unsigned NOT NULL COMMENT '추천카드 id',
  UNIQUE KEY `keyword_message_relation_UN` (`keyword_id`,`message_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='추천 카드, 추천 키워드 매핑 테이블';
