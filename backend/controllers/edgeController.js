const Alert = require("../models/Alert");

exports.receiveEdgeAlert = (req, res) => {
  Alert.createAlert(req.body, () => {
    res.json({ status: "Edge alert received" });
  });
};
