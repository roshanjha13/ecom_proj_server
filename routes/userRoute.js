const express = require("express");
const { register, login } = require("../controllers/userController");
const {
  registerValidation,
  loginValidation,
} = require("../validation/userValidation");

const router = express.Router();

router.route("/register").post(registerValidation, register);
router.route("/login").post(loginValidation, login);

module.exports = router;
