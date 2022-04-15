const mysql = require('mysql2'); 

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // your mysql username,
        user: 'root',
        // your mysql password
        password: '',
        database: 'election'
    },
);

module.exports = db;