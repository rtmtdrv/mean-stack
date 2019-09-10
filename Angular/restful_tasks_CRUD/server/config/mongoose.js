var fs = require("fs");
var path = require("path");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/restful_tasl_CRUD", { useNewUrlParser: true });

var models_path = path.join(__dirname, "./../models");

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf(".js") >= 0)
		require(models_path+"/"+file);
});