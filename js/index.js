// Dependencies
const cTable = require('console.table');
const inquirer = require('inquirer');
const mysql = require('mysql2');


// Added main directory
const choiceEmp = () => 
    inquirer.prompt ([
        {
            type:"list",
            name:"Directory",
            message: "Please choose what you would like to do?",
            choices:["View Employees", "View Departments","View Roles","Enter Employee","Enter Departments", "Enter Roles","Change Employee Role", "Exit"]        
        }])
choiceEmp();
        
