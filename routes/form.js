const express = require("express");
const router = express.Router();
const {
  contactForm,
  contactMilServAuthorForm,
} = require("../controllers/form");

//validators
const { runValidation } = require("../validators");
const { contactFormValidator } = require("../validators/form");

router.post("/contact", contactFormValidator, runValidation, contactForm);
router.post(
  "/contact-milserv-author",
  contactFormValidator,
  runValidation,
  contactMilServAuthorForm
);

module.exports = router;
