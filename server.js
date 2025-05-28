const express = require('express');
const os = require('os');
const path = require('path');

const app = express();
const port = 3000;

let clickCount = 0;

// Serve static files (HTML/JS)
app.use(express.static(path.join(__dirname, 'public')));

// API to get current click count
app.get('/api/clicks', (req, res) => {
  res.json({ clicks: clickCount });
});

// API to increase click count
app.post('/api/clicks', (req, res) => {
  clickCount++;
  res.json({ clicks: clickCount });
});

// Start server
app.listen(port, () => {
  const interfaces = os.networkInterfaces();
  Object.values(interfaces).forEach(iface =>
    iface.forEach(detail => {
      if (detail.family === 'IPv4' && !detail.internal) {
        console.log(`Server is running at http://${detail.address}:${port}`);
      }
    })
  );
});
