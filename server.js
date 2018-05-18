const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("express-handlebars");
const path = require("path")

app = express();

const PORT = process.env.PORT || 3000;

// Set Handlebars - specify layout
app.engine("handlebars", hbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//static path
app.use(express.static(path.join(__dirname, "/models/public")));

app.get("/", (req,res) => {
    res.render("index", {burger: "cheese"});
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})