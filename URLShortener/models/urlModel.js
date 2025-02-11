const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  shortCode: { type: String, required: true, unique: true },
  originalUrl: { type: String, required: true },
});
module.exports = mongoose.model("URL", urlSchema);
