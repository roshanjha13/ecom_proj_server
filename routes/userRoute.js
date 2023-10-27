const express = require("express");
const { register } = require("../controllers/userController");
const { registerValidation } = require("../validation/userValidation");

const router = express.Router();

router.route("/register").post(registerValidation, register);

module.exports = router;
