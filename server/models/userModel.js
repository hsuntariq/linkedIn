const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    f_name: {
      type: String,
      required: [true, "Please enter the name"],
    },
    l_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    dob: {
      type: Date,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    image: {
      type: "String",
      default: null,
      required: false,
    },
    about: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
