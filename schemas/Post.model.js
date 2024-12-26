const mongoose = require("mongoose");

// const imageSchema = {
//   lg: {
//     type: String,
//     default: "files\\defaultfood.jpg",
//   },
//   sm: {
//     type: String,
//     default: "files\\defaultfood.jpg",
//   },
// };

const postSchema = mongoose.Schema({
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  title: { type: String, required: true },
  text: { type: String, required: true },
  image: { type: String, required: true },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
