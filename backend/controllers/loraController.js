const Alert = require("../models/Alert");

exports.relayLoraAlert = (req, res) => {
  Alert.createAlert(req.body, () => {
    res.json({ status: "LoRa alert broadcasted" });
  });
};
