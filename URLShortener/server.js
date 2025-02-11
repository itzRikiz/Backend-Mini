const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("./config/db.js");
const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.use("/api", urlRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
