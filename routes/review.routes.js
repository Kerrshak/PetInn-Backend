const express = require("express");
const router = express.Router();
const {
	getReviewsController,
	postReviewsController,
	deleteReviewController,
} = require("../controllers/review.controllers");
const { isAuthenticated } = require("../middleware/isAuthenticated");

router.get("/:username", getReviewsController);
router.post("/", isAuthenticated, postReviewsController);
router.delete("/:_id", isAuthenticated, deleteReviewController);

module.exports = router;
