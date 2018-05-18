const connection = require("../config/connection.js");
console.log(connection);

const orm = {

selectAll: function () {
    connection.query("SELECT * FROM burgers", (err, response) => {
        if (err){
            throw err;
        }
        console.log(response);
        connection.end();
        })
    },

insertOne: function () {
    connection.query("INSERT INTO burgers ")
    },

updateOne: function () {

    }
    
};