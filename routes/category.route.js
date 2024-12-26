const { Router } = require("express");

const { categoryController } = require("../controllers/category.controller");
const upload = require("../middlewares/uploadImage");

const router = Router();

router.get("/", categoryController.getAllCategories);
router.post("/", categoryController.createCategory);
router.delete("/:id", categoryController.deleteCategory);
// router.patch(
//   "/:id",
//   upload.single("image"),
//   authMiddleware,
//   categoryController.editCategory
// );

module.exports = router;
