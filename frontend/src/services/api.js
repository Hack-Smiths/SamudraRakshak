export async function getAlerts() {
  const res = await fetch("http://localhost:5000/edge/alerts");
  return res.json();
}
