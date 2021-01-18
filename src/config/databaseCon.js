const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: "localhost",
        user:'cjtapia',
        password: 'Tapia1997',
        database:'espol',
    });
    }
