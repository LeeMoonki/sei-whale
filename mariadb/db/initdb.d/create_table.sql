DROP DATABASE IF EXISTS seiwhale;

CREATE DATABASE seiwhale;
USE seiwhale;

CREATE TABLE user (
	id INT auto_increment NOT NULL,
	email VARCHAR(200) NOT NULL,
	password char(60) NOT NULL,
	social_identifier TEXT NULL COMMENT 'Social OAuth identifier',
	cdate DATETIME DEFAULT NOW() NULL COMMENT 'created date',
	udate DATETIME DEFAULT NOW() NOT NULL COMMENT 'updated at',
	ddate DATETIME NULL COMMENT 'deleted at',
	CONSTRAINT user_PK PRIMARY KEY (id),
	CONSTRAINT user_email_UN UNIQUE KEY (email)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;
CREATE INDEX user_id_IDX USING BTREE ON user (id);
CREATE INDEX user_email_IDX USING BTREE ON user (email);
CREATE INDEX user_social_identifier_IDX USING BTREE ON user (social_identifier);
