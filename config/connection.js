const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
})

connection.connect((err) => {
    if (err){
        console.log(`error connecting to db`);
        return;
    }
    console.log(`connected to db`);
})

//export to ORM file
module.exports = connection;