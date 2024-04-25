const User = require("../models/user.model.js");
const asyncErrorHandler = require("../middlewares/asyncErrorHandler.js");
const sendToken = require("../utils/sendToken.js");
const ErrorHandler = require("../utils/errorHandler.js");

const registerUser = asyncErrorHandler(async (req, res, next) => {
  const { fullname, email, gender, password } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) {
    return next(new ErrorHandler("User with this email already exists", 400));
  }

  const user = await User.create({
    fullname,
    email,
    gender,
    password
  });
  sendToken(user, 200, res);
});

module.exports = { registerUser };
