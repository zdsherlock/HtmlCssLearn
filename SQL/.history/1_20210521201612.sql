# 设计一张emp表，列包括，edi,ename,sex,birthday,salary,deptId;

SET NAMES utf8;

DROP DATABASE IF EXISTS pms;

CREATE DATABASE pms CHARSET=utf8;

USE pms;

CREATE TABLE emp (
    eid TINYINT PRIMARY KEY ,
    ename VARCHAR(20),
    sex BOOLEAN,
    birthday DATE,
    salary DECIMAL(8,2),
    deptId INT
)

INSERT INTO emp VALUES(1, 'aoao', '1', '1990-4-4', 8000.00, 10);
INSERT INTO emp VALUES(2, 'aoao', 1, '1990-4-4', 8000.00, 10);
INSERT INTO emp VALUES(3, 'aoao', 1, '1990-4-4', 8000.00, 10);
INSERT INTO emp VALUES(4, 'aoao', 1, '1990-4-4', 8000.00, 10);

SELECT* FROM emp WHERE salary>6000 && salary<9000;