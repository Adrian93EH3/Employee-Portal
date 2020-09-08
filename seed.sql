-- CREATING DATABASE --
DROP DATABASE IF EXISTS employee_portal;
CREATE DATABASE employee_portal;
USE employee_portal;


-- CREATING TABLES BELOW --
CREATE TABLE employees (
    employee_id INT PRIMARY KEY NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    role_id INT,
    role_name VARCHAR(50),
    department_id INT,
    department_name VARCHAR(50),
    salary INT
);

CREATE TABLE departments (
    department_id INT PRIMARY KEY NOT NULL,
    department_name VARCHAR(50),
    department_budget INT
);

CREATE TABLE company_role (
    role_id INT PRIMARY KEY NOT NULL,
    role_name VARCHAR(50)
);

CREATE TABLE managers (
    employee_name VARCHAR(50)
);


-- CREATING VALUES TO BE INSERTED INTO TABLES ABOVE --
INSERT INTO employees (employee_id, first_name, last_name, department_id, department_name, salary, role_name, role_id)
VALUES (1, "Adrian", "Diaz", 1, "Board Of Directors", 200000, "CEO", 1), 
(2, "Emily", "Tamayo", 1, "Board Of Directors", 200000, "CFO", 2), 
(3, "Wanda", "Diaz", 1, "Board Of Directors", 200000, "COO", 3), 
(4, "Daniel", "Diaz", 1, "Board Of Directors", 200000, "CIO", 4), 
(5, "Deni", "Diaz", 1, "Board Of Directors", 200000, "CMO", 5);

INSERT INTO departments (department_id, department_name, department_budget)
VALUES (1, "Board of Directors", 1000000);

INSERT INTO company_role (role_name, role_id)
VALUES ("CEO", 1),
("CFO", 2),
("COO", 3),
("CIO", 4),
("CMO", 5);

INSERT INTO managers (employee_name)
VALUES ("Adrian Diaz"), ("Emily Tamayo");

SELECT*FROM employees;
SELECT*FROM departments;
SELECT*FROM company_role;