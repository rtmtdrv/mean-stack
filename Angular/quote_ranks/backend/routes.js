const controllers = require('./controllers');
const path = require('path');
module.exports = app => {
    app
        .get('/api/objects', controllers.getAll)
        .post('/api/objects', controllers.addOne)
        .get('/api/:id', controllers.getOne)
        .put('/api/objects/:id', controllers.updateOne)
        .delete('/api/objects/:id', controllers.deleteOne)
        .get('/api/increaseVotes/:authorID/:quoteID', controllers.increaseVote)
        .get('/api/decreaseVotes/:authorID/:quoteID', controllers.decreaseVote)
        .get('/api/removeQuote/:authorID/:quoteID', controllers.removeQuote)
        .put('/api/createQuote/:authorID', controllers.createQuote)
        .all("*", (req, res, next) => {
            res.sendFile(path.resolve("./public/dist/public/index.html"))
        })
};