**AI-powered, offline-first ocean safety system for fishermen**

SamudraRakshak is a resilient marine safety platform designed to **save fishermen lives** by detecting ocean hazards locally, sharing alerts boat-to-boat, and escalating critical emergencies to authorities even when **mobile networks are unavailable**.

---

## 🎥 Project Execution Demo

👉 **Watch the full execution video:**
[Google Drive – SamudraRakshak Demo](https://drive.google.com/file/d/1IU3kAFq7jPZrLyYSojlazgDG-dJscLIU/view?usp=sharing)

---
## Prototype
### Website: https://ocean-guardian-lite.lovable.app/
## Website : https://samudrarakshak.lovable.app
### Website Repo:https://github.com/SOMESHWAR-11/ocean-guardian-ai
## 🖼️ System Overview & UI Snapshots

### 1️⃣ End-to-End Marine Safety Flow

<img width="1542" height="1000" alt="image" src="https://github.com/user-attachments/assets/ab31778e-aeab-427c-bfd8-bd83e37443c0" />


**Scenes Covered:**

1. Ocean deployment & fleet monitoring
2. Device architecture (Edge AI unit)
3. AI risk prediction & alerts
4. Boat-to-boat LoRa mesh communication
5. Satellite gateway emergency uplink
6. Rescue coordination & safe recovery

---

### 2️⃣ Mobile App – Fishermen Interface (Prototype)

![SamudraRakshak Android App UI](WhatsApp Image 2026-02-06 at 08.41.14.jpeg)

**Features shown:**

* Real-time risk level (LOW / MEDIUM / HIGH)
* GPS location display
* Simulated risk controls
* Emergency SOS call
* Offline-first design

---

## 🎯 Project Goal

Build an **AI-powered, offline-first ocean safety system** that:

* Detects hazards locally (Edge AI)
* Shares alerts across boats (LoRa mesh)
* Escalates emergencies via a shared satellite gateway
* Provides a simple mobile app for fishermen
* Connects with rescue authorities via backend APIs

---

## 🏗️ System Architecture

### 1. Edge AI (On-Boat Intelligence)

* Runs directly on fishermen’s smartphones
* Collects sensor data:

  * GPS
  * Accelerometer
  * Gyroscope
  * Wind & wave data
* TinyML models detect danger **offline**
* Generates compact JSON alerts

---

### 2. LoRa Mesh (Boat-to-Boat Communication)

* Long-range communication (~20 km per hop)
* Boats relay alerts among themselves
* No internet dependency
* Local caching for resilience

---

### 3. Satellite Gateway (Emergency Backbone)

* Shared buoy or coastal gateway
* Only **critical alerts** are uplinked
* Connects to shore even during cyclones
* Reduces satellite cost via shared usage

---

### 4. Mobile App (Fishermen Interface)

* Offline-first mobile application
* Dashboard with:

  * Risk alerts
  * Recommended actions
  * Location info
* Local SQLite storage
* Multi-language support planned

---

### 5. Backend API (Rescue Services)

* Node.js + Express backend
* Receives emergency alerts
* Notifies authorities via SMS / Email
* Web dashboard for live monitoring

---

### 6. Security & Testing

* End-to-end encrypted communication
* Device authentication (boat registration)
* Unit, integration & real-world field tests

---

## 📂 Project Folder Structure

```
SamudraRakshak/
│
├── edge_ai/               # Hazard detection & TinyML
├── lora_mesh/             # Boat-to-boat communication
├── satellite_gateway/     # Emergency uplink logic
├── mobile_app/            # Fishermen mobile interface
├── backend_api/           # Rescue authority backend
└── tests/                 # Unit & field testing
```

---

## 🚀 Development Roadmap

### Phase 1: Edge AI

* Sensor integration
* Offline risk detection model
* Alert generation

### Phase 2: LoRa Mesh

* Long-range transmitter/receiver
* Mesh routing & failover

### Phase 3: Satellite Gateway

* Emergency-only uplink
* Secure queue & encryption

### Phase 4: Mobile App

* Dashboard UI
* Offline database
* Communication integration

### Phase 5: Backend API

* REST endpoints
* Authority notification system
* Monitoring dashboard

### Phase 6: Testing & Deployment

* Pilot testing in coastal villages
* Fishermen feedback loop
* AI model refinement

---

## 📊 Key Benefits

* **Affordable** – LoRa + shared satellite minimizes cost
* **Resilient** – Works without mobile towers
* **Scalable** – Boat → Fleet → Regional → National
* **Life-Saving** – Focused on real-world emergencies

---

## 🌍 Impact

SamudraRakshak is not just a hackathon project — it is a **practical disaster-resilience system** designed for real fishermen, real oceans, and real emergencies.

**Technology should protect lives. This one does.**

---
<img width="1917" height="1052" alt="image" src="https://github.com/user-attachments/assets/ba0ff1a1-1531-41dc-9857-ca6f1982ef50" />


## 🤝 Contributors & Acknowledgements

Built with the vision of improving **marine safety, climate resilience, and disaster response** for coastal communities.

---

⭐ *If this project resonates with you, give it a star and help scale ocean safety.*
