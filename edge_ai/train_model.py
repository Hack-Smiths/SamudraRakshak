import pandas as pd
from sklearn.tree import DecisionTreeClassifier
import joblib

data = {
    "wave_height": [0.5, 1.2, 2.5, 3.0, 4.5],
    "wind_speed": [5, 10, 20, 25, 35],
    "tilt": [2, 5, 10, 15, 25],
    "risk": [0, 0, 1, 1, 2]
}

df = pd.DataFrame(data)

X = df[["wave_height", "wind_speed", "tilt"]]
y = df["risk"]

model = DecisionTreeClassifier()
model.fit(X, y)

joblib.dump(model, "edge_ai/model.pkl")
print("Model trained and saved")
