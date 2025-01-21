const mysql = require('mysql2')

 const conection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'alex',
    password:'1234',
    database:'teste'
})

module.exports = conection