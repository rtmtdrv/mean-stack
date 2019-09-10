//Imports
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT = 3333;

//Config
app.use(express.static(__dirname + "/public/dist/public"));
app.use(bodyParser.json());

//Database
mongoose.connect("mongodb://localhost/product_manager", { useNewUrlParser: true });
require("./server/config/mongoose");

//Routes
require("./server/config/routes")(app);

//Port
app.listen(PORT, console.log(`Listening on port: ${PORT}!`));