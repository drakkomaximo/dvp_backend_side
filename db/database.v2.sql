CREATE DATABASE IF NOT EXISTS githubUsersdb;

USE githubUsersdb;

CREATE TABLE accounts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    account_name VARCHAR(50)
);

INSERT INTO accounts (nombre)
VALUES ('Nombre1'),
       ('Nombre2'),
       ('Nombre3');

SELECT * FROM accounts;

CREATE TABLE selected_list (
    id INT PRIMARY KEY AUTO_INCREMENT,
    account_id INT,
    github_user_name VARCHAR(100),
    FOREIGN KEY (account_id) REFERENCES accounts(id)
);

INSERT INTO selectedlist (account_id, github_user_name)
VALUES (1, 'drakkomaximo');

SELECT * FROM selectedlist;
SELECT * FROM selectedlist WHERE account_id = 1;