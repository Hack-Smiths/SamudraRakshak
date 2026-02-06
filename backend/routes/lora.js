const express = require("express");
const router = express.Router();
const controller = require("../controllers/loraController");

router.post("/relay", controller.relayLoraAlert);

module.exports = router;
