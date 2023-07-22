CREATE DATABASE IF NOT EXISTS githubUsersdb;

USE githubUsersdb;

CREATE TABLE user (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE user;

INSERT INTO user VALUES
  (1, 'ANDRES', 1000),
  (2, 'camilo', 13000),
  (3, 'jaime', 10400),
  (4, 'jenny', 10500),