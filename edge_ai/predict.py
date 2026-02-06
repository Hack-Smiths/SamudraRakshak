import joblib
import requests
import pandas as pd

model = joblib.load("edge_ai/model.pkl")

X = pd.DataFrame(
    [[3.5, 28, 18]],
    columns=["wave_height", "wind_speed", "tilt"]
)

prediction = model.predict(X)[0]

levels = {0: "safe", 1: "warning", 2: "emergency"}
level = levels[int(prediction)]

payload = {
    "source": "boat-1",
    "level": level,
    "message": f"Risk detected: {level}",
    "latitude": 10.25,
    "longitude": 79.6
}

response = requests.post(
    "http://localhost:5000/edge/alert",
    json=payload,
    timeout=5
)

print("Edge AI sent alert:", payload)
print("Backend response:", response.json())
