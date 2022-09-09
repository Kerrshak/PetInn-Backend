const express = require("express");
const {
	postListing,
	getListings,
	getListing,
	deleteListing,
} = require("../controllers/owner.controllers");
const { isAuthenticated } = require("../middleware/isAuthenticated");

const router = express.Router();

router.post("/listings", isAuthenticated, postListing);
router.get("/listings", getListings);
router.get("/listings/:_id", getListing);
router.delete("/listings/:_id", isAuthenticated, deleteListing);

module.exports = router;
