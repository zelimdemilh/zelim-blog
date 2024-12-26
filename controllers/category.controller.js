const Category = require("../schemas/Category.model");
const sharp = require("sharp");

module.exports.categoryController = {
  getAllCategories: async (req, res) => {
    try {
      const response = await Category.find();
      res.status(200).json(response);
    } catch (e) {
      res.status(400).json({ error: e.toString() });
    }
  },
  createCategory: async (req, res) => {
    try {
      const newCategory = await Category.create(req.body);
      res.status(200).json(newCategory);
    } catch (e) {
      res.status(400).json({ error: e.toString() });
    }
  },
  deleteCategory: async (req, res) => {
    try {
      await Category.findByIdAndDelete(req.params.id);
      res.status(200).json("Category was deleted");
    } catch (e) {
      res.status(400).json({ error: e.toString() });
    }
  },
  // editCategory: async (req, res) => {
  //   let path;
  //   if (req.file) {
  //     path = `images/min-${req.file.filename}`;
  //     await sharp(req.file.path).png({ quality: 80 }).toFile(`./${path}`);
  //   }
  //
  //   try {
  //     const currentCategory = await Category.find({ _id: req.params.id });
  //     const editedCategory = await Category.findByIdAndUpdate(
  //       req.params.id,
  //       {
  //         ...req.body,
  //         image: req.file ? req.file.path : currentCategory.image,
  //         imageMin: path || currentCategory.imageMin,
  //       },
  //       { new: true }
  //     );
  //     res.status(200).json(editedCategory);
  //   } catch (e) {
  //     res.json({ error: e.toString() });
  //   }
  // },
};
