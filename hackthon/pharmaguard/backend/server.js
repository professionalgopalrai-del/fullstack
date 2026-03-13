const express = require("express");
const cors = require("cors");
require("dotenv").config();

const analyzeRoute = require("./routes/analyze");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", analyzeRoute);

app.get("/", (req, res) => {
  res.send("PharmaGuard API Running");
});

app.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});