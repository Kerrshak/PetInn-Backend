const express = require("express");
const {
	insertUserController,
	loginUserController,
	logoutUserController,
	patchWatchList,
} = require("../controllers/user.controllers");
const passport = require("../middleware/passport");
const router = express.Router();

router.post("/signup", insertUserController);

router.post("/login", passport.authenticate("local"), loginUserController);

router.get("/logout", logoutUserController);

router.patch("/:username/watchlist", patchWatchList);

module.exports = router;
