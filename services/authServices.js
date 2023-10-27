const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.hashedPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);
  return hashed;
};

exports.createToken = (user) => {
  return jwt.sign(user, process.env.SECRET_KEY, {
    expiresIn: "2d",
  });
};
