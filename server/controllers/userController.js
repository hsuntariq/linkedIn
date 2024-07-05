const User = require("../models/userModel");

const registerUser = async (req, res) => {
  const { f_name, l_name, email, password, dob, phone } = req.body;
  if (!f_name || !l_name || !email || !password || !dob || !phone) {
    res.status(400);
    throw new Error("Please enter the respective fields");
  } else {
    const newUser = await User.create({
      f_name,
      l_name,
      email,
      password,
      dob,
      phone,
    });

    res.send(newUser);
  }
};

module.exports = {
  registerUser,
};
