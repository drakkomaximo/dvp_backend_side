CREATE DATABASE IF NOT EXISTS githubUsersdb;

USE githubUsersdb;

CREATE TABLE users (
    id INT(11) NOT NULL AUTO_INCREMENT,
    username VARCHAR(45) DEFAULT NULL,
    password VARCHAR(60) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE users;

INSERT INTO user VALUES
  (1, 'ANDRES', 1000),
  (2, 'camilo', 13000),
  (3, 'jaime', 10400),
  (4, 'jenny', 10500);


SELECT * FROM users;

SELECT * FROM users WHERE username = ?

DROP TABLE users;  