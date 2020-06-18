insert into department (namea)
values('sales'),('engineering'),('finance'),('legal');

select * from department;

insert into rolee(title, salary, department_id)
values( 'sale lead', 100000, 1), ('CTO' ,500000, 2),('accoutant', 100000, 3),('lawyer', 100000, 4 );
select * from rolee;


insert into employee(first_name, last_name, role_id)
values('chu','chu', 1),('beatrice', 'beatirce', 2),('kobe' ,'kobe', 3),('micheal','micheal',4) ;
select * from employee 
