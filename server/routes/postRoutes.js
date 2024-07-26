const express = require("express");
const { uploadPost } = require("../controllers/postController");
const router = express.Router();

router.post("/upload-post/:user_id", uploadPost);

module.exports = router;
