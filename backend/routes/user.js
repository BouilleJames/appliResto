const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
const authenticateUser = require("../middleware/auth");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.post("/logout", authenticateUser, userCtrl.logout);

module.exports = router;
