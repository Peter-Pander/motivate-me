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
  // __dirname is backend/src, so go up two levels to project root
  const staticPath = path.join(__dirname, '..', '..', 'frontend', 'dist');
  app.use(express.static(staticPath));

  // SPA fallback for React Router
  app.get(/^\/.*$/, (req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'));
  });
}

// Define API route
app.get('/api', (req, res) => {
  res.send('🟢 Plauze Patrol API: Hello World');
});

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
