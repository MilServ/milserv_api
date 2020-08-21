const express = require("express");
const router = express.Router();
const {
  create,
  list,
  lastList,
  // read,
  // remove,
  // update,
} = require("../controllers/veteran");
const { requireSignin, adminMiddleware } = require("../controllers/auth");

// This route is for Veterans to submit info form without login
router.post("/veteran", create);

// This route gets and displays list of Veteran applicants.
// Only Admins can see this Veterans list
router.get("/veterans", list, requireSignin, adminMiddleware);
router.get(
  "/veterans-last-submission",
  lastList,
  requireSignin,
  adminMiddleware
);

// This route selects individual Veteran file
// router.get("/veteran_file", read);

// router.delete("/veteran_file", requireSignin, adminMiddleware, remove);
// router.put("/veteran_file", requireSignin, adminMiddleware, update);

module.exports = router;
