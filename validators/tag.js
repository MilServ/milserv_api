const { check } = require("express-validator");

exports.tagsCreateValidator = [
  check("name").not().isEmpty().withMessage("Name is required."),
];
