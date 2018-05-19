const connection = require("../config/connection.js");
//console.log(connection);

const orm = {

    all: function (cb) {
        connection.query("SELECT * FROM burgers", (err, result) => {
            if (err) throw err;
            
            cb(result);

            })
        },

    insertOne: function () {
        connection.query("INSERT INTO burgers(burger_name, devoured) VALUES (?, false)", [req.body.new_burger], (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },

// updateOne: function () {

//     }
};

//export to model file
module.exports = orm;