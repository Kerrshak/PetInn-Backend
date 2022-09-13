const express = require("express");
const { getUserInfoController } = require("../controllers/user.controllers");

const { isAuthenticated } = require("../middleware/isAuthenticated");

const router = express.Router();

router.get("/:username", isAuthenticated, getUserInfoController);

module.exports = router;
