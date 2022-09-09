const express = require("express");
const {
	postListing,
	getListings,
	getListing,
	deleteListing,
} = require("../controllers/sitter.controllers.js");
const passport = require("../middleware/passport");

const router = express.Router();

router.post("/listings", passport.authenticate("local"), postListing);
router.get("/listings", getListings);
router.get("/listings/:_id", getListing);
router.delete("/listings/:_id", deleteListing);

module.exports = router;
