const inquirer =require('inquirer')
const mysql=require('mysql')



const connection = mysql.createConnection({
    host:'localhost',
    port: '3306',
    user: 'root',

    password:'password',
    database:'employees'

});

connection.connect(function (err, results) {
    if (err) throw err;
start()

    // run the start function after the connection is made to prompt the user
    //start();
  });


function start(){
    inquirer
    .prompt({

        name:'userInput',
        type: 'list',
        message: "Would you like to view [VIEW DEPARTMENTS], [VIEW ROLES], [VIEW EMPLOYEES], [ADD DEPARTMENTS], [ADD ROLES], [ADD EMPLOYEES], [UPDATE EMPLOYEE ROLE] [EXIT]?",
      choices: ["VIEW_DEPARTMENTS", "VIEW_ROLES", "VIEW_EMPLOYEES", "ADD_DEPARTMENTS", "ADD_ROLES", "ADD_EMPLOYEES", "UPDATE_EMPLOYEE_ROLE", "EXIT"],
    })


    .then(function (answer){
        //base on their answers 
        if (answer.userInput === 'VIEW_DEPARTMENTS'){
            viewDepartment();
        }else if (answer.userInput ==='VIEW_ROLES'){
            viewRoles()
        }else if (answer.userInput ==='VIEW_EMPLOYEES'){
            viewEmployees()          
        }else if (answer.userInput === 'ADD_DEPARTMENTS'){
            addDepartment()
        }else if (answer.userInput ==='ADD_ROLES'){
            addRoles()
        }else if (answer.userInput === 'ADD_EMPLOYEES'){
            addEmployees()
      } else if (answer.userInput === "UPDATE_EMPLOYEE_ROLE") {
          update_Employee();
    
    }else{
        connection.end() 
        console.log('bitch pick a company slut')
    }

    }    
    )};
/// functions to view / display the table from the user's choice
    function viewDepartment(){
        connection.query('select * from department', function(err, results){
          if(err) throw err;
          console.table(results);
          start(); 
        });
    }

    function viewRoles(){
        connection.query('select * from rolee', function (err, results){

            if(err) throw err;  
            console.table(results)
            start()

        });
    }
 function  viewEmployees (){
     connection.query('select * from employee', function (err,results ){

        if(err) throw err;
        console.table(results);
       start();
     });

 }


 //function spiltResults (err, results){
     if (err) throw err;
     console.log(results);
     start();

 //}


 //async function addDepartment () {
// const department = await inquirer.prompt([
    // {
   //  name:'namea',
   //  message:'what is the name of the department',
//
   //  }

   //// ])

}

connection.query('')