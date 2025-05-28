const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API route
app.get('/api/message', (req, res) => {
  res.json({ message: 'L1 Task Completed' });
});

// Handle all other routes by serving the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

