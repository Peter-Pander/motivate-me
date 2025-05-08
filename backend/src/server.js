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

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  const staticPath = path.join(__dirname, '../frontend/dist');
  app.use(express.static(staticPath));
}

// Define API routes first
app.get('/api', (req, res) => {
  res.send('🟢 Plauze Patrol API: Hello World');
});

// SPA fallback: use a RegExp to avoid path-to-regexp parsing issues
if (process.env.NODE_ENV === 'production') {
  app.get(/^\/.*$/, (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
  });
}

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
