/* 1) Create a databse */
CREATE DATABASE IF NOT EXISTS githubUsersdb;

/* 2) Create table accounts */
CREATE TABLE accounts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    account_name VARCHAR(50)
);

/* 3) Create table github_users_list */
CREATE TABLE github_users_list (
    id INT PRIMARY KEY AUTO_INCREMENT,
    account_id INT,
    user_name VARCHAR(100),
    user_id INT,
    user_avatar VARCHAR(100),
    user_github_link VARCHAR(100),
    FOREIGN KEY (account_id) REFERENCES accounts(id)
);

/* Note: axuliar queries */

USE githubUsersdb;
SELECT * FROM accounts;

INSERT INTO github_users_list (account_id, user_name, user_id, user_avatar, user_github_link)
VALUES (1, 'drakkomaximo', 57687342, 'https://avatars.githubusercontent.com/u/57687342?v=4', 'https://github.com/drakkomaximo');

SELECT * FROM github_users_list;
SELECT * FROM github_users_list WHERE account_id = 1;

DELETE FROM github_users_list where user_name='helinwang';