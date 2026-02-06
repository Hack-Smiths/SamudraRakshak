const express = require("express");
const router = express.Router();
const controller = require("../controllers/baseController");

router.get("/alerts", controller.getAlerts);

module.exports = router;
