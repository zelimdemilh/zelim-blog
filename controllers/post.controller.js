const Post = require("../schemas/Post.model");
const sharp = require("sharp");

module.exports.postController = {
  getPostsByCategoryId: async (req, res) => {
    try {
      const posts = await Post.find({ categoryId: req.params.id });
      res.status(200).json(posts);
    } catch (e) {
      res.status(400).json({ error: e.toString() });
    }
  },
  getAllPosts: async (req, res) => {
    try {
      const response = await Post.find();
      res.status(200).json(response);
    } catch (e) {
      res.status(400).json({ error: e.toString() });
    }
  },
  createPost: async (req, res) => {
    try {
      // const path = `images/min-${req.file.filename}`;
      // await sharp(req.file.path).png({ quality: 80 }).toFile(`./${path}`);

      const newPost = await Post.create(req.body);
      res.status(200).json(newPost);
    } catch (e) {
      res.status(400).json({ error: e.toString() });
    }
  },
  deletePost: async (req, res) => {
    try {
      await Post.findByIdAndDelete(req.params.id);
      res.status(200).json("Post was deleted");
    } catch (e) {
      res.status(400).json({ error: e.toString() });
    }
  },
};
