const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('index.html,styles.css,script.js')); // Serve HTML/CSS/JS
app.use(express.json());

// Mock purchase endpoint
app.post('/buy', (req, res) => {
  console.log("Purchase request:", req.body);
  res.status(200).send("Purchase received");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
