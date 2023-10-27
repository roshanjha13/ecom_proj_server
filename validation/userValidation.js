const { body } = require("express-validator");

exports.registerValidation = [
  body("name").not().isEmpty().escape().withMessage("name is required"),
  body("email")
    .isEmail()
    .normalizeEmail()
    .escape()
    .withMessage("email is required or emial is wrong format"),

  body("password")
    .isLength({ min: 5 })
    .escape()
    .withMessage("password will be greater than 5 characters"),
];
