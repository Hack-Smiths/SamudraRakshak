import "./AlertCard.css";

export default function AlertCard({ alert }) {
  const color =
    alert.severity === "high"
      ? "#ff4d4d"
      : alert.severity === "medium"
      ? "#ffa500"
      : "#4caf50";

  return (
    <div
      style={{
        border: `2px solid ${color}`,
        padding: "12px",
        marginBottom: "10px",
        borderRadius: "8px",
      }}
    >
      <h4 style={{ color }}>{alert.type}</h4>
      <p>{alert.message}</p>
      <small>Severity: {alert.severity}</small>
    </div>
  );
}
