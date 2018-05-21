const mysql = require("mysql");

let connection;
if(process.env.JAWSDB_URL) {
    //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
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