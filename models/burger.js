const orm = require("../config/orm.js");

const burger = {
    all: function(cb){
        orm.all(function(res) {
            cb(res);
        })
    },

    create: function(name, cb) {
        orm.insertOne(name, function(res) {
            cb(res);
        })
    }
}


module.exports = burger;