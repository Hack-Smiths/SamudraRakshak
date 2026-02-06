const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "../../database/samudra.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("DB error", err);
  } else {
    console.log("SQLite connected");
  }
});

db.run(`
  CREATE TABLE IF NOT EXISTS alerts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    source TEXT,
    level TEXT,
    message TEXT,
    latitude REAL,
    longitude REAL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

module.exports = db;
