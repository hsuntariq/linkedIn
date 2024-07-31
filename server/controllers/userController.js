const User = require("../models/userModel");
const AsyncHanlder = require("express-async-handler");

const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

const registerUser = AsyncHanlder(async (req, res) => {
  const { f_name, l_name, email, password, dob, phone, about, image } =
    req.body;

  const isUserPresent = await User.findOne({ email });

  if (!f_name || !l_name || !email || !password || !dob || !phone) {
    res.status(400);
    throw new Error("Please enter the respective fields");
  } else {
    if (isUserPresent) {
      res.status(400);
      throw new Error("Email Already exists!");
    } else {
      const hashedPass = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        f_name,
        l_name,
        email,
        password: hashedPass,
        dob,
        phone,
        about,
        image,
      });
      res.send(newUser);
    }
  }
});

const loginUser = AsyncHanlder(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new Error("Please enter the relevant fields!");
  }

  const findUser = await User.findOne({ email });

  if (!findUser) {
    res.status(404);
    throw new Error("Invalid Email");
  } else {
    // compare the password
    if (await bcrypt.compare(password, findUser.password)) {
      res.send(findUser);
    } else {
      res.status(401);
      throw new Error("Invalid Password");
    }
  }
});

const uploadImage = AsyncHanlder(async (req, res) => {
  const user_id = req.params.user_id;
  const { imageUrl } = req.body;
  const findUser = await User.findOne({ _id: user_id });
  if (!findUser) {
    res.status(404);
    throw new Error("Invalid Id");
  } else {
    findUser.image = imageUrl;
    await findUser.save();
    res.send(findUser);
  }
});

const getUsers = AsyncHanlder(async (req, res) => {
  const myUsers = await userModel.find().limit(3);
  res.send(myUsers);
});

module.exports = {
  registerUser,
  loginUser,
  uploadImage,
  getUsers,
};
