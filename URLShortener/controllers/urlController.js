const URL = require("../models/urlModel");

const generateSHortCode = () => Math.random().toString(36).substr(2, 6);

exports.shortenUrl = async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: "URL is required" });

  const shortCode = generateSHortCode();

  const newUrl = new URL({ shortCode, originalUrl: url });

  await newUrl.save();
  res.json({ shortCode });
};

exports.redirectUrl = async (req, res) => {
  const { shortCode } = req.params;
  const urlData = await URL.findOne({ shortCode });

  if (urlData) {
    res.redirect(urlData.originalUrl);
  } else {
    res.status(404).json({ error: "Url not Found" });
  }
};
