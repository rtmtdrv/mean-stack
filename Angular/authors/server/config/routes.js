const authors = require("../controllers/authors.js");
const path = require("path");

module.exports = function(app){
    app.get("/authors", authors.getAll)
    app.get("/editAuthor/:id", authors.getOne)
    app.post("/authors", authors.addAuthor)
    app.put("/authors/:id", authors.editAuthor)
    app.delete("/delete/:id", authors.deleteAuthor)
    app.all("*", (req,res,next)=>{
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    })
}