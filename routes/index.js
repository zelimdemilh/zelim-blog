const { Router } = require("express");

const router = Router();

router.use("/categories", require("./category.route"));
router.use("/posts", require("./post.route"));

module.exports = router;
