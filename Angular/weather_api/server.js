// Dojo Weather API
// Objectives:
// Practice using Angular routing to display different components
// Practice making http requests to an API and displaying the data received
// Create an app which presents the user with 6 different views (using the router-outlet) each different url/view should present the user with a Dojo city. Within each of these views, present the user with the current weather information. This assignment will require you to retrieve an API key from https://openweathermap.org/api
// Additionally, show an image of each of the cities, you can use https://www.pexels.com/ for royalty free images.

//Imports
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const PORT = 8000;

//Config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './public/dist/public')));

//Routes
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

//Port
app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}!`)
});
