const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Testing

app.get('/', (req, res) => {
    res.send('Testing for start');
  });
  
  app.listen(port, () => {
    console.log(`Backend server running on port ${port}`);
  });