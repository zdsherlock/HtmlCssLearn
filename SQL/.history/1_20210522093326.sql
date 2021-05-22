# 设计一张emp表，列包括，edi,ename,sex,birthday,salary,deptId;

SET NAMES utf8;

DROP DATABASE IF EXISTS pms;

CREATE DATABASE pms CHARSET=utf8;

USE pms;
CREATE TABLE dept (
    did INT TINYINT PRIMARY KEY FOREIGN KEY
    bumen VARCHAR(20)
)

INSERT INTO dept VALUES(10, '市场部');
INSERT INTO dept VALUES(20, '研发部');
INSERT INTO dept VALUES(30, '运营部');

CREATE TABLE emp (
    eid TINYINT PRIMARY KEY ,
    ename VARCHAR(20),
    sex BOOLEAN,
    birthday DATE,
    salary DECIMAL(8,2),
    deptId INT
);

INSERT INTO emp VALUES(1, 'aoao', 1, '1995-4-4', 8000.00, 10);
INSERT INTO emp VALUES(2, 'hanghang', 0, '1988-4-4', 6000.00, 20);
INSERT INTO emp VALUES(3, 'wang', 1, '1995-4-4', 7000.00, 30);
INSERT INTO emp VALUES(4, 'weng', 0, '1996-4-4', 9000.00, 20);
INSERT INTO emp VALUES(5, 'li', 1, '1993-4-4', 11000.00, 30);
INSERT INTO emp VALUES(6, 'wen', 0, '1990-4-4', 5000.00, 20);
INSERT INTO emp VALUES(7, 'zhe', 0, '1991-4-4', 4000.00, 30);
INSERT INTO emp VALUES(8, 'zhe', 1, '1991-4-4', 4000.00, NULL);


-- SELECT* FROM emp WHERE salary>6000 && salary<9000;
-- SELECT * FROM emp WHERE salary between 6000 and 9000;