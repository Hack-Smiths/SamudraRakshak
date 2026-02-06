import "./StatusBadge.css";

export default function StatusBadge({ level }) {
  const color =
    level === "critical" ? "red" :
    level === "warning" ? "orange" : "green";

  return (
    <span style={{ color, fontWeight: "bold" }}>
      {level.toUpperCase()}
    </span>
  );
}
