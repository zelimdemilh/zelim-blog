const { Router } = require("express");

const { postController } = require("../controllers/post.controller");
const upload = require("../middlewares/uploadImage");

const router = Router();

router.get("/", postController.getAllPosts);
router.get("/category/:id", postController.getPostsByCategoryId);
router.post("/", upload.single("image"), postController.createPost);
router.delete("/:id", postController.deletePost);

module.exports = router;
