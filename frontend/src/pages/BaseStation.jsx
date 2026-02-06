import "./BaseStation.css";
const alerts = [
  { type: "SOS", message: "Boat 12 distress", severity: "high" },
  { type: "Warning", message: "High waves detected", severity: "medium" },
  { type: "Info", message: "Routine status check", severity: "low" }
];
const handleAlertClick = (alert) => {
  alert(`🚨 ${alert.type}\n\n${alert.message}`);
};

<table className="alerts-table">
  <thead>
    <tr>
      <th>Type</th>
      <th>Message</th>
    </tr>
  </thead>

  <tbody>
    {alerts.map((a, i) => (
      <tr
        key={i}
        className={`alert ${a.severity}`}
        onClick={() => handleAlertClick(a)}
      >
        <td>{a.type}</td>
        <td>{a.message}</td>
      </tr>
    ))}
  </tbody>
</table>
