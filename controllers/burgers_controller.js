const express = require("express");

const router = express.Router();

//import burger model
const burger = require("../models/burger.js")

router.get("/", (req,res) => {
    burger.all(function(data) {
     const burgOb = {
         burgers: data,
     };
     res.render("index", burgOb);
    })
    
})

//export routes for server to use
module.exports = router;