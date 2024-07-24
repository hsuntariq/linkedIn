const express = require("express");
const {
  registerUser,
  loginUser,
  uploadImage,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register-user", registerUser);
router.post("/login-user", loginUser);
router.post("/upload-image/:user_id", uploadImage);

module.exports = router;
