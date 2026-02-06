const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const edgeRoutes = require("./routes/edge");
const loraRoutes = require("./routes/lora");
const baseRoutes = require("./routes/baseStation");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/edge", edgeRoutes);
app.use("/lora", loraRoutes);
app.use("/base", baseRoutes);

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
app.use("/edge", require("./routes/edge"));
