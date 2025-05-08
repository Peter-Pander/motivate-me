// backend/src/server.js

const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

// middleware
app.use(cors());
app.use(express.json());

// Serve static assets from the React build in production
if (process.env.NODE_ENV === 'production') {
  const staticPath = path.join(__dirname, '../frontend/dist');
  app.use(express.static(staticPath));

  // For any route not handled by API, serve React's index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'));
  });
}

// Simple API endpoint (only used in development or if no React file matches)
app.get('/api', (req, res) => {
  res.send('🟢 Plauze Patrol API: Hello World');
});

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
