const express = require("express");
const router = express.Router();
const {
  getUserInfoController,
} = require("../controllers/userContact.controllers");
const { isAuthenticated } = require("../middleware/isAuthenticated");

router.get("/:username", getUserInfoController);

module.exports = router;
