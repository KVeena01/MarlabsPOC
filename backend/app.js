const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// const Post = require('./models/post');
const postsRoutes = require("./routes/posts");


const app = express();

mongoose.connect("mongodb+srv://veena:KlPkvHfGZcywarYq@cluster0-kwnu1.mongodb.net/node-angular?retryWrites=true&w=majority", { useNewUrlParser: true })
  .then(() =>{
    console.log('Connected to Database!!!');
  })
  .catch(() =>{
    console.log('Connectio failed!!!');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postsRoutes);

module.exports = app;


// app.post("/api/posts", (req, res, next) =>{
//   const post = new Post({
//     title: req.body.title,
//     content: req.body.content
//   });
//   // console.log(post);
//   post.save().then(createdPost =>{
//     // console.log(result);
//     res.status(201).json({
//       message: "Post added successfully",
//       postId: createdPost._id
//     });
//   });
// });

// app.put("/api/posts/:id", (req, res, next) => {
//   const post = new Post({
//     _id: req.body.id,
//     title: req.body.title,
//     content: req.body.content
//   });
//   Post.updateOne({ _id: req.params.id }, post).then(result => {
//     console.log(result);
//     res.status(200).json({ message: 'Update Successful!!!' });
//   });
// });

// app.get('/api/posts', (req, res, next) =>{
//   Post.find().then(documents => {
//     res.status(200).json({
//       message: 'Posts fetched successfully!!',
//       posts: documents
//     });
//   });
// });

// app.get("/api/posts/:id", (req, res, next) => {
//   Post.findById(req.params.id).then(post =>{
//     if (post) {
//       res.status(200).json(post);
//     } else {
//       res.status(404).json({ message: 'Post not Found' });
//     }
//   });
// });

// app.delete("/api/posts/:id",(req, res, next) => {
//   // console.log(req.params.id);
//   Post.deleteOne({ _id: req.params.id}).then(result => {
//     console.log(result);
//     res.status(200).json({message: 'Post deleted'});
//     // res.send (200).json({message: 'Post deleted'});
//   });

// });

