const mysql = require('mysql2');

//Connection to SQL
const connection = mysql.createConnection({
    host: 'localhost',
    port: 11162,
    user: 'root',
    password: 'root',
    database: 'EmpTrack'
 });
 connection.connect();