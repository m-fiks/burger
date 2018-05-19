const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

//import burger model
const burger = require("../models/burger.js")

router.get("/", (req,res) => {
    //console.log("this is the res:" , res)
    burger.all(function(data) {
    //console.log("this is the data:", data)
     const burgOb = {
         burgers: data,
     };
     res.render("index", burgOb);
    })
    
})

router.post("/burgers/create", (req,res) => {
    burger.create(
        req.body.new_burger,
    function(result) {
        //console.log('succesful')
        //res.json({ id: result.insertId })

        //bring user back to root page
        res.redirect("/");
    })
})
//export routes for server to use
module.exports = router;