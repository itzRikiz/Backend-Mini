const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://sanmaypaine:DNLOeHrPTPl3u4K2@cluster0.tw7q1.mongodb.net/UrlShortner"
  )
  .then(() => console.log("mongo connected"))
  .catch((error) => console.error(error));

module.exports = mongoose;
