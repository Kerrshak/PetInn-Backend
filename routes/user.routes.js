const express = require("express");
const {
	insertUserController,
	loginUserController,
	logoutUserController,
	patchWatchList,
	deleteWatchList,
	getWatchList,
} = require("../controllers/user.controllers");
const passport = require("../middleware/passport");
const { isAuthenticated } = require("../middleware/isAuthenticated");
const router = express.Router();

router.post("/signup", insertUserController);

router.post("/login", passport.authenticate("local"), loginUserController);

router.get("/logout", logoutUserController);

router.patch("/:username/watchlist", patchWatchList);

router.delete("/:username/watchlist", deleteWatchList);

router.get("/:username/watchlist", getWatchList);

module.exports = router;
