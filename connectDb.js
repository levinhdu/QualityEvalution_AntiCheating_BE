'use strict'

const mysql = require('mysql2');

const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '13102000',
    database: 'unihack22',
});

module.exports = dbConnection;