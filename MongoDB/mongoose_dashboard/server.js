var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var session = require("express-session");
var flash = require("express-flash");

app.use(flash());
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: "mongeese",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.set("views", __dirname + "/views");
app.set("view engine", "ejs")

mongoose.connect("mongodb://localhost/mongoose_dashboard", { useNewUrlParser: true });

var MongooseSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Mongoose name required!"], minlength: 3},
    age: {type: String, required: [true, "Mongoose age required!"], min: 1, max: 20},
    color: {type: String, required: [true, "Mongoose color required!"], minlength: 3},
}, {timestamps: true});
mongoose.model("Mongoose", MongooseSchema);
var Mongoose = mongoose.model("Mongoose");

//Routes

app.get("/", function(req, res){
    console.log("~Root~");
    Mongoose.find({}, function(err, mongeese){
        if(err){
            console.log("~Error matching DB request!~", err);
        }
        else {
            res.render("index", {info: mongeese});
        }
    })
});

app.get("/mongeese/new", function(req, res){
    console.log("~New Form~");
    res.render("new");
});

app.get("/mongeese/:_id", function(req, res){
    console.log("~Find~");
    Mongoose.findOne({_id:req.params._id}, function(err, mongoose){
        if(err){
            console.log("~Error matching DB request!~", err);
        } 
        else {
            res.render("details", {mongoose: mongoose});
        }
    })
});

app.get("/mongeese/edit/:_id", function(req, res){
    console.log("~Edit Page~");
    Mongoose.findOne({_id:req.params._id}, function(err, ferret){
        if(err){
            console.log("Error mactching DB request!~", err);
        }
        else{
            res.render("edit", {mongoose:mongoose});
        }
    })
});

app.post("/mongeese", function(req, res){
    console.log("~Post~", req.body);
    var mongoose = new Mongoose({name: req.body.name, age: req.body.age, color: req.body.color});
    mongoose.save(function(err){
        if(err){
            console.log("~Someone added a mongoose!~", err);
            for(var key in err.errors){
                req.flash("mongooseform", err.errors[key].message);
            }
            res.redirect("/mongeese/new");
        }
        else{
            console.log("~Successfully added a mongoose!~");
            res.redirect("/");
        }
    })
});

app.post("/mongeese/:_id", function(req, res){
    console.log("~Edit~");
    Ferret.findOne({_id:req.params._id}, function(err, ferret){
        if(err){
            console.log("~Error matching DB request!~", err);
        }
        else{
            Mongoose.update({_id: mongoose._id}, {$set: {name: req.body.name, age: req.body.age, color: req.body.color}}, function(err){
                if(err){
                    console.log("~Error updating~", err);
                }
                else{
                    res.redirect("/");
                }
            })
        }
    })
});

app.post("/mongeese/destroy/:_id", function(req, res){
    console.log("~Destroy~");
    Mongoose.findOne({_id:req.params._id}, function(err, mongoose){
        if(err){
            console.log("~Error matching DB request!~", err);
        }
        else{
            Mongoose.remove({_id:mongoose._id}, function(err){
                if(err){
					console.log("~Error on delete!~", err);
				}
				else{
					res.redirect("/");
				}
            })
        }
    })
});

app.listen(8000, function(){
    console.log("Listening on port: 8000");
})