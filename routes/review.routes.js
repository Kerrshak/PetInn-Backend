const express = require("express");
const router = express.Router();
const {
  getReviewsController,
  postReviewsController,
} = require("../controllers/review.controllers");
const { isAuthenticated } = require("../middleware/isAuthenticated");

router.get("/", getReviewsController);
router.post("/", isAuthenticated, postReviewsController);
router.delete("/", isAuthenticated);

module.exports = router;
