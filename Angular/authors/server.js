
// Authors
// Objectives:
// Create a full CRUD app with Angular, Express, Node, and MongoDB
// Include backend validations
// Create an application where users submit their favorite authors. List all the authors on the first page. From there, the user may click on a button to edit or delete each author.
// The edit form must be pre-populated with the existing data for the author.
// Use backend validations to ensure that all author names and quotes are at least three characters long. If the user does not pass validations, display an error message. Validations must also be applied when editing an author.

//imports
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT = 3333;

//config
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public/dist/public'));

//database
require("./server/config/mongoose");

//routes
require("./server/config/routes")(app);

//port
app.listen(PORT, console.log(`Listening on port: ${PORT}!`));

