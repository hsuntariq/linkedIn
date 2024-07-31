const express = require("express");
const { uploadPost, getPosts } = require("../controllers/postController");
const router = express.Router();

router.post("/upload-post/:user_id", uploadPost);
router.get("/get-posts", getPosts);

module.exports = router;
