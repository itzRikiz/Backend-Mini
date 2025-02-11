const mongoose = require("mongoose");

mongoose
  .connect("")
  .then(() => console.log("mongo connected"))
  .catch((error) => console.error(error));

module.exports = mongoose;
