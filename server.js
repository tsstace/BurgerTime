require('dotenv').config();
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

//Express static uses whatever domain name/public
app.use(express.static(__dirname + "/public"));

//This sets up body-parser
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json());

//sets up express-handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Setting up the routes
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

//sets up the port as a variable and listens to it
var port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on port %s", port));