const express = require("express");
const router = express.Router();
const path = require("path");

// Serving index.html for all unknown routes
router.get("*", (req, res) => {
  const buildPath = path.join(__dirname, "../../frontend/dist");
  const filePath = path.join(buildPath, "index.html");
  res.sendFile(filePath);
});

module.exports = router;
