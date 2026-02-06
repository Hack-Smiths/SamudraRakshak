const express = require("express");
const router = express.Router();

let alerts = [];

router.post("/alert", (req, res) => {
  alerts.push({ ...req.body, time: new Date() });
  res.json({ status: "received" });
});

router.get("/alerts", (req, res) => {
  res.json(alerts);
});

module.exports = router;
