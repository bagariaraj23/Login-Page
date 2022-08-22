const express = require("express");
const router = express.Router();

const { login, dashboard } = require("../api/controller/main.js");

const authMiddleware = require("../middlewares/auth");

router.route("/dashboard").get(authMiddleware, dashboard);
router.route("/login").post(login);

module.exports = router;
