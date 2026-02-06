const Alert = require("../models/Alert");

exports.getAlerts = (req, res) => {
  Alert.getAllAlerts((err, rows) => {
    res.json(rows);
  });
};
