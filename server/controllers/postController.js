const AsyncHandler = require("express-async-handler");
const Post = require("../models/postModal");
const uploadPost = AsyncHandler(async (req, res) => {
  const user_id = req.params.user_id;

  // data from the frontend

  const { content, caption } = req.body;

  const newPost = await Post.create({
    content,
    caption,
    user_id,
  });

  res.send(newPost);
});

const getPosts = AsyncHandler(async (req, res) => {
  const myPosts = await Post.find().sort({ createdAt: -1 });
  res.send(myPosts);
});

module.exports = {
  uploadPost,
  getPosts,
};
