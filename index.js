// Dependencies
const mysql = require('mysql2');
const cTable = require('console.table');
const inquirer = require ('inquirer');

// Connection to SQL
const connection = mysql.createConnection({
    host: 'localhost',
    port: 6000,
    user: 'user',
    password: 'password',
    database: 'Employees'
 });

