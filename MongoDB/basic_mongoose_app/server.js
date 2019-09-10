//Imports
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Config
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

//Connect Mongoose to MongoDB
mongoose.connect('mongodb://localhost/basic_mongoose', {useNewUrlParser: true});

//Create Mongoose Schema
var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})
mongoose.model('User', UserSchema);
var User = mongoose.model('User')

// Routes

// Root Request
// get the users from the database every time the index route is hit
app.get('/', function(req, res) {
    console.log("~Root~");
    User.find({}, function(err, users){
        if(err){
            console.log("~Error matching DB request~")
        }
        else {
            res.render('index', {info:users});
        }
    });
})
// Add User Request 
app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    var user = new User({name: req.body.name, age: req.body.age});
    user.save(function(err){
        if(err){
            console.log("~Something went wrong~")
        }
        else {
            console.log("~Successfully added a user~")
        }
        res.redirect('/');
    })
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
