const express = require("express");
const router = express.Router();

//controllers
const { requireSignin, adminMiddleware } = require("../controllers/auth");
const { create, list, read, remove } = require("../controllers/tag");

//validators

const { runValidation } = require("../validators");
const { tagsCreateValidator } = require("../validators/tag");

router.post(
  "/tag",
  tagsCreateValidator,
  runValidation,
  requireSignin,
  adminMiddleware,
  create
);
router.get("/tags", list);
router.get("/tag/:slug", read);
router.delete("/tag/:slug", requireSignin, adminMiddleware, remove);

module.exports = router;
