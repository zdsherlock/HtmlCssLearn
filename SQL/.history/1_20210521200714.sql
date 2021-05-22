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

