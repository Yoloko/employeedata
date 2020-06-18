drop database if EXISTS employees;
create database employees;

use employees;

create table department(
id int AUTO_INCREMENT primary key,
namea varchar (30) not null


);

CREATE TABLE rolee (
id int AUTO_INCREMENT PRIMARY key,
title varchar (30) not null,
salary decimal(10,2) not null,
department_id INT not null
);

create table employee (
id int auto_increment primary key,
first_name VARCHAR(30) not null,
last_name varchar (30) not null,
role_id int not null

);