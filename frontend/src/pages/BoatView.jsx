import { useEffect, useState } from "react";
import AlertCard from "../components/AlertCard";
import { getAlerts } from "../services/api";
import "./BoatView.css";
export default function BoatView() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await getAlerts();
      setAlerts(data);
    };

    load();
    const interval = setInterval(load, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>🚤 Fisherman Boat View</h2>
      <p>Live alerts via LoRa Mesh</p>

      {alerts.length === 0 && <p>No alerts yet</p>}

      {alerts.map((alert, i) => (
        <AlertCard key={i} alert={alert} />
      ))}
    </div>
  );
}
