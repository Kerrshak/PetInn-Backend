const express = require("express");
const {
	insertUserController,
	loginUserController,
	logoutUserController,
} = require("../controllers/user.controllers");
const passport = require("../middleware/passport");
const router = express.Router();

router.post("/signup", insertUserController);

router.post("/login", passport.authenticate("local"), loginUserController);

router.get("/logout", logoutUserController);

module.exports = router;
