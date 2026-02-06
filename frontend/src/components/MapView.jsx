import "./MapView.css";

export default function MapView({ lat, lon }) {
  return (
    <p>
      📍 Location: {lat}, {lon}
    </p>
  );
}
