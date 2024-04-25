const User = require("../models/user.model.js");
const asyncErrorHandler = require("../middlewares/asyncErrorHandler.js");
const sendToken = require("../utils/sendToken.js");

const registerUser = asyncErrorHandler(async (req, res, next) => {
  const { name, email, gender, password } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) {
    return res
      .status(401)
      .json({ message: "User with this email already exits", status: 400 });
  }

  const user = await User.create({
    name,
    email,
    gender,
    password,
  });
  sendToken(user, 200, res);
});

const loginUser = asyncErrorHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email) {
    return res
      .status(401)
      .json({ message: "Please Enter Your Email", status: 400 });
  }

  if (!password) {
    return res
      .status(401)
      .json({ message: "Please Enter Your Password", status: 400 });
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return res.status(401).json({ message: "Invalid Email", status: 401 });
  }
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return res.status(401).json({ message: "Incorrect Password", status: 401 });
  }
  sendToken(user, 201, res);
});

const logoutUser = asyncErrorHandler(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "Successfully logout",
  });
});


module.exports = { registerUser, loginUser, logoutUser };
