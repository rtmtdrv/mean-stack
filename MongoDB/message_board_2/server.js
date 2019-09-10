var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var moment = require('moment');
const flash = require('express-flash');

app.use(flash());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(session({
  secret: 'BENITEZGINO',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 60000
  }
}))


app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/message_board', { useNewUrlParser: true });
mongoose.Promise = global.Promise;



const CommentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Comment must have an author."]
  },
  comment: {
    type: String,
    required: [true, "Comment must have content"]
  },
}, {
    timestamps: true
  })


const PostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Posts must have an author."]
  },
  post: {
    type: String,
    required: [true, "Posts must have content."]
  },
  Comment: [CommentSchema]
}, {
    timestamps: true
  })


mongoose.model('Post', PostSchema); // We are setting this Schema in our Models as 'Post'
mongoose.model('Comment', CommentSchema); // We are setting this Schema in our Models as 'Post'
var Post = mongoose.model('Post') // We are retrieving this Schema from our Models, named 'Post'
var Comment = mongoose.model('Comment')


//!! GETS

app.get('/', (req, res) => {
  Post.find()
    .then(data => res.render('index', { posts: data, moment: moment }))
})


//!! POSTS

app.post('/postMessage', (req, res) => {
  Post.create(req.body)
    .then(() => res.redirect('/'))
    .catch(err => {
      for (var key in err.errors) {
        req.flash('registration', err.errors[key].message);
      }
      console.log('Error!')
      res.redirect('/');
    });
})

app.post('/postComment/:id', (req, res) => {
  Post.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { Comment: req.body } },
    { runValidators: true })
    .then(() => res.redirect('/'))
    .catch(err => {
      for (var key in err.errors) {
        req.flash('registration', err.errors[key].message);
      }
      console.log('Error!')
      res.redirect('/');
    });
});

//! DELETE ONE OBJECT
// app.post('/delete', function (req, res) {
//     console.log("Deleting User Object with id:", req.body._id);
//     User.remove({
//         _id: req.body._id
//     }, function (err) {
//         res.redirect('/');
//     })
// })

//! DELETE ALL OBJECTS
// app.post('/deleteAll', function (req, res) {
//     User.remove({}, function (err) {
//         console.log("Deleted All Data");
//         res.redirect('/');
//     })
// })



//! Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
  console.log("listening on port 8000");
})