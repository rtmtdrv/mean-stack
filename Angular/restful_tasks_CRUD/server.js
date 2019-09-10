var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = "8000";

//Config
app.use(express.static(__dirname + '/public/dist/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Database
require("./server/config/mongoose");

//Routes
require("./server/config/routes")(app);

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
})