// Dependencies
const mysql = require('mysql2');
const cTable = require('console.table');
const inquirer = require ('inquirer');

// Connection to SQL
const connection = mysql.createConnection({
    host: 'localhost',
    port: 2002,
    user: 'user',
    password: 'password',
    database: 'Employees'
 });

 connection.connect();

// Added main directory
const choiceEmp = () => 
    inquirer.prompt ([
        {
            type:"list",
            name:"Directory",
            message: "Please choose what you would like to do?",
            choices:["View Employees", "View Departments","View Roles","Enter Employee","Enter Departments", "Enter Roles","Change Employee Role", "Exit"]        
        }])

.then((answer) => {

    switch(answer.Directory){
      case "View all Employees":
        viewAllEmployees();
        break;
      
      case "View Departments":
        viewDepartments();
        break;

      case "View Roles":
        viewRoles();
        break;  

      case "Add Employee":
        enterEmployee();
        break;  

      case "Add Departments":
        enterDepartment();
        break;  

      case "Add Roles":
        enterRoles();
        break;

      case "Update Employee Role":
        changeEmployeeRole();
        break;

         case "Exit":
        con = false;
        break;
        
    }
    
  }); 
choiceEmp();
