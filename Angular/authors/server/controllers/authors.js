const mongoose = require("mongoose");
var Author = mongoose.model("Author");

module.exports = {

    getAll:(req, res)=>{
        Author.find({},(err, author)=>{
            if(err){
                res.json({message: "Error!", error: err});
            }
            else {
                res.json({message: "Success!", author: author});
            }
        })
    },

    getOne:(req, res)=>{
        Author.findById({_id:req.params.id},(err,author)=>{
            if(err){
                res.json({message: "Error!", error: err});
            }
            else {
                res.json({message: "Success!", author: author});
            }
        })
    },

    addAuthor:(req, res)=>{
        Author.create(req.body,(err, author)=>{
            if(err){
                res.json({message: "Error!", error: err});
            }
            else {
                res.json({message: "Success!", added: true});
            }
        })
    },

    editAuthor:(req, res)=>{
        Author.findByIdAndUpdate({_id:req.params.id}, req.body, {rundValidators:true}, (err,author)=>{
            if(err){
                res.json({message: "Error!", error: err});
            }
            else {
                res.json({message: "Edit Success!", author: author});
            }
        })
    },

    deleteAuthor:(req, res)=>{
        Author.findByIdAndDelete({_id:req.params.id}, (err, author)=>{
            if(err){
                res.json({message: "Error!", error: err});
            }
            else {
                res.json({message: "Delete Success!", author:author});
            }
        })
    },

}