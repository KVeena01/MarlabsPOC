const mongoose = require('mongoose');

const postSchema = mongoose.Schema({ // schema is just a blue print
  title: { type: String, required: true },
  content: { type: String, required: true }
});

module.exports = mongoose.model('Post', postSchema);
