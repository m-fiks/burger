const connection = require("../config/connection.js");
//console.log(connection);

const orm = {

    all: function (cb) {
        connection.query("SELECT * FROM burgers", (err, result) => {
            if (err) throw err;
            
            cb(result);

            })
        },

    insertOne: function (name, cb) {
        connection.query("INSERT INTO burgers(burger_name, devoured) VALUES ( ?, false)", [name], (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },

// updateOne: function () {

//     }
};

//export to model file
module.exports = orm;