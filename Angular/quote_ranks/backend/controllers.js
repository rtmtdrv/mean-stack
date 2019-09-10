const Object = require('./models');

module.exports = {

    getAll: (req, res) => {
        Object.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    addOne: (req, res) => {
        Object.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    getOne: (req, res) => {
        Object.findOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    updateOne: (req, res) => {
        Object.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    deleteOne: (req, res) => {
        Object.findByIdAndRemove({ _id: req.params.id })
            .then(data => req.json(data))
            .catch(err => res.json(err));
    },

    increaseVote: (req, res) => {
        Object.update({ _id: req.params.authorID, "quotes._id": req.params.quoteID }, { $inc: { "quotes.$.votes": 1 } })
            .then(data => req.json(data))
            .catch(err => res.json(err));
    },

    decreaseVote: (req, res) => {
        Object.update({ _id: req.params.authorID, "quotes._id": req.params.quoteID }, { $inc: { "quotes.$.votes": -1 } })
            .then(data => req.json(data))
            .catch(err => res.json(err));
    },

    removeQuote: (req, res) => {
        Object.update({ _id: req.params.authorID }, { $pull: { "quotes": { "_id": req.params.quoteID } } })
            .then(data => req.json(data))
            .catch(err => res.json(err));
    },

    createQuote: (req, res) => {
        Object.updateOne({ _id: req.params.authorID }, { $push: { "quotes": req.body } })
            .then(data => req.json(data))
            .catch(err => res.json(err));
    },


}