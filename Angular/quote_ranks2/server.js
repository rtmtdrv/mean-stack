// - - - - = = = = Configurations = = = = - - - - 

// express
const express = require('express');
const path = require('path');
const app = express();

// body parser
const bodyParser = require('body-parser');

// middleware
app.use(express.static(__dirname + '/public/dist/public'));
app.use(bodyParser.json());


// - - - - = = = = Model = = = = - - - - //
const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://localhost:27017/quote_ranks',
  { useNewUrlParser: true }
);
mongoose.set('useFindAndModify', false)
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));
const { Schema } = mongoose;

//-----------------------//
//---- author schema ----//
//-----------------------//

const authorSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Author name is required'],
    minlength: [3, 'Author name must be greater than 3 characters']
  },
  quotes: [{
    content: { 
      type: String, 
      minlength: [3, 'Quotes must be greater than 3 characters']
    },
    votes: { 
      type: Number, 
      default: 0
    }
  }]
}, { timestamps: true });

const Author = mongoose.model('Author', authorSchema);

// - - - - = = = = Controller = = = = - - - - 
const authorController = {
  getAll: (req, res) => {
    Author.find()
      .then(data => res.status(200).json( {data: data, status: res.statusCode} ))
      .catch(err => res.status(418).json( {error: err, status: res.statusCode} ));
  },

  getOne: (req, res) => {
    const ID = req.params.id;
    Author.findOne( {_id: ID} )
      .then(data => res.status(200).json( {data: data, status: res.statusCode} ))
      .catch(err => res.status(418).json( {error: err, status: res.statusCode} ));
  },

  create: (req, res) => {
    const newAuthor = new Author({
      name: req.body.name
    });
    Author.create(newAuthor)
      .then(data => res.status(201).json( {data: data, status: res.statusCode} ))
      .catch(err => res.status(418).json( {error: err, status: res.statusCode} ));
  },

  edit: (req, res) => {
    const ID = req.params.id;
    const DATA = req.body;
    Author.findOneAndUpdate( {_id: ID}, DATA,
      { new: true, runValidators: true}
    )
      .then((data) => res.status(200).json( {data: data, status: res.statusCode} ))
      .catch(err => res.status(418).json( {error: err, status: res.statusCode} ));
  },

  delete: (req, res) => {
    const ID = req.params.id;
    Author.deleteOne({ _id: ID })
      .then(data => res.status(200).json( {data: data, status: res.statusCode} ))
      .catch(err => res.status(418).json( {error: err, status: res.statusCode} ));
  }
};


// - - - - = = = = Routes = = = = - - - - 
app 
  .get('/api/authors', authorController.getAll)
  .get('/api/authors/:id', authorController.getOne)
  .post('/api/authors', authorController.create)
  .put('/api/authors/:id', authorController.edit)
  .delete('/api/authors/:id', authorController.delete)
  .all('*', (req, res) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  })

// - - - - = = = = Server Listener = = = = - - - - 
const port = 1337;
app.listen(port, ()=> console.log(`Express server listening on port: ${port}`));