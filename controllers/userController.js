const { validationResult } = require("express-validator");

const UserModel = require("../models/userModel");
const { hashedPassword, createToken } = require("../services/authServices");

exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { name, email, password } = req.body;

    try {
      const emailExist = await UserModel.findOne({ email });

      if (!emailExist) {
        const hashed = await hashedPassword(password);
        const user = await UserModel.create({
          name,
          email,
          password: hashed,
        });

        const token = createToken({ id: user._id, name: user.name });

        res.status(201).json({
          data: user,
          message: `${name} your account created successfully`,
          token,
        });
      } else {
        res
          .status(401)
          .json({ errors: [{ message: "email already register" }] });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json("Server Internal error");
    }
  } else {
    res.status(400).json({ errors: errors.array() });
  }
};
