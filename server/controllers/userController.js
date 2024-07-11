const User = require("../models/userModel");
const AsyncHanlder = require("express-async-handler");

const bcrypt = require("bcrypt");

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

module.exports = {
  registerUser,
  loginUser,
};
